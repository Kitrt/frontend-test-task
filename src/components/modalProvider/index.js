import React, {useContext, useState} from "react";

let ModalContext = React.createContext(false);

export function useModal() {
    return useContext(ModalContext);
}

export function ModalProvider({ children }) {
    let [dialog, setDialog] = useState(false);

    let openAuthModal = () => setDialog(true);
    let closeAuthModal = () => setDialog(false);

    let value = { dialog, openAuthModal, closeAuthModal };

    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}