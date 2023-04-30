import { useEffect } from "react";
import MapComponent from "./components/map";
import { useState } from "react";
// import { getMarsh } from "./service/fetchApi";
import { StatisticPage } from './components/statisticPage';
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
   const [coords, setCoords] = useState(null)

   useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
         setCoords({ lat: position.coords.latitude, lon: position.coords.longitude })
      })
   }, [])
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={coords && <MapComponent coords={coords} />} />
            <Route path="/statistic" element={<StatisticPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
