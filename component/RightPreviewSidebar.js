import React from 'react'
import styles from '../styles/CourseLayout.module.css'
const RightPreviewSidebar = (props) => {
  return (
    <div className={styles.buts}>
        <button onClick={props.BackToEdit}>Back to Editing</button>
    </div>
  )
}

export default RightPreviewSidebar