const LANGUAGES = [
  {
    "code": "af",
    "name": "Afrikaans",
    "native": "Afrikaans",
    "flag": "🇿🇦",
    "group": "real"
  },
  {
    "code": "sq",
    "name": "Albanian",
    "native": "Shqip",
    "flag": "🇦🇱",
    "group": "real"
  },
  {
    "code": "am",
    "name": "Amharic",
    "native": "አማርኛ",
    "flag": "🇪🇹",
    "group": "real"
  },
  {
    "code": "ar",
    "name": "Arabic",
    "native": "العربية",
    "flag": "🇸🇦",
    "group": "real"
  },
  {
    "code": "hy",
    "name": "Armenian",
    "native": "Հայերեն",
    "flag": "🇦🇲",
    "group": "real"
  },
  {
    "code": "az",
    "name": "Azerbaijani",
    "native": "Azərbaycan",
    "flag": "🇦🇿",
    "group": "real"
  },
  {
    "code": "be",
    "name": "Belarusian",
    "native": "Беларуская",
    "flag": "🇧🇾",
    "group": "real"
  },
  {
    "code": "bn",
    "name": "Bengali",
    "native": "বাংলা",
    "flag": "🇧🇩",
    "group": "real"
  },
  {
    "code": "bs",
    "name": "Bosnian",
    "native": "Bosanski",
    "flag": "🇧🇦",
    "group": "real"
  },
  {
    "code": "bg",
    "name": "Bulgarian",
    "native": "Български",
    "flag": "🇧🇬",
    "group": "real"
  },
  {
    "code": "my",
    "name": "Burmese",
    "native": "မြန်မာ",
    "flag": "🇲🇲",
    "group": "real"
  },
  {
    "code": "ca",
    "name": "Catalan",
    "native": "Català",
    "flag": "🏴",
    "group": "real"
  },
  {
    "code": "zh",
    "name": "Chinese (Simplified)",
    "native": "中文(简体)",
    "flag": "🇨🇳",
    "group": "real"
  },
  {
    "code": "zh-TW",
    "name": "Chinese (Traditional)",
    "native": "中文(繁體)",
    "flag": "🇹🇼",
    "group": "real"
  },
  {
    "code": "hr",
    "name": "Croatian",
    "native": "Hrvatski",
    "flag": "🇭🇷",
    "group": "real"
  },
  {
    "code": "cs",
    "name": "Czech",
    "native": "Čeština",
    "flag": "🇨🇿",
    "group": "real"
  },
  {
    "code": "da",
    "name": "Danish",
    "native": "Dansk",
    "flag": "🇩🇰",
    "group": "real"
  },
  {
    "code": "nl",
    "name": "Dutch",
    "native": "Nederlands",
    "flag": "🇳🇱",
    "group": "real"
  },
  {
    "code": "en",
    "name": "English",
    "native": "English",
    "flag": "🇺🇸",
    "group": "real"
  },
  {
    "code": "et",
    "name": "Estonian",
    "native": "Eesti",
    "flag": "🇪🇪",
    "group": "real"
  },
  {
    "code": "fi",
    "name": "Finnish",
    "native": "Suomi",
    "flag": "🇫🇮",
    "group": "real"
  },
  {
    "code": "fr",
    "name": "French",
    "native": "Français",
    "flag": "🇫🇷",
    "group": "real"
  },
  {
    "code": "gl",
    "name": "Galician",
    "native": "Galego",
    "flag": "🇪🇸",
    "group": "real"
  },
  {
    "code": "ka",
    "name": "Georgian",
    "native": "ქართული",
    "flag": "🇬🇪",
    "group": "real"
  },
  {
    "code": "de",
    "name": "German",
    "native": "Deutsch",
    "flag": "🇩🇪",
    "group": "real"
  },
  {
    "code": "el",
    "name": "Greek",
    "native": "Ελληνικά",
    "flag": "🇬🇷",
    "group": "real"
  },
  {
    "code": "gu",
    "name": "Gujarati",
    "native": "ગુજરાતી",
    "flag": "🇮🇳",
    "group": "real"
  },
  {
    "code": "ht",
    "name": "Haitian Creole",
    "native": "Kreyòl ayisyen",
    "flag": "🇭🇹",
    "group": "real"
  },
  {
    "code": "ha",
    "name": "Hausa",
    "native": "Hausa",
    "flag": "🇳🇬",
    "group": "real"
  },
  {
    "code": "he",
    "name": "Hebrew",
    "native": "עברית",
    "flag": "🇮🇱",
    "group": "real"
  },
  {
    "code": "hi",
    "name": "Hindi",
    "native": "हिन्दी",
    "flag": "🇮🇳",
    "group": "real"
  },
  {
    "code": "hu",
    "name": "Hungarian",
    "native": "Magyar",
    "flag": "🇭🇺",
    "group": "real"
  },
  {
    "code": "is",
    "name": "Icelandic",
    "native": "Íslenska",
    "flag": "🇮🇸",
    "group": "real"
  },
  {
    "code": "ig",
    "name": "Igbo",
    "native": "Igbo",
    "flag": "🇳🇬",
    "group": "real"
  },
  {
    "code": "id",
    "name": "Indonesian",
    "native": "Bahasa Indonesia",
    "flag": "🇮🇩",
    "group": "real"
  },
  {
    "code": "ga",
    "name": "Irish",
    "native": "Gaeilge",
    "flag": "🇮🇪",
    "group": "real"
  },
  {
    "code": "it",
    "name": "Italian",
    "native": "Italiano",
    "flag": "🇮🇹",
    "group": "real"
  },
  {
    "code": "ja",
    "name": "Japanese",
    "native": "日本語",
    "flag": "🇯🇵",
    "group": "real"
  },
  {
    "code": "jv",
    "name": "Javanese",
    "native": "Basa Jawa",
    "flag": "🇮🇩",
    "group": "real"
  },
  {
    "code": "kn",
    "name": "Kannada",
    "native": "ಕನ್ನಡ",
    "flag": "🇮🇳",
    "group": "real"
  },
  {
    "code": "kk",
    "name": "Kazakh",
    "native": "Қазақша",
    "flag": "🇰🇿",
    "group": "real"
  },
  {
    "code": "km",
    "name": "Khmer",
    "native": "ខ្មែរ",
    "flag": "🇰🇭",
    "group": "real"
  },
  {
    "code": "ko",
    "name": "Korean",
    "native": "한국어",
    "flag": "🇰🇷",
    "group": "real"
  },
  {
    "code": "ky",
    "name": "Kyrgyz",
    "native": "Кыргызча",
    "flag": "🇰🇬",
    "group": "real"
  },
  {
    "code": "lo",
    "name": "Lao",
    "native": "ລາວ",
    "flag": "🇱🇦",
    "group": "real"
  },
  {
    "code": "lv",
    "name": "Latvian",
    "native": "Latviešu",
    "flag": "🇱🇻",
    "group": "real"
  },
  {
    "code": "lt",
    "name": "Lithuanian",
    "native": "Lietuvių",
    "flag": "🇱🇹",
    "group": "real"
  },
  {
    "code": "lb",
    "name": "Luxembourgish",
    "native": "Lëtzebuergesch",
    "flag": "🇱🇺",
    "group": "real"
  },
  {
    "code": "mk",
    "name": "Macedonian",
    "native": "Македонски",
    "flag": "🇲🇰",
    "group": "real"
  },
  {
    "code": "ms",
    "name": "Malay",
    "native": "Bahasa Melayu",
    "flag": "🇲🇾",
    "group": "real"
  },
  {
    "code": "ml",
    "name": "Malayalam",
    "native": "മലയാളം",
    "flag": "🇮🇳",
    "group": "real"
  },
  {
    "code": "mt",
    "name": "Maltese",
    "native": "Malti",
    "flag": "🇲🇹",
    "group": "real"
  },
  {
    "code": "mr",
    "name": "Marathi",
    "native": "मराठी",
    "flag": "🇮🇳",
    "group": "real"
  },
  {
    "code": "mn",
    "name": "Mongolian",
    "native": "Монгол",
    "flag": "🇲🇳",
    "group": "real"
  },
  {
    "code": "ne",
    "name": "Nepali",
    "native": "नेपाली",
    "flag": "🇳🇵",
    "group": "real"
  },
  {
    "code": "no",
    "name": "Norwegian",
    "native": "Norsk",
    "flag": "🇳🇴",
    "group": "real"
  },
  {
    "code": "fa",
    "name": "Persian",
    "native": "فارسی",
    "flag": "🇮🇷",
    "group": "real"
  },
  {
    "code": "pl",
    "name": "Polish",
    "native": "Polski",
    "flag": "🇵🇱",
    "group": "real"
  },
  {
    "code": "pt-BR",
    "name": "Português (Brasil)",
    "native": "Português (Brasil)",
    "flag": "🇧🇷",
    "group": "real"
  },
  {
    "code": "pt",
    "name": "Português (Portugal)",
    "native": "Português (Portugal)",
    "flag": "🇵🇹",
    "group": "real"
  },
  {
    "code": "pa",
    "name": "Punjabi",
    "native": "ਪੰਜਾਬੀ",
    "flag": "🇮🇳",
    "group": "real"
  },
  {
    "code": "ro",
    "name": "Romanian",
    "native": "Română",
    "flag": "🇷🇴",
    "group": "real"
  },
  {
    "code": "ru",
    "name": "Russian",
    "native": "Русский",
    "flag": "🇷🇺",
    "group": "real"
  },
  {
    "code": "sr",
    "name": "Serbian",
    "native": "Српски",
    "flag": "🇷🇸",
    "group": "real"
  },
  {
    "code": "si",
    "name": "Sinhala",
    "native": "සිංහල",
    "flag": "🇱🇰",
    "group": "real"
  },
  {
    "code": "sk",
    "name": "Slovak",
    "native": "Slovenčina",
    "flag": "🇸🇰",
    "group": "real"
  },
  {
    "code": "sl",
    "name": "Slovenian",
    "native": "Slovenščina",
    "flag": "🇸🇮",
    "group": "real"
  },
  {
    "code": "so",
    "name": "Somali",
    "native": "Soomaali",
    "flag": "🇸🇴",
    "group": "real"
  },
  {
    "code": "es",
    "name": "Spanish",
    "native": "Español",
    "flag": "🇪🇸",
    "group": "real"
  },
  {
    "code": "sw",
    "name": "Swahili",
    "native": "Kiswahili",
    "flag": "🇰🇪",
    "group": "real"
  },
  {
    "code": "sv",
    "name": "Swedish",
    "native": "Svenska",
    "flag": "🇸🇪",
    "group": "real"
  },
  {
    "code": "tg",
    "name": "Tajik",
    "native": "Тоҷикӣ",
    "flag": "🇹🇯",
    "group": "real"
  },
  {
    "code": "ta",
    "name": "Tamil",
    "native": "தமிழ்",
    "flag": "🇮🇳",
    "group": "real"
  },
  {
    "code": "te",
    "name": "Telugu",
    "native": "తెలుగు",
    "flag": "🇮🇳",
    "group": "real"
  },
  {
    "code": "th",
    "name": "Thai",
    "native": "ไทย",
    "flag": "🇹🇭",
    "group": "real"
  },
  {
    "code": "tr",
    "name": "Turkish",
    "native": "Türkçe",
    "flag": "🇹🇷",
    "group": "real"
  },
  {
    "code": "uk",
    "name": "Ukrainian",
    "native": "Українська",
    "flag": "🇺🇦",
    "group": "real"
  },
  {
    "code": "ur",
    "name": "Urdu",
    "native": "اردو",
    "flag": "🇵🇰",
    "group": "real"
  },
  {
    "code": "uz",
    "name": "Uzbek",
    "native": "O'zbek",
    "flag": "🇺🇿",
    "group": "real"
  },
  {
    "code": "vi",
    "name": "Vietnamese",
    "native": "Tiếng Việt",
    "flag": "🇻🇳",
    "group": "real"
  },
  {
    "code": "cy",
    "name": "Welsh",
    "native": "Cymraeg",
    "flag": "🏴",
    "group": "real"
  },
  {
    "code": "xh",
    "name": "Xhosa",
    "native": "isiXhosa",
    "flag": "🇿🇦",
    "group": "real"
  },
  {
    "code": "yi",
    "name": "Yiddish",
    "native": "ייִדיש",
    "flag": "✡️",
    "group": "real"
  },
  {
    "code": "yo",
    "name": "Yoruba",
    "native": "Yorùbá",
    "flag": "🇳🇬",
    "group": "real"
  },
  {
    "code": "zu",
    "name": "Zulu",
    "native": "isiZulu",
    "flag": "🇿🇦",
    "group": "real"
  },
  {
    "code": "la",
    "name": "Latin",
    "native": "Lingua Latina",
    "flag": "🏛️",
    "group": "ancient"
  },
  {
    "code": "grc",
    "name": "Ancient Greek",
    "native": "Ἑλληνική",
    "flag": "🏺",
    "group": "ancient"
  },
  {
    "code": "sa",
    "name": "Sanskrit",
    "native": "संस्कृतम्",
    "flag": "🕉️",
    "group": "ancient"
  },
  {
    "code": "ang",
    "name": "Old English",
    "native": "Eald Englisc",
    "flag": "⚔️",
    "group": "ancient"
  },
  {
    "code": "non",
    "name": "Old Norse",
    "native": "Norrœnt mál",
    "flag": "⚡",
    "group": "ancient"
  },
  {
    "code": "got",
    "name": "Gothic",
    "native": "𐌲𐌿𐍄𐌹𐍃𐌺",
    "flag": "🦁",
    "group": "ancient"
  },
  {
    "code": "eo",
    "name": "Esperanto",
    "native": "Esperanto",
    "flag": "🟢",
    "group": "constructed"
  },
  {
    "code": "tok",
    "name": "Toki Pona",
    "native": "toki pona",
    "flag": "🌿",
    "group": "constructed"
  },
  {
    "code": "jbo",
    "name": "Lojban",
    "native": "Lojban",
    "flag": "🔢",
    "group": "constructed"
  },
  {
    "code": "tlh",
    "name": "Klingon",
    "native": "tlhIngan Hol",
    "flag": "🖖",
    "group": "fictional"
  },
  {
    "code": "qya",
    "name": "Quenya (Tolkien)",
    "native": "Quenya",
    "flag": "🧝",
    "group": "fictional"
  },
  {
    "code": "sjn",
    "name": "Sindarin (Tolkien)",
    "native": "Sindarin",
    "flag": "🌲",
    "group": "fictional"
  },
  {
    "code": "nav",
    "name": "Na'vi (Avatar)",
    "native": "Na'vi",
    "flag": "💙",
    "group": "fictional"
  },
  {
    "code": "dot",
    "name": "Dothraki (GoT)",
    "native": "Dothraki",
    "flag": "🐴",
    "group": "fictional"
  },
  {
    "code": "val",
    "name": "High Valyrian (GoT)",
    "native": "Valyrio Māzis",
    "flag": "🐉",
    "group": "fictional"
  },
  {
    "code": "hut",
    "name": "Huttese (Star Wars)",
    "native": "Huttese",
    "flag": "🌌",
    "group": "fictional"
  },
  {
    "code": "mnd",
    "name": "Mando'a (Mandalorian)",
    "native": "Mando'a",
    "flag": "⚔️",
    "group": "fictional"
  },
  {
    "code": "shi",
    "name": "Shyriiwook (Wookiee)",
    "native": "Shyriiwook",
    "flag": "🐻",
    "group": "fictional"
  },
  {
    "code": "pig",
    "name": "Pig Latin",
    "native": "Igpay Atinlay",
    "flag": "🐷",
    "group": "fun"
  },
  {
    "code": "morse",
    "name": "Morse Code",
    "native": "-- --- .-. ... .",
    "flag": "📡",
    "group": "fun"
  },
  {
    "code": "uwu",
    "name": "UwU / Furry Speak",
    "native": "UwU OwO",
    "flag": "🦊",
    "group": "fun"
  },
  {
    "code": "emoji",
    "name": "Emoji Language",
    "native": "🗣️💬",
    "flag": "😂",
    "group": "fun"
  },
  {
    "code": "glb",
    "name": "✨ Glarbian (Invented)",
    "native": "Glarbiano",
    "flag": "👽",
    "group": "fun"
  }
];
