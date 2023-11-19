import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import EditEmployee from "./components/EditEmployee/EditEmployee";
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/employee/edit/:id" element={<EditEmployee />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
