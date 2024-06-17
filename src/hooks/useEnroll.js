import { useContext } from "react";
import { EnrollContext } from "../contexts/EnrollContext";

const useEnroll = () => {
  return useContext(EnrollContext);
};

export default useEnroll;
