import { createContext, useState } from "react";

const PersonsContext = createContext(null);

const PersonsProvider = ({ children }) => {
    const [persons, setPersons] = useState(
        [
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
    );

    const deletePerson = (personId) => {
        setPersons(prevPersons => prevPersons.filter(person => person.id !== personId));
    }

    return (
        <PersonsContext.Provider value={{ persons, deletePerson }}>
            {children}
        </PersonsContext.Provider>
    );
}


export { PersonsContext, PersonsProvider };