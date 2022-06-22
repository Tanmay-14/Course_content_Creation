import { collection, addDoc, getFirestore, onSnapshot, doc, getDocs, updateDoc } from 'firebase/firestore';
import { app } from '../firebase/firebase'
import { useState, useEffect } from 'react';
const database = getFirestore(app);

const course_titles = () => {
    const [alltitle, setAllTitle] = useState([]);
    const [title, setTitle] = useState([]);
    const collectionRef = collection(database, "/courses");
    
    const getData = async () =>{
        await getDocs(collectionRef).then((response)=>{
            setAllTitle(response.docs.map((data)=>{
                return {...data.data(),id: data.id}
            }))
        })
    }
    
    const getId = (id,title) => {
        setTitle(title);
        console.log(title)
        let fieldToEdit = doc(database, 'courses', id);
    }

    useEffect(()=>{
        getData();
    }, []);

  return (
    <div>
        {
            alltitle.map((data)=>{
                return (
                    <div onClick={()=>{getId(data.id, data.title)}}>
                        <h3 key={data.id}>{data.title}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default course_titles