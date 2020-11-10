import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

//import components
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

//import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusCircle,
  faMinusCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
library.add(faMinusCircle, faPlusCircle, faStar);
{
  /* <FontAwesomeIcon icon="key" /> */
}

function App() {
  // Changement d'Etat useState
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // les objets doivent être de type :
  // [{name : {menu.name} price: {menu.price} qty: 1}]
  const [booked, setBooked] = useState([]);
  // counter sera utiliser pour le + le - et le compteur
  const [counter, setCounter] = useState(0);

  //Requête Axios
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/");
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  // useEffect permet d'appeler la fonction fetchData 1 seule fois
  // et donc éviter une boucle infini
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <Header data={data} setData={setData} isLoading={isLoading} />
        <List
          data={data}
          setData={setData}
          isLoading={isLoading}
          booked={booked}
          setBooked={setBooked}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
