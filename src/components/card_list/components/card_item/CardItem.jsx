import "./CardItem.css";

const CardItem = (props) => {
    const { id, first_name, last_name, salary, salary_type, img } = props.personData;
    const { onPersonDelete } = props;

    return (
        <li className="card__item">
            <div className="card__item-group">
                <div className="card__item-column">
                    <h1 className="card__item-title">Id</h1>
                    <p className="card__item-value">{id}</p>
                </div>
                <div className="card__item-column">
                    <div className="card__item-image-block">
                        <img className="card__item-image" src={img} alt={first_name + " " + last_name} />
                    </div>
                </div>
            </div>
            <div className="card__item-column" style={{ width: "256px" }}>
                <h1 className="card__item-title">Name/Surname</h1>
                <p className="card__item-value">{first_name + " " + last_name}</p>
            </div>
            <div className="card__item-column" style={{ width: "150px" }}>
                <h1 className="card__item-title">Salary</h1>
                <p className="card__item-value">{salary + " " + salary_type}</p>
            </div>
            <div className="card__item-column">
                <button onClick={() => onPersonDelete(id)} className="card__item-btn" type="button">✖</button>
            </div>
        </li>
    );
}

export default CardItem;