import PropTypes from 'prop-types';

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
                <span className="btn-shape">&#11205;</span>
            </button>
            <button className="btn" onClick={onRemove} aria-label="remove item"> 
                <span className="btn-shape">&#10005;</span>
            </button>
            <button className="btn" onClick={onMoveDown} aria-label="move item down">
                <span className="btn-shape">&#11206;</span>
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