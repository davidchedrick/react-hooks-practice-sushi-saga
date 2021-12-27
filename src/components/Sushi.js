import React from "react";

function Sushi({ sushi, onEatSushi }) {

  const { img_url, name, price, eaten } = sushi;
  console.log("eaten: ", eaten);

  function handleCLick() {
    if (!eaten) {
      onEatSushi(sushi);
    } else {
      alert("Cant eat an empty plate, bud!");
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleCLick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );

}

export default Sushi;
