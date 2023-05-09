import arrowImage from '../../img/arrow.png'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLastStopAction } from '../../redux/actions'

export const SelectLastStop = () =>{

    const dispatch = useDispatch()

    const busStop = useSelector(({busStop}) => busStop)

    const [active, setActive] = useState(false)
    const [title, setTitle] = useState(busStop[busStop.length - 1].stop.name)

    useEffect(()=> {
        dispatch(setLastStopAction(busStop[0].stop.name))
    }, [])

    const contentSelect = busStop.map(({stop})=>{
        return (
            <div
            onClick={async()=>{
                setTitle(stop.name)
                dispatch(setLastStopAction(stop.name))
            }} 
            className="select__option">
            {stop.name}
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