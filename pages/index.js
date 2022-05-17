import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import  {Toolbar}  from "../components/toolbar";
import { useRouter } from "next/router";



export default function Home() {
  return (
   
    <div className="page-container">

      <Toolbar/>
      <div className={styles.main}>
        <h1> Next.js Haberler git</h1>


        <h3>Your one stop shop for the latest new articles</h3>
      </div>
    </div>
  );
}
