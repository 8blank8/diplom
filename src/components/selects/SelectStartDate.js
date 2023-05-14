import arrowImage from '../../img/arrow.png'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setStartDateAction } from '../../redux/actions'
import { getDateTwoWeek } from '../../statisticGen'

const dateArr = getDateTwoWeek()


export const SelectStartDate = () =>{
    
    const dispatch = useDispatch()

    const [active, setActive] = useState(false)
    const [title, setTitle] = useState(dateArr[0])

    useEffect(()=>{
        dispatch(setStartDateAction(dateArr[0]))
    }, [])

    const contentSelect = dateArr.map(item =>{
        return (
            <div
            onClick={()=>{
                dispatch(setStartDateAction(item))
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