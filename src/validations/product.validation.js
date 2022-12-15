
const Validator = require("fastest-validator");
const validate = new Validator();

const productVaidationSchema = {
    productName: {
        type: "string", 
        min: 3, 
        max: 255,
        label: "Product name error"
    },
    category: { 
        type: "string", 
        min: 3, 
        max: 255,
        label: "Product category",
        optional: true
    },
    amount: {
        type: "number",
        positive: true, 
        integer: true,
        label: "Amount"
    }
};
const check = validate.compile(productVaidationSchema);

module.exports = check