import React from "react";
import SiteManager from "./containers/SiteManager/SiteManager";
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <SiteManager/>
    </BrowserRouter>
  );
}
 
export default App;
 
