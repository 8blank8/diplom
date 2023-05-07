import { useState } from 'react'
import imageStatistic from '../img/imageStatistic.png'
import logo from '../img/logo.png'
import { Select } from './Select'
import { Link } from 'react-router-dom'


export const Menu = () => {
    const [marsh, setMarsh] = useState(null)

    return(
        <div className='menu'>
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="select">
                <Select placeholder='Остановка'/>
                <Select setMarsh={(item)=>setMarsh(item)} placeholder='Маршрут'/>
                <Select placeholder='Сегмент'/>
            </div>
            <div className="date">
                <div className="date__item">
                    <span className="date__title">Начальная дата</span>
                    <Select placeholder='12.02.23'/>
                </div>
                <div className="date__item">
                    <span className="date__title">Конечная дата</span>
                    <Select placeholder='12.02.23'/>
                </div>
              </div>
              <div className='menu__statistic'>
                <div className="menu__statistic-wrapper">
                    <div className="menu__image">
                        <img src={imageStatistic}/>
                    </div>
                    <Link style={{textDecoration: 'none'}} to={!marsh ? '/' : '/statistic'}><div className={`menu__button ${marsh ? null : 'buttonDisable'}`}>Перейти к статистике</div></Link>
                </div>
              </div>
        </div>
    )
}