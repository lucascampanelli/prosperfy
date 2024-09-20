import { IToast, IToastsProviderProps } from "@typesrc/context/Toasts";
import { ToastsContext } from "./Toasts";
import Toast from "@components/shared/Toast";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ToastsProvider({
    children
}: IToastsProviderProps) {

    const [toasts, setToasts] = useState<IToast[]>([]);

    function addToast(toast: Omit<IToast, "id">) {
        const id = Math.random().toString(36).substring(2, 9);

        const newToast: IToast = {
            id,
            message: toast.message,
            type: toast.type || "info",
            autoDismiss: toast.autoDismiss || true,
            dismissTime: toast.dismissTime || 5000,
            dismissable: toast.dismissable || false,
            onDismiss: toast.onDismiss
        };

        newToast.onDismiss = () => {
            toast.onDismiss?.(id);
            removeToast(id);
        };

        setToasts(previous => [...previous, newToast]);

        if (newToast.autoDismiss) {
            setTimeout(() => {
                newToast.onDismiss?.();
            }, newToast.dismissTime);
        }
    }

    function removeToast(id: string) {
        setToasts(previous => previous.filter(toast => toast.id !== id));
    }

    return (
        <ToastsContext.Provider
            value={{
                addToast
            }}
        >
            <div
                className="fixed top-0 right-0 bottom-0 left-0 pointer-events-none overflow-hidden"
                style={{
                    zIndex: 2000
                }}
            >
                <motion.div
                    className="flex flex-col items-center gap-2 p-4 w-full h-fit"
                    layoutRoot
                >
                    <AnimatePresence>
                        {toasts.map(toast =>
                            <Toast key={toast.id} toast={toast} />
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
            {children}
        </ToastsContext.Provider>
    )
}