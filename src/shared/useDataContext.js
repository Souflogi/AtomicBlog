import { useContext } from "react";
import { DataContext } from "./DataContext";

const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};

export default useDataContext;
