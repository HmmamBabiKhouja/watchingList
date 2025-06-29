import ListItem from "./ListItem";
import {useEffect} from 'react';

export default function List({items, setItems}){

    useEffect(() => {
        localStorage.setItem('my-shows', JSON.stringify(items));
    }, [items]);

    const apprevMonth=(month)=>{
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[month];
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

    if(!items.length) return <h2>Add a new item through + button above</h2>
    
    return (
        <div className="container flex fdc aic">{
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
                    cate={item.cate}
                    onMoveUp={()=> moveItem(item.id, -1)}
                    onMoveDown={()=> moveItem(item.id, +1)}
                    onRemove={()=>removeItem(item.id)}
                ></ListItem>)})
        }</div>  
    );
}