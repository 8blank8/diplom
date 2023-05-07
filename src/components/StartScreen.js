import logo from '../img/logo_.png'
import btn from '../img/button.png'
import bg from '../img/bg.png'



export const StartScreen = () =>{
    return(
        <>
            <div className="frame">
               <img src={logo}/>
               <div> 
                    <div className='offer'>
                        Добро пожаловать в Smart 
                        <span className='offerSpan'>Bus statistic</span>
                    </div>
                    <div className='text'>
                        Сервис для просмотра и анализа статистики движения общественного транспорта
                    </div>
               </div>
               <div className='buttons'>
                    <div className='button'>Перейти к статистике</div>
                    <img src={btn} className='button_arrow'/>  
               </div>
               <img src={bg} className='bg'/>
            </div>
        </>
    )
}