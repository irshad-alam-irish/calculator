
import styles from "./App.module.css"
import ButtonContainer from "./components/ButtonContainer"
import Display from "./components/Display";
import { useState } from "react";

function App() {
   const [calVal, setCalVal]= useState('1')
  
   const onClickHandel = (buttons)=>{
    if (buttons === "C") {
      setCalVal("");
    } else if (buttons=== "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttons;
      setCalVal(newDisplayValue);
    }
   }

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculator}>

        <Display displayValue={calVal}/>
        <ButtonContainer onClickHandel={onClickHandel} />
      </div>
      </div>
    
  )
}

export default App
