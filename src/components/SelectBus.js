import { useState } from "react";
import { dataMarsh } from "../data";

function SelcetBus({ setActiveMarsh }) {
   const [visivleSelectOption, setVisivleSelectOption] = useState(false);
   const [title, setTitle] = useState('Остановка')

   const marsh = dataMarsh.map(item => item.marsh);

   const renderSelectOption = () => {
      return marsh.map((item, i) => {
         return (
            <div
               key={i}
               className="select_option"
               onClick={() => {
                  setActiveMarsh(item)
                  setTitle(item)
                  setVisivleSelectOption(!visivleSelectOption)
               }}>
               {item}
            </div>
         );
      })
   }



   const contentSelectOption = renderSelectOption();
   return (
      <div className="selectBus_wrapper">
         <div onClick={() => setVisivleSelectOption(!visivleSelectOption)} className="selectBus">
            {title}
         </div>
         {visivleSelectOption ? contentSelectOption : null}
      </div>
   );
}

export default SelcetBus;