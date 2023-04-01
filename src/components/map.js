import React from 'react';
import { useState } from 'react';
import { YMaps, Map,Placemark, TrafficControl} from '@pbe/react-yandex-maps';
import pin from '../img/pin.png';
import Info from './info';
import SelcetBus from './SelectBus';

export default function MapComponent() {

    const [visibleInfo, setVisibleInfo] = useState(false);
    const [heightMap, setHeightMap] = useState(100);

  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5, 
  };

  const onVisibleInfo=()=>{
    heightMap === 100 ? setHeightMap(80) : setHeightMap(100);
    setVisibleInfo(!visibleInfo);
  }

  return (
    <div>
      <SelcetBus/>
        <YMaps> 
      <Map defaultState={defaultState} width={'100vw'} height={`${heightMap}vh`}>
        <Placemark geometry={[55.76, 37.56]}  
        onClick={onVisibleInfo}
        options={{
            iconLayout: 'default#image',
            iconImageHref: pin,
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
        }}  />
        <TrafficControl options={{ float: "right" }} />
      </Map>
    </YMaps>
    <Info visibleInfo={visibleInfo}/>
    </div>
  );
}