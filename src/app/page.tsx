import React from "react";
import Offer from "./components/offer";
import Card from "./components/card";
import Contact from "./contact/page";
import Hero from "./homepage/page";
import Reservation from "./components/reservation";
import Menuitem from "./components/menuitem";


export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen text-white">
      <Hero/>
      <Offer/>
      <Card/>
      <Menuitem/>
      <Contact/>
      <Reservation/>
      
    </div>
  );
}
