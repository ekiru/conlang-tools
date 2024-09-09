{
    const Midekh = Object.create(null);

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