import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initSupabase } from "@senevent/shared";
import App from "./App.jsx";

// Initialisation de Supabase via la fonction du package partagé
initSupabase(
  "https://dtvrclumqdmgzfmjvyah.supabase.co",
  "sb_publishable_4SA2E333LHpg2G-ArwOKZg_Xhm-0-ip"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);