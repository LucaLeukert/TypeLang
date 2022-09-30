import {SyntaxNode} from "../syntax/nodes/SyntaxNode";

export class TreePrinter {
    public static printNode(node: SyntaxNode, indent: number = 0): string {
        let result = "";
        result += " ".repeat(indent);
        result += node.toString();
        result += "";

        for (const child of node.children) {
            result += this.printNode(child, indent + 2);
        }
        return result;
    }
}
