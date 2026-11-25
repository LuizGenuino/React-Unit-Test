import React, { useState } from 'react'
import Button from './Button'
import axios from 'axios'

type TasksList = {
    id: number
    title: string
}

const Tasks = () => {

    const [tasks, setTasks] = useState([])

    const handleClick = async () => {
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTasks(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1>Tasks from API</h1>
            {tasks.map((task: TasksList) => <p key={task.id}>{task.title}</p>)}
            <Button disabled={false} onClick={handleClick}>Get Tasks from API</Button>
        </>
    )
}

export default Tasks