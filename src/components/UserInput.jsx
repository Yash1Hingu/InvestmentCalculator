export default function UserInput({ onChange, userInputs }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input
                        type="number"
                        value={userInputs.initialInvestment}
                        onChange={(event) => onChange('initialInvestment', Number(event.target.value))}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input
                        type="number"
                        value={userInputs.annualInvestment}
                        onChange={(event) => onChange('annualInvestment', event.target.value)}
                        required
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input
                        type="number"
                        value={userInputs.expectedReturn}
                        onChange={(event) => onChange('expectedReturn', event.target.value)}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input
                        type="number"
                        value={userInputs.duration}
                        onChange={(event) => onChange('duration', event.target.value)}
                        required
                    />
                </p>
            </div>
        </section>
    )
}