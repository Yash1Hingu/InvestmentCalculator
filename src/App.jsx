import { useState } from 'react';
import UserInput from "./components/UserInput";
import Results from './components/Results';

function App() {

  const [userInputs, setUserInputs] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const isValidInputs = userInputs.duration >= 1;
  function handleruserInput(inputIdentifier, newValue) {
    setUserInputs(prevUserInputs => {
      return {
        ...prevUserInputs,
        [inputIdentifier]: +newValue
      }
    })
  }

  return (
    <>
      <UserInput
        onChange={handleruserInput}
        userInputs={userInputs}
      />
      {!isValidInputs && <p className='center'>Please , Enter Duration More Than 0 Years</p>}
      {isValidInputs && <Results userInputs={userInputs} />}
    </>
  )
}

export default App
