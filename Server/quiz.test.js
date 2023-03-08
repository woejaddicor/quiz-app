/**
 * @jest-environment jsdom
 */

const fetch = require('node-fetch');
const quiz = require('./quiz')

test("Check get category is a function", () => {
    console.log(quiz.getCategory);
    expect(quiz.getCategory).toBeInstanceOf(Function);
});

test("Check display question is a function", () => {
    console.log(quiz.displayQuestion);
    expect(quiz.displayQuestion).toBeInstanceOf(Function);
});

test("Check get category works as expected", async() => {
    const response = await fetch(`http://localhost:3000/questions/english`);
    const cat = await response.json();
    console.log(cat[0]);
    expect(cat).toBeInstanceOf(Array);
});