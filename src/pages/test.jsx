import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`https://adorable-serenity-production.up.railway.app/login`, {
          input_value: "irfanpl",
          password: "12345678",
        });
        setResponseData(response.data);
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <p>{JSON.stringify(responseData)}</p>
        </div>
      )}
    </div>
  );
};

export default Test;
