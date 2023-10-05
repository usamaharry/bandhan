import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

//local
import router from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
