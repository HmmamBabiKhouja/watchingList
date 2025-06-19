import ListItem from "./ListItem";
import {useState} from 'react';

export default function List(){
    const [items, setItems] = useState([
        {
            id: Date.now().toString()+Math.random(),
            date: "2025-06-27",
            title: "Squid game",
            desc: "Squid game season 3",
            cate: "Thriler"
        },
        {
            id: Date.now().toString()+Math.random(),
            date: "2025-07-10",
            title: "Dr Stone",
            desc: "the rest of Dr.stone season 4",
            cate: "Anime, Adventure"
        },
        {
            id: Date.now().toString()+Math.random(),
            date: "2025-07-19",
            title: "Kaiju 8",
            desc: "Kaiju 8 season 2",
            cate: "Anime, Shonen"
        },
        {
            id: Date.now().toString()+Math.random(),
            date: "2025-07-14",
            title: "Dan da dan",
            desc: "Dan da dan season 2",
            cate: "Anime, Shonen"
        },
        {
            id: Date.now().toString()+Math.random(),
            date: "2025-10-01",
            title: "My hero academia",
            desc: "Boku no Hero Academia season 8",
            cate: "Anime, Shonen"
        },
        {
            id: Date.now().toString()+Math.random(),
            date: "2025-09-01",
            title: "Alice in borderland",
            desc: "Alice in borderland season 3",
            cate: "Thriler"
        }
    ]);

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
                console.log(apprevMonth(month));
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