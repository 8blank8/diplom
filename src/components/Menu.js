import { useState } from 'react'
import imageStatistic from '../img/imageStatistic.png'
import logo from '../img/logo.png'
import { Select } from './Select'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export const Menu = () => {
    const transport = useSelector(({transport})=>transport)
    const marsh = useSelector(({marsh})=> marsh)

    return(
        <div className='menu'>
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="select">
                <div className='menu__title'>Параметры маршрута</div>
                <Select type='type' placeholder='Вид транспорта'/>
                <Select type='marsh' clicable={transport ? true : false}  placeholder='Маршрут'/>
                <Select type='firstStop' clicable={marsh ? true : false} placeholder='Начало сегмента'/>
                <Select type='lastStop' clicable={marsh ? true : false} placeholder='Конец сегмента'/>
            </div>
            {/* <div className='statistic__param'>
                <div className='statistic__title'>
                    Параметры статистики
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
                <Select placeholder='Остановка'/>
                <div className='statistic__title'>Вид статистики</div>
                <div className='statistic__buttons'>
                    <div className='statistic__btn'>
                        Скорость борта
                    </div>
                    <div className='statistic__btn active'>
                        Число людей, оплативших проезд
                    </div>
                    <div className='statistic__btn'>
                        Число людей, ожидавших ТС
                    </div>
                </div>
            </div> */}
            <div className='menu__statistic'>
              <div className="menu__statistic-wrapper">
                  <div className="menu__image">
                      <img src={imageStatistic}/>
                  </div>
                  <Link style={{textDecoration: 'none'}} to={!marsh ? '/' : '/statistic'}><div className={`menu__button ${marsh ? 'activeBtn' : 'buttonDisable'}`}>Перейти к статистике</div></Link>
              </div>
            </div>
        </div>
    )
}