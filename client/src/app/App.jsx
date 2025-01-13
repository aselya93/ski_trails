import { useEffect, useState } from "react";
import UserApi from "../entities/user/UserApi";
import { setAccessToken } from "../shared/lib/axiosInstance";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import Navigation from "../widgets/ Navigation/Navigation";
import MainPage from "../pages/MainPage/MainPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    UserApi.refreshTokens()
      .then(({ error, data, statusCode }) => {
        if (error) {
          setUser(null);
          return;
        }
        if (statusCode === 200) {
          setAccessToken(data.accessToken), setUser(data.user);
        }
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation user={user} setUser={setUser} />,
      children: [
        { path: "/", element: <MainPage user={user} /> },
        { path: "/signup", element: <SignUpPage setUser={setUser} /> },
        { path: "/signin", element: <SignInPage setUser={setUser} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
