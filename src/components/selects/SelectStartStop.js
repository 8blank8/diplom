import arrowImage from '../../img/arrow.png'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setStartStopAction } from '../../redux/actions'

export const SelectStartStop = () =>{

    const dispatch = useDispatch()

    const busStop = useSelector(({busStop}) => busStop)

    const [active, setActive] = useState(false)
    const [title, setTitle] = useState(busStop[0].stop.name)

    useEffect(()=> {
        dispatch(setStartStopAction(busStop[0].stop.name))
    }, [])

    const contentSelect = busStop.map(({stop})=>{
        return (
            <div
            onClick={async()=>{
                setTitle(stop.name)
                dispatch(setStartStopAction(stop.name))
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