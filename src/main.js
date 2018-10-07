import { parsedChars } from './chars';

function convert(text) {
    if (!text) return '';

    return text
        .toString()
        .split('\n')
        .map(part => {
            let res = ['', '', '', ''];

            part.split('').forEach(char => {
                char = (char || '').toUpperCase();

                parsedChars[char] && parsedChars[char].forEach((line, i) => {
                    res[i] += line;
                });
            });

            return res.join('\n');
        })
        .join('\n');
}

module.exports = {
    boxy: convert
};
