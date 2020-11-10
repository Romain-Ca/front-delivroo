import React from "react";
import Logo from "../images/logo.png";

// Ici on a accès à data et setData
// récupérer les données de la requête axios
const Header = ({ data, setData, isLoading }) => {
  //   console.log(data);
  return (
    <div className="header">
      <div className="top-header">
        <img className="logo" src={Logo} alt="logo deliveroo" />
      </div>
      <div className="bot-header">
        {isLoading ? (
          <span>En cours de chargement...</span>
        ) : (
          <>
            <div className="restaurant-info">
              <h1>{data.restaurant.name}</h1>
              <p className="header-text">{data.restaurant.description}</p>
            </div>
            <img
              className="header-img"
              src={data.restaurant.picture}
              alt={data.restaurant.name}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
