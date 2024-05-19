import React from "react";
import "./App.css";
import Header from "../header/Header";
import CardList from "../card_list/CardList";
import { PersonsProvider } from "../../context/PersonsContext";

class App extends React.Component {
    render() {
        return (
            <PersonsProvider>
                <div className="app">
                    <Header />
                    <CardList />
                </div>
            </PersonsProvider>
        );
    }
}

export default App;