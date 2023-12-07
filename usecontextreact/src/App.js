import React from "react";
import User from "./componentes/User";

export const UserContext = React.createContext();

function App() {

  const user = {
    nombre: "Gisela",
    edad:41,
    sector: "codo a codo",
    cargo: "docente"
  }

  return (

    <UserContext.Provider value={user}>
       
       <User/>
     
    </UserContext.Provider>
  );
}

export default App;