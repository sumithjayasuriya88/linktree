import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import ProfileManagePage from "./pages/ProfileManagePage";
import ProfileStylePage from "./pages/ProfileStylePage";
import ManageProfilePage from "./pages/ManageProfilePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            {/* Header Section */}
            <Header />
            <HomePage />
          </Route>
          <Route path="/signup" exact={true}>
            <SignupPage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/register" exact={true}>
            <RegisterPage /> 
          </Route>
          <Route path="/manage" exact={true}>
            <ProfileManagePage />
          </Route>
          <Route path="/manage/style" exact={true}>
            <ProfileStylePage />
          </Route>
          <Route path="/manage/profile" exact={true}>
            <ManageProfilePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
