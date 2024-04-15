import { IToastsContext } from "@typesrc/context/Toasts";
import { createContext, useContext } from "react";

export const ToastsContext = createContext<IToastsContext>({
    addToast: () => { }
});

export const useToastsContext = () => useContext(ToastsContext);