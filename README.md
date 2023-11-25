# Learning
1. Component Folder
2. Start form top to bottom (easy --> hard)
3. Added UseState with 2-way-binding
4. Rule : if we need state data in two components then lift state up in parent component.
5. map method
	resultdata.map((result) => {
		return <tr></tr>
	})
6. unique key must be in map
	<tr key={result.key}>
7. Outputing Content Conditionaly
	{!isValid && <p>Show Error</p>}
	isValid = False => show Error
	{isValid && <p>Show Error</p>}