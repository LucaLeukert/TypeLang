import {Lexer} from "./Lexer";
import {SyntaxToken} from "./syntax/SyntaxToken";
import {SyntaxType} from "./syntax/SyntaxType";
import {BinaryExpressionSyntax} from "./syntax/nodes/expressions/BinaryExpressionSyntax";
import {NumberExpressionSyntax} from "./syntax/nodes/expressions/NumberExpressionSyntax";
import {ExpressionSyntax} from "./syntax/nodes/expressions/ExpressionSyntax";
import {ArrayList} from "typescriptcollectionsframework";

export class Parser {
    private readonly _lexer: Lexer;
    private readonly _tokensToParse: ArrayList<SyntaxToken>;

    public constructor(lexer: Lexer) {
        this._tokensToParse = new ArrayList<SyntaxToken>();
        this._position = 0;
        this._lexer = lexer;

        while (this.lexer.hasNext()) {
            const token = this.lexer.nextToken();

            console.log(`Token: ${token}`);

            if (!token.equals(SyntaxType.WhitespaceToken) && !token.equals(SyntaxType.BadToken))
                this._tokensToParse.add(this.lexer.nextToken());
        }
    }

    private _position: number;

    get position(): number {
        return this._position;
    }

    get lexer(): Lexer {
        return this._lexer;
    }

    get tokensToParse(): ArrayList<SyntaxToken> {
        return this._tokensToParse;
    }

    get current(): SyntaxToken {
        return this.peek(0);
    }

    public nextToken(): SyntaxToken {
        const current = this.current;
        this._position++;
        return current;
    }

    public parsePrimaryExpression(): ExpressionSyntax {
        if (this.current.equals(SyntaxType.NumberToken))
            return new NumberExpressionSyntax(this.current);

        throw new Error("Unexpected token " + this.current);
    }

    public parse(): ExpressionSyntax {
        console.log(this._position)

        let left = this.parsePrimaryExpression();

        while (this.current.equals(SyntaxType.PlusToken) || this.current.equals(SyntaxType.MinusToken)) {
            const operator = this.nextToken();
            const right = this.parsePrimaryExpression();

            left = new BinaryExpressionSyntax(left, operator, right);
        }

        return left;
    }

    public peek(offset: number): SyntaxToken {
        const index = this._position + offset;
        console.log(`index: ${index}, tokensToParse: ${this._tokensToParse.size()}`);
        if (index >= this._tokensToParse.size()) {
            console.log("End of file");
            return this._tokensToParse.get(this._tokensToParse.size() - 1);
        }

        return this._tokensToParse.get(index);
    }

}
