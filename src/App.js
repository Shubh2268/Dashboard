import BottomSection from "./components/BottomSection";
import ChartSection from "./components/ChartSection";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";

function App() {
  return (
    <div className="flex">
      <div className="w-0 md:w-1/5 hidden md:flex">
        <Leftbar />
      </div>
      <div className="w-full md:w-4/5">
        <Navbar />
        <TopSection />
        <ChartSection />
        <BottomSection />
      </div>
    </div>
  );
}

export default App;
