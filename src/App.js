import MapComponent from "./components/map";
import { useEffect } from "react";
import { StatisticPage } from './components/statisticPage';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { YMaps} from '@pbe/react-yandex-maps';
import { Menu } from "./components/Menu";
import { StartScreen } from "./components/StartScreen";

import { useDispatch } from "react-redux";
import { getAllTransport } from "./service/fetchApi";
import { setMarshListAction } from "./redux/actions";

function App() {
   const dispatch = useDispatch()

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
                  <Route index element={<MapComponent />} />
                  <Route path="/statistic" element={<StatisticPage />} />
               </Routes>
            </div>
         </BrowserRouter>
      </YMaps>
      </>
   );
}

export default App;
