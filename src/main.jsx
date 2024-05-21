import React from "react";
import cors from "cors";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const corsOptions = {
  origin: "https://one-district-one-product-blush.vercel.app/",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <App />
    </Provider>
);
