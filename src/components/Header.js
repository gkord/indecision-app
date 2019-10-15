import React from "react";

const Header = props => {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </header>
    </div>
  );
};

Header.defaultProps = {
    title: "Indecision"
}

export default Header;
