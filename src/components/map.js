import React, { useEffect } from 'react';
import { useState } from 'react';
import { Map, Placemark, TrafficControl, Polyline } from '@pbe/react-yandex-maps';
import { useSelector } from 'react-redux';

import stopImage from '../img/stop.png';

export default function MapComponent({ socket }) {

   const trassesArr = useSelector(({trasses}) => trasses)

   const [widthMap, setWidthMap] = useState(84)
   const [heightMap, setHeightMap] = useState(95.5);
   const [trasses, setTrasses] = useState(null);
   const [stop, setStop] = useState(null);

   const [busIcon, setBusIcon] = useState(null)

   // useEffect(() => {

   //    const busIconListenner = (bus) => {
   //       // setBusIcon(bus)
   //       console.log(bus)
   //    }

   //    socket.on('markers', busIconListenner)

   //    return () => socket.off('markers', busIconListenner)

   // }, [socket]) 

   useEffect(() => {
         if(trassesArr.length !== 0){
            setTrasses(trassesArr.traces.map(({latLng})=> [latLng.lat, latLng.lng]))
            setStop(trassesArr.traces.filter(item => item.stop))
         }

   }, [trassesArr])

   const contentOst = stop && stop.map(({ stop }) => {
      return (
         <Placemark key={stop.id} geometry={[stop.latLng.lat, stop.latLng.lng]}
            options={{
               iconLayout: 'default#image',
               iconImageHref: stopImage,
               iconImageSize: [16, 16],
               iconImageOffset: [-10, -5]
            }} />
      )
   })

   return (
      <div>
            <div className='map' style={{width: `${widthMap}vw`, height: `${heightMap}vh`}}>
               <Map  defaultState={{center: [55.0415, 82.9346], zoom: 9}} width={`${widthMap}vw`} height={`${heightMap}vh`}>
                  {contentOst && contentOst}
                  {trasses && <Polyline
                     geometry={trasses}
                     options={{
                        balloonCloseButton: false,
                        strokeColor: "#000",
                        strokeWidth: 4,
                     }} />}
                  <TrafficControl options={{ float: "right" }} />
               </Map>
            </div>
      </div >
   );
}
