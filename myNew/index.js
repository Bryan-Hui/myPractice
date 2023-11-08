function Ctor() {  
    ....
}
function myNew(ctor, ...args) {
    if (typeof ctor !== 'function') {
        throw 'myNew function the first param must be a function';
    }
    var newObj = Object.create(ctor.prototype); //创建一个继承自ctor.prototype的新对象  
    var ctorctorReturnResult = ctor.apply(newObj, args); //将构造函数ctor的this绑定到newObj中  
    var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
    var isFunction = typeof ctorReturnResult === 'function';
    if (isObject || isFunction) {
        return ctorReturnResult;
    }
    return newObj;
}
let c = myNew(Ctor); 