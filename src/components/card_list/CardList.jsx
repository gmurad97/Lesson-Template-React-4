import { useContext } from "react";
import "./CardList.css";
import { PersonsContext } from "../../context/PersonsContext";
import CardItem from "./components/card_item/CardItem";

const CardList = () => {
    const { persons, deletePerson } = useContext(PersonsContext);
    return (
        <section className="section__common">
            <h1 className="section__common-title">Persons</h1>
            <div className="cards">
                <ul className="card__list">
                    {persons.length > 0 ? (
                        persons.map((person, index) => (
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

export default CardList;