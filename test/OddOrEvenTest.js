var expect = require("chai").expect;
var checker = require("../app/oddOrEven.js");

describe("testing whether a number is odd or even", function() {

    it("number 4 should be even", function() {
        expect(typeof checker, 'object').to.equal('object')
        expect(checker.isEven(4)).to.equal(true)
        expect(checker.isOdd(4)).to.equal(false)
    })

    it("number 5 should be odd", function() {
        expect(typeof checker, 'object').to.equal('object')
        expect(checker.isOdd(5)).to.equal(true)
        expect(checker.isEven(5)).to.equal(false)
    })

})

