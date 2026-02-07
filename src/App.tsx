import { ThemeProvider } from "./hooks/useTheme";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        <Header />
        <SubHeader />
        <PageLayout />
      </div>
    </ThemeProvider>
  );
}

export default App;
