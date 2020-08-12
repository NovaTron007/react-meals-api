import React, { useState, useEffect } from "react";

function Body(props) {
  const [items, setItems] = useState([]);

  // useEffect: run when component is loaded
  useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      // response success or not, if so get data
      .then(response => response.json())
      .then(data => setItems(data.meals));
    // .then(data => console.log(data)); // if so get data
  }, []); // no dependencies

  const itemsList = items.map(item => {
    return (
      <div className="col-md-4">
        <p>{item.strMeal}</p>
        <img src={item.strMealThumb} />
        <p>{item.idMeal}</p>
      </div>
    );
  });
  return (
    <div className="mt-5">
      <h1>Our Menu</h1>
      <p>An react page using fetch to consume and display menu items</p>
      <p>There are {items.length} menu items:</p>
      <div className="row mt-5">{itemsList}</div>
    </div>
  );
}

export default Body;
