import axios from "axios";

const BaseURL = () => {
  return axios.create({
    baseURL: "https://adorable-serenity-production.up.railway.app/",
  });
};

export default BaseURL;
