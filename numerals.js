export const SYSTEMS = {
  binary: {
    name: 'Binary',
    short: 'BIN',
    toDisplay: (n) => n.toString(2),
  },
  octal: {
    name: 'Octal',
    short: 'OCT',
    toDisplay: (n) => n.toString(8),
  },
  hex: {
    name: 'Hexadecimal',
    short: 'HEX',
    toDisplay: (n) => n.toString(16).toUpperCase(),
  },
  ternary: {
    name: 'Balanced Ternary',
    short: 'BT3',
    toDisplay: toBalTernary,
  },
  braille: {
    name: 'Braille Decimal',
    short: 'BRL',
    toDisplay: toBraille,
  },
  roman: {
    name: 'Roman',
    short: 'ROM',
    toDisplay: toRoman,
  },
  slavonic: {
    name: 'Church Slavonic',
    short: 'SLV',
    toDisplay: toSlavonic,
  },
  greek: {
    name: 'Greek',
    short: 'GRK',
    toDisplay: toGreek,
  },
  hebrew: {
    name: 'Hebrew',
    short: 'HEB',
    toDisplay: toHebrew,
  },
};

function toRoman(num) {
  if (num <= 0 || num > 3999) return String(num);
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let result = '';
  for (let i = 0; i < vals.length; i++) {
    while (num >= vals[i]) {
      result += syms[i];
      num -= vals[i];
    }
  }
  return result;
}

function toBalTernary(num) {
  if (num === 0) return '0';

  let sign = 1;
  let n = num;
  if (n < 0) {
    sign = -1;
    n = -n;
  }

  const digits = [];
  while (n > 0) {
    let rem = n % 3;
    n = Math.floor(n / 3);
    if (rem === 2) {
      digits.unshift('\u2296');
      n += 1;
    } else if (rem === 1) {
      digits.unshift('\u2295');
    } else {
      digits.unshift('0');
    }
  }

  if (sign === -1) {
    return digits.map(d => {
      if (d === '\u2295') return '\u2296';
      if (d === '\u2296') return '\u2295';
      return d;
    }).join('');
  }

  return digits.join('');
}

const BRAILLE_NUMS = ['\u281A','\u2801','\u2803','\u2809','\u2819','\u2811','\u280B','\u281B','\u2813','\u280A'];
const BRAILLE_HASH = '\u283C';

function toBraille(num) {
  if (num < 0) return String(num);
  if (num === 0) return BRAILLE_HASH + BRAILLE_NUMS[0];
  return BRAILLE_HASH + String(num).split('').map(d => BRAILLE_NUMS[parseInt(d)]).join('');
}

const GRK_UNITS = ['\u03B1','\u03B2','\u03B3','\u03B4','\u03B5','\u03DB','\u03B6','\u03B7','\u03B8'];
const GRK_TENS = ['\u03B9','\u03BA','\u03BB','\u03BC','\u03BD','\u03BE','\u03BF','\u03C0','\u03DF'];
const GRK_HUNDREDS = ['\u03C1','\u03C3','\u03C4','\u03C5','\u03C6','\u03C7','\u03C8','\u03C9','\u03E1'];
const GRK_THOU = '\u0375';
const GRK_KER = '\u1FFD';

function toGreek(num) {
  if (num <= 0 || num > 9999) return String(num);
  let result = '';
  const thou = Math.floor(num / 1000);
  num %= 1000;
  const h = Math.floor(num / 100);
  num %= 100;
  const t = Math.floor(num / 10);
  const u = num % 10;
  if (thou > 0) result += GRK_THOU + GRK_UNITS[thou - 1];
  if (h > 0) result += GRK_HUNDREDS[h - 1];
  if (t > 0) result += GRK_TENS[t - 1];
  if (u > 0) result += GRK_UNITS[u - 1];
  return result ? result + GRK_KER : '0';
}

const SLV_UNITS = ['а','в','г','д','є','ѕ','з','и','ѳ'];
const SLV_TENS = ['і','к','л','м','н','ѯ','ѻ','п','ч'];
const SLV_HUNDREDS = ['р','с','т','у','ф','х','ѱ','ѿ','ц'];
const SLV_THOU = '\u0482';
const SLV_TITLO = '\u0483';

function toSlavonic(num) {
  if (num <= 0 || num > 9999) return String(num);

  const groups = [];
  const thou = Math.floor(num / 1000);
  num %= 1000;
  const h = Math.floor(num / 100);
  num %= 100;
  const t = Math.floor(num / 10);
  const u = num % 10;

  if (thou > 0) groups.push({ p: SLV_THOU, l: SLV_UNITS[thou - 1] });

  if (h > 0) groups.push({ p: '', l: SLV_HUNDREDS[h - 1] });

  const twoDigit = t * 10 + u;
  if (twoDigit >= 11 && twoDigit <= 19) {
    if (u > 0) groups.push({ p: '', l: SLV_UNITS[u - 1] });
    if (t > 0) groups.push({ p: '', l: SLV_TENS[t - 1] });
  } else {
    if (t > 0) groups.push({ p: '', l: SLV_TENS[t - 1] });
    if (u > 0) groups.push({ p: '', l: SLV_UNITS[u - 1] });
  }

  if (groups.length === 0) return '0';

  const titloIdx = groups.length >= 2 ? groups.length - 2 : 0;
  groups[titloIdx].l += SLV_TITLO;

  return groups.map(g => g.p + g.l).join('') + '.';
}

const HEB_UNITS = ['\u05D0','\u05D1','\u05D2','\u05D3','\u05D4','\u05D5','\u05D6','\u05D7','\u05D8'];
const HEB_TENS = ['\u05D9','\u05DB','\u05DC','\u05DE','\u05E0','\u05E1','\u05E2','\u05E4','\u05E6'];
const HEB_HUNDREDS = ['\u05E7','\u05E8','\u05E9','\u05EA'];
const HEB_GERESH = '\u05F3';
const HEB_GERSHAYIM = '\u05F4';

function toHebrew(num) {
  if (num <= 0 || num > 499) return String(num);

  if (num === 15) return '\u05D8' + HEB_GERSHAYIM + '\u05D5';
  if (num === 16) return '\u05D8' + HEB_GERSHAYIM + '\u05D6';

  const letters = [];
  const h = Math.floor(num / 100);
  num %= 100;
  const t = Math.floor(num / 10);
  const u = num % 10;

  if (h > 0) letters.push(HEB_HUNDREDS[h - 1]);
  if (t > 0) letters.push(HEB_TENS[t - 1]);
  if (u > 0) letters.push(HEB_UNITS[u - 1]);

  if (letters.length === 0) return '0';
  if (letters.length === 1) return letters[0] + HEB_GERESH;
  return letters.slice(0, -1).join('') + HEB_GERSHAYIM + letters[letters.length - 1];
}

export function generateChoices(correctAnswer, allRanges, count = 3, matchLastDigit = false) {
  const choices = new Set([correctAnswer]);
  const [min, max] = allRanges;
  const useLastDigit = matchLastDigit && correctAnswer > 10;
  let attempts = 0;
  while (choices.size < count && attempts < 100) {
    let wrong;
    if (useLastDigit) {
      const offset = (Math.floor(Math.random() * 20) + 1) * 10;
      wrong = Math.random() < 0.5 ? correctAnswer + offset : correctAnswer - offset;
    } else {
      const offset = Math.floor(Math.random() * 20) + 1;
      wrong = Math.random() < 0.5 ? correctAnswer + offset : correctAnswer - offset;
    }
    if (wrong >= min && wrong <= max && wrong !== correctAnswer) {
      choices.add(wrong);
    }
    attempts++;
  }
  while (choices.size < count) {
    let r;
    if (useLastDigit) {
      do {
        r = min + Math.floor(Math.random() * (max - min + 1));
      } while (r % 10 !== correctAnswer % 10 && choices.size < count + 50);
    } else {
      r = min + Math.floor(Math.random() * (max - min + 1));
    }
    choices.add(r);
  }
  const arr = Array.from(choices);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
