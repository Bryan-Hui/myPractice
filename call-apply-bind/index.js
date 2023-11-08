/**
 * CALL:call和apply都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部this的指向
 * 我们有一个对象 ,我们想调用该对象的方法又不想重新定义，那么我们可以通过使用call或apply方法：
 * 
 */



(function () {
    Function.prototype.myCall = function (context, ...args) {
        let ctx = context || window
        let func = Symbol()
        ctx[func] = this
        args = args.length > 0 ? args : []
        const res = args.length ? ctx[func](...args) : ctx[func]()
        delete ctx[func]
        return res
    }

    Function.prototype.myApply = function (context, args) {
        let ctx = context || window
        let func = Symbol()
        ctx[func] = this
        args = args.length > 0 ? args : []
        const res = args.length ? ctx[func](...args) : ctx[func]()
        delete ctx[func]
        return res
    }

    Function.prototype.myBind = function (context) {
        if (typeof this !== 'function') {
            throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
        }
        let func = this
        let outerArgs = Array.prototype.slice.call(arguments, 1)

        return function () {
            return func.apply(context, outerArgs)
        }
    }

})()




// console.log(Object.prototype.toString.myCall([]))
// const arr = [1, 2, 3, 4, 90, 78]
// console.log(Math.max.myCall(null, ...arr))
// console.log(Math.max.myApply(null, arr))


// const likeArray = {
//     0: 'one',
//     1: 'two',
//     2: 'three',
//     length: 3
// }

// console.log(Array.prototype.slice.call(likeArray, 1))
// let name = '小王', age = 17;
// let obj = {
//     name: '小张',
//     age: this.age,
//     myFun: function (from, to) {
//         console.log(this.name + ' 年龄 ' + this.age + '来自 ' + from + '去往' + to)
//     }
// }
// let db = {
//     name: '德玛',
//     age: 99
// }
// //结果  
// obj.myFun.myBind(db, '成都', '上海')();       // 德玛 年龄 99  来自 成都去往上海  
// obj.myFun.myBind(db, ['成都', '上海'])();   // 德玛 年龄 99  来自 成都, 上海去往 undefined 






