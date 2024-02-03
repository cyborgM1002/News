import { Provider } from "react-redux";
import newsStore from "./redux/store";
import Home from "./screen/home/Home";

function App() {
  return (
    <Provider store={newsStore}>
      <div className="w-full max-h-screen m-0 p-0">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
