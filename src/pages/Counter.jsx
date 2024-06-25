
import { useState } from 'react';
import Header from '../components/Header';

const Counter = () => {
  
  const [count,setCount] = useState(0);
  const [bg,setBg] = useState(0);

  //Counter Increment function
  const handleCounterInc = ()=>{
    setCount((prevState) => prevState+1);
  };

  //Counter Decrement function
  const handleCounterDcr = () =>{
    setCount((prevState)=>prevState-1)
  };

  //Counter Reset function
  const handleCounterReset = () =>{
    setCount(0);
  }

  return (
    <>
    <Header/>
      <h1>Counter</h1>
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card" style={{backgroundColor: bg}}>
                <div className="card-body">
                  <h1 style={{fontSize:"100px",color:"gray"}}>{count}</h1>
                  <hr />
                  <button className='btn btn-danger' onClick={handleCounterDcr}>-</button>&nbsp;
                
                  <button className='btn btn-success' onClick={handleCounterInc}>+</button>
                  &nbsp;

                  <button className='btn btn-primary' onClick={handleCounterReset}>Reset</button>
                  &nbsp;
                  <hr />
                  <button onClick={()=> setBg("black")}>Dark</button> &nbsp;
                  <button onClick={()=> setBg("")}>Light</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Counter;