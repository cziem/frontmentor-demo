import React from "react";
import Card from "../components/Card";
import { suggestionsData } from "../data/suggestions.data";
import "./frontMentor.scss";

const FrontMentor = () => {
  return (
    <div className="frontMentor__main">
      <header>
        <div className="suggestion">
          <p>
            <b>6 Suggestions</b>
          </p>
        </div>

        <div className="sortBy">
          <span>Sort by:</span>
          <b>Most Upvotes</b>
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
