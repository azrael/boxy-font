import { chars, parsedChars } from './chars';

function generateCharsTable() {
    let size = 6,
        table = '';

    Object.keys(chars)
        .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
        .join('')
        .match(new RegExp(`.{1,${size}}`, 'g'))
        .forEach((line, i, arr) => {
            table += i === 0 ?
                `╔═══╤═════════════${'╦═══╤═════════════'.repeat(size - 2)}╦═══╤═════════════╗\n` :
                `╠═══╪═════════════${'╬═══╪═════════════'.repeat(size - 2)}╬═══╪═════════════╣\n`;

            let row = ['', '', '', ''];

            line = `${line}${' '.repeat(size)}`.slice(0, size);

            line.split('').forEach((char, j, arr) => {
                parsedChars[char].forEach((value, k) => {
                    row[k] += `║ ${k === 2 ? char : ' '} │  ${parsedChars[char][k]}${' '.repeat(11 - parsedChars[char][k].length)}${j === arr.length - 1 ? '║' : ''}`;
                });
            });

            row.forEach(line => { table += `${line}\n` });

            i === arr.length - 1 && (table += `╚═══╧═════════════${'╩═══╧═════════════'.repeat(size - 2)}╩═══╧═════════════╝`);
        });

    return table;
}

module.exports = {
    generateCharsTable
};
