import { useState } from "react";
import { GreetingTest } from "./components/GreetingPage/Greeting";
import TestPageContainer from "./components/TestPage/TestPageContainer";



function App(props) {
  const [testMode, setTestMode] = useState(true);
  return (
    <>{testMode ? <TestPageContainer /> : <GreetingTest />}</>
  );
}

export default App;
