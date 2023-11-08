~function () {
    /**
     * MYFLAT: 拉平数组
     * @param {*} layers 
     * @returns: 拉平后的数组
     */
    // get array depth/level
    function getArrayLevel(arr) {

        let flag = false, num = [];

        for (let i = 0; i < arr.length; i++) {
            if (Object.prototype.toString.call(arr[i]) === "[object Array]") {
                flag = true
                num.push(getArrayLevel(arr[i]))
            }
        }

        return flag ? Math.max(...num) + 1 : 1
    }
    //拉平所有层数
    function handleAlllayerArr(arr) {
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                newArr.push(...handleAlllayerArr(arr[i]))
            } else {
                newArr.push(arr[i])
            }
        }
        return newArr
    }

    //拉平规定层数的数组
    function getLimitLayerArray(arr, cl = 0, ll) {
        //传入的数组  cl: 当前层级  ll: 指定的层级
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                if (cl <= ll) {
                    newArr.push(...getLimitLayerArray(arr[i], cl + 1, ll))
                } else {
                    newArr.push(arr[i])
                }
            } else {
                newArr.push(arr[i])
            }
        }
        return newArr
    }

    Array.prototype.myFlat = function (layers) {
        let oldArr = this
        // console.log('this === ',this)
        let curArr
        const level = getArrayLevel(this)
        let newArr = []
        if (level >= layers) {
            //数组深度大于需要拉平的层数  
            return getLimitLayerArray(oldArr, 1, layers)
        } else {
            //数组深度小于要拉平层数  全部拉平
            return handleAlllayerArr(oldArr)
        }
    }

}()







  // const arr2 = [1, 2, 3, [[2, 3], [0, 2]], [1, [2, [3, [4, [5, [6, [7]]]]]]], [4, [1, 3, 4, [0, 90]]]]
  // console.log('flat == ', arr2.flat(0), arr2.flat(10))
  // console.log('myFlat == ', arr2.myFlat(0), arr2.myFlat(10))








