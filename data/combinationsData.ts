export interface CombinationSet {
    title: string;
    items: string[];
    description?: string;
}

const consonants = ['ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی'];
const connectingConsonants = ['ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'ه', 'ی'];

const generateCombinations = (vowel: string, forms: Record<string, string> = {}): string[] => {
    return consonants.map(c => {
        const form = connectingConsonants.includes(c) ? (forms[c] || c) : c;
        return `${form}${vowel}`;
    });
};

const generateConnectingCombinations = (vowel: string): string[] => {
    return consonants.map(c => {
        const base = connectingConsonants.includes(c) ? `${c.slice(0, -1)}ـ` : c;
        return `${base}${vowel}`;
    });
}

export const combinationsData: Record<string, CombinationSet> = {
    'combinations-aa': {
        title: "ترکیب با «ا»",
        items: generateCombinations('ا'),
    },
    'combinations-oo': {
        title: "ترکیب با «و»",
        items: ['بو', 'پو', 'تو', 'ثو', 'جو', 'چو', 'حو', 'خو', 'دو', 'ذو', 'رو', 'زو', 'ژو', 'سو', 'شو', 'صو', 'ضو', 'طو', 'ظو', 'عو', 'غو', 'فو', 'قو', 'کو', 'گو', 'لو', 'مو', 'نو', 'وو', 'هو', 'یو'],
    },
    'combinations-y': {
        title: "ترکیب با «ی»",
        description: "این نشانه دو شکل دارد. شکل اول در وسط کلمه می‌آید و شکل دوم در آخر کلمه.",
        items: [
            ...generateCombinations('ی'), // (بی - پی - و...)
            ...generateConnectingCombinations('یـ') // (بیـ - پیـ - و...)
        ],
    },
    'combinations-a': {
        title: "ترکیب با «ـَ»",
        items: generateConnectingCombinations('ـَ'),
    },
    'combinations-e': {
        title: "ترکیب با «ـِ» و «ـه»",
        description: "این صدا دو شکل نوشتاری دارد که هر دو را تمرین می‌کنیم.",
        items: [
            ...generateConnectingCombinations('ـِ'), // (بـِ - پـِ - و...)
            ...generateCombinations('ه'), // (به - په - و...)
        ],
    },
    'combinations-o': {
        title: "ترکیب با «ـُ»",
        items: generateConnectingCombinations('ـُ'),
    },
};
