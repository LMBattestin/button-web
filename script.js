const API_BASE = 'https://api.button.app.br';

const COLORS = {
  red: ['#ff9a9a', '#cc0000', '#4a0000'],
  gold: ['#fff4b0', '#e6b800', '#5c4400'],
  purple: ['#e0b3ff', '#7a10cc', '#2c054a'],
  pink: ['#ffb3e0', '#cc0d78', '#4a052c'],
  orange: ['#ffd9a0', '#cc5f00', '#4a2200'],
  cyan: ['#a0fdff', '#00a8cc', '#003c4a'],
  lime: ['#e0ffa0', '#7acc00', '#2c4a00'],
  silver: ['#f5f5f5', '#a3a3a3', '#404040'],
  black: ['#525252', '#1a1a1a', '#000000'],
  green: ['#8fffaa', '#10a010', '#023502'],
  navy: ['#9fb4ff', '#1030a8', '#040f3d'],
  darkgreen: ['#b8e6b0', '#2e7d32', '#0d3d0f'],
  brown: ['#d8ad83', '#8a5a2e', '#3f2712'],
};

const ERROR_KEYS = {
  'bad signature': 'errBadSig',
  'malformed code': 'errMalformed',
  'expired code': 'errExpired',
};

function formatTimer(ms) {
  const h = String(Math.floor(ms / 3600000)).padStart(2, '0');
  const m = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
  const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
  const cs = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
  return `${h}:${m}:${s}.${cs}`;
}

function flagEmoji(code) {
  if (!code) return '';
  return String.fromCodePoint(...code.toUpperCase().split('').map(c => 127397 + c.charCodeAt(0)));
}

function medal(rank) {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return rank;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}

const board = document.getElementById('board');
const boardStatus = document.getElementById('boardStatus');
const dialog = document.getElementById('submitDialog');
const codeInput = document.getElementById('codeInput');
const dialogMsg = document.getElementById('dialogMsg');
const openSubmit = document.getElementById('openSubmit');
const cancelSubmit = document.getElementById('cancelSubmit');
const confirmSubmit = document.getElementById('confirmSubmit');

// Tracks what the board/dialog are currently showing, so language switches
// can re-render the right message without refetching or resubmitting.
let boardStatusKey = 'loading';
let dialogMsgState = null; // { key, tone }
let lastLeaderboard = [];
let isSubmitting = false;

function setBoardStatus(key) {
  boardStatusKey = key;
  boardStatus.textContent = key ? t(key) : '';
}

function renderRow(entry) {
  const [light, mid, dark] = COLORS[entry.colorId] || COLORS.red;
  const flag = flagEmoji(entry.nationality);
  const rankAttr = entry.rank <= 3 ? entry.rank : '';
  return `
    <div class="row" data-rank="${rankAttr}">
      <div class="rank">${medal(entry.rank)}</div>
      <div class="swatch" style="background: radial-gradient(circle at 32% 28%, ${light}, ${mid} 55%, ${dark})"></div>
      <div class="who">
        <span class="nickname">${escapeHtml(entry.nickname)}</span>
        ${flag ? `<span class="flag">${flag}</span>` : ''}
      </div>
      <div class="time">${formatTimer(entry.bestTimeMs)}</div>
    </div>
  `;
}

function renderBoard(list) {
  lastLeaderboard = list;
  if (!list.length) {
    board.innerHTML = '';
    setBoardStatus('empty');
    return;
  }
  setBoardStatus(null);
  board.innerHTML = list.slice(0, 100).map(renderRow).join('');
}

async function fetchLeaderboard() {
  setBoardStatus('loading');
  try {
    const res = await fetch(`${API_BASE}/leaderboard`);
    if (!res.ok) throw new Error('request failed');
    const data = await res.json();
    renderBoard(data.leaderboard || []);
  } catch (err) {
    setBoardStatus('loadError');
  }
}

function showDialogMsg(key, tone) {
  dialogMsgState = { key, tone };
  dialogMsg.textContent = t(key);
  dialogMsg.dataset.tone = tone;
}

function resetDialog() {
  codeInput.value = '';
  dialogMsgState = null;
  dialogMsg.textContent = '';
  delete dialogMsg.dataset.tone;
}

function setSubmitting(submitting) {
  isSubmitting = submitting;
  confirmSubmit.disabled = submitting;
  confirmSubmit.textContent = submitting ? t('sending') : t('send');
}

async function handleSubmit() {
  const code = codeInput.value.trim();
  if (!code) {
    showDialogMsg('errEmptyCode', 'error');
    return;
  }

  setSubmitting(true);
  try {
    const res = await fetch(`${API_BASE}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    const data = await res.json().catch(() => ({}));

    if (res.status === 200 && data.ok && data.updated) {
      showDialogMsg('success', 'success');
      await fetchLeaderboard();
      setTimeout(() => {
        dialog.close();
        resetDialog();
      }, 1500);
    } else if (res.status === 200 && data.ok) {
      showDialogMsg('alreadyBetter', 'info');
    } else {
      showDialogMsg(ERROR_KEYS[data.error] || 'errGenericSubmit', 'error');
    }
  } catch (err) {
    showDialogMsg('errConnection', 'error');
  } finally {
    setSubmitting(false);
  }
}

// Called by i18n.js whenever the language changes, so dynamic text
// (board status, dialog message, submit button label) stays in sync.
function onLanguageChanged() {
  if (boardStatusKey) boardStatus.textContent = t(boardStatusKey);
  if (dialogMsgState) dialogMsg.textContent = t(dialogMsgState.key);
  if (!isSubmitting) confirmSubmit.textContent = t('send');
}

openSubmit.addEventListener('click', () => {
  resetDialog();
  dialog.showModal();
});

cancelSubmit.addEventListener('click', () => {
  dialog.close();
  resetDialog();
});

confirmSubmit.addEventListener('click', handleSubmit);

fetchLeaderboard();
