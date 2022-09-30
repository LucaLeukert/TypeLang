import {SyntaxToken} from "./syntax/SyntaxToken";
import {Math} from "./utils/Math";
import {SyntaxType} from "./syntax/SyntaxType";
import {Char} from "./utils/Char";

export class Lexer {
    get text(): string {
        return this._text;
    }

    get position(): number {
        return this._position;
    }

    get current(): string {
        if (this._position >= this._text.length)
            return '\0';
        return this._text[this._position];
    }

    private readonly _text: string;
    private _position: number;

    /**
     * Creates a new Lexer instance.
     *
     * @param text The text to parse.
     * @param text
     */
    public constructor(text: string) {
        this._text = text;
        this._position = 0;
    }

    /**
     * Moves the position to the next character.
     * @private
     */
    private nextChar(): string {
        this._position++;
        return this.current;
    }

    /**
     * Checks if the file is at the end.
     */
    public hasNext(): boolean {
        return this._position < this._text.length;
    }

    /**
     * Parses the next syntax.
     */
    public nextToken(): SyntaxToken {
        if (this._position >= this._text.length)
            return new SyntaxToken(SyntaxType.EOF, this._position, "\0", null);

        if (Math.isNumeric(this.current)) {
            let start = this._position;
            while (Math.isNumeric(this.current)) this.nextChar();

            const value = parseInt(this._text.substring(start, this._position));
            return new SyntaxToken(SyntaxType.NumberToken, start, this._text.substring(start, this._position), value);
        }

        if (Char.isWhitespace(this.current)) {
            let start = this._position;
            while (Char.isWhitespace(this.current)) this.nextChar();

            return new SyntaxToken(SyntaxType.WhitespaceToken, start, this._text.substring(start, this._position));
        }

        switch (this.current) {
            case '+':
                return new SyntaxToken(SyntaxType.PlusToken, this._position++, "+");
            case '-':
                return new SyntaxToken(SyntaxType.MinusToken, this._position++, "-",);
            case '*':
                return new SyntaxToken(SyntaxType.StarToken, this._position++, "*");
            case '/':
                return new SyntaxToken(SyntaxType.SlashToken, this._position++, "/");
            case '(':
                return new SyntaxToken(SyntaxType.OpenParenthesisToken, this._position++, "(");
            case ')':
                return new SyntaxToken(SyntaxType.CloseParenthesisToken, this._position++, ")");
            default:
                return new SyntaxToken(SyntaxType.BadToken, this._position++, this._text.substring(this._position - 1, this._position));
        }
    }
}
