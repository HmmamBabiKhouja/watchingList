import DarkMode from "./DarkMode" 
import NewItem from "./NewItem" 
import RemoveAll from "./RemoveAll" 

const Header = () =>{
    return (
        <div className="header-container">
            <DarkMode/>
            <NewItem/>
            <RemoveAll/>
        </div>
    )
}

export default Header;