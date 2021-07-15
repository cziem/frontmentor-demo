import { useReducer } from "react";
import Layout from "./components/Layout";
import {
  initialState,
  SuggestionContext,
  suggestionReducer,
} from "./context/SuggestionContext";
import FrontMentor from "./pages/frontMentor";
import "./styles/main.scss";

function App() {
  const [state, dispatch] = useReducer(suggestionReducer, initialState);

  return (
    <SuggestionContext.Provider value={[state, dispatch]}>
      <Layout>
        <FrontMentor />
      </Layout>
    </SuggestionContext.Provider>
  );
}

export default App;
