
import "./List.css";

function List({ items = [], category = "Category"}) {

    const listItems = items.map(item =>
                        <li key={item.id}> {item.name}: &nbsp; <b>{item.calories}</b> </li>);

    return (
        <>
            <h3 className="list-category">{category}</h3>

            <ol className="list-items">
                {listItems}
            </ol>
        </>
    )
}

export default List;


// fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL ORDER
// fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL ORDER
// fruits.sort((a,b) => a.calories - b.calories); //NUMERIC ORDER
// fruits.sort((a,b) => b.calories - a.calories); // REVERSE NUMERIC ORDER

// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);