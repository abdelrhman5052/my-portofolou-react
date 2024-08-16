import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const [theme, settheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        className=" menu icon-menu flex"
        onClick={() => {
          setShow(true);
        }}
      ></button>

      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="phone"> MyNumber <span className="phone">+201270381307</span></a>
          </li>

        </ul>
      </nav>

      <button
        onClick={() => {
          // send value to ls
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          // get value to ls
          settheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {show && (
        <div className=" fixed">
          <ul className="model">
            <li>
              <button
                className="icon-x-circle"
                onClick={() => {
                  setShow(false);
                }}
              ></button>
            </li>
            <li>
            <a href="phone"> MyNumber <span className="phone">+201270381307</span></a>
          </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
