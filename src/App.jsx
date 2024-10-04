import React from "react";
import Category from "./Components/Category";
import TopRestaurent from "./Components/TopRestaurent";
import OnlineDelivery from "./Components/OnlineDelivery";
import BestPlaces from "./Components/BestPlaces";
import Cuisines from "./Components/Cuisines";
import ExploreRes from "./Components/ExploreRes";
import AddSection from "./Components/AddSection";

const App = () => {
  return (
    <>
      <Category />
      <TopRestaurent />
      <OnlineDelivery />
      <BestPlaces />
      <Cuisines />
      <ExploreRes />
      <AddSection />
    </>
  );
};

export default App;
