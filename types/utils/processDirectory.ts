// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { ComponentType } from "react";

export type Process = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component: any; // ReactNode | ComponentType;
};

export type Processes = {
    [id: string]: Process;
}