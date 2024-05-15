import React from "react";
import "./App.css";
import Header from "../header/Header";
import CardList from "../card_list/CardList";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <Header companyName="GMURAD97 LTD." staffCount="64" />
                <CardList />
            </div>
        );
    }
}

export default App;