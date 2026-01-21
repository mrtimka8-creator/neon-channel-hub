import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

/**
 * Prevents a total white-screen by rendering a minimal fallback UI.
 * Also logs the error so it appears in the preview console.
 */
export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Keep it noisy in Preview so we can see the root cause.
    console.error("[ErrorBoundary] Unhandled React error:", error);
    console.error("[ErrorBoundary] Component stack:", info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <div
          style={{
            maxWidth: 720,
            width: "100%",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(0,0,0,0.35)",
            color: "rgba(255,255,255,0.92)",
            padding: 20,
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          }}
        >
          <h1 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
            Ошибка рендера (вместо белого экрана)
          </h1>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Открой DevTools → Console — там будет причина.
          </p>
          {this.state.error?.message && (
            <pre
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                background: "rgba(255,255,255,0.06)",
                borderRadius: 12,
                padding: 12,
                overflow: "auto",
                margin: 0,
              }}
            >
              {this.state.error.message}
            </pre>
          )}
        </div>
      </div>
    );
  }
}
