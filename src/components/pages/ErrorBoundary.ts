import { Component } from 'react';

type ErrorBoundaryProps = {
  FallbackRender?: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  React.PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  public constructor(props: React.PropsWithChildren<ErrorBoundaryProps>) {
    super(props);
    this.state = { hasError: false };
  }

  public override shouldComponentUpdate(): boolean {
    return false; // Prevent re-rendering
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public override render(): React.ReactNode {
    const {
      props: { children, FallbackRender },
      state: { hasError },
    } = this;

    if (hasError && !FallbackRender && !('__nextDevClientId' in Window)) {
      window.location.reload();
    }

    return hasError ? FallbackRender : children;
  }
}
