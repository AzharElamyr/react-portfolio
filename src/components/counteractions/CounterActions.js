import './CounterActions.css'
function CounterActions(props){
    return (
        <div className="row justify-content-center">
            <div className="col-3">
                <button className=" add mx-3" onClick={props.addCount}>+</button>
                <button className=" sub mx-3" onClick={props.subCount}>-</button>
            </div>
        </div>
    );
}



export default CounterActions;