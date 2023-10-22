import { useState } from "react";
import "./App.css";

function App() {
  const[count,setcount]=useState(0);
  function decreasehandler(){
    setcount(count-1);
  }
  
  function increasehandler(){
    setcount(count+1);
  }
  function resethandler(){
    setcount(0);
  }
  return (
   <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
    <div className="text-[#0398d4] font-medium text-2xl">
      Increment and Decrement
    </div>
    <div className="flex flex-row  bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#34451]" >
      <button onClick={decreasehandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
        -
      </button>
      <div className="font-bold gap-12 text-5xl">
{count}
      </div>

      <button onClick={increasehandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
        +
      </button>
    </div>
    <button onClick={resethandler} className="bg-[#0398d4] px-5 py-2 rounded-sm text-white text-3xl">
      Reset
    </button>

   </div>
  );
}

export default App;
