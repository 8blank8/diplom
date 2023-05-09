import imageStatistic from '../img/imageStatistic.png'
import logo from '../img/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SelectTransportType } from './selects/SelectTransportType'
import { SelectMarsh } from './selects/SelectMarhs'
import { SelectStartStop } from './selects/SelectStartStop'
import { SelectLastStop } from './selects/SelectLastStop'
import { SelectStartDate } from './selects/SelectStartDate'
import { SelectLastDate } from './selects/SelectLastDate'
import { StatisticButton } from './StatisticButton'


export const Menu = () => {

    const [activeParam, setActiveParam] = useState(false)
    const [pageMap, setPageMap] = useState(true)

    const marsh = useSelector(({marsh})=> marsh)
    const busStop = useSelector(({busStop})=> busStop)

    return(
        <div className='menu'>
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="select">
                <div className='menu__title'>Параметры маршрута</div>
                <SelectTransportType/>
                <SelectMarsh/>
                {busStop.length > 0 ? <SelectStartStop/> : null}
                {busStop.length > 0 ? <SelectLastStop/> : null}
            </div>
            {activeParam && <div className='statistic__param'>
                <div className='statistic__title'>
                    Параметры статистики
                </div>
                <div className="date">
                    <div className="date__item">
                        <span className="date__title">Начальная дата</span>
                        <SelectStartDate/>
                    </div>
                    <div className="date__item">
                        <span className="date__title">Конечная дата</span>
                        <SelectLastDate/>
                    </div>
                </div>
                <div className='statistic__title'>Вид статистики</div>
                <StatisticButton/>
            </div>}
            <div className='menu__statistic'>
              <div className="menu__statistic-wrapper">
                  <div className="menu__image" style={activeParam ? {display: 'none'} : {display: 'block'}}>
                      <img src={imageStatistic}/>
                  </div>
                  <Link style={{textDecoration: 'none'}} to={!marsh ? '/' : '/statistic'}>
                    <div className={`menu__button ${marsh ? 'activeBtn' : 'buttonDisable'}`}
                        onClick={()=> {
                            if(marsh){
                                setActiveParam(!activeParam)
                            }
                        }}>
                        Перейти к статистике
                    </div>
                  </Link>
              </div>
            </div>
        </div>
    )
}