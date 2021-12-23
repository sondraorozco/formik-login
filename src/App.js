import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form:', values);
      alert("Login Successful");
    },
    validate: values => {
      let errors= {};
      if (!values.email) { 
        errors.email = 'Field required';
      } else if ( !validateEmail(values.email) ) {
        errors.email = 'Username should be an email';
      }
      if (!values.password) errors.password = 'Field required';
      return errors;
    }
  });

  function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  return (
    <div>
      <h1>Hello! Please log in.</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" type="text" name="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}
        <div>Password</div>
        <input id="pswField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}
        <div>
          <button type="submit" id="submitBtn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
