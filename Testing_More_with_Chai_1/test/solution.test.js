// Write your tests here!
const { expect } = require("chai");
const findStudentByName = require("../src/solution")

describe("findStudentByName", ()=> {
    it("should return the student object by given name",()=> {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
          const actual = findStudentByName(students, "Natalee Vargas")
          const expected = { name: "Natalee Vargas", score: 9.2 }
          expect(actual).to.eql(expected)
    })
})

describe("findStudentByName", ()=> {
    it("should return null if student name is incorrect",()=> {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
        ];
          const actual = findStudentByName(students, "Liz Niedzwiecki")
          expect(actual).to.be.null
    })
})