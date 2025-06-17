import ListItem from "./ListItem";

const apprevMonth=(month)=>{
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[month];
}

const items = [
    {
        id: Date.now(),
        date: "2025-06-27",
        title: "Squid game",
        desc: "Squid game season 3",
        cate: "Thriler"
    },
    {
        id: Date.now(),
        date: "2025-07-10",
        title: "Dr Stone",
        desc: "the rest of Dr.stone season 4",
        cate: "Anime, Adventure"
    },
    {
        id: Date.now(),
        date: "2025-07-19",
        title: "Kaiju 8",
        desc: "Kaiju 8 season 2",
        cate: "Anime, Shonen"
    },
    {
        id: Date.now(),
        date: "2025-07-14",
        title: "Dan da dan",
        desc: "Dan da dan season 2",
        cate: "Anime, Shonen"
    },
    {
        id: Date.now(),
        date: "2025-10-01",
        title: "My hero academia",
        desc: "Boku no Hero Academia season 8",
        cate: "Anime, Shonen"
    },
    {
        id: Date.now(),
        date: "2025-09-01",
        title: "Alice in borderland",
        desc: "Alice in borderland season 3",
        cate: "Thriler"
    },
    {
        id: Date.now(),
        date: "2025-07-11",
        title: "Dexter",
        desc: "this season is named Resurrection",
        cate: "Drama, Crime"
    },
    {
        id: Date.now(),
        date: "2025-02-27",
        title: "House of David",
        desc: "series about the life of prophet David",
        cate: "Historical drama"
    },
    {
        id: Date.now(),
        date: "2024-11-15",
        title: "Silo",
        desc: "Silo season 2",
        cate: "Drama"
    },
    {
        id: Date.now(),
        date: "2024-05-08",
        title: "Dark matter",
        desc: "A physicist is warped into an alternate version of his life, leaving him to fight to return to his life.",
        cate: "Thriller"
    },
    {
        id: Date.now(),
        date: "2024-12-13",
        title: "Dexter",
        desc: "this season is named Original sin",
        cate: "Drama, Crime"
    }
];

const remainDays = (date)=>{
    const today = new Date()
    const givenDate = new Date(date)

    const differenceInTime = givenDate.getTime()-today.getTime()
    const differenceInDays = Math.ceil(differenceInTime/(1000*60*60*24))

    return differenceInDays<0? "already streamd" : differenceInDays
}

const List = () => {
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
                ></ListItem>)})
        }</div>  
    );
};

export default List;
