import { useContext } from "react";
import "./Header.css";
import { PersonsContext } from "../../context/PersonsContext";

const Header = () => {
    const { persons } = useContext(PersonsContext);
    return (
        <header className="header">
            <div className="company">
                <h1 className="company__title">GMURAD97 LTD.</h1>
                <p className="company__stats">
                    Number of employees:
                    <span className="company__staff-count">{" " + persons.length}</span>
                </p>
            </div>
        </header>
    );
}

export default Header;