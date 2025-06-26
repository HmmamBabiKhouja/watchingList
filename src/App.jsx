import { initialShows } from "./data/shows";
import List from "./components/List"
import Header from "./components/Header"
import { useState } from "react";

const App = ()=>{
    const [items, setItems] = useState(()=>{
        const stored = localStorage.getItem("my-shows");
        return stored ? JSON.parse(stored) : initialShows
    })

    return( 
    <div className="app-container">
        <Header items={items} setItems={setItems}/>
        <List items={items} setItems={setItems}/>
    </div>
    )
};

export default App