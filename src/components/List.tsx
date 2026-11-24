import { useState } from "react"

type ListProps = {
    initialItems: string[]
}

function List({initialItems}: ListProps) {

    const [list, setList] = useState([...initialItems])
    const [newItem, setNewItem] = useState('')

    function addToList() {
        setTimeout(() =>{
            setList(state => [...state, newItem])
        }, 500)
    }

    function removeToList(item: string) {
        setTimeout(() =>{
            setList(state => state.filter(value => value !== item))
        }, 500)
    }

    return (
        <>
            <ul>
                {list.map(item => (<li key={item}>
                    {item}
                    <button onClick={() => removeToList(item)}>Remover</button>
                    </li>))}
            </ul>
            <input placeholder="Novo Nome" type="text" value={newItem} onChange={e => setNewItem(e.target.value)} />
            <button onClick={addToList} >Add</button>
        </>
    )
}

export default List
