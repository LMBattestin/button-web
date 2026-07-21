const LANG_STORAGE_KEY = 'button-web-lang';
const RTL_LANGS = new Set(['ar', 'he', 'fa', 'ur', 'yi']);

function toPigLatin(text) {
  return text.replace(/[A-Za-zÀ-ÖØ-öø-ÿ]+/g, (word) => {
    const isUpper = word === word.toUpperCase() && word.length > 1;
    const isCap = /^[A-Z]/.test(word);
    const lower = word.toLowerCase();
    const vowels = 'aeiouAEIOU';
    let out;
    if (vowels.includes(lower[0])) {
      out = lower + 'way';
    } else {
      const m = lower.match(/^[^aeiou]+/);
      const head = m ? m[0] : '';
      out = lower.slice(head.length) + head + 'ay';
    }
    if (isUpper) return out.toUpperCase();
    if (isCap) return out[0].toUpperCase() + out.slice(1);
    return out;
  });
}

const MORSE_MAP = {
  a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.',
  h: '....', i: '..', j: '.---', k: '-.-', l: '.-..', m: '--', n: '-.',
  o: '---', p: '.--.', q: '--.-', r: '.-.', s: '...', t: '-', u: '..-',
  v: '...-', w: '.--', x: '-..-', y: '-.--', z: '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
};

function toMorse(text) {
  return text
    .toLowerCase()
    .split(/\n/)
    .map((line) => line
      .split(' ')
      .map((word) => word.split('').map((ch) => MORSE_MAP[ch] || ch).join(' '))
      .join(' / '))
    .join('\n');
}

function getSiteStrings(code) {
  if (code === 'pig' || code === 'morse') {
    const base = SITE_STRINGS.en;
    const transform = code === 'pig' ? toPigLatin : toMorse;
    const out = {};
    for (const [key, value] of Object.entries(base)) out[key] = transform(value);
    return out;
  }
  return SITE_STRINGS[code] || SITE_STRINGS.en;
}

function t(key) {
  const strings = getSiteStrings(currentLang);
  return strings[key] ?? SITE_STRINGS.en[key] ?? key;
}

function chromeT(key) {
  const strings = CHROME_STRINGS[currentLang] || CHROME_STRINGS.en;
  return strings[key] ?? CHROME_STRINGS.en[key] ?? key;
}

function detectDefaultLanguage() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved && LANGUAGES.some((l) => l.code === saved)) return saved;
  const browserLangs = navigator.languages || [navigator.language];
  for (const bl of browserLangs) {
    const exact = LANGUAGES.find((l) => l.code.toLowerCase() === bl.toLowerCase());
    if (exact) return exact.code;
    const base = bl.split('-')[0].toLowerCase();
    const partial = LANGUAGES.find((l) => l.code.toLowerCase() === base);
    if (partial) return partial.code;
  }
  return 'en';
}

let currentLang = detectDefaultLanguage();

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = RTL_LANGS.has(currentLang) ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  const meta = LANGUAGES.find((l) => l.code === currentLang);
  const langToggle = document.getElementById('langToggle');
  if (langToggle && meta) {
    langToggle.textContent = `${meta.flag} ${meta.code.toUpperCase()}`;
  }

  const langDialogTitle = document.getElementById('langDialogTitle');
  if (langDialogTitle) langDialogTitle.textContent = chromeT('chooseLanguage');
  const langSearch = document.getElementById('langSearch');
  if (langSearch) langSearch.placeholder = chromeT('searchLanguage');

  if (typeof onLanguageChanged === 'function') onLanguageChanged();
}

function setLanguage(code) {
  currentLang = code;
  localStorage.setItem(LANG_STORAGE_KEY, code);
  applyTranslations();
}

const GROUP_ORDER = ['real', 'ancient', 'constructed', 'fictional', 'fun'];
const GROUP_KEY = {
  real: 'groupReal',
  ancient: 'groupAncient',
  constructed: 'groupConstructed',
  fictional: 'groupFictional',
  fun: 'groupFun',
};

function renderLangList(filter) {
  const list = document.getElementById('langList');
  const query = (filter || '').trim().toLowerCase();
  list.innerHTML = '';

  for (const group of GROUP_ORDER) {
    const items = LANGUAGES.filter((l) => l.group === group && (
      !query
      || l.name.toLowerCase().includes(query)
      || l.native.toLowerCase().includes(query)
      || l.code.toLowerCase().includes(query)
    ));
    if (!items.length) continue;

    const heading = document.createElement('div');
    heading.className = 'lang-group-heading';
    heading.textContent = chromeT(GROUP_KEY[group]);
    list.appendChild(heading);

    for (const lang of items) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-item';
      if (lang.code === currentLang) btn.classList.add('active');
      btn.innerHTML = `<span class="lang-flag">${lang.flag}</span><span class="lang-name">${lang.native}</span>`;
      btn.addEventListener('click', () => {
        setLanguage(lang.code);
        document.getElementById('langDialog').close();
      });
      list.appendChild(btn);
    }
  }
}

function initLanguageSwitcher() {
  const langToggle = document.getElementById('langToggle');
  const langDialog = document.getElementById('langDialog');
  const langSearch = document.getElementById('langSearch');

  langToggle.addEventListener('click', () => {
    langSearch.value = '';
    renderLangList('');
    langDialog.showModal();
    langSearch.focus();
  });

  langSearch.addEventListener('input', () => renderLangList(langSearch.value));

  langDialog.addEventListener('click', (e) => {
    const rect = langDialog.getBoundingClientRect();
    const insideDialog = e.clientX >= rect.left && e.clientX <= rect.right
      && e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (!insideDialog) langDialog.close();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  applyTranslations();
});
