import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [range, setRange] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setAge("");
    setSubmitted(false);
    setRange(""); // Reset this too
  };

  useEffect(() => {
    if (age === "") return; // Don't process if age is empty
    const numericAge = parseInt(age);

    if (numericAge < 0 || numericAge > 120) {
      setRange("Invalid Age");
    } else if (numericAge < 13) {
      setRange("Child");
    } else if (numericAge < 17) {
      setRange("Teenager");
    } else if (numericAge < 60) {
      setRange("Adult");
    } else {
      setRange("Senior");
    }
  }, [age, submitted]);

  const isAdult = age >= 18;
  const isMinor = age < 18 && age !== "";
  const isInvalid = age === "" || age < 0 || age > 120;

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h1 className="text-center mb-4">Maturity Checker</h1>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="text-center">
              <div className="mb-3">
                <label htmlFor="ageInput" className="form-label">
                  Enter your age:
                </label>
                <input
                  type="number"
                  id="ageInput"
                  className="form-control w-75 mx-auto"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Check
              </button>
            </form>
          ) : isInvalid ? (
            <div className="text-center">
              <h2 className="text-warning">Invalid Age</h2>
              <p className="fs-5">Please enter a valid age.</p>
              <p>You entered: {age}</p>
              <p>Age must be between 0 and 120.</p>
              <i className="bi bi-exclamation-circle-fill text-warning fs-1 mt-3"></i>
              <button onClick={handleReset} className="btn btn-secondary  ms-2">
                Reset
              </button>
            </div>
          ) : isAdult ? (
            <div className="text-center">
              <h2 className="text-success">
                Welcome, you are {age} years old!
              </h2>
              <p className="fs-5">You are an {range}.</p>
              <p>Congratulations!</p>
              <p>You are eligible to vote.</p>
              <i className="bi bi-check-circle-fill text-success fs-1 mt-3"></i>
              <button onClick={handleReset} className="btn btn-secondary ms-2">
                Reset
              </button>
            </div>
          ) : isMinor ? (
            <div className="text-center">
              <h2 className="text-danger">Welcome, you are {age} years old!</h2>
              <p className="fs-5">You are an {range}.</p>
              <p>Unfortunately, you are not eligible to vote.</p>
              <p>But you can still enjoy your childhood!</p>
              <p>Keep learning and growing!</p>
              <p>Remember, you are the future!</p>
              <p>Keep dreaming big!</p>
              <i className="bi bi-x-circle-fill text-danger fs-1 mt-3"></i>
              <button onClick={handleReset} className="btn btn-secondary ms-2">
                Reset
              </button>
            </div>
          ) : null}{" "}
          {/* This will never run */}
        </div>
      </div>
    </div>
  );
};

export default App;
