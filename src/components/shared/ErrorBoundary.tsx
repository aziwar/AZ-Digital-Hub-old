'use client';

import { AlertCircle, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { Component, type ErrorInfo, type ReactNode } from 'react';

import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode | ((props: { error: Error | null; errorInfo: ErrorInfo | null; reset: () => void }) => ReactNode);
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Call the onError handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    this.setState({ error, errorInfo });
  }

  handleReset = (): void => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
  };

  override render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // If a custom fallback is provided, use it
      if (fallback) {
        return typeof fallback === 'function' 
          ? fallback({ 
              error, 
              errorInfo, 
              reset: this.handleReset 
            }) 
          : fallback;
      }

      // Default error UI
      return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 text-center">
          <div className="mx-auto w-full max-w-md space-y-6 rounded-lg border bg-card p-8 text-card-foreground shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              <div className="rounded-full bg-destructive/10 p-4">
                <AlertCircle className="h-12 w-12 text-destructive" />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">
                  Something went wrong
                </h1>
                <p className="text-muted-foreground">
                  {error?.message || 'An unexpected error occurred'}
                </p>
                {process.env.NODE_ENV === 'development' && errorInfo?.componentStack && (
                  <details className="mt-4 rounded-md bg-muted/50 p-3 text-left text-sm">
                    <summary className="mb-2 cursor-pointer font-medium">
                      Error details
                    </summary>
                    <pre className="overflow-x-auto rounded bg-muted p-2 text-xs">
                      {error?.toString()}
                      {errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-x-3 sm:space-y-0">
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto"
                onClick={this.handleReset}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Try again
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}

// Higher-order component for easier usage with function components
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) => {
  const WrappedComponent: React.FC<P> = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );
  
  // Format for display in DevTools
  const name = Component.displayName || Component.name || 'Component';
  WrappedComponent.displayName = `withErrorBoundary(${name})`;
  
  return WrappedComponent;
};

export default ErrorBoundary;
