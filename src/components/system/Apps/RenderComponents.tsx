import dynamic from "next/dynamic";
import {memo} from "react";
import ComponentError from "./ComponentError";


const Window = dynamic(() => import("../Window"));

export type ComponentProps = {
    id: string;
};

type RenderComponentProps = {
    Component:React.ComponentType<ComponentProps>;
    hasWindow?: boolean;
    id: string;
};

const RenderComponent: FC<RenderComponentProps> = ({
    Component,
    hasWindow = true,
    id,
}) => {
    const SafeComponent = (
        <ErrorBoundary FallbackRender={<ComponentError />}>
            <Component id={id} />
        </ErrorBoundary>
    );

    return hasWindow ? <Window id={id}>{SafeComponent}</Window> : SafeComponent;
};

export default memo(RenderComponent);