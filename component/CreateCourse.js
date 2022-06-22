import styles from "../styles/Create.module.css";
import { getFirestore } from "firebase/firestore";
import { app } from "../firebase/firebase";
import { Editor } from '@tinymce/tinymce-react';
const database = getFirestore(app);

const CreateCourse = (props) => {
  return (
    <form>
      <div className={styles.section_title}>
        <label className={styles.label}>section title</label>
        <input
          type="text"
          value={props.title}
          placeholder="enter the section title here!"
          className={styles.title__input}
          onChange={(e) => {
            props.setTitle(e.target.value);
          }}
          required
        />
      </div>
      <div className={styles.section_content}>
        <label className={styles.label}>section content</label>
        {/* <textarea
          name="content"
          value={props.content}
          type="text"
          placeholder="write yoyr content here"
          rows="10"
          cols="150"
          onChange={(e) => {
            props.setContent(e.target.value);
          }}
          required
        ></textarea> */}
        <Editor 
          apiKey='j563bp3gzy72jo6ob6qszvekb9h7i41163xxw4rn1klcgy99'
          value={props.content}
          textareaName="content"
          initialValue="write your content here"
          onEditorChange={(newText) => {
            props.setContent(newText);
          }}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />

      </div>

      {/* {props.isUpdate ? (
        <button onClick={props.updateFields}>Update</button>
      ) : (
        <button type="submit">Submit</button>
      )} */}
    </form>
  );
};

export default CreateCourse;
