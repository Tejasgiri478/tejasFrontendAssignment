import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UsersTable from "./UsersTable";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsersTable />
  </StrictMode>
);
