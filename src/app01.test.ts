const app01 = require('./app01')

test('Base Test', ()=>{
    let base = new app01.Base(2)
    expect(base.add(3)).toBe(5);
    expect(base.sub(1)).toBe(1);
})

test('Sub Test', ()=>{
    let sub = new app01.Sub(4)
    expect(sub.mul(2)).toBe(8);
    expect(sub.div(2)).toBe(2);
})