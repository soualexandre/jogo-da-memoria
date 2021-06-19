const FRONT = "card_front"
const BACK = "card_back"


let techs = [
    'bootstrap',
    'Electron',
    'firebase',
    'hmtl',
    'javaScript',
    'jquery',
    'mongo',
    'node',
    'react',
];

function createCardsFromTAgs(techs) {
    let card = [];

    for (let tech of techs) {
        card.push(createPainFromTEchs(tech))
    }
}

function createPainFromTEchs(tech) {
    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    },
    {
        id: createIdWithTech(tech),
        icon:tech,
        flipped:true,
    }
    ]
}
