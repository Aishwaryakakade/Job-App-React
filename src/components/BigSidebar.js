import Wrapper from "../assets/wrappers/BigSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../feature/userSlice";
import NavLinks from "./NavLinks";
const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? " show-sidebar" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
