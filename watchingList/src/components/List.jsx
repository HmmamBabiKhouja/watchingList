import ListItem from "./ListItem";

const items=[
    { day: "27", month: "June", year:"2025", title: "Squid game", desc: "Squid game season 3" },
    { day: "10", month: "July", year:"2025", title: "Dr Stone", desc: "the rest of Dr.stone season 4" },
    { day: "19", month: "July", year:"2025", title: "Kaiju 8", desc: "Kaiju 8 season 2" },
    { day: "14", month: "July", year:"2025", title: "Dan da dan", desc: "Dan da dan season 2" },
    { day: "1", month: "Oct", year:"2025", title: "My hero academia", desc: "Boku no Hero Academia season 8" },
    { day: "1", month: "Sept", year:"2025", title: "Alice in borderland", desc: "Alice in borderland season 3" },
    { day: "11", month: "July", year:"2025", title: "Dexter", desc: "this season is named Resurrection" },
    { day: "-", month: "-", year:"-", title: "House of David", desc: "series about the life of prophet David" },
    { day: "-", month: "-", year:"-", title: "Silo", desc: "Set in a dystopian future where a community exists in a giant underground silo comprising 144 levels" },
    { day: "-", month: "-", year:"-", title: "Dark matter", desc: "A physicist in Chicago is warped into an alternate version of his life, leaving him to fight to return to his life to prevent the alternate version of himself from taking over his family." },
    { day: "-", month: "-", year:"-", title: "Dexter", desc: "this season is named Original sin" },
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
                ></ListItem>
            ))
        }</div>  
    );
};

export default List;
