import React from "react";
import "./CardItem.css";

class CardItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="card__item">

                <div className="card__item-column">
                    <h1 class="card__item-title">ID</h1>
                    <p class="card__item-text">1</p>
                </div>



                <div class="card__item-column">
                    <h1 class="card__item-title">Изображение</h1>
                    <img class="card__item-image" src="https://o-tendencii.com/uploads/posts/2022-05/1653954004_75-o-tendencii-com-p-skorpion-mortal-kombat-tatu-foto-75.jpg" alt="" />
                </div>

                <div class="card__item-column">
                    <h1 class="card__item-title">Имя Фамилия</h1>
                    <p class="card__item-text">Murad Gazymagomedov</p>
                </div>


                <div class="card__item-column">
                    <h1 class="card__item-title">Зарплата/месяц</h1>
                    <p class="card__item-text">$10000</p>
                </div>


                <div class="card__item-column">
                    <button class="card__item-button" type="button">✖</button>
                </div>
            </li>
        );
    }
}

export default CardItem;