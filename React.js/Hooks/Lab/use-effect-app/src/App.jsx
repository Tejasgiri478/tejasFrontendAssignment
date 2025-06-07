import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  // deconstructuring usestate in react
  const [state, setState] = useState([]);
  // This effect will run once when the component mounts
  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log("Data fetched successfully:", response.data);
        setState(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // Cleanup function (optional)
    // This function will be called when the component unmounts
    return () => {
      console.log("Cleanup function called");
    };
  }, []);
  return (
    <>
      <div>
        <strong>The Api Data:</strong> <br />
        {state && state.length > 0 ? (
          state.map((item) => (
            <ol key={item.id} className="ms-5 mt-2">
              <li>{item.title}</li>
            </ol>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
};

export default App;
  