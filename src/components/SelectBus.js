import { useState } from "react";

function SelcetBus(){
    const [visivleSelectOption, setVisivleSelectOption] = useState(false);

    const arr = ['asdasdf', 'asdasdf', 'asdasdf', 'asdasdf'];

    const renderSelectOption = ()=>{
       return arr.map((item, i)=>{
            return(
                <div 
                    key={i}
                    className="select_option">
                    {item}
                </div>
            );
        })
    }

    const contentSelectOption = renderSelectOption();
    console.log(contentSelectOption)
    return(
        <div className="selectBus_wrapper">
            <div onClick={()=>setVisivleSelectOption(!visivleSelectOption)} className="selectBus">
                Остановка
            </div>
            {visivleSelectOption ? contentSelectOption : null}
        </div>
    );
}

export default SelcetBus;