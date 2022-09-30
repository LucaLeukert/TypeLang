import {ExpressionSyntax} from "./ExpressionSyntax";
import {SyntaxToken} from "../../SyntaxToken";
import {NodeType} from "../NodeType";
import {SyntaxNode} from "../SyntaxNode";
import {ArrayList} from "typescriptcollectionsframework";

export class NumberExpressionSyntax extends ExpressionSyntax {
    private readonly _numberToken: SyntaxToken;

    public constructor(numberToken: SyntaxToken) {
        super();
        this._numberToken = numberToken;
    }

    get numberToken(): SyntaxToken {
        return this._numberToken;
    }

    override get type(): NodeType {
        return NodeType.NumberExpression;
    }

    get children(): ArrayList<SyntaxNode> {
        const list = new ArrayList<SyntaxNode>();
        list.add(this._numberToken);
        return list;
    }
}
