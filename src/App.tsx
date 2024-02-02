import { Provider } from "react-redux";
import { Navbar } from "./components/common/Navbar";
import NewsApp from "./screen/NewsApp";
import newsStore from "./redux/store";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Provider store={newsStore}>
      <div className="w-full max-h-screen m-0 p-0">
        <div className="fixed top-0 w-full overflow-hidden">
          <Navbar />
        </div>
        <div className="w-full">
          <NewsApp />
        </div>
        <div className="bottom-0 w-full overflow-hidden">
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
