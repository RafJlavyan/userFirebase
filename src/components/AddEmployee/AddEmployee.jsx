import { db } from "../../firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import styles from "./AddEmployee.module.css";
import { useNavigate, Link } from "react-router-dom";

const AddEmployee = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    salary: "",
    position: "",
  });

  const position = [
    "Developer",
    "HR Manager",
    "SMM Specialist",
    "Trainer",
    "Manager",
    "CTO",
    "CEO",
  ];

  const employeeList = collection(db, "employees");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(employeeList, user);
    setUser({ name: "", surname: "", salary: "", position: "" });
    navigate('/')
  };

  return (
    <div className={styles.formParent}>
      <h1>Add Employee</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div>
          <label>surname</label>
          <input
            type="text"
            value={user.surname}
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
          />
        </div>
        <div>
          <label>position</label>
          <select
            value={user.position}
            onChange={(e) => setUser({ ...user, position: e.target.value })}
          >
            <option>please select</option>
            {position.map((elm, i) => {
              return <option key={i}>{elm}</option>;
            })}
          </select>
        </div>
        <div>
          <label>salary</label>
          <input
            type="number"
            value={user.salary}
            onChange={(e) => setUser({ ...user, salary: e.target.value })}
          />
        </div>
        <div>
          <button>save</button>
        </div>
          <Link to="/">Back to List</Link>
      </form>
    </div>
  );
};

export default AddEmployee;
