import { useState } from "react";
import "./App.css";
import Divider from "@material-ui/core/Divider";

import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addInfo = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      console.log("success");
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  // const displayInfo = () => {
  //   console.log({
  //     name,
  //     age,
  //     country,
  //     postion,
  //     wage,
  //   });
  // };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="Number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage (yearly):</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button onClick={addInfo}>Add Employee</button>
      </div>
      <Divider />
      <Divider />
      <Divider />
      <Divider />

      <div className="employee">
        <button onClick={getEmployees}>Show Employees</button>
      </div>
      <Divider />
      <Divider />
      <Divider />
      <Divider />

      <div className="list">
        {employeeList.map((val, key) => {
          return (
            <div className="employee-card">
              <div className="employee-card-text">
                Name: {val.name}
              </div>
              <div className="employee-card-text">Age: {val.age}</div>
              <div className="employee-card-text">
                Country: {val.country}
              </div>
              <div className="employee-card-text">
                Postion: {val.position}
              </div>
              <div className="employee-card-text">
                Wage: {val.wage}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
