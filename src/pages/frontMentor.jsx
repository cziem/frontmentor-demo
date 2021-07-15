import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoBulb } from "react-icons/io5";
import Card from "../components/Card";
import { suggestionsData } from "../data/suggestions.data";
import "./frontMentor.scss";

const FrontMentor = () => {
  return (
    <div className="frontMentor__main">
      <header>
        <div className="info__metrics">
          <div className="suggestion">
            <IoBulb />
            <p>
              <b>6 Suggestions</b>
            </p>
          </div>

          <div className="sortBy">
            <span>Sort by:</span>
            <b>
              Most Upvotes <MdKeyboardArrowDown />
            </b>
          </div>
        </div>

        <div className="cta">
          <button>add feedback</button>
        </div>
      </header>

      <section>
        {suggestionsData.map((suggestion) => (
          <Card data={suggestion} />
        ))}
      </section>
    </div>
  );
};

export default FrontMentor;
