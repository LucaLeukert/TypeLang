export class Math {
    public static isNumeric(char) {
        return !isNaN(char - parseFloat(char));
    }
}
