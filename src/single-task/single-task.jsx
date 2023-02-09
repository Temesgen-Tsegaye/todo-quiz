import { FaAngleUp, FaPenFancy, FaShoppingCart } from "react-icons/fa";

import { useContext, useState } from "react";
import { ThemeContext } from "../App";
export const SingleTask = ({title}) => {
  const [collapse, setCollapse] = useState(true);
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <div className={`single-task ${dark ? "nav-dark" : "nav-light"}`}>
      <div className="single-task-top">
        <input type="checkbox" /> <p>{title}</p>{" "}
        <FaAngleUp
          className={`task-collapse-arrow ${ collapse? 'task-collapse-arrow-up' :'task-collapse-arrow-down'}`}
          onClick={() => {
            setCollapse(!collapse);
          }}
        />
      </div>
      <div className={`${collapse ? "bottom-exit" : "bottom-enter"}`}>DATE</div>
    </div>
  );
};
