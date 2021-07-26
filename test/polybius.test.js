// Write your tests here!
const { expect } = require("chai")
const  polybiusModule  = require("../src/polybius")

describe("polybiusModule", ()=> {
    it("should translate the letters i and j to 42 when encoding", ()=> {
        input = "thinkful"
        const actual = polybiusModule.polybius(input);
        expect(actual).to.eql("4432423352125413")
    })


    it("should translate 42 to (i/j) when decoding",()=> {
        input = "4432423352125413"
        const actual = polybiusModule.polybius(input, false);
        expect(actual).to.include("(i/j)")
    })


it("should ignore capital letters",()=> {
    input = "MESsage"
    const actual = polybiusModule.polybius(input);
    expect(actual).to.eql("23513434112251")
})


it("should leave spaces as is",()=> {
    input = "a message"
    const actual = polybiusModule.polybius(input);
    expect(actual).to.eql("11 23513434112251")
})

})

