import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Insurance from "./pages/Insurance";
import Cosmotic from "./pages/Cosmotic";
import Medicine from "./pages/Medicine";
import MedicineSearch from "./components/medicine/MedicineSearch";
import MedicineEdit from "./components/medicine/MedicineEdit";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/cosmotic" element={<Cosmotic />} />
        <Route path="/medicine" element={<Medicine />}>
          <Route path="medicineSearch" element={<MedicineSearch />} />
          <Route path="medicineEdit" element={<MedicineEdit />} />
          <Route
            path="medi"
            element={
              <Fragment>
                <MedicineEdit /> <MedicineSearch />
              </Fragment>
            }
          />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
