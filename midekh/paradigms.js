{
    const Midekh = Object.create(null);

    Midekh.derivation = Object.create(null);
    Midekh.derivation.patterns = Object.create(null);

    Midekh.derivation.patterns.noun = {
        abstraction: {
            pattern: ["", "i", "", "é"],
            gender: "feminine",
        },
        prototype: {
            pattern: ["", "i", "ê", ""],
            gender: "feminine if a proper noun; neuter if a mindless animal; masculine otherwise",
        },
        place: {
            pattern: ["so", "í", "i", ""],
            gender: "neuter",
        },
        instrument: {
            pattern: ["mi", "í", "", "o"],
            gender: "neuter",
        },
        emphasis: {
            pattern: ["", "i", "és", "e"],
            gender: "usually masculine; if the root has two nouns of emphasis, the feminine one refers to an intense action and the masculine to repeated action",
        },
        personal: {
            pattern: ["hê", "i", "o", ""],
            gender: "according to the person referred to; if unknown, usually masculine",
        },
        diminutive: {
            pattern: ["hi", "i", "", "í"],
            gender: "feminine",
        },
        derogative: {
            pattern: ["ŋô", "i", "", "o"],
            gender: "masculine",
        },
        common1: {
            pattern: ["", "í", "o", ""],
            gender: "feminine",
        },
        common2: {
            pattern: ["to", "i", "í", ""],
            gender: "neuter",
        },
        common3: {
            pattern: ["te", "i", "", "ó"],
            gender: "masculine",
        },
        common4: {
            pattern: ["no", "i", "é", ""],
            gender: "feminine",
        },
        common5: {
            pattern: ["si", "í", "e", ""],
            gender: "masculine",
        },
    };

    Midekh.derivation.patterns.verb = {
        "1st": {
            nonpast: ["", "é", "", "i"],
            past: ["", "e", "í", ""],
            verbal: ["", "ī", "", "é"],
            active: ["", "ó", "", "o"],
            passive: ["", "o", "ó", ""],
        },
        "2nd": {
            nonpast: ["", "én", "i", ""],
            past: ["", "e", "", "ín"],
            verbal: ["", "î", "", "en"],
            active: ["", "ó", "", "on"],
            passive: ["", "o", "nó", ""],
        },
        "3rd": {
            nonpast: ["hō", "e", "", "ó"],
            past: ["hō", "é", "o", "o"],
            verbal: ["he", "ī", "é", ""],
            active: ["", "ó", "ohi", ""],
            passive: ["he", "o", "", "ó"],
        },
        "4th": {
            nonpast: ["", "é", "", "it"],
            past: ["te", "é", "i", ""],
            verbal: ["", "ī", "", "ís"],
            active: ["", "ó", "si", ""],
            passive: ["", "o", "is", "ó"],
        },
        "5th": {
            nonpast: ["fe", "é", "e", ""],
            past: ["fí", "e", "ē", ""],
            verbal: ["fi", "ī", "", "í"],
            active: ["fo", "ó", "", "o"],
            passive: ["fo", "o", "ó", ""],
        },
        "6th": {
            nonpast: ["", "ém", "e", ""],
            past: ["", "em", "ē", "é"],
            verbal: ["", "ī", "mó", ""],
            active: ["mo", "o", "ó", ""],
            passive: ["mo", "ó", "", "o"],
        },
    };

    Midekh.nouns = Object.create(null);
    Midekh.nouns.case = {
        m: {
            nominative: "",
            accusative: "de",
            vocative: "tʰo",
            dative: "te",
            prepositional: "dē",
        },
        f: {
            nominative: "gr",
            accusative: "ge",
            vocative: "kʰo",
            dative: "gn",
            prepositional: "kī",
        },
        n: {
            nominative: "pl",
            accusative: "po",
            vocative: "pl",
            dative: "bo",
            prepositional: "pō",
        },
    };

    Midekh.nouns.number = {
        singular: {
            vowel: "k",
            consonant: "",
        },
        plural: {
            vowel: "hi",
            consonant: "i",
        },
    };

    window.LANG = {
        Midekh,
    };
}