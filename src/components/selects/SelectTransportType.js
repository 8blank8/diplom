import { useState } from "react"
import { useDispatch } from "react-redux"
import { setTransportAction } from "../../redux/actions"
import arrowImage from '../../img/arrow.png'


const transportTypes = [
    {name: 'Автобус', type: 'BUS'},
    {name: 'Трамвай', type: 'TRAM'},
    {name: 'Троллейбус', type: 'TROLLEY_BUS'},
    {name: 'Маршрутное такси', type: 'Minibus'}
]

export const SelectTransportType = () =>{

    const dispatch = useDispatch()

    const [active, setActive] = useState(false)
    const [title, setTitle] = useState(null)

    const contentSelect = transportTypes.map(({name, type}) => {
        return (
        <div
            onClick={()=>{
                dispatch(setTransportAction({name, type}))
                setTitle(name)
            }} 
            className="select__option">
            {name}
        </div>
        )
    })


    return(
        <div onClick={()=> setActive(!active)} className={`select__item ${active ? 'selectActive' : 'selectNotActive'}`}>
            <span className={`select__title ${title ? 'titleActive' : null}`}>{title ? title : 'Вид транспорта'}</span>
            <div className={`select__arrow ${active ? 'arrowActive' : 'arrowNotActive'}`}>
                <img src={arrowImage}/>
            </div>
            <div className={`select__options ${active ? "active" : "noActive"}`}>
                {contentSelect ? contentSelect : null}
            </div>
        </div>
        
    )
}