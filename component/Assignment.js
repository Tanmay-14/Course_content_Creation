import React from 'react'
import styles from '../styles/Assignment.module.css'

const Assignment = (props) => {
  return ( props.trigger)?(
    <div className={styles.popup}>
      <div className={styles.popup_inner}>
        Assignment
        <button className={styles.cls_btn} onClick={()=>props.setTrigger(false)}>X</button>
      </div>
    </div>):"";

}

export default Assignment