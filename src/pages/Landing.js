import landingPageImg from "../assets/images/landing_page_img.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components"; //
//one
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        {/* Info */}
        <div className="info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
            Designed to revolutionize the way businesses manage tasks, projects,
            and teams, these innovative tools offer unparalleled organization
            and efficiency. With intuitive interfaces and powerful features, Job
            Tracking Applications empower users to effortlessly assign, monitor,
            and complete tasks, ensuring deadlines are met and objectives
            achieved with precision. Say goodbye to chaotic workflows and hello
            to seamless collaboration. Elevate your productivity game with Job
            Tracking Applications today!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={landingPageImg} alt="Job" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
