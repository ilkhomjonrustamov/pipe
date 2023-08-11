import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export default function ModalContextProvider({ children }) {
  const [info, setInfo] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);
  const [serviceID, setServiceID] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [isDateChanged, setIsDateChanged] = useState(false);
  const [isModal, setIsModal] = useState();
  const [modalCase, setModalCase] = useState("gallery"); // "gallery" | "edit" | "calendar"
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const storageResults = JSON.parse(localStorage.getItem("results"));
    if (storageResults !== null) {
      setResults(storageResults);
    }
  }, []);

  const value = {
    isModal,
    setIsModal,
    modalCase,
    setModalCase,
    date,
    setDate,
    serviceID,
    setServiceID,
    info,
    setInfo,
    isUpdated,
    setIsUpdated,
    isDateChanged,
    setIsDateChanged,
    media,
    setMedia,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
