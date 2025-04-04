import React, { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Component/Login/Login.jsx";
import Header from "./Component/Header/Header.jsx";  // Added .jsx
 import Category from "./Component/CategoreyScreen/Categorey.jsx";  // Added .jsx
 import Footer from "./Component/Footer/Footer.jsx";  // Added .jsx

const categories = {
  service: [
    { name: "New Joinee training", link: "https://www.canva.com/design/DAGiW8sAXTk/i2sc7KPxRbhat5ejKCvReA/view?utm_content=DAGiW8sAXTk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf5f6a98c22" },
    { name: "Team Leader training", link: "https://www.canva.com/design/DAGhncDkUnA/xps4GKgzDnH9xyCZpMYZ7A/view?utm_content=DAGhncDkUnA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5c40fa011b" },
    { name: "Team Member training", link: "https://www.canva.com/design/DAGhs1eg-QI/BzjUfYTeGrgV_ciNg2W1oA/view" },
    { name: "Runner training", link: "https://www.canva.com/design/DAGhtztbXo4/lFYg_6aU04ly5u4RPwmbzQ/view" },
    { name: "Shop 5 training", link: "https://www.canva.com/design/DAGhtytC770/aEFYCn2lo0qXL2Jp8kh83g/view" },
    { name: "Drinks Pickup training", link: "https://www.canva.com/design/DAGhxnPBWf0/5K4qnsPWMt246kMwDDbYOg/view" },
    { name: "Podium training", link: "https://www.canva.com/design/DAGiV14EWAo/ecRiTWzd3Mi7S2IVRGyKjg/view" },
    { name: "Hookah training", link: "https://www.canva.com/design/DAGiWGYLBjI/Kp7HasGbGLkSabiAUmpwsQ/view" }
  ],
  guard: [
    { name: "Guard Morning Works training", link: "https://www.canva.com/design/DAGhm6bYMJo/27tl0I1ih2H2f5frtce9Xw/view" },
    { name: "Guard Evening Works training", link: "https://www.canva.com/design/DAGhnK9Dfus/px8DJYerNO0aakdsAc2vwQ/view?utm_content=DAGhnK9Dfus&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1a06908229" },
  ],
  recipe: [
    { name: "Recipe Indian training", link: "https://www.youtube.com/embed/videoseries?list=PL-T7RhTUNvkK6dtQle3YV-eWOOid7C_bd " },
    { name: "Recipe Chinese training", link: "https://www.youtube.com/embed/videoseries?list=PL-T7RhTUNvkJrLi3g4aJM_EE23aUC9zGE " },
    { name: "Recipe Tandoor training", link: "https://www.youtube.com/embed/videoseries?list=PL-T7RhTUNvkJ8YMufSs81DiND55K6pmEF " },
    { name: "Recipe Conti training", link: "https://www.youtube.com/embed/videoseries?list=PL-T7RhTUNvkJy7IrZMY5tMO3_higxn6UN " }
  ],
  townHall: [
    { name: "Town Hall Meeting 1", link: "https://youtu.be/A54OjF5FaWo" },
    { name: "Town Hall Meeting 2", link: "https://youtu.be/tFHScm_Oy7Q" }
  ]
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  const exitApp = () => {
    setIsLoggedIn(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app">
      <Header />
      <ToastContainer />
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          {!selectedCategory ? (
            <div className="category-selection">
              <h2>Select Training Category</h2>
              <div className="category-buttons">
                <button onClick={() => handleCategorySelect('service')}>Service Training</button>
                <button onClick={() => handleCategorySelect('guard')}>Guard Training</button>
                <button onClick={() => handleCategorySelect('recipe')}>Recipe Training</button>
                <button onClick={() => handleCategorySelect('townHall')}>Town Hall</button>
                <button onClick={exitApp} className="logout-btn">Logout</button>
              </div>
            </div>
          ) : (
            <Category 
              categories={categories[selectedCategory]} 
              onExit={() => setSelectedCategory(null)}
              categoryName={selectedCategory}
            />
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
