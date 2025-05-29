import { useCallback } from 'react';
import { type ComponentProcessProps } from '../Apps/RenderComponents';

const Window: FC<ComponentProcessProps> = ({ id, children }) => {
  const {
    linkElement,
    processes: { [id]: process },
  } = useProcesses();
  const {
    backgroundBlur,
    backgroundColor,
    Component,
    hideTitlebar,
    peekElement,
  } = process || {};
  const { foregroundId } = useSession();
  const isForeground = foregroundId === id;
  const { zIndex, ...focusableProps } = useFocusable(id);
  const windowTTransitions = useWindowTransitions(id);
  const linkViewportEntry = useCallback(
    (viewportEntry: HTMLDivElement) => {
      if (Component && !peekElement && viewportEntry) {
        linkElement(id, 'peekElement', viewportEntry);
      }
    },
    [Component, id, linkElement, peekElement]
  );

  return (
    <RndWindow id={id} zIndex={zIndex}>
      <StyledWindow
        $backgroundBlur={backgroundBlur}
        $backgroundColor={backgroundColor}
        $isForeground={isForeground}
        {...focusableProps}
        {...windowTransitions}
      >
        <StyledPeekViewport ref={linkViewportEntry}>
          {!hideTitlebar && <Titlebar id={id} />}
          {children}
        </StyledPeekViewport>
      </StyledWindow>
    </RndWindow>
  );
};

export default Window;
