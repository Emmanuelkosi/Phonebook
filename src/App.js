// import logo from "./logo.svg";
// import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";

// Pages
import PhoneBook from "./pages/PhoneBook";
import AddEntry from "./pages/AddEntry";
import AddPhoneBook from "./pages/AddPhoneBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhoneBook />} />
          <Route path="/add-entry" element={<AddEntry />} />
          <Route path="/add-phone-book" element={<AddPhoneBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
