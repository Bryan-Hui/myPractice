const setDelay = (millisecond) => {
    return new Promise((resolve, reject) => {
        if (typ millisecond != 'number') reject(new Error('参数必须是数字类型'))
    setTimeout(() => {
        resolve(`我延迟了${millisecond}毫秒后输出的`)
    }, millisecond)
})
}