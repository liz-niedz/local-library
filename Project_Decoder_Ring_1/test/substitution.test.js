// Write your tests here!
const { expect } = require("chai")
const  substitutionModule  = require("../src/substitution")

describe("substitutionModule",()=> {


    it("should return false if given alphabet isn't exactly 26 characters long.",()=> {
        input = "message"
        alphabet = "plmoknijbuhvygctfxs"
        actual = substitutionModule.substitution(input, alphabet)
        expect(actual).to.be.false
    })


    it("should correctly translate the given phrase, based on the given alphabet",()=> {
        input = "message"
        alphabet = "plmoknijbuhvygctfxrdzeswaq"
        actual = substitutionModule.substitution(input, alphabet)
        expect(actual).to.eql("ykrrpik")
    })


    it("should return false if there are any duplicate characters in the given alphabet",()=> {
        input = "message"
        alphabet = "aaacccmeiweiehcidjdodj"
        actual = substitutionModule.substitution(input, alphabet)
        expect(actual).to.be.false
    })


    it("should maintain spaces",()=> {
        input = "You are an excellent spy"
        alphabet = "xoyqmcgrukswaflnthdjpzibev"
        actual = substitutionModule.substitution(input, alphabet)
        expect(actual).to.eql('elp xhm xf mbymwwmfj dne')
    })



})
