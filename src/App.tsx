
import AppRouters from "./Router/AppRouters";
import { useUserData } from "./hooks/useUserData";
import { MyContext } from "./context/MyContext";

function App() {
  const { userData } = useUserData();

  return (
    <MyContext.Provider value={{ userData }}>
      <AppRouters />
    </MyContext.Provider>
  );
}

export default App;
