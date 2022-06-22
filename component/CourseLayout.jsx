import React from "react";
import Sidebar from "./Sidebar";
import styles from "../styles/CourseLayout.module.css";
import CreateCourse from "./CreateCourse";
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { app } from "../firebase/firebase";
import { useState, useEffect } from "react";
import RightSidebar from "./RightSidebar";
import PreviewCourse from "./PreviewCourse";
import { useRouter } from "next/router";
import Assignment from "./Assignment";
const database = getFirestore(app);

function CourseLayout(props) {
  const [allsectiontitle, setAllSectionTitle] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(" ");
  const [isUpdate, setIsUpdate] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [butPopup, setButPopup] = useState(false);
  const [ID, setID] = useState(null);
  const router = useRouter();
  const collectionRef = collection(database, "/courses");

  const handlePreview = () => {
    setIsPreview(true);
    router.push("/previewCourse");
    onSnapshot(collectionRef, (data) => {
      setAllSectionTitle(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collectionRef, {
      title: title,
      content: content,
    })
      .then(() => {
        alert("data received");
        // setTitle("");
        // setContent("");
        setIsSubmit(true);
        // setIsUpdate(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const updateChanges = (id) => {
    let fieldToEdit = doc(database, "courses", ID);
    updateDoc(fieldToEdit, {
      title: title,
      content: content,
    })
      .then(() => {
        alert("Data Updated");
        setIsUpdate(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAssignment = () => {
    console.log("assignment but was clicked");
    setButPopup(true);
  };

  const newSection = () => {
    setContent("");
    setTitle("");
    setIsSubmit(false)
  };

  const getData = () => {
    onSnapshot(collectionRef, (data) => {
      setAllSectionTitle(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  const getId = (id, title, content) => {
    setID(id);
    console.log(ID);
    setTitle(title);
    setContent(content);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.page__hldr}>
      <div className={styles.course_layout__hldr}>
        <Sidebar allsectiontitle={allsectiontitle} getId={getId} />
        <div className={styles.course__render}>
          <CreateCourse
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
          />
        </div>
        <RightSidebar
          getId={getId}
          isSubmit={isSubmit}
          updateChanges={updateChanges}
          handleSubmit={handleSubmit}
          handlePreview={handlePreview}
          handleAssignment={handleAssignment}
          newSection={newSection}
        />
      </div>
      <Assignment trigger={butPopup} setTrigger={setButPopup}/>
    </div>
  );
}

export default CourseLayout;
