// Write your tests here!
const { expect } = require("chai");
const partitionStudentsByScore = require("../src/solution");

describe("partitionStudentsByScore", ()=> {
it("should return Students correctly partitioned into their appropriate arrays", ()=> {
    const students = [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
      ];
const actual = partitionStudentsByScore(students, 8);
const expected = [
    [{ name: "Morgan Sutton", score: 7.4 }],
    [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Natalee Vargas", score: 9.2 },
    ],
  ];
  expect(actual).to.eql(expected)      
});
it("should return Students correctly partioned even if it is in one array", ()=> {
    const students = [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
      ];
const actual = partitionStudentsByScore(students, 6);
const expected = [[], [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ]]
  expect(actual).to.eql(expected)      
});
it("should return an array of 2 arrays if students list is empty", ()=> {
    const students = [];
const actual = partitionStudentsByScore(students, 6);
const expected = [[], []]
  expect(actual).to.eql(expected)      
});
});