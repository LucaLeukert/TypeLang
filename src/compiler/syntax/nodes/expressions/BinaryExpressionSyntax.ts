import {ExpressionSyntax} from "./ExpressionSyntax";
import {SyntaxToken} from "../../SyntaxToken";
import {NodeType} from "../NodeType";
import {SyntaxNode} from "../SyntaxNode";
import {ArrayList} from "typescriptcollectionsframework";

export class BinaryExpressionSyntax extends ExpressionSyntax {
    private readonly _left: ExpressionSyntax;
    private readonly _operator: SyntaxToken;
    private readonly _right: ExpressionSyntax;

    get left(): ExpressionSyntax {
        return this._left;
    }

    get operator(): SyntaxToken {
        return this._operator;
    }

    get right(): ExpressionSyntax {
        return this._right;
    }

    public constructor(left: ExpressionSyntax, operator: SyntaxToken, right: ExpressionSyntax) {
        super();
        this._left = left;
        this._operator = operator;
        this._right = right;
    }

    get type(): NodeType {
        return NodeType.BinaryExpression;
    }

    get children(): ArrayList<SyntaxNode> {
        const list = new ArrayList<SyntaxNode>();
        list.add(this._left);
        list.add(this._operator);
        list.add(this._right);
        return list;
    }
}
