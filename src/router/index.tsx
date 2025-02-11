import { SuspenseContainer } from "../config";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Wishlist from "../pages/wishlist/Wishlist";
import Detail from "../pages/detail/Detail";
import NotFound from "../pages/not-found/NotFound";
import SignIn from "../pages/sign-in/SignIn";
import Contact from "../pages/contact/Contact";
// import Card from "../pages/card/Card";

const Home = lazy(() => import("../pages/home/Home"));
const Layout = lazy(() => import("../pages/layout/Layout"));
const Profile = lazy(() => import("../pages/profile/Profile"));

const Routers = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: (
            <SuspenseContainer>
              <Layout />
            </SuspenseContainer>
          ),
          children: [
            {
              path: "/",
              element: (
                <SuspenseContainer>
                  <Home />
                </SuspenseContainer>
              ),
            },
            {
              path: "/contact",
              element: (
                <SuspenseContainer>
                  <Contact />
                </SuspenseContainer>
              ),
            },
            {
              path: "/about",
              element: (
                <SuspenseContainer>
                  < NotFound />
                </SuspenseContainer>
              ),
            },
            {
              path: "/wishlist",
              element: (
                <SuspenseContainer>
                  <Wishlist />
                </SuspenseContainer>
              ),
            },
            {
              path: "/card",
              element: (
                <SuspenseContainer>
                  <NotFound />
                </SuspenseContainer>
              ),
            },
            {
              path: "product/:id",
              element: (
                <SuspenseContainer>
                  <Detail />
                </SuspenseContainer>
              ),
            },
            {
              path: "/sign-in",
              element: (
                <SuspenseContainer>
                  <SignIn />
                </SuspenseContainer>
              ),
            },
            {
              path: "/profile",
              element: (
                <SuspenseContainer>
                  <Profile />
                </SuspenseContainer>
              ),
            },
            {
              path: "*",
              element: (
                <SuspenseContainer>
                  <NotFound />
                </SuspenseContainer>
              ),
            },
          ],
        },
      ])}
    </>
  );
};

export default Routers;
