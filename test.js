const { boxy } = require('./src/main');
const { generateCharsTable } = require('./src/utils');

const pretty = [
    `
╔═══╤═════════════╦═══╤═════════════╦═══╤═════════════╦═══╤═════════════╦═══╤═════════════╦═══╤═════════════╗
║   │             ║   │   ╷         ║   │   ╷╷        ║   │             ║   │             ║   │             ║
║   │             ║   │   │         ║   │   ╵╵        ║   │   ─┼─┼─     ║   │   ┌─┼─╴     ║   │   ┌─┐╷      ║
║   │             ║ ! │   ╵         ║ " │             ║ # │   ─┼─┼─     ║ $ │   └─┼─┐     ║ % │   └─┘│┌─┐   ║
║   │             ║   │   ╵         ║   │             ║   │             ║   │   ╶─┼─┘     ║   │      ╵└─┘   ║
╠═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╣
║   │             ║   │   ╷         ║   │   ╭         ║   │   ╮         ║   │     ╷       ║   │             ║
║   │    ┌──      ║   │   ╵         ║   │   │         ║   │   │         ║   │   ─ × ─     ║   │     ╷       ║
║ & │   ┌┴─╴┌     ║ ' │             ║ ( │   │         ║ ) │   │         ║ * │     ╵       ║ + │   ──┼──     ║
║   │   └───┘     ║   │             ║   │   ╰         ║   │   ╯         ║   │             ║   │     ╵       ║
╠═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╣
║   │             ║   │             ║   │             ║   │             ║   │  ┌───────┐  ║   │  ┌──────┐   ║
║   │             ║   │             ║   │             ║   │    ╱        ║   │  │   │   │  ║   │  └┐     │   ║
║ , │             ║ - │   ─────     ║ . │             ║ / │   ╱         ║ 0 │  │   │   │  ║ 1 │  ┌┘     └┐  ║
║   │   │         ║   │             ║   │   ╵         ║   │             ║   │  └───────┘  ║   │  └───────┘  ║
╠═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╣
║   │  ┌───────┐  ║   │  ┌───────┐  ║   │  ┌─────┬─┐  ║   │  ┌───────┐  ║   │  ┌───────┐  ║   │  ┌───────┐  ║
║   │  ├───    │  ║   │  ├───    │  ║   │  │       │  ║   │  │    ───┤  ║   │  │    ───┤  ║   │  └─┐     │  ║
║ 2 │  │    ───┤  ║ 3 │  ├───    │  ║ 4 │  └─┐     │  ║ 5 │  ├───    │  ║ 6 │  │    ── │  ║ 7 │    │     │  ║
║   │  └───────┘  ║   │  └───────┘  ║   │    └─────┘  ║   │  └───────┘  ║   │  └───────┘  ║   │    └─────┘  ║
╠═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╣
║   │  ┌───────┐  ║   │  ┌───────┐  ║   │             ║   │             ║   │             ║   │             ║
║   │  │  ───  │  ║   │  │ ──    │  ║   │             ║   │             ║   │   ╱         ║   │   ─────     ║
║ 8 │  │  ───  │  ║ 9 │  ├───    │  ║ : │   ╵         ║ ; │   ╵         ║ < │   ╲         ║ = │   ─────     ║
║   │  └───────┘  ║   │  └───────┘  ║   │   ╵         ║   │   │         ║   │             ║   │             ║
╠═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╣
║   │             ║   │   ┌───┐     ║   │             ║   │  ┌───────┐  ║   │  ┌──────┐   ║   │  ┌───────┐  ║
║   │   ╲         ║   │     ┌─┘     ║   │  ┌─────┐    ║   │  │   │   │  ║   │  │   ─  └┐  ║   │  │    ───┤  ║
║ > │   ╱         ║ ? │     ╵       ║ @ │  │ ┌─┐ │    ║ A │  │       │  ║ B │  │   ──  │  ║ C │  │       │  ║
║   │             ║   │     ╵       ║   │  ╵ └─┴─┘    ║   │  └───┴───┘  ║   │  └───────┘  ║   │  └───────┘  ║
╠═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╣
║   │  ┌───────┐  ║   │  ┌───────┐  ║   │  ┌───────┐  ║   │  ┌───────┐  ║   │  ┌───┬───┐  ║   │  ┌───────┐  ║
║   │  │     │ │  ║   │  │    ───┤  ║   │  │    ───┤  ║   │  │    ┌──┤  ║   │  │       │  ║   │  └┐     ┌┘  ║
║ D │  │     │ │  ║ E │  │    ───┤  ║ F │  │     ┌─┘  ║ G │  │       │  ║ H │  │   │   │  ║ I │  ┌┘     └┐  ║
║   │  └───────┘  ║   │  └───────┘  ║   │  └─────┘    ║   │  └───────┘  ║   │  └───┴───┘  ║   │  └───────┘  ║
╠═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╣
║   │    ┌─────┐  ║   │  ┌───┬───┐  ║   │  ┌─────┐    ║   │  ┌───┬───┐  ║   │  ┌────┬──┐  ║   │  ┌───────┐  ║
║   │    │     │  ║   │  │      ─┤  ║   │  │     │    ║   │  │       │  ║   │  │    │  │  ║   │  │   │   │  ║
║ J │  ┌─┘     │  ║ K │  │   │   │  ║ L │  │     └─┐  ║ M │  │ │   │ │  ║ N │  │  │    │  ║ O │  │       │  ║
║   │  └───────┘  ║   │  └───┴───┘  ║   │  └───────┘  ║   │  └─┴───┴─┘  ║   │  └──┴────┘  ║   │  └───────┘  ║
╠═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╣
║   │  ┌───────┐  ║   │  ┌───────┐  ║   │  ┌───────┐  ║   │  ┌───────┐  ║   │  ┌───────┐  ║   │  ┌───┬───┐  ║
║   │  │    ── │  ║   │  │   │   │  ║   │  │    ── │  ║   │  │     ──┤  ║   │  │       │  ║   │  │   │   │  ║
║ P │  │     ┌─┘  ║ Q │  │       ┤  ║ R │  │      ─┤  ║ S │  ├──     │  ║ T │  └─┐   ┌─┘  ║ U │  │       │  ║
║   │  └─────┘    ║   │  └──────┴┘  ║   │  └───┴───┘  ║   │  └───────┘  ║   │    └───┘    ║   │  └───────┘  ║
╠═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╣
║   │  ┌───┬───┐  ║   │  ┌─┬───┬─┐  ║   │  ┌───┬───┐  ║   │  ┌───┬───┐  ║   │  ┌───────┐  ║   │   ┌─        ║
║   │  │   │   │  ║   │  │ │   │ │  ║   │  ├─     ─┤  ║   │  │       │  ║   │  ├──     │  ║   │   │         ║
║ V │  └┐     ┌┘  ║ W │  │       │  ║ X │  │   │   │  ║ Y │  ├──     │  ║ Z │  │     ──┤  ║ [ │   │         ║
║   │   └─────┘   ║   │  └───┴───┘  ║   │  └───┴───┘  ║   │  └───────┘  ║   │  └───────┘  ║   │   └─        ║
╠═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╣
║   │             ║   │   ─┐        ║   │             ║   │             ║   │             ║   │    ┌        ║
║   │   ╲         ║   │    │        ║   │   ╱╲        ║   │             ║   │   ╲         ║   │   ┌┘        ║
║ \\ │    ╲        ║ ] │    │        ║ ^ │             ║ _ │             ║ \` │             ║ { │   └┐        ║
║   │             ║   │   ─┘        ║   │             ║   │   ─────     ║   │             ║   │    └        ║
╠═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╬═══╪═════════════╣
║   │             ║   │   ┐         ║   │             ║   │             ║   │             ║   │             ║
║   │   │         ║   │   └┐        ║   │   ┌─┐       ║   │             ║   │             ║   │             ║
║ | │   │         ║ } │   ┌┘        ║ ~ │     └─┘     ║   │             ║   │             ║   │             ║
║   │             ║   │   ┘         ║   │             ║   │             ║   │             ║   │             ║
╚═══╧═════════════╩═══╧═════════════╩═══╧═════════════╩═══╧═════════════╩═══╧═════════════╩═══╧═════════════╝`,
    `
┌───┬───┐┌───────┐┌─────┐  ┌─────┐  ┌───────┐        ┌─┬───┬─┐┌───────┐┌───────┐┌─────┐  ┌───────┐ ╷ 
│       ││    ───┤│     │  │     │  │   │   │        │ │   │ ││   │   ││    ── ││     │  │     │ │ │ 
│   │   ││    ───┤│     └─┐│     └─┐│       │        │       ││       ││      ─┤│     └─┐│     │ │ ╵ 
└───┴───┘└───────┘└───────┘└───────┘└───────┘ │      └───┴───┘└───────┘└───┴───┘└───────┘└───────┘ ╵ `,
    `
┌───────┐┌──────┐ 
│   │   ││   ─  └┐
│       ││   ──  │
└───┴───┘└───────┘`,
    `
┌───────┐
│   │   │
│       │
└───┴───┘
┌──────┐ 
│   ─  └┐
│   ──  │
└───────┘`,
    `
 ┌─ ┌───────┐┌──────┐   ┌─────┐┌───────┐┌───────┐┌───────┐     ┌───────┐┌──────┐   ┌─────┐┌───────┐┌───────┐┌───────┐ ─┐ 
 │  │   │   ││   ─  └┐  │     ││    ───┤│    ───┤│       │     │   │   ││   ─  └┐  │     ││    ───┤│    ───┤│       │  │ 
 │  │       ││   ──  │┌─┘     ││    ───┤│       │└─┐   ┌─┘     │       ││   ──  │┌─┘     ││    ───┤│       │└─┐   ┌─┘  │ 
 └─ └───────┘└───────┘└───────┘└───────┘└───────┘  └───┘       └───────┘└───────┘└───────┘└───────┘└───────┘  └───┘   ─┘ `
];

const tests = pretty.map(item => item.replace(/^\n/, ''));

describe('Initial test', () => {
    it('just to be sure everything works', () => {
        expect(1).toEqual(1);
    });
});

describe('Conversion to boxy font', () => {
    it('table of all characters', () => {
        expect(generateCharsTable()).toEqual(tests[0]);
    });

    it('hello, world!', () => {
        expect(boxy('hello, world!')).toEqual(tests[1]);
    });

    it('missing character must be ignored', () => {
        expect(boxy('a§b')).toEqual(tests[2]);
    });

    it('line break must be saved', () => {
        expect(boxy('a\nb')).toEqual(tests[3]);
    });

    it('empty input will result in an empty string', () => {
        expect(boxy(null)).toEqual('');
    });

    it('a non-string input will be converted to string', () => {
        expect(boxy({})).toEqual(tests[4]);
    });
});
