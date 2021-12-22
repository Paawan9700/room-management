import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import { Home } from "./components/Home";
import Allocate from "./components/Allocate";
import Reallocate from "./components/Reallocate"
import { Hostelstats } from "./components/Hostelstats";
import { Roomstats } from "./components/Roomstats";
import { Attendence } from "./components/Attendence";
import { Updatestudent } from "./components/Updatestudent";
import { Studentdata } from "./components/Studentdata";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="conatiner">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/allocate" element={<Allocate />} />
            <Route path="/reallocate" element={<Reallocate />} />
            <Route path="/hostelstats" element={<Hostelstats />} />
            <Route path="/roomstats" element={<Roomstats />} />
            <Route path="/attendence" element={<Attendence />} />
            <Route path="/updatestudent" element={<Updatestudent />} />
            <Route path="/studentdata" element={<Studentdata />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
