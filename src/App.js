import React, { useState, useEffect } from "react";
import MainRouteComponent from "./Components/MainRouteComponent";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("userData.json");
      const data = await response.json();
      setCustomers(data);
    } catch (e) {
      console.log(e, "error");
    } finally {
      setLoading(false); // Stop the loading state once data is fetched
    }
  };
  fetchData();
}, []);


  return (<>
    {loading ? <p>Loading...</p> : <MainRouteComponent customers={customers} />}
    </>
  );
};

export default App;
