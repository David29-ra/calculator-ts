import { css, Global } from "@emotion/react";
import { Calculator } from "./components/calculator";

function App() {
  return (
    <>
      <Global styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&display=swap');
        * {
          font-family: 'Space Grotesk', sans-serif;
          margin: 0;
          border: 0;
        }
        body {
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1D4350;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to left, #A43931, #1D4350);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to left, #A43931, #1D4350); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
      `} />
      <Calculator />
    </>
  );
}

export default App;
