import React from 'react';
import { useState } from 'react';
import { YMaps, Map,Placemark, TrafficControl, Polyline} from '@pbe/react-yandex-maps';
import stopImage from '../img/stop.png';
import Info from './info';
import SelcetBus from './SelectBus';
import { trasses, trasses95 } from '../data'; 

export default function MapComponent({coords}) {

    const [visibleInfo, setVisibleInfo] = useState(false);
    const [heightMap, setHeightMap] = useState(100);
    
  const defaultState = {
    center: [coords.lat, coords.lon],
    zoom: 12, 
  };

  const trassesCoordArr = trasses95.filter(item => item.id == undefined).map(item => [item.lat, item.lng]) 

  const ostCoordArr = trasses95.filter(item => item.id !== undefined)

  const contentOst = ostCoordArr.map(({id, lat, lng, n}) => {
    return (
      <Placemark key={id} geometry={[lat, lng]}  
        options={{
            iconLayout: 'default#image',
            iconImageHref: stopImage,
            iconImageSize: [16, 16],
            iconImageOffset: [-10, -5]
        }}  />
    )
  })

  return (
    <div>
      <SelcetBus/>
        <YMaps> 
      <Map defaultState={defaultState} width={'100vw'} height={`${heightMap}vh`}>
        {contentOst}
        <Polyline
          geometry={trassesCoordArr}
          options={{
            balloonCloseButton: false,
            strokeColor: "#000",
            strokeWidth: 4,
        }}/>
        <TrafficControl options={{ float: "right" }} />
      </Map>
    </YMaps>
    <Info visibleInfo={visibleInfo}/>
    </div>
  );
}