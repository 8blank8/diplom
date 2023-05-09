import { useState } from "react"
import { useDispatch } from "react-redux"
import arrowImage from '../../img/arrow.png'
import { setMarshAction, setTrassesAction, setBusStopAction } from "../../redux/actions"
import { useSelector } from "react-redux"
import { getBusTrasses } from "../../service/fetchApi"

export const SelectMarsh = () => {
    const dispatch = useDispatch()


    const [active, setActive] = useState(false)
    const [title, setTitle] = useState(null)

    const marshList = useSelector(({marshList})=> marshList)
    const transport = useSelector(({transport})=> transport)

    const filteredMarsh = transport && marshList.filter(({transportType}) => transportType === transport.type)
    

    const contentSelect = transport && filteredMarsh.map(({id, name, firstStop, lastStop})=>{
        return (
            <div
            onClick={async()=>{
                dispatch(setMarshAction({
                    id, 
                    name, 
                    type: transport.type,
                    firstStop, 
                    lastStop
                }))

                const tr = await getBusTrasses(id)
                const filteredStopBus = tr.traces.filter(({stop}) => stop)

                dispatch(setBusStopAction(filteredStopBus))
                dispatch(setTrassesAction(tr))
                setTitle(name)
            }} 
            className="select__option">
            {name}
        </div>
        )
    })

    return(
        <div onClick={()=> setActive(!active)} className={`select__item ${active ? 'selectActive' : 'selectNotActive'}`}>
            <span className={`select__title ${title ? 'titleActive' : null}`}>{title ? title : 'Маршрут'}</span>
            <div className={`select__arrow ${active ? 'arrowActive' : 'arrowNotActive'}`}>
                <img src={arrowImage}/>
            </div>
            <div className={`select__options ${active ? "active" : "noActive"}`}>
                {contentSelect ? contentSelect : null}
            </div>
        </div>
    )
}