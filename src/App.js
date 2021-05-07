import Collections from "./Collections";
import NavBar from "./NavBar";
import StickyNav from "./StickyNav";
import TopSelling from "./TopSelling";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <StickyNav />
      <Collections />
      <TopSelling />
    </QueryClientProvider>
  );
}

export default App;
