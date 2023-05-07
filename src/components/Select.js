import { useState } from "react"
import arrowImage from '../img/arrow.png'


export const Select = ({placeholder, setMarsh}) =>{
    const [active, setActive] = useState(false)
    const [title, setTitle] = useState(null)
    console.log(title)
    const arr = ['aksfbajksf', ' ksjdksjnkfs', '239052hkjsdnfjksn']

    const contentSelect = arr.map(item => {
        return(
            <div
            onClick={()=>{
                setMarsh(item)
                setTitle(item)
            }} 
            className="select__option">
                {item}
            </div>
        )
    })

    return(
        <div onClick={()=> setActive(!active)} className={`select__item ${active ? 'selectActive' : 'selectNotActive'}`}>
            <span className={`select__title ${title ? 'titleActive' : null}`}>{title ? title : placeholder}</span>
            <div className={`select__arrow ${active ? 'arrowActive' : 'arrowNotActive'}`}>
                <img src={arrowImage}/>
            </div>
            <div className={`select__options ${active ? "active" : "noActive"}`}>
                {contentSelect}
            </div>
        </div>
        
    )
}