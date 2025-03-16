import { BrowserRouter } from "react-router";
import { SignupProvider } from "./Components/onboarding/signupContext";
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
