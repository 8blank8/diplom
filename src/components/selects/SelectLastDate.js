import arrowImage from '../../img/arrow.png'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLastDateAction } from '../../redux/actions'
import { getDateTwoWeek } from '../../statisticGen'

const dateArr = getDateTwoWeek().reverse()

export const SelectLastDate = () =>{

    const dispatch = useDispatch()

    const [active, setActive] = useState(false)
    const [title, setTitle] = useState(dateArr[0])

    useEffect(()=>{
        dispatch(setLastDateAction(dateArr[0]))
    }, [])

    const contentSelect = dateArr.map(item =>{
        return (
            <div
            onClick={()=>{
                dispatch(setLastDateAction(item))
                setTitle(item)
            }} 
            className="select__option">
            {item}
        </div>
        )
    })

    return(
        <div onClick={()=> setActive(!active)} className={`select__item ${active ? 'selectActive' : 'selectNotActive'}`}>
            <span className={`select__title titleActive`}>{title}</span>
            <div className={`select__arrow ${active ? 'arrowActive' : 'arrowNotActive'}`}>
                <img src={arrowImage}/>
            </div>
            <div className={`select__options ${active ? "active" : "noActive"}`}>
                {contentSelect ? contentSelect : null}
            </div>
        </div>
    )
}