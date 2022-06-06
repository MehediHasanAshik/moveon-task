import { createContext, useEffect, useReducer } from "react";
import { ShoeReducer } from "./Reducers/ShoeReducer";

export const ShoeContext = createContext();

const ShoeContextProvider = (props) => {

    const [shoes, dispatch] = useReducer(ShoeReducer, [])

    // useEffect(() => {
    //     localStorage.setItem('shoes', JSON.stringify(shoes));
    // }, [shoes]);

    return (
        <ShoeContext.Provider value={{
            shoes, dispatch
        }}>
            
            {props.children}
        </ShoeContext.Provider>
    );
};

export default ShoeContextProvider;
