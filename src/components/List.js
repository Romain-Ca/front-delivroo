import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Panier from "./Panier";

const List = ({ data, setData, isLoading, booked, setBooked }) => {
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="list">
      <div className="menu">
        {data.categories.map((menu, index) => {
          return (
            <div key={index} className="menu-items">
              <h2>{menu.name}</h2>
              {menu.meals.map((item, index) => {
                return (
                  // Au click sur un menu on push dans le tableau booked
                  <div
                    key={index}
                    className="menu-items-items"
                    onClick={() => {
                      const newBooked = [...booked];
                      if (newBooked.length > 0) {
                        let isPresent = false;
                        for (let i = 0; i < newBooked.length; i++) {
                          if (newBooked[i].id === item.id) {
                            isPresent = true;
                            newBooked[i].qty++;
                          }
                        }
                        if (isPresent === false) {
                          newBooked.push({
                            name: item.title,
                            price: item.price,
                            qty: 1,
                            id: item.id,
                          });
                        }
                      } else {
                        newBooked.push({
                          name: item.title,
                          price: item.price,
                          qty: 1,
                          id: item.id,
                        });
                      }

                      setBooked(newBooked);
                      //   console.log(newBooked);
                    }}
                  >
                    <div className="MenuItem">
                      <div className="MenuIem-text">
                        <h3>{item.title}</h3>
                        <p className="MenuItem-description">
                          {item.description}
                        </p>
                        <div className="MenuItem-info">
                          <span className="Menu-price">{item.price} €</span>
                          <span className="Menu-popular">
                            {item.popular ? (
                              <>
                                <FontAwesomeIcon icon="star" />{" "}
                                <span>Popular</span>
                              </>
                            ) : null}
                          </span>
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
            {/* Au click sur un menu on push une nouvelle div Cart--items */}
            {booked.map((element, index) => {
              return (
                <div key={element.id} className="Cart--items">
                  <div className="Cart--line">
                    <div className="Cart--counter">
                      <span className="increment-logo">
                        <FontAwesomeIcon
                          icon="minus"
                          onClick={() => {
                            const newBooked = [...booked];
                            newBooked[index].qty === 1
                              ? newBooked.splice(index, 1)
                              : newBooked[index].qty--;
                            setBooked(newBooked);
                          }}
                        />
                      </span>
                      <span>{element.qty}</span>
                      <span className="increment-logo">
                        <FontAwesomeIcon
                          icon="plus"
                          onClick={() => {
                            const newBooked = [...booked];
                            newBooked[index].qty++;
                            setBooked(newBooked);
                          }}
                        />
                      </span>
                    </div>
                    <span className="Cart--item-name">{element.name}</span>
                    <span className="Cart--amount">{element.price} €</span>
                  </div>
                </div>
              );
            })}
            {/* Fin de la div à push */}

            {booked.map((element, index) => {
              console.log(Number(element.price), element.qty);

              return (
                <>
                  <div key={index} className="Cart--results">
                    <div className="Cart--result-line">
                      <span className="Cart--result-name">Sous-total</span>
                      {/* Ici on aura le calcul de :
                  element.price * element.qty pour chaque div... */}
                      <span className="Cart--amount">
                        {Number(element.price * element.qty)}
                      </span>
                    </div>
                    <div className="Cart--result-line">
                      <span className="Cart--result-name">
                        Frais de livraison
                      </span>
                      {/* Si Cart--amount existe alors 2,50 € de frais de livraison
                        Attention c 'est une string faire Number */}
                      <span>{element.price ? "2,5" : null}</span>
                    </div>
                  </div>
                  <div className="Cart--total">
                    <span className="Cart--result-name">Total</span>
                    {/* Ici c'est le total de Amount + Frais de Livraison */}
                    <span className="Cart--amount">
                      {Number(element.price * element.qty) + 2.5}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* ------- Fin Code PANIER ------ */}
    </div>
  );
};

export default List;
