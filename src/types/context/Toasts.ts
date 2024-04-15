import { ReactNode } from "react";

export type ToastType = "success" | "error" | "warning" | "info";

export interface IToast {
    id: string;
    message: string;
    type: ToastType;
    autoDismiss?: boolean;
    dismissTime?: number;
    dismissable?: boolean;
    onDismiss?: (id?: string) => void;
}

export interface IToastsContext {
    addToast: (toast: Omit<IToast, "id">) => void;
}

export interface IToastsProviderProps {
    children: ReactNode;
}