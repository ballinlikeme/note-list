import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Tasks } from "./pages/Tasks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Tasks />} />
      </Route>
    </Routes>
  );
}

export default App;
