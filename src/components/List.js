import React from "react";
import Panier from "./Panier";

const List = ({ data, setData, isLoading, booked, setBooked }) => {
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="list">
      <div className="menu">
        {data.categories.map((menu, id) => {
          return (
            <div className="menu-items">
              <h2>{menu.name}</h2>
              {menu.meals.map((item, index) => {
                return (
                  // Au click sur un menu on push dans le tableau booked :
                  // Le menu : {item.title}
                  // Le prix : {item.price}
                  // Une quantité de 1
                  <div className="menu-items-items">
                    <div className="MenuItem">
                      <div className="MenuIem-text">
                        <h3>{item.title}</h3>
                        <p className="MenuItem-description">
                          {item.description}
                        </p>
                        <div className="MenuItem-info">
                          <span className="Menu-price">{item.price} €</span>
                          <span className="Menu-popular">{item.popular}</span>
                        </div>
                      </div>
                      <div className="MenuItem-picture">
                        <img src={item.picture} alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* ------ PANIER ------ */}

      <div className="Cart">
        <div className="Cart--card">
          <button className="Cart--validate">Valider mon panier</button>
          <div>
            {/* Au click sur un menu on push une nouvelle div Cart -- items */}
            <div className="Cart--items">
              <div className="Cart--line">
                <div className="Cart--counter">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="Cart--item-name"></span>
                <span className="Cart--amount"></span>
              </div>
            </div>
            {/* Fin de la div à push */}
            <div className="Cart--results">
              <div className="Cart--result-line">
                <span className="Cart--result-name">Sous-total</span>
                <span className="Cart--amount"></span>
              </div>
              <div className="Cart--result-line">
                <span className="Cart--result-name">Frais de livraison</span>
                <span></span>
              </div>
            </div>
            <div className="Cart--total">
              <span className="Cart--result-name">Total</span>
              <span className="Cart--amount"></span>
            </div>
          </div>
        </div>
      </div>
      {/* ------- Fin Code PANIER ------ */}
    </div>
  );
};

export default List;
