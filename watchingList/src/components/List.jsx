import ListItem from "./ListItem";

const items=[
    { day: "27", month: "June", year:"2025", title: "Squid game", desc: "Squid game season 3", cate: "Thriler"},
    { day: "10", month: "July", year:"2025", title: "Dr Stone", desc: "the rest of Dr.stone season 4", cate: "Anime, Adventure"},
    { day: "19", month: "July", year:"2025", title: "Kaiju 8", desc: "Kaiju 8 season 2", cate: "Anime, Shonen"},
    { day: "14", month: "July", year:"2025", title: "Dan da dan", desc: "Dan da dan season 2", cate: "Anime, Shonen"},
    { day: "01", month: "Oct", year:"2025", title: "My hero academia", desc: "Boku no Hero Academia season 8", cate: "Anime, Shonen" },
    { day: "01", month: "Sept", year:"2025", title: "Alice in borderland", desc: "Alice in borderland season 3", cate: "Thriler"},
    { day: "11", month: "July", year:"2025", title: "Dexter", desc: "this season is named Resurrection", cate: "Drama, Crime" },
    { day: "__", month: "__", year:"__", title: "House of David", desc: "series about the life of prophet David", cate:"Historical drama"},
    { day: "__", month: "__", year:"__", title: "Silo", desc: "Set in a dystopian future where a community exists in a giant underground silo comprising 144 levels", cate:"Drama" },
    { day: "__", month: "__", year:"__", title: "Dark matter", desc: "A physicist in Chicago is warped into an alternate version of his life, leaving him to fight to return to his life to prevent the alternate version of himself from taking over his family.", cate:"Thriller"},
    { day: "__", month: "__", year:"__", title: "Dexter", desc: "this season is named Original sin", cate:"Drama, Crime" },
]

const getMonthIndex=(month)=>{
    const months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
    ];

    const lowerCaseMonthName = month.toLowerCase();
    let index = months.indexOf(lowerCaseMonthName)+1;
    return index>=10? index : "0"+index;
}

const remainDays = (date)=>{
    const today = new Date()
    const givenDate = new Date(date)

    const differenceInTime = givenDate.getTime()-today.getTime()
    const differenceInDays = Math.ceil(differenceInTime/(1000*60*60*24))
    return differenceInDays
}

const List = () => {
    return (
        <div className="container">{
            items.map((item, index)=>(
                <ListItem
                    key={index}
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
