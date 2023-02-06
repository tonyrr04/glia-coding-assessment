import { useEffect, useState } from "react";
import axios from "axios";
import "./form.scss";

function Form({ updateUserProfile }) {
  const [formData, setformData] = useState({
    name: "",
    accessibility: "",
    price: "",
  });
  const [error, setError] = useState("");

  // updates state for each form field change
  const inputHandler = (e) => {
    switch (e.target.name) {
      case "name": {
        setformData({ ...formData, name: e.target.value });
        break;
      }
      case "accessibility": {
        setformData({ ...formData, accessibility: e.target.value });
        break;
      }
      case "price": {
        setformData({ ...formData, price: e.target.value });
        break;
      }
      default:
        break;
    }
    e.preventDefault();
  };

  // validates the field values and posts the content to the server
  const formSubmitHandler = (e) => {
    // form validation
    if (!formData.name || !formData.accessibility || !formData.price) {
      setError("Fields cannot be empty. Enter appropriate value");
    } else {
      // posting the user profile data to the server
      axios
        .post("http://localhost:4000/user", formData)
        .then((result) => {
          updateUserProfile(formData);
          setformData({
            name: "",
            accessibility: "",
            price: "",
          });
        })
        .catch((err) => {
          setError("Error in creating user profile. Retry later");
        });
    }
    e.preventDefault();
  };

  // reseting the error data
  useEffect(() => {
    setError("");
  }, [formData]);

  return (
    <div className="form-container">
      <h3>Create User Profile</h3>
      <form className="form-wrapper" onSubmit={formSubmitHandler}>
        <div className="field-group">
          <label>
            Name:
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter name"
              onChange={(e) => inputHandler(e)}
            />
          </label>
        </div>
        <div className="field-group row-2">
          <div className="field-item">
            <label>
              Accessibility:
              <br />
              <select
                value={formData.accessibility}
                name="accessibility"
                onChange={(e) => inputHandler(e)}
              >
                <option></option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
          </div>
          <div className="field-item">
            <label>
              Price:
              <br />
              <select
                value={formData.price}
                name="price"
                onChange={(e) => inputHandler(e)}
              >
                <option></option>
                <option value="Free">Free</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
            </label>
          </div>
        </div>
        <input type="submit" />
        {error && <p className="error-msg">{error}</p>}
      </form>
    </div>
  );
}

export default Form;
