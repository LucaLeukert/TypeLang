import {Lexer} from "./Lexer";
import {Parser} from "./Parser";
import {ArrayList} from "typescriptcollectionsframework";

export class Compiler {
    private readonly _lexer: Lexer;
    private readonly _parser: Parser;

    private readonly _diagnostics: ArrayList<string> = new ArrayList<string>();



    public constructor(text: string) {
        this._lexer = new Lexer(text);
        this._parser = new Parser(this._lexer);
    }

    get parser(): Parser {
        return this._parser;
    }
    get diagnostics(): ArrayList<string> {
        return this._diagnostics;
    }
    get lexer(): Lexer {
        return this._lexer;
    }
}


