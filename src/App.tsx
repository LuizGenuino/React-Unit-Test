import { useState } from "react"
import List from "./components/List"

function App() {

    const [message, setMessage] = useState("Let's learn more about testing in react")

    return (
        <>
            <h1>Hello World</h1>
            <p>{message}</p>

            <button onClick={() => setMessage("New message!")} >Change message</button>

            <List initialItems={['Luiz', 'Gustavo', 'Lucas']} />
        </>
    )
}

export default App
