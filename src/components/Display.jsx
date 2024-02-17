import React from 'react'
import styles from './Display.module.css'

function Display({displayValue}) {
  return (
    <div className="displaycontainer"><input className={styles.display} type="text" name="" id="" readOnly value={displayValue} /></div>
  )
}

export default Display
