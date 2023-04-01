import ButtonBus from "./buttonBus";

function Info({visibleInfo}){
    return(
        <div className={`info ${visibleInfo ? null : 'info_none' }`}>
            <div className="info_wrapper">
            <ButtonBus/>
            <ButtonBus/>
            <ButtonBus/>
            <ButtonBus/>
            </div>
        </div>
    );
}

export default Info;