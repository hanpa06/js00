class Base{
    constructor(protected a:number){}
    public add = (b:number):number => {return this.a+b;}
    public sub = (b:number):number => {return this.a-b;}
}
class Sub extends Base{
    public mul = (b:number):number => {return this.a*b;}
    public div = (b:number):number => {return this.a/b;}
}
exports.Base = Base;
exports.Sub  = Sub;