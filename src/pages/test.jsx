import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const token = "";
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://adorable-serenity-production.up.railway.app/students/3`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setResponseData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (responseData) {
      console.log("Response Data:", responseData);
    }
  }, [responseData]);

  return (
    <div>
      {error && <div>Error: {error}</div>}
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
