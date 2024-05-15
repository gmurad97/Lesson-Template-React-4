import React from "react";
import "./CardList.css";
import CardItem from "./components/card_item/CardItem";

class CardList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const persons = [
            { "id": 1, "first_name": "Murad", "last_name": "Gazymagomedov", "description": "description", "img": "img1" },
            { "id": 2, "first_name": "Alice", "last_name": "Smith", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "img": "img2" },
            { "id": 3, "first_name": "John", "last_name": "Johnson", "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "img": "img3" },
            { "id": 4, "first_name": "Emma", "last_name": "Williams", "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "img": "img4" },
            { "id": 5, "first_name": "Michael", "last_name": "Brown", "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "img": "img5" },
            { "id": 6, "first_name": "Sophia", "last_name": "Jones", "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "img": "img6" },
            { "id": 7, "first_name": "Daniel", "last_name": "Miller", "description": "Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "img": "img7" },
            { "id": 8, "first_name": "Olivia", "last_name": "Davis", "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", "img": "img8" },
            { "id": 9, "first_name": "James", "last_name": "Garcia", "description": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.", "img": "img9" },
            { "id": 10, "first_name": "Emily", "last_name": "Rodriguez", "description": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.", "img": "img10" }
        ];

        return (
            <section className="section__card">


                <div className="card">
                    <ul className="card__list">

                        {persons.map((person) => (
                            <CardItem />
                        ))}

                        {/* <CardItem key={index} /> */}
                        {/*                         {persons.map((person, index) => (
                            <h1 key={index}>react</h1>

                        ))} */}

                    </ul>
                </div>




            </section>
        );
    }
}

export default CardList;