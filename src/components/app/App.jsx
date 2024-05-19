import React from "react";
import "./App.css";
import { PersonsProvider } from "../../context/PersonsContext";
import Header from "../header/Header";
import CardList from "../card_list/CardList";

const App = () => {
    return (
        <PersonsProvider>
            <div className="app">
                <Header />
                <CardList />
            </div>
        </PersonsProvider>
    );
}

export default App;