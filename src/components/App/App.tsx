import React from "react";
import { Container } from "@material-ui/core";
import Timer from "../Timer/Timer";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

function App() {
  return (
    <div>
      <>
        <CssBaseline />
        <Container maxWidth="sm">
          <Timer />
        </Container>
      </>
    </div>
  );
}

export default App;
