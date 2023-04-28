import React, { useEffect } from 'react';
import { useState } from 'react';
import { YMaps, Map, Placemark, TrafficControl, Polyline } from '@pbe/react-yandex-maps';
import stopImage from '../img/stop.png';
import Info from './info';
import SelcetBus from './SelectBus';
import { dataTrasses } from '../data';
import kakashka from '../img/images.jpg'

export default function MapComponent({ coords }) {

   const [visibleInfo, setVisibleInfo] = useState(false);
   const [heightMap, setHeightMap] = useState(100);
   const [activeMarsh, setActiveMarsh] = useState(null);
   const [trasses, setTrasses] = useState(null);
   const [stop, setStop] = useState(null);

   const defaultState = {
      center: [coords.lat, coords.lon],
      zoom: 12,
   };

   useEffect(() => {
      if (activeMarsh !== null) {
         const st = dataTrasses.find(item => item.marsh == activeMarsh)
         setTrasses(st.trasses.map(item => [item.lat, item.lng]))
         setStop(st.trasses.filter(item => item.id !== undefined))
      }

   }, [activeMarsh])

   const contentOst = stop && stop.map(({ id, lat, lng, n }) => {
      return (
         <Placemark key={id} geometry={[lat, lng]}
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
         <SelcetBus setActiveMarsh={(item) => {
            setActiveMarsh(item)
            setTrasses(null)
            setStop(null)
         }} />
         <YMaps>
            <Map defaultState={defaultState} width={'100vw'} height={`${heightMap}vh`}>
               {contentOst && contentOst}
               {trasses && <Polyline
                  geometry={trasses}
                  options={{
                     balloonCloseButton: false,
                     strokeColor: "#000",
                     strokeWidth: 4,
                  }} />}
               <TrafficControl options={{ float: "right" }} />
               <Placemark geometry={['54.9437957', '82.9634881']}
                  options={{
                     iconLayout: 'default#image',
                     iconImageHref: kakashka,
                     iconImageSize: [20, 20],
                     iconImageOffset: [-10, -5]
                  }} />
            </Map>
         </YMaps>
         <Info visibleInfo={visibleInfo} />
      </div>
   );
}