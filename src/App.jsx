import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { publicRoutes } from "./routers";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((router, index) => {
          let Layout = DefaultLayout;
          if (router.layout) Layout = router.layout;
          else if (router.layout === null) Layout = Fragment;

          const Page = router.component;
          return (
            <Route
              key={index}
              path={router.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
