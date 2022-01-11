import { useReducer } from "react"
import Layout from "./components/Layout"
import {
  initialState,
  SuggestionContext,
  suggestionReducer,
} from "./context/SuggestionContext"
import FrontMentor from "./pages/frontMentor"
import "./styles/main.scss"

function App() {
  const stateAndDispatch = useReducer(suggestionReducer, initialState)
  // const [state, dispatch] = useReducer(suggestionReducer, initialState)

  return (
    <SuggestionContext.Provider value={stateAndDispatch}>
      <Layout>
        <FrontMentor />
      </Layout>
    </SuggestionContext.Provider>
  )
}

export default App
