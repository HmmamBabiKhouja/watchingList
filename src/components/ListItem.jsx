import PropTypes from 'prop-types';
import MoveUp from "../media/arrow-up-svgrepo-com.svg?react"
import MoveDown from "../media/arrow-down-svgrepo-com.svg?react"
import RemoveItem from "../media/minus-svgrepo-com.svg?react"

export default function ListItem({day, month, year, title, desc, cate, onMoveUp, onRemove, onMoveDown}){
    return(
        <div className="item flex aic">
            <div className="date flex fdc jcc aic">
                <div className="day">{day}</div>
                <div className="month-year">
                    <div className="month">{month}</div>
                    <div className="year">{year}</div>
                </div>
            </div>
            <div className="content flex fdc">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
                <div className="cate">Category :{cate}</div>
            </div>
            <div className="btns-section flex fdc jcc aic">
            <button className="btn" onClick={onMoveUp} aria-label="move item up">
                <MoveUp className="icon"/>
            </button>
            <button className="btn" onClick={onRemove} aria-label="remove item"> 
                <RemoveItem className="icon"/>
            </button>
            <button className="btn" onClick={onMoveDown} aria-label="move item down">
                <MoveDown className="icon"/>
            </button>
            </div>
        </div>
    )
}

ListItem.prototype={
    day:PropTypes.string,
    month:PropTypes.string,
    year:PropTypes.string,
    title:PropTypes.string,
    desc:PropTypes.string,
    rem:PropTypes.string,
    cate:PropTypes.string,
    onMoveUp:PropTypes.func,
    onRemove:PropTypes.func,
    onMoveDown:PropTypes.func,
}