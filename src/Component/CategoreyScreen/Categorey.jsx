import React from "react";
import logo from "../logo/logo.png";
import "../CategoreyScreen/Categorey.css";

const Category = ({ categories, onExit }) => {
  const loadLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const handleLogout = () => {
    onExit();
  };

  return (
    <div className="category-screen">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="38 Barracks Logo" className="logo" />
          <h1 className="header-title">
            <span className="header-number">38</span> Barracks Training
          </h1>
        </div>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <div
            key={category.name}
            className="category-card"
            onClick={() => loadLink(category.link)}
          >
            <div className="category-content">
              {category.name}
            </div>
            <div className="category-bottom-line"></div>
          </div>
        ))}
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        EXIT
      </button>
    </div>
  );
};

export default Category;
