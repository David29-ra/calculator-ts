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
      `} />
      <Calculator />
    </>
  );
}

export default App;
