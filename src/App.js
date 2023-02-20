import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  const user = null;
  return (
    <div className=" bg-bgcol ">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="flex">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
