import { createContext, useContext, useState } from "react";

interface signupDataType {
  name: string;
  email: string;
  password: string;
  accountType: string;
  companyType: string;
  companyName: string;
  teamStrength: string;
  logo: null | File;
}

const signupdata: signupDataType = {
  name: "",
  email: "",
  password: "",
  accountType: "",
  companyType: "",
  companyName: "",
  teamStrength: "",
  logo: null,
};

const signupContext = createContext<{
  signupData: signupDataType;
  setSignupData: (data: Partial<signupDataType>) => void;
}>({
  signupData: signupdata,
  setSignupData: () => {},
});

export const SignupProvider = ({ children }: { children: React.ReactNode }) => {
  const [signupData, setSignupDataState] = useState(signupdata);

  const setSignupData = (data: Partial<signupDataType>) => {
    setSignupDataState((prev) => ({ ...prev, ...data }));
  };
  return (
    <signupContext.Provider value={{ signupData, setSignupData }}>
      {children}
    </signupContext.Provider>
  );
};
export const useSignup = () => {
  const context = useContext(signupContext);

  if (!context) {
    throw new Error("useSignup must be used within a SignupProvider");
  }

  return context;
};
