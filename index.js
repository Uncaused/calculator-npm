class Calculator {
    /**
     * @param {Number} num1 - Must be A number
     * @param {Number} num2 - Must be A number
     */
    static add(num1, num2) {
        if (isNaN(num1)) throw new SyntaxError("Number 1 is not valid!");
        if (isNaN(num2)) throw new SyntaxError("Number 2 is not valid!");
        let added = num1 + num2;
        return added;
    };
    /**
     * @param {Number} num1 - Must be A number
     * @param {Number} num2 - Must be A number
     */
    static sub(num1, num2) {
        if (isNaN(num1)) throw new SyntaxError("Number 1 is not valid!");
        if (isNaN(num2)) throw new SyntaxError("Number 2 is not valid!");
        let subbed = num1 - num2;
        return subbed;
    };
    /**
     * @param {Number} num1 - Must be A number
     * @param {Number} num2 - Must be A number
     */
    static mult(num1, num2) {
        if (isNaN(num1)) throw new SyntaxError("Number 1 is not valid!");
        if (isNaN(num2)) throw new SyntaxError("Number 2 is not valid!");
        let mult = num1 * num2;
        return mult;
    };
    /**
     * @param {Number} num1 - Must be A number
     * @param {Number} num2 - Must be A number
     */
    static divide(num1, num2) {
        if (isNaN(num1)) throw new SyntaxError("Number 1 is not valid!");
        if (isNaN(num2)) throw new SyntaxError("Number 2 is not valid!");
        let divided = num1 / num2;
        return divided;
    };
    
};

module.exports = Calculator;