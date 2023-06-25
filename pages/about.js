import Head from "next/head";
import styles from "../styles/Home.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/loading/Footer";
// import { openai } from "./api/openaiapi";
// console.log(process.env.OPENAI_API);
// updates
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <h1 className="my-5">About</h1>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .lds-circle {
          display: inline-block;
          transform: translateZ(1px);
        }
        .lds-circle > div {
          display: inline-block;
          width: 64px;
          height: 64px;
          margin: 8px;
          border-radius: 50%;
          background: #fff;
          animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        @keyframes lds-circle {
          0%,
          100% {
            animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
          }
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(1800deg);
            animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
          }
          100% {
            transform: rotateY(3600deg);
          }
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
