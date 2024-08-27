import UnitedKingdomFlag from "~/assets/flags/gb.webp";
import GermanyFlag from "~/assets/flags/de.webp";
import { Outlet } from "react-router-dom";
import { language$ } from "../main.tsx";
import { observer } from "@legendapp/state/react";
import clsx from "clsx";

export const Layout = observer(() => {
  return (
    <>
      <div className="flex gap-5">
        Select Language:{" "}
        <button
          className={clsx("flex gap-3", {
            "underline font-bold": language$.get() === "english",
          })}
          onClick={() => language$.set("english")}
        >
          English <img src={UnitedKingdomFlag} className="w-auto h-6" />
        </button>
        <button
          className={clsx("flex gap-3", {
            "underline font-bold": language$.get() === "german",
          })}
          onClick={() => language$.set("german")}
        >
          German <img src={GermanyFlag} className="w-auto h-6" />{" "}
        </button>
      </div>
      <Outlet />
    </>
  );
});
