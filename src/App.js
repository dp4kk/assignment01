import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import DataContext from "./Context/DataContext";
import ShowProducts from "./Components/ShowProducts";
function App() {
  return (
    <React.Fragment>
      <DataContext>
      <Navbar/>
      <ShowProducts/>
      <Sidebar/>
      </DataContext>
    </React.Fragment>
  );
}

export default App;
