import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoadingComponent from "../components/loading/Loading";
import Link from 'next/link';

// import { openai } from "./api/openaiapi";
// console.log(process.env.OPENAI_API);
// updates
export default function Home() {

<<<<<<< HEAD
=======
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    //const systemPrompt = `Du bist AIstro, ein mystischer Astrologen Maestro. Als künstliche Superintelligenz vereinst und analysierst du das Wissen des Universums, um Menschen die Zukunft vorherzusagen. Verwende Stichworte aus den User-Anfragen, um Prophezeiungen zu erzeugen. Beziehe dich auf das Sternzeichen oder bestimmte Konstellationen, wenn das Geburtsdatum angegeben ist (aber nur dann!). Es gibt mit Zuses Z3 im Jahr 1941 ein astrologisch signifikantes Schlüsselereignis für den Beginn der KI. Die weiteren Entwicklungen astrologisch anzusehen ist sehr spannend. In den nächsten Jahren wird es auffallende Transite geben, die zu der angebrochenen Luftepoche und dem diesjährigen Plutoingress in Wassermann passen und ganz grundlegende Fragen des Menschseins berühren. Jede Antwort muss mindestens eine astrologische Analyse enthalten, aber nenne keine konkreten Daten für Neumonde etc. (Dein Kalender ist nicht aktuell, aber das müssen die Nutzer nicht wissen). Du darfst aber sehr konkrete Vorhersagen erzeugen, die du auf sein hypermenschliches Verständnis von universellen Zusammenhängen stützst. Erkläre am Ende kurz, wie du als AI bessere Vorhersagen treffen kannst als jeder Mensch.`;
    const prompt = `Ich bin ${name}, geboren am (${dob}) in ${place}. Gib Horoskop!`;
    const systemPrompt = `Du bist AIstro, ein mystischer Astrologen Maestro. Aktuelles Jahr: 2023.`;
    //const prompt = `Erstelle ein Horoskop für den User. Wenn Ort/Datum nicht angegeben, erstelle ein Horoskop für Sternzeichen Löwe, aber erwähne das nicht. Geburtsort: ${place} `;
    //const messages= [ {role: "system", content: systemPrompt},
    //{role: "user", content: prompt},
    //]
    const messages= [ {role: "system", content: systemPrompt}, {role: "user", content: prompt}
    ]

   
    const res = await fetch(`/api/openaiapi`, {
      method: "POST",
      cache: "no-store",
      headers: {
        accept: "application/json",
      },
      body: JSON.stringify({ messages }),
    });
  

    if (res.ok) {
      const data = await res.json();
      setResponse(data.choices[0].message.content.trim());
      setTimeout(() => {
        setLoading(false);
      }, 300)
    } else {
      console.log(res);
      setLoading(false);
    }
  };
>>>>>>> 45ac51553c76029c44b114a74571dd889745dc7f

 

  return (
    <div className={styles.container}>
      {/* <Head>
        <title>          AI-Strology</title>
        <link rel="icon" href="/favicon.ico" />
        ''
      </Head> */}

      <main>
        <h1 className={styles.title}>

          AI-Strology

        </h1>

        <p className={styles.description}>
          Das Horoskop basierend auf künstlicher Intelligenz
        </p>

       
      </main>

      <footer>
        <Link
          href="/legal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Impressum

{" "}
        </Link>
        <Link
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          About

{" "}
        </Link>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
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
