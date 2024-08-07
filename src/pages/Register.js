import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../feature/userSlice";
import { useNavigate } from "react-router-dom";

const initialStateUserForm = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
const Register = () => {
  const [values, setValues] = useState(initialStateUserForm);
  const { user, isLoding } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Calling this useEffect first when the application loads and alos when user state is changed

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}:${value}`);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3> {values.isMember ? "Login" : "Register"}</h3>
        {/* Name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleFormRowChange={handleChange}
          />
        )}

        {/* Email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleFormRowChange={handleChange}
        />

        {/* Password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleFormRowChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoding}>
          {isLoding ? "Loading..." : "Submit"}
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
