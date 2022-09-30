import {NodeType} from "./NodeType";
import {SyntaxType} from "../SyntaxType";
import {ArrayList} from "typescriptcollectionsframework";

export abstract class SyntaxNode {
    public constructor() {
    }

    public abstract get children(): ArrayList<SyntaxNode>;

    abstract get type(): NodeType | SyntaxType;
}

