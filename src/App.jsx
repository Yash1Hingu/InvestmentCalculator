import { useState } from 'react';
import UserInput from "./components/UserInput";

function App() {

  const [userInputs, setUserInputs] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleruserInput(inputIdentifier, newValue) {
    setUserInputs(prevUserInputs => {
      return {
        ...prevUserInputs,
        [inputIdentifier]: newValue
      }
    })
  }

  return (
    <UserInput
      onChange={handleruserInput}
      userInputs={userInputs}
    />
  )
}

export default App
