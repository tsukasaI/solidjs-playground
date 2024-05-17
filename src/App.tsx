import type { Component } from "solid-js";
import Comp from "./Comp";
import { SampleI18n } from "./i18n/SampleI18n";

const App: Component = () => {
  return (
    <>
      <h1>Hello world!!!!</h1>
      <Comp />
      <SampleI18n />
    </>
  );
};

export default App;
