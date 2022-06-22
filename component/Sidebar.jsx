
import styles from "../styles/Sidebar.module.css";

function Sidebar(props) {
  return (
    <div className={styles.sidebar__hldr}>
      <h3>Basics Of Java</h3>
      <div className={styles.flex__links}>
        {props.allsectiontitle.map((data) => {
          return (
            <div
              className={styles.classes}
              onClick={() => {
                props.getId(data.id, data.title, data.content);
              }}
            >
              <span className={styles.section__links}>{data.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
