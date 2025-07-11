import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Router from "./router";
import "@radix-ui/themes/styles.css";
import { QueryClient } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <Router />
      </Theme>
    </QueryClientProvider>
  );
}

export default App;
