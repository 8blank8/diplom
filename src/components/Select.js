import { useEffect, useState } from "react"
import arrowImage from '../img/arrow.png'
import { useDispatch, useSelector } from "react-redux"
import { setTransportAction, setMarshAction } from "../redux/actions"
import { getBusTrasses } from "../service/fetchApi"
import { setTrassesAction } from "../redux/actions"

export const Select = ({placeholder, clicable, type, setTitleFStop, name}) =>{

    const dispatch = useDispatch()

    const [active, setActive] = useState(false)
    const [title, setTitle] = useState(null)

    const marsh = useSelector(({marsh})=> marsh)
    const marshList = useSelector(({marshList})=> marshList)
    const transport = useSelector(({transport})=> transport)
    const trasses = useSelector(({trasses}) => trasses)
    
    // тип транспорта 
    const transportTypes = [
        {name: 'Автобус', type: 'BUS'},
        {name: 'Трамвай', type: 'TRAM'},
        {name: 'Троллейбус', type: 'TROLLEY_BUS'},
        {name: 'Маршрутное такси', type: 'Minibus'}
    ]

    // определение содержимого селекта
    let contentSelect = null
    switch(type){
        case 'type':
            contentSelect = transportTypes.map(({name, type}) => {
                return (
                <div
                    onClick={()=>{
                        dispatch(setTransportAction(type))
                        setTitle(name)
                    }} 
                    className="select__option">
                    {name}
                </div>
                )
            })
            break

        case 'marsh':
            const filteredMarsh = marshList.filter(({transportType}) => transportType === transport)
            contentSelect = filteredMarsh.map(({id, name, firstStop, lastStop})=>{
                return (
                    <div
                    onClick={async()=>{
                        dispatch(setMarshAction({
                            id, 
                            name, 
                            type: transport,
                            firstStop, 
                            lastStop
                        }))
                        const tr = await getBusTrasses(id)
                        dispatch(setTrassesAction(tr))
                        setTitle(name)
                    }} 
                    className="select__option">
                    {name}
                </div>
                )
            })
            break

        case 'firstStop':
            if(trasses.length != 0){
                const stopBus = trasses.traces.filter(item => item.stop)

                contentSelect = stopBus.map(({stop})=>{
                    return (
                        <div
                        onClick={async()=>{
                            setTitle(stop.name)
                        }} 
                        className="select__option">
                        {stop.name}
                    </div>
                    )
                })
            }
            
            break

        case 'lastStop':
            if(trasses.length != 0){
                const stopBus = trasses.traces.filter(item => item.stop)
                // setTitle(stopBus[stopBus.length - 1])
                
                contentSelect = stopBus.map(({stop})=>{
                    return (
                        <div
                        onClick={async()=>{
                            setTitle(stop.name)
                        }} 
                        className="select__option">
                        {stop.name}
                    </div>
                    )
                })
            }
            
            break
    }

    return(
        <div onClick={()=> setActive(!active)} className={`select__item ${active ? 'selectActive' : 'selectNotActive'}`}>
            <span className={`select__title ${title ? 'titleActive' : null}`}>{title ? title : placeholder}</span>
            <div className={`select__arrow ${active ? 'arrowActive' : 'arrowNotActive'}`}>
                <img src={arrowImage}/>
            </div>
            <div className={`select__options ${active ? "active" : "noActive"}`}>
                {contentSelect ? contentSelect : null}
            </div>
        </div>
        
    )
}