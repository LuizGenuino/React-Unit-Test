import { useState } from "react"
import List from "./components/List"
import Button from "./components/Button"

function App() {

    const [message, setMessage] = useState("Let's learn more about testing in react")

    return (
        <>
            <h1>Hello World</h1>
            <p>{message}</p>

            <button onClick={() => setMessage("New message!")} >Change message</button>

            <Button disabled={true} onClick={() => console.log('cick')}>Click me</Button>

            <List initialItems={['Luiz', 'Gustavo', 'Lucas']} />
        </>
    )
}

export default App
