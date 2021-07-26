// Write your tests here!
const expect = require("chai").expect;
const findStudentScoreByName = require("../src/solution");

describe("studentScore", ()=> {
    it("should return score of student by name", ()=>{
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
          const expected = 7.4;
          const actual = findStudentScoreByName(students, "Morgan Sutton");
          expect(actual).to.equal(expected);
    });
});
describe("studentScore", ()=> {
    it("should return null if incorrect student name is given", ()=>{
        const students = [];
          const expected = null;
          const actual = findStudentScoreByName(students, "Morgan Sutton");
          expect(actual).to.equal(expected);
    });
});