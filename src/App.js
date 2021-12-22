import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Search from "./components/Search";
import CardContainer from "./components/CardContainer";

function App() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const queryHandler = (searchedValue) => {
    setQuery(searchedValue);
  };

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://pixabay.com/api/?key=24931415-446b4a79abc3a8ab567c3297c&q=${query}`
      );

      // this will give array of items
      setItems(result.data.hits);
      // setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <Search queryHandler={queryHandler} />
      <CardContainer listData={items} />
    </div>
  );
}

export default App;
