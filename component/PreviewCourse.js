import RightPreviewSidebar from "./RightPreviewSidebar";
import styles from "../styles/CourseLayout.module.css";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
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
const database = getFirestore(app);

const PreviewCourse = (props) => {
  const [content, setContent] = useState(" ");
  const [ID, setID] = useState(null);
  const [title, setTitle] = useState("");
  const [allsectiontitle, setAllSectionTitle] = useState([]);
  const router = useRouter();
  const collectionRef = collection(database, "/courses");
  const BackToEdit = () => {
    router.push("/create_course");
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
    setTitle(title);
    setContent(content);
  };

  useEffect(() => {
    getData();
  }, []);

  const body =  content;

  return (
    <div>
      <div className={styles.page__hldr}>
        <div className={styles.course_layout__hldr}>
          <Sidebar allsectiontitle={allsectiontitle} getId={getId} />
          <div className={styles.course__render}>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
          </div>
          <RightPreviewSidebar BackToEdit={BackToEdit} />
        </div>
      </div>
    </div>
  );
};

export default PreviewCourse;
