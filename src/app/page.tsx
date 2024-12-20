import styles from "./page.module.css";
import CVImportInput from "./cvImportInput";

export default function Home() {
  return (
    <div style={{display:'flex', width:'60%', margin:'0 auto'}}>
      <main className={styles.main}>
          
          <CVImportInput/>
          <textarea rows={20}>

          </textarea>
      </main>
      <footer>
      </footer>
    </div>
  );
}
