import React from "react";
import "./CardList.css";
import CardItem from "./components/card_item/CardItem";

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { "id": 1, "first_name": "Murad", "last_name": "Gazymagomedov", "salary": 5000, "salary_type": "usd", "img": "https://avatars.githubusercontent.com/u/118082910?v=4" },
                { "id": 2, "first_name": "Jane", "last_name": "Smith", "salary": 7000, "salary_type": "eur", "img": "https://randomuser.me/api/portraits/women/90.jpg" },
                { "id": 3, "first_name": "Michael", "last_name": "Johnson", "salary": 150000, "salary_type": "rub", "img": "https://randomuser.me/api/portraits/men/9.jpg" },
                { "id": 4, "first_name": "Emily", "last_name": "Brown", "salary": 8000, "salary_type": "gbp", "img": "https://randomuser.me/api/portraits/women/48.jpg" },
                { "id": 5, "first_name": "David", "last_name": "Williams", "salary": 6000, "salary_type": "usd", "img": "https://randomuser.me/api/portraits/men/83.jpg" },
                { "id": 6, "first_name": "Sarah", "last_name": "Jones", "salary": 5500, "salary_type": "eur", "img": "https://randomuser.me/api/portraits/women/66.jpg" },
                { "id": 7, "first_name": "Christopher", "last_name": "Martinez", "salary": 225000, "salary_type": "rub", "img": "https://randomuser.me/api/portraits/men/94.jpg" },
                { "id": 8, "first_name": "Amanda", "last_name": "Garcia", "salary": 7200, "salary_type": "gbp", "img": "https://randomuser.me/api/portraits/women/80.jpg" },
                { "id": 9, "first_name": "Daniel", "last_name": "Taylor", "salary": 5300, "salary_type": "usd", "img": "https://randomuser.me/api/portraits/men/64.jpg" },
                { "id": 10, "first_name": "Megan", "last_name": "Clark", "salary": 6700, "salary_type": "eur", "img": "https://randomuser.me/api/portraits/women/10.jpg" }
            ]
        };
    }

    targetPersonDelete = (personId) => {
        this.setState((prevState) => ({
            ...prevState,
            persons: prevState.persons.filter((person) => person.id !== personId)
        }));
    }

    render() {
        return (
            <section className="section__common">
                <h1 className="section__common-title">Persons</h1>
                <h2 className="section__empty-data">There is no data</h2>
                <div className="cards">
                    <ul className="card__list">
                        {this.state.persons.length > 0 ? (
                            this.state.persons.map((person, index) => (
                                <CardItem personData={person} onPersonDelete={this.targetPersonDelete} key={index} />
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