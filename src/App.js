import { useEffect } from "react";
import MapComponent from "./components/map";
import { useState } from "react";
// import { getMarsh } from "./service/fetchApi";

function App() {
  const [coords, setCoords] = useState(null)
 
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      setCoords({lat: position.coords.latitude, lon: position.coords.longitude})
    })
  }, [])
   return (
    coords && <MapComponent coords={coords}/>
  );
}

export default App;
