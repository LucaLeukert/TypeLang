import {Compiler} from "./compiler/Compiler";
import readline from "readline";
import {SyntaxType} from "./compiler/syntax/SyntaxType";
import {TreePrinter} from "./compiler/utils/TreePrinter";

const readInterface = readline.createInterface({
    input: process.stdin
});

process.stdout.write("Expression>>> ");
readInterface.question("", (text: string) => {
    if (text === "exit") {
        console.log("Exiting...");
        process.exit(0);
    } else {
        const compiler = new Compiler(text);
        const expression = compiler.parser.parse();

        TreePrinter.printNode(expression);
    }
});
