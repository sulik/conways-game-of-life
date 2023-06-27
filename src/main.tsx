import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container with id 'root' to render to");
}

const root = createRoot(container);

root.render(<App />);
