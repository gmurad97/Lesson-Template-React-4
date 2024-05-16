import React from "react";
import "./Header.css";

class Header extends React.Component {
    render() {
        const { companyName, staffCount } = this.props;

        return (
            <header className="header">
                <div className="company">
                    <h1 className="company__title">{companyName}</h1>
                    <p className="company__stats">
                        Number of employees:
                        <span className="company__staff-count">{" " + staffCount}</span>
                    </p>
                </div>
            </header>
        );
    }
}

export default Header;