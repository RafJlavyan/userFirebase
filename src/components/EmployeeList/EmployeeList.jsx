import { useState, useEffect } from "react";
import { db } from "../../firebase.config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import styles from "./EmployeeList.module.css";
import { Link, useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const employeesList = collection(db, "employees");
  const navigate = useNavigate();

  const loadEmployees = async () => {
    setIsLoading(true);
    let data = await getDocs(employeesList);
    setEmployees(data.docs.map((elm) => ({ ...elm.data(), id: elm.id })));
    setIsLoading(false);
  };

  const deleteUser = async (id) => {
    setIsLoading(true);
    let item = await doc(db, "employees", id);
    await deleteDoc(item);
    setEmployees(employees.filter((elm) => id !== elm.id));
    setIsLoading(false);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>List of Employees {employees.length}</h1>
      <Link to="/add">Add an employee</Link>
      {loading ? (
        <h1 className={styles.title}>Loading...</h1>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>surname</th>
              <th>position</th>
              <th>salary</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length ? (
              employees.map((elm) => {
                return (
                  <tr key={elm.id}>
                    <td>{elm.id}</td>
                    <td>{elm.name}</td>
                    <td>{elm.surname}</td>
                    <td>{elm.position}</td>
                    <td>{elm.salary} AMD</td>
                    <td>
                      <button
                        className={styles.delBtn}
                        onClick={() => deleteUser(elm.id)}
                      >
                        delete
                      </button>
                      <button
                        className={styles.editBtn}
                        onClick={() => navigate("/employee/edit/" + elm.id)}
                      >
                        edit
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6">
                  <h3>No results to show</h3>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
