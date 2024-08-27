import { Link } from "react-router-dom";
import { flagLength } from "./all-flags.tsx";

export function Root() {
  return (
    <div className="flex flex-col">
      Select a game you want to play:
      <Link to="/all-flags">All Flags ({flagLength})</Link>
    </div>
  );
}
