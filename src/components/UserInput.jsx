import { useState } from 'react';
export default function UserInput() {
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
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input
                        type="number"
                        value={userInputs.annualInvestment}
                        onChange={(event) => handleruserInput('annualInvestment',event.target.value)}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input
                        type="number"
                        value={userInputs.expectedReturn}
                        onChange={(event) => handleruserInput('expectedReturn',event.target.value)}
                        required
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input
                        type="number"
                        value={userInputs.duration}
                        onChange={(event) => handleruserInput('duration',event.target.value)}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input
                        type="number"
                        value={userInputs.initialInvestment}
                        onChange={(event) => handleruserInput('initialInvestment',event.target.value)}
                        required
                    />
                </p>
            </div>
        </section>
    )
}