import { useEffect } from "react"

export const RemoveAll =({items, setItems})=>{

    useEffect(()=>{
        localStorage.setItem("my-shows",JSON.stringify(items))
    },[items])

    const removeAll=()=>{
        setItems([])
    }

    return(
        <div className="remove-all">
            <button className="btn btn-header" aria-label="remove-all" onClick={()=>removeAll()}>
                <span className="btn-shape">&#11198;</span>
            </button>
        </div>
    )
}

