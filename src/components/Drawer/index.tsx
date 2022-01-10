import React, { useContext } from "react"
import { SuggestionContext } from "../../context/SuggestionContext"
import { roadMapData } from "../../data/roadmap.data"
import { TState } from "../../types/type"
import Chips from "../Chips"
import "./drawer.scss"

const Drawer = () => {
  const { chipset } = useContext(SuggestionContext) as TState

  const handleTagClick = (tag: string) => {
    // dispatch({ type: tag.toUpperCase() })
  }

  return (
    <div className="drawer__main">
      <div className="top__board">
        <h4 className="title">Frontend Mentor</h4>
        <small className="role">Feedback Board</small>
      </div>
      <div className="tags">
        {chipset.map((chipset) => (
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
          {roadMapData.map((roadmap) => (
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
  )
}

export default Drawer
