// const { TestWatcher } = require('@jest/core')

const {returnTwo, greeting, add, mult, div, subtract} = require('./functions')

test('Should return 2', ()=> {
    expect(returnTwo(2)).toEqual('2')
})

test('Should Return Hello, (name)', ()=> {
    expect(greeting('Zachary')).toEqual('Hello, Zachary.')
}) 

test('should add input numbers', ()=>{
    expect(add(5,5)).toBe(10)
})

test('should multiply input numbers', ()=>{
    expect(mult(5,5)).toBe(25)
})

test('should divide input numbers', ()=>{
    expect(div(5,5)).toBe(1)
})

test('should subtract input numbers', ()=>{
    expect(subtract(5,5)).toBe(0)
})