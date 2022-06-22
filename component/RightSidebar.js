import React from "react";
import styles from "../styles/CourseLayout.module.css";

const RightSidebar = (props) => {
  return (
    <div className={styles.buts}>
      {/* <button onClick={props.updateChanges}>Save Changes</button> */}
      <button onClick={props.handleSubmit}>Submit</button>
      {props.isSubmit ? (
        <button onClick={props.handleAssignment}>Assignment</button>
      ) : null}

      
      <button onClick={props.newSection}>Add New Section</button>
      <button onClick={props.handlePreview}>Preview</button>
    </div>
  );
};

export default RightSidebar;
