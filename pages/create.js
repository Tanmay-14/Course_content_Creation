import styles from '../styles/Create.module.css'
import { collection, addDoc, getFirestore, getDocs, onSnapshot } from 'firebase/firestore';
import { app } from '../firebase/firebase'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
const database = getFirestore(app);

const CreateCourse = () => {
  const [title, setTitle] = useState(" ");
  const [body, setBody] = useState(" ");
  const router = useRouter();
  const collectionRef = collection(database, "/courses");

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(collectionRef, {
          title: title,
          body: body,
        })
        .then(() => {
          alert("data received");
        })
        .catch((err)=>{
          alert(err.message);
        });
        router.push('/course_titles');
    }


  return (
    <div className={styles.container}>
      <form  onSubmit={handleSubmit}>
        <div className={styles.title}>    
            <label>title</label>
            <input type="text" placeholder="Title" 
            onChange={(e)=>{setTitle(e.target.value)}} required />
        </div>
        <div className={styles.body}>
            <label>content</label>
            <textarea  name="content" type="text" placeholder="write yoyr content here" 
            rows="10" cols="150" onChange={(e)=>{setBody(e.target.value)}} required >
            </textarea>
        </div>

            <button type="submit">Submit</button>
            <button >Get Data</button>
        </form>
    </div>
  )
}

export default CreateCourse