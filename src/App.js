import { Provider } from "react-redux";
import Clima from "./components/Clima";
import Footer from "./components/Footer";
import Header from "./components/Header";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="relative bg-gray-600">
        <Header />
        <Clima />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
