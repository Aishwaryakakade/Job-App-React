import { Link } from "react-router-dom";
import notFoundImg from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={notFoundImg} alt="Not Found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you are looging for</p>
        <Link to="/">Back to home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
