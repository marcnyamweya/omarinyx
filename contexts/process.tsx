// import { useState, type FC, createContext } from "react";
// import type { Process } from "../types/utils/processDirectory";
// import processDirectory from "../utils/processDirectory";




// const ProcessContext = createContext<ProcessContextState>({processes: {}});


// export const ProcessProvider: FC<ProcessProviderProps> = ({ children }) => {
//     const [processes] = useState(processDirectory);

//     return (
//         <ProcessContext.Provider value={{ processes }}>
//             {children}
//         </ProcessContext.Provider>
//     );
// };

// export const ProcessConsumer = ProcessContext.Consumer;

"use client";
import { useState, type FC, createContext } from "react";
import type { Process } from "../types/utils/processDirectory";
import processDirectory from "../utils/processDirectory";

type ProcessContextState = {
    processes: Partial<Process>;
};

type ProcessProviderProps = {
    children: React.ReactNode
};

export const ProcessContext = createContext<ProcessContextState>({ processes: {} });

export const ProcessProvider: FC<ProcessProviderProps> = ({ children }) => {
    const [processes] = useState(processDirectory);

    return (
        <ProcessContext.Provider value={{processes}}>
        {children}
        </ProcessContext.Provider>
    )
};