export default function ListItem({day, month, year, title, desc, rem}){
    return(
        <div className="item">
            <div className="date">
                <div className="day">{day}</div>
                <div className="month-year">
                    <div className="month">{month}</div>
                    <div className="year">{year}</div>
                </div>
            </div>
            <div className="content">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
                <div className="remaining-time">Remaining time : {rem}</div>
            </div>
            <div className="movement">
            <button className="btn">
                <span className="arrow">&#11205;</span>
            </button>
            <button className="btn">
                <span className="arrow">&#11206;</span>
            </button>
            </div>
        </div>
    )
}

