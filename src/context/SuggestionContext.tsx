import { createContext } from "react"
import { chipSetData } from "../data/chipset.data"
import { suggestionsData } from "../data/suggestions.data"
import { TAction, TContext, TState } from "../types/type"

export const initialState: TState = {
  suggestions: suggestionsData,
  chipset: chipSetData,
  filter: "ALL",
}

export const SuggestionContext = createContext<TContext>({
  state: initialState,
  dispatch: () => null,
})

export const suggestionReducer = (
  state = initialState,
  { type, payload }: TAction
) => {
  switch (type) {
    case "ALL":
      return {
        ...state,
        chipset: state.chipset.map((chip) =>
          chip.name.toUpperCase() === "ALL"
            ? { ...chip, active: true }
            : { ...chip, active: false }
        ),
        filter: "ALL",
      }

    case "UI":
      return {
        ...state,
        chipset: state.chipset.map((chip) =>
          chip.name.toUpperCase() === "UI"
            ? { ...chip, active: true }
            : { ...chip, active: false }
        ),
        filter: "UI",
      }

    case "UX":
      return {
        ...state,
        chipset: state.chipset.map((chip) =>
          chip.name.toUpperCase() === "UX"
            ? { ...chip, active: true }
            : { ...chip, active: false }
        ),
        filter: "UX",
      }

    case "ENHANCEMENT":
      return {
        ...state,
        chipset: state.chipset.map((chip) =>
          chip.name.toUpperCase() === "ENHANCEMENT"
            ? { ...chip, active: true }
            : { ...chip, active: false }
        ),
        filter: "ENHANCEMENT",
      }

    case "BUG":
      return {
        ...state,
        chipset: state.chipset.map((chip) =>
          chip.name.toUpperCase() === "BUG"
            ? { ...chip, active: true }
            : { ...chip, active: false }
        ),
        filter: "BUG",
      }

    case "FEATURE":
      return {
        ...state,
        chipset: state.chipset.map((chip) =>
          chip.name.toUpperCase() === "FEATURE"
            ? { ...chip, active: true }
            : { ...chip, active: false }
        ),
        filter: "FEATURE",
      }

    default:
      return state
  }
}
