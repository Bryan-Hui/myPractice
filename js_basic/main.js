// let myHeading = document.querySelector('.hello');
// myHeading.textContent = `元素`;


// let rootEle = document.documentElement

// console.log('rootEle ', rootEle)

// let imgObj = document.querySelector('img')

// myHeading.onclick = function () {
//     imgObj.setAttribute('src', '../../assets/1.jpeg')
// }

//js: 基于原型 多范式  单线程的动态语言


//字面量：变量的常数值。字面上所看到的值。


// let car = {}, val = 3000

// Object.defineProperty(car, 'price', {
//     enumerable: true,
//     configurable: true,
//     get() {
//         console.log('get car')
//         return val
//     },
//     set(newVal) {
//         console.log('set car')
//         val = newVal
//     }
// })

// console.log(car.price)
// car.price = 200

// const a = { a: 1 }
// console.log(a.hasOwnProperty('a'))

// const onj = {
//     a: 1,
//     fam: {
//         f: 'dv',
//         m: 'al',
//     }
// }

// const b = JSON.stringify(onj)

// console.log(b, typeof b, JSON.parse(b))


//体验者权限
// StillGEB
// zgbluetiger
// LinkPi_PatrickStar
// LSC_dI
// FXLLXFFXLLXFFXL
// wxid_zvrdj6mk6xgp12

// console.log('document.body.clientWidth ', document.body.clientWidth) //页面可见区域宽
// console.log('document.body.clientHeight ', document.body.clientHeight,) //IE //页面可见区域高
// console.log('document.documentElement.clientHeight ', document.documentElement.clientHeight,) //chrome //页面可见区域高
// console.log(' window.innerHeight', window.innerHeight) //页面可见区域高

// console.log('document.body.offsetWidth', document.body.offsetWidth) //页面可见区域宽 (包括边线的宽)
// console.log('document.body.offsetHeight', document.body.offsetHeight) //页面可见区域高 (包括边线的宽)
// console.log('document.documentElement.offsetHeight', document.documentElement.offsetHeight) //页面可见区域高 (包括边线的宽)
// console.log('document.body.scrollWidth', document.body.scrollWidth) //页面可见区域正文宽
// console.log('document.documentElement.scrollHeight', document.documentElement.scrollHeight) //页面可见区域正文高


//浏览器判断 

// const userAgent = navigator.userAgent
// console.log('userAgent', userAgent.toUpperCase().indexOf('CHROME') > -1)
// console.log('userAgent', userAgent.toUpperCase().indexOf('FIREBOX') > -1)
// console.log('userAgent', window.ActiveXObject)


// window.scroll()
// window.addEventListener('scroll', function (e) {
//     console.log('addEventListener scroll ', e)
// })

// const a = [1, 2, 3]

// const b = a.splice(1)

// a.splice

// window.






