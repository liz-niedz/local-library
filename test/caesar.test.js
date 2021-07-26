// Write your tests here!

const { expect } = require("chai")
const  caesarModule  = require("../src/caesar")

describe("caesarModule", ()=> {


    it("should return false false if shift amount is 0", ()=> {
        input = "thinkful";
        shift = 0;
        const actual = caesarModule.caesar(input, shift)
        expect(actual).to.be.false
    })

  
    it("should return false if the shift amount is above 25", ()=> { 
    input = "thinkful";
    shift = 36
    const actual = caesarModule.caesar(input, shift)
    expect(actual).to.be.false
    })

  
    it("should return false if the shift amount is less than -25", ()=> {
        input = "thinkful";
        shift = -36
        const actual = caesarModule.caesar(input, shift)
        expect(actual).to.be.false
    })

  
        it("handles shifts that go past the end of the alphabet.", ()=> {
            input = "zebra"
            shift = 3
            const actual = caesarModule.caesar(input, shift) 
            expect(actual).to.eql('cheud')
        })

  
        it("should leaves spaces and other symbols as is", ()=> {
            input = "This is a secret message!"
            shift = 8
            const actual = caesarModule.caesar(input, shift)
            expect(actual).to.eql('bpqa qa i amkzmb umaaiom!')
        })
        
  
        it("should ignore capital letters", ()=> {
            input = "ZEBRA"
            shift = 3
          const actual = caesarModule.caesar(input, shift) 
          expect(actual).to.eql('cheud')
        })
})
    
