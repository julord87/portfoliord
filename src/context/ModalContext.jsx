import { createContext } from 'react';
import { useReducer } from 'react';
import { modalReducer, initialState } from '../reducers/modal-reducer';

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(modalReducer, initialState);

    return (
        <ModalContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)