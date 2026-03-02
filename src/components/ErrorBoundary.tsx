"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="py-16 px-6 text-center">
            <p className="text-site-text-muted text-sm">
              Something went wrong loading this section.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="mt-3 px-4 py-2 text-xs rounded-lg border border-site-border text-site-text-secondary hover:border-site-accent hover:text-site-accent transition-all cursor-pointer"
            >
              Try again
            </button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
