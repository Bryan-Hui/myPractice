function Vue(name) {
    this.name = name

}

const mount = Vue.prototype.$mount

console.log('mount == ', mount)

Vue.prototype.$mount = function () {
    console.log('111')
    mount.call(this)
}

const vue = new Vue('haha')

vue.$mount()