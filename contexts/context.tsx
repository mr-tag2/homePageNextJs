import { createContext, useContext, useState, ReactNode, FC } from "react";

export type _RootContextType = {
  lightMode: boolean | undefined;
  setLightMode: (value: boolean) => void;
};

export const RootContext = createContext<undefined | _RootContextType>(
  undefined
);

export const useTheme = () => useContext(RootContext);

interface PropsProvider {
  children: ReactNode;
}

export const RootContextProvider: FC<PropsProvider> = ({ children }) => {
  const [lightMode, setLightModeState] = useState<boolean | undefined>();

  const setLightMode = (value: boolean) => {
    setLightModeState(value);
  };

  return (
    <RootContext.Provider value={{ lightMode, setLightMode }}>
      <div
        style={{
          backgroundColor: lightMode ? "#F5F5F5" : " #1E272E",
          padding: "5px",
        }}
      >
        {children}
      </div>
    </RootContext.Provider>
  );
};
