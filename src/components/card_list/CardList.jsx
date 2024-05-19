import React from "react";
import "./CardList.css";
import CardItem from "./components/card_item/CardItem";
import { PersonsContext } from "../../context/PersonsContext";

class CardList extends React.Component {

    static contextType = PersonsContext;

    render() {

        const { getPersons, deletePerson } = this.context;
        const personsObject = getPersons();
        const personsCount = personsObject.length;
        return (
            <section className="section__common">
                <h1 className="section__common-title">Persons</h1>
                <div className="cards">
                    <ul className="card__list">
                        {personsCount > 0 ? (
                            personsObject.map((person, index) => (
                                <CardItem personData={person} onPersonDelete={deletePerson} key={index} />
                            ))
                        ) : (
                            <h2 className="section__empty-data">There is no data</h2>
                        )}
                    </ul>
                </div>
            </section>
        );
    }
}

export default CardList;