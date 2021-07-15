import React, { useContext } from "react";
import { SuggestionContext } from "../../context/SuggestionContext";
import { chipsetData } from "../../data/chipset.data";
import { roadmapData } from "../../data/roadmap.data";
import Chips from "../Chips";
import "./drawer.scss";

const Drawer = () => {
  const [state, dispatch] = useContext(SuggestionContext);
  const handleTagClick = (tag) => {
    console.log(tag, "tag");
    dispatch({ type: tag.toUpperCase() });
  };

  return (
    <div className="drawer__main">
      <div className="top__board">
        <h4 className="title">Frontend Mentor</h4>
        <small className="role">Feedback Board</small>
      </div>
      <div className="tags">
        {state.chipset.map((chipset) => (
          <Chips
            text={chipset.name}
            active={chipset.active}
            key={chipset.name}
            handleClick={handleTagClick}
          />
        ))}
      </div>
      <div className="roadmap">
        <header>
          <h4>Roadmap</h4>
          <a href="/#roadmap">View</a>
        </header>

        <ul className="roadmap__list">
          {roadmapData.map((roadmap) => (
            <li className="list__item" key={roadmap.text}>
              <div className="roadmap__info">
                <span className={`indicator ${roadmap.text}`} />
                <p>{roadmap.text}</p>
              </div>
              <p className="count">{roadmap.count}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
