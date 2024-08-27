import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./routes/root.tsx";
import { AllFlags } from "./routes/all-flags.tsx";
import { observable } from "@legendapp/state";
import { configureObservableSync, syncObservable } from "@legendapp/state/sync";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { Layout } from "./routes/layout.tsx";

configureObservableSync({
  persist: {
    plugin: ObservablePersistLocalStorage,
  },
});

export const language$ = observable<"english" | "german">("english");

syncObservable(language$, {
  persist: {
    name: "language",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Root />} />
          <Route path="/all-flags" element={<AllFlags />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
