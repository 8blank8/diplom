import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setPayPeopleOst } from '../statisticGen';
import { useEffect, useState } from 'react';

// const data = [
//    {
//       "stop": "1 остановка",
//       "time": 180,
//    },
//    {
//       "stop": "2 остановка",
//       "time": 360,
//    },
//    {
//       "stop": "3 остановка",
//       "time": 10,
//    },
//    {
//       "stop": "4 остановка",
//       "time": 1000,
//    },
//    {
//       "stop": "5 остановка",
//       "time": 1180,
//    },
//    {
//       "stop": "6 остановка",
//       "time": 1500,
//    },
//    {
//       "stop": "7 остановка",
//       "time": 1750,
//    }
// ]

export const StatisticPage = () => {

   const statisticType = useSelector(({statisticName}) => statisticName)
   const statisticNameBus = useSelector(({transport}) => transport)
   const statisticBus = useSelector(({marsh}) => marsh)
   const statisticStartStop = useSelector(({startStop}) => startStop)
   const statisticLastStop = useSelector(({lastStop}) => lastStop)
   const statisticStartDate = useSelector(({startDate}) => startDate)
   const statisticLastDate = useSelector(({lastDate}) => lastDate)

   const [data, setData] = useState(JSON.parse(localStorage.getItem(`payOst ${statisticBus.name} ${statisticNameBus.type}`)))
   const [indexStart, setIndexStart] = useState(0)
   const [indexStop, setIndexStop] = useState(-1)
   const [nameBus, setNameBus] = useState(statisticBus.name)

   useEffect(()=>{
      if(!JSON.parse(localStorage.getItem(`payOst ${statisticBus.name} ${statisticNameBus.type}`))) {
         setPayPeopleOst(statisticBus.name, statisticNameBus.type)
      }
      const d = JSON.parse(localStorage.getItem(`payOst ${statisticBus.name} ${statisticNameBus.type}`))
      setData(d)
   }, [statisticBus.name])

   useEffect(()=>{

      if(data){

         const copyData = JSON.parse(localStorage.getItem(`payOst ${statisticBus.name} ${statisticNameBus.type}`))

         const newArrDate = []

         for(let i = 0; i < copyData.statisticData.length; i++){

            if(copyData.statisticData[i].time === statisticStartDate){
               setIndexStart(i)

               for(let k = i; k < copyData.statisticData.length; k++){
                  newArrDate.push(copyData.statisticData[k])

                  if(copyData.statisticData[k].time === statisticLastDate){
                     setIndexStop(k)
                     break
                  }
               }
            }
         }

         setData({statisticData: newArrDate}) 
      }

   }, [statisticStartDate, statisticLastDate, statisticBus.name])


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
                     {statisticType && statisticType.title}
                  </div>
               </div>
               <div className='info__item'>
                  <div className='info__item-title'>
                     Маршрут
                  </div>
                  <div className='info__item-desc'>
                     {`${statisticNameBus && statisticNameBus.name} ${statisticBus && statisticBus.name}`}
                  </div>
               </div>
               <div className='info__item'>
                  <div className='info__item-title'>
                     Сегмент
                  </div>
                  <div className='info__item-desc'>
                     {`${statisticStartStop && statisticStartStop} - ${statisticLastStop && statisticLastStop}`}
                  </div>
               </div>
               <div className='info__item'>
                  <div className='info__item-title'>
                     Временной отрезок
                  </div>
                  <div className='info__item-desc'>
                     {`${statisticStartDate && statisticStartDate} - ${statisticLastDate && statisticLastDate}`}
                  </div>
               </div>
            </div>
         </div>
         <div className='statistic__table'>
            {data && <LineChart width={1530} height={614} data={data.statisticData}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="time" />
               <YAxis/>
               <Tooltip />
               <Legend />
               <Line type="monotone" dataKey="people" stroke="#FC5A37" />
            </LineChart>}
         </div>
      </div>
   )
}
