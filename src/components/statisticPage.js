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
         "time": 540,
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
         <div className='statistic__header'>
            <Link to={"/"} className='statistic__button'>Назад</Link>
         </div>
         <div className='statistic__table'>
            <div className='statistic__title'>Время затрачиваемое на весь маршрут:</div>
            <LineChart width={1200} height={250} data={data}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="stop" />
               <YAxis />
               <Tooltip />
               <Legend />
               <Line type="monotone" dataKey="time" stroke="#8884d8" />
            </LineChart>
         </div>
         <div className='statistic__table'>
            <div className='statistic__title'>Средняя скорость на один маршрут:</div>
            <LineChart width={1200} height={250} data={data}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="stop" />
               <YAxis />
               <Tooltip />
               <Legend />
               <Line type="monotone" dataKey="time" stroke="#8884d8" />
            </LineChart>
         </div>
      </div>
   )
}
