import { useEffect } from "react"
import TrashIcon from '../media/trash-svgrepo-com.svg?react';

<TrashIcon />


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
                <TrashIcon className="icon"/>
            </button>
        </div>
    )
}

