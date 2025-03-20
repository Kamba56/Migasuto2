import { useEffect, useState, createContext, useContext } from "react";

export interface SignupDataType {
  name: string;
  email: string;
  password: string;
  accountType: string;
  companyType: string;
  companyName: string;
  teamStrength: string;
  logo: null | File;
}

const SIGNUP_STORAGE_KEY = "signupData";

// Load initial state from localStorage if available
const loadSignupData = (): SignupDataType => {
  const storedData = localStorage.getItem(SIGNUP_STORAGE_KEY);
  return storedData
    ? JSON.parse(storedData)
    : {
        name: "",
        email: "",
        password: "",
        accountType: "",
        companyType: "",
        companyName: "",
        teamStrength: "",
        logo: null,
      };
};

// Create the context with proper typing
interface SignupContextType {
  signupData: SignupDataType;
  setSignupData: (data: Partial<SignupDataType>) => void;
  resetSignupData: () => void;
}

const SignupContext = createContext<SignupContextType | undefined>(undefined);

// Provider component
export const SignupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [signupData, setSignupDataState] = useState<SignupDataType>(
    loadSignupData()
  );

  // Save to localStorage whenever signupData changes
  useEffect(() => {
    localStorage.setItem(SIGNUP_STORAGE_KEY, JSON.stringify(signupData));
  }, [signupData]);

  const setSignupData = (data: Partial<SignupDataType>) => {
    setSignupDataState((prevData) => {
      const newData = { ...prevData, ...data };
      return newData;
    });
  };

  const resetSignupData = () => {
    localStorage.removeItem(SIGNUP_STORAGE_KEY);
    setSignupDataState(loadSignupData());
  };

  const value = {
    signupData,
    setSignupData,
    resetSignupData,
  };

  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
};

// Custom hook to use the context
export const useSignup = (): SignupContextType => {
  const context = useContext(SignupContext);

  if (context === undefined) {
    throw new Error("useSignup must be used within a SignupProvider");
  }

  return context;
};
