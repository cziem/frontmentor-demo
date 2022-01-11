import React, { useContext } from "react"
import { IoBulb } from "react-icons/io5"
import { MdAdd, MdKeyboardArrowDown } from "react-icons/md"
import Button from "../components/Button"
import Card from "../components/Card"
import NoData from "../components/NoData"
import { SuggestionContext } from "../context/SuggestionContext"
import "./frontMentor.scss"

const FrontMentor = () => {
  const { state } = useContext(SuggestionContext)
  const { suggestions, filter } = state

  const filteredSuggestions = suggestions.filter((suggestions) =>
    filter === "ALL" ? suggestions : suggestions.tag.toUpperCase() === filter
  )

  return (
    <div className="frontMentor__main">
      <header>
        <div className="info__metrics">
          <div className="suggestion">
            <IoBulb />
            <p>
              <b>{filteredSuggestions.length} Suggestions</b>
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
          <Button
            text="Add feedback"
            icon={<MdAdd />}
            handleClick={() => null}
          />
        </div>
      </header>

      <section>
        {!!filteredSuggestions.length ? (
          filteredSuggestions.map((suggestion) => (
            <React.Fragment key={suggestion.title}>
              <Card {...suggestion} />
            </React.Fragment>
          ))
        ) : (
          <NoData message="No results found!" />
        )}
      </section>
    </div>
  )
}

export default FrontMentor
