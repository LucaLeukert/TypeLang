import {SyntaxType} from "./SyntaxType";
import {SyntaxNode} from "./nodes/SyntaxNode";
import {ArrayList} from "typescriptcollectionsframework";

export class SyntaxToken extends SyntaxNode {
    private readonly _position: number;
    private readonly _type: SyntaxType;
    private readonly _text: string;
    private readonly _value: any;

    get position(): number {
        return this._position;
    }

    get text(): string {
        return this._text;
    }

    override get type(): SyntaxType {
        return this._type;
    }

    get value(): any {
        return this._value;
    }

    public constructor(type: SyntaxType, position: number, text: string, value?: any) {
        super();

        this._position = position;
        this._value = value;
        this._text = text;
        this._type = type;
    }

    public toString(): string {
        return `${this._type} ${this._text}`;
    }

    public equals(type: SyntaxType): boolean {
        return this._type === type;
    }

    get children(): ArrayList<SyntaxNode> {
        return new ArrayList<SyntaxNode>();
    }
}
