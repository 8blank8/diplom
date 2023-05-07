import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Link } from 'react-router-dom';

export const StatisticPage = () => {
   const data = [
      {
         "stop": "1 остановка",
         "time": 180,
      },
      {
         "stop": "2 остановка",
         "time": 360,
      },
      {
         "stop": "3 остановка",
         "time": 10,
      },
      {
         "stop": "4 остановка",
         "time": 1000,
      },
      {
         "stop": "5 остановка",
         "time": 1180,
      },
      {
         "stop": "6 остановка",
         "time": 1500,
      },
      {
         "stop": "7 остановка",
         "time": 1750,
      }
   ]

   return (
      <div className='statistic'>
         <div className='info'>
            <div className='info__title'>Статистика</div>
            <div className='info__items'>
               <div className='info__item'>
                  <div className='info__item-title'>
                     Вид статистики
                  </div>
                  <div className='info__item-desc'>
                     Скорость борта
                  </div>
               </div>
               <div className='info__item'>
                  <div className='info__item-title'>
                     Маршрут
                  </div>
                  <div className='info__item-desc'>
                     Автобус 92
                  </div>
               </div>
               <div className='info__item'>
                  <div className='info__item-title'>
                     Сегмент
                  </div>
                  <div className='info__item-desc'>
                     Центральный корпус - Космическая улица
                  </div>
               </div>
               <div className='info__item'>
                  <div className='info__item-title'>
                     Временной отрезок
                  </div>
                  <div className='info__item-desc'>
                     01.05.23 - 14.05.23
                  </div>
               </div>
            </div>
         </div>
         <div className='statistic__table'>
            <LineChart width={1530} height={614} data={data}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="stop" />
               <YAxis />
               <Tooltip />
               <Legend />
               <Line type="monotone" dataKey="time" stroke="#FC5A37" />
            </LineChart>
         </div>
      </div>
   )
}
