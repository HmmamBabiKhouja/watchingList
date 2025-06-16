import ListItem from "./ListItem";

const items=[
    {id:Date.now(), day: "27", month: "Jun", year:"2025", title: "Squid game", desc: "Squid game season 3", cate: "Thriler"},
    {id:Date.now(), day: "10", month: "Jul", year:"2025", title: "Dr Stone", desc: "the rest of Dr.stone season 4", cate: "Anime, Adventure"},
    {id:Date.now(), day: "19", month: "Jul", year:"2025", title: "Kaiju 8", desc: "Kaiju 8 season 2", cate: "Anime, Shonen"},
    {id:Date.now(), day: "14", month: "Jul", year:"2025", title: "Dan da dan", desc: "Dan da dan season 2", cate: "Anime, Shonen"},
    {id:Date.now(), day: "01", month: "Oct", year:"2025", title: "My hero academia", desc: "Boku no Hero Academia season 8", cate: "Anime, Shonen" },
    {id:Date.now(), day: "01", month: "Sep", year:"2025", title: "Alice in borderland", desc: "Alice in borderland season 3", cate: "Thriler"},
    {id:Date.now(), day: "11", month: "Jul", year:"2025", title: "Dexter", desc: "this season is named Resurrection", cate: "Drama, Crime" },
    {id:Date.now(), day: "27", month: "Feb", year:"2025", title: "House of David", desc: "series about the life of prophet David", cate:"Historical drama"},
    {id:Date.now(), day: "15", month: "Nov", year:"2024", title: "Silo", desc: "Silo season 2", cate:"Drama" },
    {id:Date.now(), day: "08", month: "May", year:"2024", title: "Dark matter", desc: "A physicist is warped into an alternate version of his life, leaving him to fight to return to his life.", cate:"Thriller"},
    {id:Date.now(), day: "13", month: "Dec", year:"2024", title: "Dexter", desc: "this season is named Original sin", cate:"Drama, Crime" },
]

const getMonthIndex=(month)=>{
const monthes = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
};

    let index = monthes[month]
    return index>=10? index : "0"+index;
}

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
            items.map((item)=>(
                <ListItem
                    key={item.id}
                    day={item.day}
                    month={item.month}
                    year={item.year}
                    title={item.title}
                    desc={item.desc}
                    rem={remainDays(`${item.year}-${getMonthIndex(item.month)}-${item.day}`)}
                    cate={item.cate}
                ></ListItem>))
        }</div>  
    );
};

export default List;
