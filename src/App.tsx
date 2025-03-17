import { BrowserRouter } from "react-router";
import { SignupProvider } from "./Components/onboarding/SignupContext";
import Router from "./router";
function App() {
  return (
    <SignupProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </SignupProvider>
  );
}

export default App;
