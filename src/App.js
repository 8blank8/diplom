import MapComponent from "./components/map";
import { useEffect, useState } from "react";
import { StatisticPage } from './components/statisticPage';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { YMaps} from '@pbe/react-yandex-maps';
import { Menu } from "./components/Menu";
import { StartScreen } from "./components/StartScreen";
import {io} from 'socket.io-client'

import { useDispatch } from "react-redux";
import { getAllTransport } from "./service/fetchApi";
import { setMarshListAction } from "./redux/actions";  

function App() {
   const dispatch = useDispatch()
   const [socket, setSocket] = useState(null)

   useEffect(()=>{
      localStorage.clear()
   }, [])

   // useEffect(() => {

      // const newSocket = io('ws://37.194.210.121:4721/markers')
      // // newSocket.on( (socket)=> console.log(socket))
      // console.log(newSocket)
      // setSocket(newSocket) 

      // return () => newSocket.close()

   // }, [setSocket])

   useEffect(()=>{
      (async function(){
         const data = await getAllTransport()
         dispatch(setMarshListAction(data))
      })()
   }, [])

   return (
      <>
      {/* <StartScreen/> */}
      <YMaps query={{apikey: '72aa6569-18cb-4ae0-820c-f377e07ef11c'}}>
         <BrowserRouter>
            <div className="main">
               <Menu/>
               <Routes>
                  <Route index element={<MapComponent socket={socket}/>} />
                  <Route path="/statistic" element={<StatisticPage />} />
               </Routes>
            </div>
         </BrowserRouter>
      </YMaps>
      </>
   );
}

export default App;
