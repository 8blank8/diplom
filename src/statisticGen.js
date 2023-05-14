
export const getDateTwoWeek = () => {
    const dateArr =[]

    const addZero = (num)=>{
        return num < 10 ? `0${num}` : num
    }

    let twoWeek = 1209600000
    const oneDay = 86400000 

    while(twoWeek !== 0){
        const date = addZero(new Date(new Date - twoWeek).getDate())
        const month = addZero(new Date(new Date - twoWeek).getMonth() + 1)

        twoWeek -= oneDay

        dateArr.push(`${date}.${month}`)
    }

    return dateArr
}

export const setPayPeopleOst = (nameBus, typeBus) => {
    const payArr = {
        name: nameBus,
        type: typeBus,
        statisticName: 'payOst',
        statisticData:  []
    }

    const addZero = (num)=>{
        return num < 10 ? `0${num}` : num
    }

    let twoWeek = 1209600000
    const oneDay = 86400000 

  
    while(twoWeek !== 0){
        const date = addZero(new Date(new Date - twoWeek).getDate())
        const month = addZero(new Date(new Date - twoWeek).getMonth() + 1)

        const peolpleNum = Math.floor(Math.random() * 100) + 10

        payArr.statisticData.push({
            time: `${date}.${month}`,
            people:  peolpleNum
        })

        twoWeek -= oneDay
    }

    localStorage.setItem(`${payArr.statisticName} ${payArr.name} ${payArr.type}`, JSON.stringify(payArr))
}


// две недели, массив оплат за две недели