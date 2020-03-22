import Head from "next/head";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { RelayEnvironmentProvider } from "relay-hooks";
import environment from "../../src/relay/environment";
import Game from "../../src/game";
import { useRouter } from "next/router";

const GamePage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="container">
      <RelayEnvironmentProvider environment={environment}>
        <Head>
          <title>Quarkle</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <DndProvider backend={Backend}>
          {id && <Game gameId={id} />}
        </DndProvider>
        <footer>{"Powered by the Murdochs"}</footer>
      </RelayEnvironmentProvider>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
      `}</style>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: stretch;
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
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default GamePage;
