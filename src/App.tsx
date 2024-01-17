import React from "react";
import "./App.scss";

import routes from "./routes";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((page, index) => {
          const loginRequire = page.private;
          const roles = page.roles;
          return (
            <Route
              key={index}
              path={page.path}
              element={
                page.layout ? (
                  loginRequire ? (
                    <PrivateRoute roles={roles}>
                      <page.layout>
                        <page.component />
                      </page.layout>
                    </PrivateRoute>
                  ) : (
                    <page.layout>
                      <page.component />
                    </page.layout>
                  )
                ) : (
                  <page.component />
                )
              }
            />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
