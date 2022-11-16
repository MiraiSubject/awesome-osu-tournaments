import { readFile } from 'fs/promises';
import { marked } from 'marked';

(async () => {
    const readmeFile = await readFile('README.md', 'utf8');
    const lexed = marked.lexer(readmeFile);
    // console.log(lexed);
    for (const token of lexed) {
        if (token.type === 'heading') {
            if (token.depth === 2) {
                console.log(token.text);
                continue;
            }
            if (token.depth === 3) {
                console.log(token.text);
                continue;
            }
        }
        if (token.type === 'list') {
            for (const listToken of token.items) {
                const token0 = listToken.tokens[0] as marked.Tokens.Text;
                if (token0.type === 'text') {
                    if (!token0.tokens)
                        continue;

                    for (const token of token0.tokens) {
                        if (token.type === 'link') {
                            console.log(token.text, token.href);
                        }
                    }
                }
            }
        }
    }
})()
