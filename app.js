import { SYSTEMS, generateChoices } from './numerals.js';

let LANG = localStorage.getItem('numnum-lang') || (navigator.language.startsWith('ru') ? 'ru' : 'en');

const STRINGS = {
  en: {
    subtitle: 'Numeral systems trainer',
    startGame: 'Start',
    chooseSystem: 'Choose numeral system',
    positional: 'Positional',
    nonPositional: 'Non-Positional',
    back: 'Back',
    numberRange: 'Number Range',
    difficulty: 'Difficulty level',
    answerMode: 'Answer Mode',
    timeLimit: 'Time Limit',
    numberOfRounds: 'Number of Rounds',
    play: 'Go!',
    timeLeft: 'Time left',
    submit: 'Submit',
    next: 'Next',
    results: 'Results',
    mistakes: 'Mistakes',
    playAgain: 'Start again',
    menu: 'Menu',
    choose: 'Choose',
    type: 'Type',
    noLimit: 'No limit',
    correct: 'Correct!',
    incorrect: 'Incorrect \u2014 answer: {n}',
    timesUp: "Time's up! Answer: {n}",
    pctCorrect: '{pct}% correct',
    congratulations: 'Congratulations!',
    pleaseSelect: 'Please select all options',
    installApp: 'Install App',
    sec: 'sec',
    chooseAnswer: 'Choose answer',
    enterEquivalent: 'Enter equivalent',
    systemNames: {
      binary: 'Binary', base3: 'Ternary', octal: 'Octal', hex: 'Hexadecimal',
      ternary: 'Balanced Ternary', braille: 'Braille Decimal',
      roman: 'Roman', slavonic: 'Church Slavonic',
      greek: 'Greek', hebrew: 'Hebrew',
    },
  },
  ru: {
    subtitle: '\u0422\u0440\u0435\u043D\u0430\u0436\u0435\u0440 \u0441\u0438\u0441\u0442\u0435\u043C \u0441\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F',
    startGame: 'Начать',
    chooseSystem: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0441\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F',
    positional: '\u041F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0435',
    nonPositional: '\u041D\u0435\u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0435',
    back: '\u041D\u0430\u0437\u0430\u0434',
    numberRange: '\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0447\u0438\u0441\u0435\u043B',
    difficulty: '\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438',
    answerMode: '\u0420\u0435\u0436\u0438\u043C \u043E\u0442\u0432\u0435\u0442\u0430',
    timeLimit: '\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438',
    numberOfRounds: '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0443\u043D\u0434\u043E\u0432',
    play: '\u0412\u043F\u0435\u0440\u0451\u0434!',
    timeLeft: '\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C',
    submit: '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C',
    next: '\u0414\u0430\u043B\u0435\u0435',
    results: '\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B',
    mistakes: '\u041E\u0448\u0438\u0431\u043A\u0438',
    playAgain: 'Начать заново',
    menu: '\u041C\u0435\u043D\u044E',
    choose: '\u0412\u044B\u0431\u043E\u0440',
    type: '\u0412\u0432\u043E\u0434',
    noLimit: '\u0411\u0435\u0437 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439',
    correct: '\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E!',
    incorrect: '\u041D\u0435\u0432\u0435\u0440\u043D\u043E \u2014 \u043E\u0442\u0432\u0435\u0442: {n}',
    timesUp: '\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E! \u041E\u0442\u0432\u0435\u0442: {n}',
    pctCorrect: '{pct}% \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445',
    congratulations: '\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C!',
    pleaseSelect: '\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B',
    installApp: '\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435',
    sec: '\u0441\u0435\u043A',
    chooseAnswer: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0442\u0432\u0435\u0442',
    enterEquivalent: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E',
    systemNames: {
      binary: '\u0414\u0432\u043E\u0438\u0447\u043D\u0430\u044F',
      base3: '\u0422\u0440\u043E\u0438\u0447\u043D\u0430\u044F',
      octal: '\u0412\u043E\u0441\u044C\u043C\u0435\u0440\u0438\u0447\u043D\u0430\u044F',
      hex: '\u0428\u0435\u0441\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043D\u0430\u044F',
      ternary: '\u0421\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u0447\u043D\u0430\u044F \u0442\u0440\u043E\u0438\u0447\u043D\u0430\u044F',
      braille: '\u0414\u0435\u0441\u044F\u0442\u0438\u0447\u043D\u0430\u044F \u0411\u0440\u0430\u0439\u043B\u044F',
      roman: '\u0420\u0438\u043C\u0441\u043A\u0430\u044F',
      slavonic: '\u0426\u0435\u0440\u043A\u043E\u0432\u043D\u043E\u0441\u043B\u0430\u0432\u044F\u043D\u0441\u043A\u0430\u044F',
      greek: '\u0413\u0440\u0435\u0447\u0435\u0441\u043A\u0430\u044F',
      hebrew: '\u0415\u0432\u0440\u0435\u0439\u0441\u043A\u0430\u044F',
    },
  },
};

function t(key, params) {
  let s = STRINGS[LANG][key] || STRINGS.en[key] || key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      s = s.replace('{' + k + '}', v);
    }
  }
  return s;
}

function systemName(key) {
  return STRINGS[LANG].systemNames[key] || STRINGS.en.systemNames[key] || SYSTEMS[key].name;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
}

const SYSTEM_RANGES = {
  binary: [
    { label: '2\u2070 \u2013 2\u00B3', min: 1, max: 8 },
    { label: '2\u00B3 \u2013 2\u2077', min: 8, max: 128 },
    { label: '2\u2070 \u2013 2\u2077', min: 1, max: 128 },
    { label: '2\u2070 \u2013 2\u00B9\u2075', min: 1, max: 32768 },
  ],
  base3: [
    { label: '3\u2070 \u2013 3\u00B9', min: 1, max: 3 },
    { label: '3\u00B9 \u2013 3\u00B2', min: 3, max: 9 },
    { label: '3\u00B2 \u2013 3\u00B3', min: 9, max: 27 },
    { label: '3\u2070 \u2013 3\u00B3', min: 1, max: 27 },
  ],
  ternary: [
    { label: '3\u2070 \u2013 3\u00B9', min: 1, max: 3 },
    { label: '\u20133\u00B9 \u2013 3\u00B9', min: -3, max: 3 },
    { label: '\u20133\u00B2 \u2013 3\u00B2', min: -9, max: 9 },
    { label: '\u20133\u00B3 \u2013 3\u00B3', min: -27, max: 27 },
  ],
  octal: [
    { label: '8\u00B9 \u2013 8\u00B2', min: 8, max: 64 },
    { label: '8\u00B2 \u2013 8\u00B3', min: 64, max: 512 },
    { label: '8\u2070 \u2013 8\u00B3', min: 1, max: 512 },
    { label: '8\u2070 \u2013 8\u2074', min: 1, max: 4096 },
  ],
  hex: [
    { label: 'F\u2070 \u2013 F\u00B9', min: 1, max: 16 },
    { label: 'F\u2070 \u2013 F\u00B2', min: 1, max: 256 },
    { label: 'F\u00B2 \u2013 F\u2074', min: 256, max: 65536 },
    { label: 'F\u2070 \u2013 F\u2074', min: 1, max: 65536 },
  ],
  braille: [
    { label: '0 \u2013 9', min: 0, max: 9 },
    { label: '10 \u2013 99', min: 10, max: 99 },
    { label: '100 \u2013 999', min: 100, max: 999 },
    { label: '0 \u2013 9999', min: 0, max: 9999 },
  ],
  roman: [
    { label: '1 \u2013 9', min: 1, max: 9 },
    { label: '10 \u2013 99', min: 10, max: 99 },
    { label: '100 \u2013 999', min: 100, max: 999 },
    { label: '1000 \u2013 3999', min: 1000, max: 3999 },
  ],
  greek: [
    { label: '1 \u2013 9', min: 1, max: 9 },
    { label: '10 \u2013 19', min: 10, max: 19 },
    { label: '20 \u2013 99', min: 20, max: 99 },
    { label: '1 \u2013 99', min: 1, max: 99 },
    { label: '100 \u2013 999', min: 100, max: 999 },
    { label: '1000 \u2013 9999', min: 1000, max: 9999 },
  ],
  slavonic: [
    { label: '1 \u2013 9', min: 1, max: 9 },
    { label: '10 \u2013 19', min: 10, max: 19 },
    { label: '20 \u2013 99', min: 20, max: 99 },
    { label: '1 \u2013 99', min: 1, max: 99 },
    { label: '100 \u2013 999', min: 100, max: 999 },
    { label: '1000 \u2013 9999', min: 1000, max: 9999 },
  ],
  hebrew: [
    { label: '1 \u2013 9', min: 1, max: 9 },
    { label: '10 \u2013 19', min: 10, max: 19 },
    { label: '20 \u2013 99', min: 20, max: 99 },
    { label: '1 \u2013 99', min: 1, max: 99 },
    { label: '100 \u2013 999', min: 100, max: 999 },
    { label: '1000 \u2013 9999', min: 1000, max: 9999 },
  ],
};

const SYSTEM_GROUPS = {
  pos: ['binary', 'octal', 'hex', 'braille', 'base3', 'ternary'],
  nonpos: ['roman', 'greek', 'slavonic', 'hebrew'],
};

const MODES = [
  { labelKey: 'choose', value: 'choice' },
  { labelKey: 'type', value: 'manual' },
];

const TIMINGS = [
  { value: 0 },
  { value: 30 },
  { value: 15 },
  { value: 5 },
];

const ROUNDS = [10, 25, 50, 100];

let game = {
  system: null,
  range: null,
  mode: null,
  timing: null,
  rounds: null,
  currentRound: 0,
  correctCount: 0,
  correctAnswer: null,
  answered: false,
  timerInterval: null,
  timeLeft: 0,
  mistakes: [],
};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

// ---- SETUP ----
let setupState = {};

function renderSetupSystem() {
  setupState = {};
  const posDiv = document.getElementById('setup-systems-pos');
  const nonposDiv = document.getElementById('setup-systems-nonpos');
  posDiv.innerHTML = '';
  nonposDiv.innerHTML = '';

  for (const [group, keys] of Object.entries(SYSTEM_GROUPS)) {
    const target = group === 'pos' ? posDiv : nonposDiv;
    keys.forEach(key => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = systemName(key);
      btn.addEventListener('click', () => {
        posDiv.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        nonposDiv.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        setupState.system = key;
        renderSetupRange();
      });
      target.appendChild(btn);
    });
  }

  showScreen('setup-system');
}

function renderSetupRange() {
  const ranges = SYSTEM_RANGES[setupState.system];

  document.getElementById('range-title').textContent = t('numberRange') + ' \u2014 ' + systemName(setupState.system);
  const rangesDiv = document.getElementById('setup-ranges');
  rangesDiv.innerHTML = '';
  delete setupState.range;
  delete setupState.rangeData;

  ranges.forEach((r, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = r.label;
    btn.addEventListener('click', () => {
      rangesDiv.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      setupState.range = i;
      setupState.rangeData = r;
      renderSetupOptions();
    });
    rangesDiv.appendChild(btn);
  });

  showScreen('setup-range');
}

function renderSetupOptions() {
  const defaultMode = 0;
  const defaultTiming = 0;
  const defaultRounds = 0;

  setupState.mode = defaultMode;
  setupState.timing = defaultTiming;
  setupState.rounds = defaultRounds;

  const modesDiv = document.getElementById('setup-modes');
  modesDiv.innerHTML = '';
  MODES.forEach((m, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (i === defaultMode ? ' selected' : '');
    btn.textContent = t(m.labelKey);
    btn.addEventListener('click', () => {
      modesDiv.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      setupState.mode = i;
    });
    modesDiv.appendChild(btn);
  });

  const timingDiv = document.getElementById('setup-timing');
  timingDiv.innerHTML = '';
  TIMINGS.forEach((tm, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (i === defaultTiming ? ' selected' : '');
    btn.textContent = tm.value === 0 ? t('noLimit') : tm.value + ' ' + t('sec');
    btn.addEventListener('click', () => {
      timingDiv.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      setupState.timing = i;
    });
    timingDiv.appendChild(btn);
  });

  const roundsDiv = document.getElementById('setup-rounds');
  roundsDiv.innerHTML = '';
  ROUNDS.forEach((r, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (i === defaultRounds ? ' selected' : '');
    btn.textContent = String(r);
    btn.addEventListener('click', () => {
      roundsDiv.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      setupState.rounds = i;
    });
    roundsDiv.appendChild(btn);
  });

  showScreen('setup-options');
}

// ---- GAME ----
let lastSetupState = null;
const MARK_CORRECT = '\u2713 ';
const MARK_INCORRECT = '\u2717 ';

function startGame() {
  lastSetupState = { ...setupState };
  game.system = setupState.system;
  game.range = setupState.rangeData || RANGES[setupState.range];
  game.mode = MODES[setupState.mode]?.value ?? setupState.mode;
  game.timing = TIMINGS[setupState.timing]?.value ?? setupState.timing;
  game.rounds = ROUNDS[setupState.rounds];
  game.currentRound = 0;
  game.correctCount = 0;
  game.mistakes = [];
  game.lastAnswer = null;

  document.getElementById('score-system-range').textContent = systemName(game.system) + ': ' + game.range.label;
  document.getElementById('score-round').textContent = '0/' + game.rounds;
  document.getElementById('score-correct').textContent = MARK_CORRECT + '0';
  document.getElementById('score-incorrect').textContent = MARK_INCORRECT + '0';

  showScreen('game');
  nextRound();
}

function nextRound() {
  if (game.currentRound >= game.rounds) {
    endGame();
    return;
  }

  game.currentRound++;
  game.answered = false;
  let num;
  do {
    num = randInt(game.range.min, game.range.max);
  } while (num === game.lastAnswer && game.range.min !== game.range.max);
  game.correctAnswer = num;
  game.lastAnswer = num;

  document.getElementById('score-round').textContent = game.currentRound + '/' + game.rounds;
  document.getElementById('score-correct').textContent = MARK_CORRECT + game.correctCount;

  const display = SYSTEMS[game.system].toDisplay(game.correctAnswer);
  const numEl = document.getElementById('number-display');
  numEl.textContent = display;
  numEl.classList.toggle('small-text', display.length > 12);
  numEl.classList.toggle('slavonic-font', game.system === 'slavonic');
  numEl.classList.toggle('mono', SYSTEM_GROUPS.pos.includes(game.system));

  const feedback = document.getElementById('answer-feedback');
  feedback.textContent = game.mode === 'choice' ? t('chooseAnswer') : t('enterEquivalent');
  feedback.className = 'answer-feedback';
  document.getElementById('btn-next').classList.add('hidden');

  if (game.mode === 'choice') {
    renderChoices();
  } else {
    renderNumpad();
  }

  startTimer();
}

function renderChoices() {
  const choiceArea = document.getElementById('choice-area');
  const numpadArea = document.getElementById('numpad-area');
  choiceArea.classList.remove('hidden');
  numpadArea.classList.add('hidden');

  const nonpos = ['roman', 'greek', 'slavonic', 'hebrew'];
  const choices = generateChoices(game.correctAnswer, [game.range.min, game.range.max], 3, nonpos.includes(game.system));
  choices.forEach((val, i) => {
    const btn = document.getElementById('choice-' + i);
    btn.textContent = val;
    btn.className = 'choice-btn';
    btn.disabled = false;
    btn.onclick = () => handleChoice(i, val, choices);
  });
}

function handleChoice(idx, val, choices) {
  if (game.answered) return;
  game.answered = true;
  stopTimer();

  const feedback = document.getElementById('answer-feedback');
  const allBtns = choices.map((_, i) => document.getElementById('choice-' + i));

  allBtns.forEach(b => b.disabled = true);

  if (val === game.correctAnswer) {
    game.correctCount++;
      document.getElementById('score-correct').textContent = MARK_CORRECT + game.correctCount;
    allBtns[idx].classList.add('correct-choice');
    feedback.textContent = t('correct');
    feedback.className = 'answer-feedback correct';
    const rect = allBtns[idx].getBoundingClientRect();
    spawnAnswerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
  } else {
    allBtns[idx].classList.add('incorrect-choice');
    const correctIdx = choices.indexOf(game.correctAnswer);
    allBtns[correctIdx].classList.add('correct-choice');
    feedback.textContent = t('incorrect', {n: game.correctAnswer});
    feedback.className = 'answer-feedback incorrect';
    game.mistakes.push({
      key: game.system,
      system: SYSTEMS[game.system].toDisplay(game.correctAnswer),
      decimal: game.correctAnswer,
      systemName: systemName(game.system),
    });
  }
  document.getElementById('score-incorrect').textContent = MARK_INCORRECT + (game.currentRound - game.correctCount);

  document.getElementById('btn-next').classList.remove('hidden');
}

function renderNumpad() {
  const choiceArea = document.getElementById('choice-area');
  const numpadArea = document.getElementById('numpad-area');
  choiceArea.classList.add('hidden');
  numpadArea.classList.remove('hidden');

  const inputEl = document.getElementById('numpad-input');
  inputEl.textContent = '';

  const clearBtn = numpadArea.querySelector('[data-key="clear"]');
  if (game.system === 'ternary') {
    clearBtn.textContent = '±';
    clearBtn.dataset.key = 'sign';
  } else {
    clearBtn.textContent = 'C';
    clearBtn.dataset.key = 'clear';
  }

  document.getElementById('btn-submit-answer').classList.remove('hidden');

  numpadArea.querySelectorAll('.numpad-key').forEach(key => {
    key.onclick = () => handleNumpadKey(key.dataset.key);
  });

  document.getElementById('btn-submit-answer').onclick = () => {
    if (game.answered) return;
    const val = parseInt(inputEl.textContent, 10);
    if (isNaN(val)) return;
    game.answered = true;
    stopTimer();
    document.getElementById('btn-submit-answer').classList.add('hidden');

    const feedback = document.getElementById('answer-feedback');
    if (val === game.correctAnswer) {
      game.correctCount++;
    document.getElementById('score-correct').textContent = MARK_CORRECT + game.correctCount;
      feedback.textContent = t('correct');
      feedback.className = 'answer-feedback correct';
      const rect = inputEl.getBoundingClientRect();
      spawnAnswerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
    } else {
      feedback.textContent = t('incorrect', {n: game.correctAnswer});
      feedback.className = 'answer-feedback incorrect';
      game.mistakes.push({
        key: game.system,
        system: SYSTEMS[game.system].toDisplay(game.correctAnswer),
        decimal: game.correctAnswer,
        systemName: systemName(game.system),
      });
    }
    document.getElementById('score-incorrect').textContent = MARK_INCORRECT + (game.currentRound - game.correctCount);

    document.getElementById('btn-next').classList.remove('hidden');
  };
}

function handleNumpadKey(key) {
  const inputEl = document.getElementById('numpad-input');
  if (game.answered) return;

  if (key === 'clear') {
    inputEl.textContent = '';
  } else if (key === 'backspace') {
    inputEl.textContent = inputEl.textContent.slice(0, -1);
  } else if (key === 'sign') {
    if (inputEl.textContent.startsWith('-')) {
      inputEl.textContent = inputEl.textContent.slice(1);
    } else {
      inputEl.textContent = '-' + inputEl.textContent;
    }
  } else {
    if (inputEl.textContent.length < 12) {
      inputEl.textContent += key;
    }
  }
}

function startTimer() {
  stopTimer();
  const timerEl = document.getElementById('timer-display');
  const timerArea = document.getElementById('timer-area');

  if (game.timing === 0) {
    timerEl.textContent = '';
    timerEl.classList.remove('urgent');
    timerArea.classList.remove('visible');
    return;
  }

  timerArea.classList.add('visible');
  game.timeLeft = game.timing;
  timerEl.textContent = game.timeLeft + ' ' + t('sec');
  timerEl.classList.remove('urgent');

  game.timerInterval = setInterval(() => {
    game.timeLeft--;
  timerEl.textContent = game.timeLeft + ' ' + t('sec');

    if (game.timeLeft <= 10) {
      timerEl.classList.add('urgent');
    }

    if (game.timeLeft <= 0) {
      stopTimer();
      if (!game.answered) {
        game.answered = true;
        const feedback = document.getElementById('answer-feedback');
        feedback.textContent = t('timesUp', {n: game.correctAnswer});
        feedback.className = 'answer-feedback incorrect';
        game.mistakes.push({
          key: game.system,
          system: SYSTEMS[game.system].toDisplay(game.correctAnswer),
          decimal: game.correctAnswer,
          systemName: systemName(game.system),
        });
  document.getElementById('score-incorrect').textContent = MARK_INCORRECT + (game.currentRound - game.correctCount);

        document.getElementById('btn-next').classList.remove('hidden');

        if (game.mode === 'choice') {
          document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);
        }
      }
    }
  }, 1000);
}

function stopTimer() {
  if (game.timerInterval) {
    clearInterval(game.timerInterval);
    game.timerInterval = null;
  }
  document.getElementById('timer-display').classList.remove('urgent');
}

function endGame() {
  stopTimer();
  showScreen('results');

  const completed = game.currentRound >= game.rounds;
  const total = completed ? game.rounds : game.currentRound;
  const correct = game.correctCount;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  const summary = document.getElementById('results-summary');
  summary.innerHTML = `
    <div class="big-number">${correct}/${total}</div>
    <div>${t('pctCorrect', {pct: pct})}</div>
  `;

  const congratsEl = document.getElementById('results-congrats');
  const labelEl = document.getElementById('results-mistakes-label');
  const listEl = document.getElementById('results-list');
  congratsEl.innerHTML = '';
  labelEl.textContent = t('mistakes');
  labelEl.style.display = '';
  listEl.innerHTML = '';

  if (game.mistakes.length > 0) {
    game.mistakes.forEach(m => {
      const item = document.createElement('div');
      item.className = 'result-item';
      const sysClass = m.key === 'slavonic' ? ' slavonic-font' : '';
      item.innerHTML = `
        <div class="result-system${sysClass}">${m.system}</div>
        <div class="result-arrow">\u2192</div>
        <div class="result-decimal">${m.decimal}</div>
      `;
      listEl.appendChild(item);
    });
  } else if (completed) {
    labelEl.style.display = 'none';
    congratsEl.textContent = t('congratulations');
    spawnConfetti();
  } else {
    labelEl.style.display = 'none';
  }
}

function spawnAnswerConfetti(x, y) {
  const chars = ['🎉', '🎊', '✨', '🎈', '🥳', '💫'];
  const burst = document.createElement('div');
  burst.className = 'answer-confetti-burst';
  burst.style.left = x + 'px';
  burst.style.top = y + 'px';

  for (let j = 0; j < 8; j++) {
    const particle = document.createElement('span');
    particle.className = 'confetti-particle';
    particle.textContent = chars[Math.floor(Math.random() * chars.length)];
    particle.style.setProperty('--dx', (Math.random() - 0.5) * 80 + 'px');
    particle.style.setProperty('--dy', -(30 + Math.random() * 60) + 'px');
    particle.style.setProperty('--rot', Math.random() * 360 + 'deg');
    particle.style.animationDuration = (0.5 + Math.random() * 0.3) + 's';
    burst.appendChild(particle);
  }

  document.body.appendChild(burst);
  setTimeout(() => burst.remove(), 1000);
}

function spawnConfetti() {
  const chars = ['🎉', '🎊', '✨', '🎈', '🥳', '💫'];
  const container = document.getElementById('results-congrats');

  const bursts = Math.round(game.rounds / 3);
  for (let i = 0; i < bursts; i++) {
    setTimeout(() => {
      const burst = document.createElement('div');
      burst.className = 'confetti-burst';
      burst.style.left = 15 + Math.random() * 70 + '%';
      burst.style.top = 20 + Math.random() * 40 + '%';

      for (let j = 0; j < 12; j++) {
        const particle = document.createElement('span');
        particle.className = 'confetti-particle';
        particle.textContent = chars[Math.floor(Math.random() * chars.length)];
        particle.style.setProperty('--dx', (Math.random() - 0.5) * 120 + 'px');
        particle.style.setProperty('--dy', -(40 + Math.random() * 80) + 'px');
        particle.style.setProperty('--rot', Math.random() * 360 + 'deg');
        particle.style.animationDuration = (0.6 + Math.random() * 0.4) + 's';
        burst.appendChild(particle);
      }

      container.appendChild(burst);
      setTimeout(() => burst.remove(), 1200);
    }, i * 500);
  }
}

// ---- INIT ----

const SUBSCRIPTS = { '0':'\u2080', '1':'\u2081', '2':'\u2082', '3':'\u2083',
  '4':'\u2084', '5':'\u2085', '6':'\u2086', '7':'\u2087', '8':'\u2088', '9':'\u2089' };

function toSubscript(n) {
  return String(n).split('').map(d => SUBSCRIPTS[d]).join('');
}

const TICKER_COLORS_DARK = [
  '#7ec8e3', '#a8d5a2', '#f0c674', '#d4a0d4', '#e8a87c',
  '#87ceeb', '#98d4bb', '#deb887', '#c9b1ff', '#ff9a9e'
];

const TICKER_COLORS_LIGHT = [
  '#2980b9', '#27ae60', '#d4a017', '#9b59b6', '#d35400',
  '#3498db', '#1abc9c', '#b8860b', '#8e44ad', '#e74c3c'
];

const isLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
const TICKER_COLORS = isLightTheme ? TICKER_COLORS_LIGHT : TICKER_COLORS_DARK;

const TICKER_SYSTEMS = [
  { key: 'binary',    min: 1,   max: 255,  suffix: toSubscript(2) },
  { key: 'base3',     min: 1,   max: 81,   suffix: toSubscript(3) },
  { key: 'octal',     min: 1,   max: 511,  suffix: toSubscript(8) },
  { key: 'hex',       min: 1,   max: 255,  prefix: '0x' },
  { key: 'ternary',   min: 1,   max: 27,   suffix: toSubscript(3) },
  { key: 'braille',   min: 1,   max: 99,   prefix: null },
  { key: 'roman',     min: 1,   max: 3999, prefix: null },
  { key: 'greek',     min: 1,   max: 999,  prefix: null },
  { key: 'slavonic',  min: 1,   max: 999,  prefix: null },
];

function generateTickerText() {
  const pairs = [];
  let lastKey = null;
  let lastColor = null;
  for (let i = 0; i < 20; i++) {
    let sys;
    do {
      sys = TICKER_SYSTEMS[Math.floor(Math.random() * TICKER_SYSTEMS.length)];
    } while (sys.key === lastKey);
    lastKey = sys.key;

    let color;
    do {
      color = TICKER_COLORS[Math.floor(Math.random() * TICKER_COLORS.length)];
    } while (color === lastColor);
    lastColor = color;
    const num = sys.min + Math.floor(Math.random() * (sys.max - sys.min + 1));
    const display = SYSTEMS[sys.key].toDisplay(num);
    let labelled = display;
    if (sys.prefix) labelled = sys.prefix + display;
    if (sys.suffix) labelled = display + sys.suffix;
    const wrapped = sys.key === 'slavonic'
      ? '<span class="slavonic-font">' + labelled + '</span>'
      : labelled;
    pairs.push('<span style="color:' + color + '">' + wrapped + ' = ' + num + '</span>');
  }
  return pairs.join('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0');
}

const tickerText = generateTickerText();
document.getElementById('ticker').innerHTML = tickerText + '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + tickerText;

const langSelect = document.getElementById('lang-select');
langSelect.value = LANG;
langSelect.addEventListener('change', () => {
  LANG = langSelect.value;
  localStorage.setItem('numnum-lang', LANG);
  applyTranslations();
});

applyTranslations();

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('btn-install').classList.remove('hidden');
});

document.getElementById('btn-install').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById('btn-install').classList.add('hidden');
});

window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  document.getElementById('btn-install').classList.add('hidden');
});

if (window.matchMedia('(display-mode: standalone)').matches || navigator.standalone) {
  document.getElementById('btn-install').classList.add('hidden');
}

function showSetupMessage(msg) {
  const containers = document.querySelectorAll('.setup-container');
  let el = document.getElementById('setup-message');
  if (!el) {
    el = document.createElement('div');
    el.id = 'setup-message';
    el.className = 'setup-message';
  }
  containers.forEach(c => {
    if (!c.contains(el)) c.prepend(el);
  });
  el.textContent = msg;
  el.classList.add('visible');
  setTimeout(() => el.classList.remove('visible'), 2500);
}

document.getElementById('btn-start').addEventListener('click', () => {
  renderSetupSystem();
});

document.getElementById('btn-system-back').addEventListener('click', () => {
  showScreen('menu');
});

document.getElementById('btn-range-back').addEventListener('click', () => {
  renderSetupSystem();
});

document.getElementById('btn-options-back').addEventListener('click', () => {
  renderSetupRange();
});

document.getElementById('btn-play').addEventListener('click', () => {
  if (setupState.mode === undefined || setupState.timing === undefined || setupState.rounds === undefined) {
    showSetupMessage(t('pleaseSelect'));
    return;
  }
  startGame();
});

document.getElementById('btn-next').addEventListener('click', () => {
  nextRound();
});

document.getElementById('btn-play-again').addEventListener('click', () => {
  setupState = { ...lastSetupState };
  startGame();
});

document.getElementById('btn-results-menu').addEventListener('click', () => {
  showScreen('menu');
});

document.getElementById('btn-stop').addEventListener('click', () => {
  stopTimer();
  endGame();
});

// Keyboard support for numpad
document.addEventListener('keydown', (e) => {
  if (!document.getElementById('screen-game').classList.contains('active')) return;
  if (game.answered) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      nextRound();
    }
    return;
  }

  if (game.mode === 'manual') {
    if (e.key >= '0' && e.key <= '9') {
      handleNumpadKey(e.key);
    } else if (e.key === 'Backspace') {
      handleNumpadKey('backspace');
    } else if (e.key === 'Escape') {
      handleNumpadKey('clear');
    } else if (e.key === 'Enter') {
      document.getElementById('btn-submit-answer').click();
    }
  } else if (game.mode === 'choice') {
    if (e.key === '1' || e.key === '2' || e.key === '3') {
      const idx = parseInt(e.key) - 1;
      const btn = document.getElementById('choice-' + idx);
      if (btn && !btn.disabled) btn.click();
    }
  }
});
