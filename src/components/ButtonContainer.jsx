import React from 'react'
import styles from './ButtonContainer.module.css'
function ButtonContainer({onClickHandel}) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "0",
    "9",
    ".",
    "=",
  ];
  return (
    <div className={styles.buttoncontainer}>
      {buttonNames.map((buttons)=>(
        <button key={buttons} className={styles.button } onClick={()=>onClickHandel(buttons)} >{buttons} </button>
 
      ))}
      
    </div>
  )
}

export default ButtonContainer

