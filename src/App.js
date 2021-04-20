import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widget/Widgets";
import { useStateValue } from "./StateProvider";
import Login from "./components/Login/Login";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="">
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
