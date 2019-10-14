import React from "react";

const Header = props => {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </header>
    </div>
  );
};

export default Header;
