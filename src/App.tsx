import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Router from "./router";
import "@radix-ui/themes/styles.css";
import { QueryClient } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./shared/ui";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <ErrorBoundary fallbackRender={({ error }) => <Error error={error} />}>
          <Router />
        </ErrorBoundary>
      </Theme>
    </QueryClientProvider>
  );
}

export default App;
