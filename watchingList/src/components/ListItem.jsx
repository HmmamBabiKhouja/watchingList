const ListItem = ()=>{
    return(
        <div className="item">
            <div className="date">
                <div className="day">27</div>
                <div className="month-year">
                    <div className="month">June</div>
                    <div className="year">2025</div>
                </div>
            </div>
            <div className="content">
                <div className="title">Squid game</div>
                <div className="desc">season 3 will be relased on 27 June</div>
                <div className="remaining-time">Remaining time : 17</div>
            </div>
            <div className="movement">
                <div className="move-up">&#x279c;</div>
                <div className="move-down">&#x279c;</div>
            </div>
        </div>
    )
}

export default ListItem;