import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {

  return (
    <>
      <Header />
      <main>
      <CoreConcepts/>
      <Examples/>
      </main>
    </>
  );
}

export default App;
