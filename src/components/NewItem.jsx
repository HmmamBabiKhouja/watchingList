import { useEffect, useState } from "react";
import AddNewItem from "../media/add-ellipse-svgrepo-com.svg?react"
import Close from "../media/close-svgrepo-com.svg?react"
import "../index.css"

export const NewItem =({items, setItems})=>{

    const [showForm, setShowForm] = useState((false))
    const [releaseDate, setreleaseDate] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [cate, setCate] = useState("")

    useEffect(()=>{
        localStorage.setItem("my-shows", JSON.stringify(items))
    }, [items])

    const handleAddNew =(e)=>{
        e.preventDefault();
        if(!title.trim()) return 

        const newItem = {
            id: crypto.randomUUID(),
            date: releaseDate,
            title: title.trim(),
            desc: desc.trim(),
            cate: cate
        }

        setItems(prev => [...prev, newItem])
        setTitle("")
        setDesc("")
        setCate("")
        setreleaseDate("")
        setShowForm(false)
    };

    return(
        <div className="new-item">
            <button className="btn btn-header" onClick={()=>setShowForm(prev => !prev)} aria-label="new-item">
                <AddNewItem className="icon"/>
            </button>
            
                {showForm && (
                <div className="newItem flex jcc aic">
                    <div className={`newItem-container ${showForm ?"show" :""} flex fdc jcc aic`}>
                        <button onClick={()=> setShowForm(false)} className="btn btn-cancel">
                            <Close className="icon"/>
                        </button>
                        <form onSubmit={handleAddNew} className="info-form flex fdc">
                            <label htmlFor="title">Title :</label>
                            <input id="title" type="text" placeholder="...." value={title} onChange={e=> setTitle(e.target.value)}required/>
                            <label htmlFor="desc">Description :</label>
                            <textarea id="desc" value={desc} onChange={e=> setDesc(e.target.value)} rows={4} required></textarea>
                            <label htmlFor="cate">Category :</label>
                            <select id="cate" value={cate} onChange={e => setCate(e.target.value)} required>
                                <option value="">--Please choose one--</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Horror">Horror</option>
                                <option value="Anime">Anime</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Drama">Drama</option>
                            </select>
                            <label htmlFor="date">Release Date :</label>
                            <input id="date" type="date" placeholder="...." value={releaseDate} onChange={e => setreleaseDate(e.target.value)} required/>
                            <button type="submit" className="btn btn-submit">
                                <span className="btn-submit-span">Submit</span>
                            </button>
                        </form>
                    </div>
                </div>
                )}
            </div>
    )
}