import { Outlet } from "react-router-dom";

const App = ({ children }) => {
  return (
    <main className="app-content">
      {children}
      <Outlet/>
    </main>
  );
};

export default App;