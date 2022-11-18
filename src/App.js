import React from "react";
import Header from "./componenets/header";
import Body from "./componenets/body";
import Footer from "./componenets/footer";

function App() {
  return (
    <div className="h-screen bg-blue-100 flex justify-center">
      <div className=" bg-white w-96 p-4 my-2 rounded-lg">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
