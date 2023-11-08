class Subject {
    constructor() {
        this.observers = []
    }

    add(observer) {
        this.observers.push(observer)
    }

    remove(observer) {
        const idx = this.observers.findIndex(item => item === observer)
        idx > -1 && this.observers.splice(idx, 1)
    }

    notify() {
        for (let ob of this.observers) {
            ob.update()
        }
    }

}

class Observer {
    constructor(name) {
        this.name = name
    }

    update() {
        console.log(`目标者通知我更新了，我是${this.name}`)
    }
}

let subject = new Subject()

let obs1 = new Observer('前端')
let obs2 = new Observer('后端')

subject.add(obs1)
subject.add(obs2)

// subject.notify()

pubSub = {
    list: {},

    subscribe: function (key, fn) {
        if (!this.list[key]) {
            this.list[key] = []
        }
        this.list[key].push(fn)
    },

    publish: function (key, ...args) {
        for (let fn of this.list[key]) {
            fn.call(this, ...args)
        }
    },

    unSubscribe: function (key, fn) {
        const fnList = this.list[key]
        if (!fnList) return false

        if (!fn) {
            // fnList && fnList.length = 0
            fnList && (fnList.length = 0);   //注意 ：此处报错
        } else {
            const idx = fnList.findIndex(x => x === fn)
            fnList.splice(idx, 1)
        }
    }
}

pubSub.subscribe('onwork', time => {
    console.log(`上班了，时间是${time}`)
})

pubSub.subscribe('offwork', time => {
    console.log(`下班了，时间是${time}`)
})

pubSub.subscribe('lunch', time => {
    console.log(`吃饭了，时间是${time}`)
})


pubSub.publish('offwork', '2023-02-23 14: 23:00')

pubSub.publish('lunch', '2023-02-23 14: 25:00')

// 取消订阅
pubSub.unSubscribe('onwork');