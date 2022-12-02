import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import React from "react";

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, "users/parth"), {
      id: 1,
      name: "Parth Marfatia",
      age: 24,
    });
  };
  return (
    <div>
      <div>Firebase Tutorial</div>
      <button className="bg-red-200 p-3" onClick={putData}>
        Put Data
      </button>
    </div>
  );
}

export default App;
