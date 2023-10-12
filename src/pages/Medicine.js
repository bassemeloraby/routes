import React, { Fragment } from "react";
// import { Route, Routes } from "react-router-dom";
// import MedicineEdit from "../components/medicine/MedicineEdit";
// import MedicineUpdate from "../components/medicine/MedicineUpdate";
import {  Outlet } from 'react-router-dom';
const Medicine = () => {
  return (
    <Fragment>
      <h2>Medicine</h2>
      
      <Outlet/>
    </Fragment>
  );
};

export default Medicine;
