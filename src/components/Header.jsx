import DarkMode from "./DarkMode" 
import {NewItem} from "./NewItem" 
import {RemoveAll} from "./RemoveAll" 

const Header = ({items, setItems}) =>{
    return (
        <div className="header-container flex aic">
            <DarkMode/>
            <NewItem items={items} setItems={setItems}/>
            <RemoveAll items={items} setItems={setItems}/>
        </div>
    )
}

export default Header;