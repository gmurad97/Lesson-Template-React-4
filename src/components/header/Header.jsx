import React from "react";
import "./Header.css";
import { PersonsContext } from "../../context/PersonsContext";

class Header extends React.Component {
    static contextType = PersonsContext;

    render() {
        const { getPersons } = this.context;
        return (
            <header className="header">
                <div className="company">
                    <h1 className="company__title">GMURAD97 LTD.</h1>
                    <p className="company__stats">
                        Number of employees:
                        <span className="company__staff-count">{" " + getPersons().length}</span>
                    </p>
                </div>
            </header>
        );
    }
}

export default Header;