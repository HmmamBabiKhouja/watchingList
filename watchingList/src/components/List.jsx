import ListItem from "./ListItem";
import {useState} from 'react';
import {initialShows} from '../data/shows.js'

export default function List(){
    const [items, setItems] = useState(initialShows);

    console.log(items)
    const apprevMonth=(month)=>{
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[month];
    }

    const remainDays = (date)=>{
        const today = new Date()
        const givenDate = new Date(date)

        const differenceInTime = givenDate.getTime()-today.getTime()
        const differenceInDays = Math.ceil(differenceInTime/(1000*60*60*24))

        return differenceInDays<0? "already streamd" : differenceInDays
    }

    const removeItem=(id)=>{
        setItems(prev => prev.filter(item=> item.id!==id))
    }

    const moveItem=(id, direction)=>{
        const index = items.findIndex(item => item.id === id)
        const newIndex = index+ direction

        if(newIndex<0 || newIndex>=items.length) return

        const updated = [...items]
        const [moved] = updated.splice(index, 1)
        updated.splice(newIndex, 0, moved)
        setItems(updated)
    }

    return (
        <div className="container">{
            items.map((item)=>{
                const date = new Date(item.date);
                const day = date.getDate();
                const month = date.getMonth();
                const year = date.getFullYear();
                return (
                <ListItem
                    key={item.id}
                    day={day}
                    month={apprevMonth(month)}
                    year={year}
                    title={item.title}
                    desc={item.desc}
                    rem={remainDays(item.date)}
                    cate={item.cate}
                    onMoveUp={()=> moveItem(item.id, -1)}
                    onMoveDown={()=> moveItem(item.id, +1)}
                    onRemove={()=>removeItem(item.id)}
                ></ListItem>)})
        }</div>  
    );
}