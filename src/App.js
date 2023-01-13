import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthGuard from "./Guards/AuthGuard";
import LoginPage from "./login/pages/LoginPage";
import { ProvideAuth } from "./Provider/AuthProvider";
import { PrivateRoutes, PublicRoutes } from "./routes/routes";
import TasksPage from "./tasks/TasksPage";

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={PrivateRoutes.TASKS} />} />
            <Route path="*" element={<h1>404 Not found</h1>} />
            <Route path={PublicRoutes.LOGIN} element={<LoginPage />} />
            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.TASKS} element={<TasksPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProvideAuth>
    </div>
  );
}

export default App;
