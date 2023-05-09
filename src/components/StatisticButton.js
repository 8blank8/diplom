import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setStatisticNameAction } from "../redux/actions"

const nameArr = [
    {name: 'speed', title: 'Скорость борта'},
    {name: 'people_pay', title: 'Число людей, оплативших проезд'},
    {name: 'people_stay', title: 'Число людей, ожидавших ТС'}
]

export const StatisticButton = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setStatisticNameAction(nameArr[1]))
    }, [])

    const [nameBtn, setNameBtn] = useState(nameArr[0])

    const contentButton = nameArr.map(({name, title}) => {
        return (
            <div 
                className={`statistic__btn ${name === nameBtn.name ? 'activeBtnStat' : null}`}
                onClick={()=> {
                    dispatch(setStatisticNameAction({name, title}))
                    setNameBtn({name, title})
                }}>
                {title}
            </div>
        )
    })

    return (
        <div className='statistic__buttons'>
            {contentButton}
        </div>
    )
}