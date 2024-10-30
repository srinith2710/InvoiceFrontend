import { useState } from "react";

// form serves the user details, only few were given
function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your id:
        <br></br>
        <input
          type="number"
          name="id"
          value={inputs.id}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Enter date:
        <br></br>
        <input
          type="date"
          name="date"
          value={inputs.date}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Enter your Billing address:
        <br></br>
        <input
          type="text"
          name="billingaddress"
          value={inputs.billingaddress}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Enter your Shipping address:
        <br></br>
        <input
          type="text"
          name="shippingaddress"
          value={inputs.shippingaddress}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Enter GSTIN:
        <br></br>
        <input
          type="text"
          name="gstin"
          value={inputs.gstin}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <input type="submit" />
    </form>
  );
}

export default Form;
