const app00 = require('./app00')

test('add test', ()=>{
    expect(app00.add(2,3)).toBe(5);
})

test('sub test', () => {
    expect(app00.sub(3,2)).toBe(1);
})