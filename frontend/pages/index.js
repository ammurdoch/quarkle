import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(`/game/${uuidv4()}`);
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Quarkle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Quarkle</h1>
      </header>
      <main>
        <button className="button" onClick={handleClick}>
          Start New Game
        </button>
      </main>

      <footer>{"Powered by the Murdochs"}</footer>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
      `}</style>
      <style jsx>{`
        .game {
          display: flex;
          height: 100%;
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: stretch;
        }

        header {
          padding: 1rem;
          height: 100px;
          flex-grow: 0;
          flex-shrink: 0;
        }

        main {
          flex: 1;
          display: flex;
          margin: auto;
          flex-direction: column;
          justify-content: center;
          align-items: stretch;
          flex-grow: 0;
          flex-shrink: 0;
          height: calc(100vh - 200px);
        }

        footer {
          width: 100%;
          height: 100px;
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
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .button {
          padding: 1rem 2rem;
          background: #25ccad;
          font-size: 1rem;
          border: 0;
        }
        .button:active {
          background: #21b599;
          outline: 0;
        }
        .button:focus {
          outline: 0;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background: rgb(255, 255, 255);
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 0%,
            rgba(37, 204, 173, 1) 100%
          );
          color: #3d3d3d;
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
};

export default Home;
