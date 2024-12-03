import { createBrowserRouter } from "react-router-dom";

// import { Applayout } from "./components/layouts/AppLayout";

// import NoMatch from "./pages/NoMatch";
// import Dashboard from "./pages/Dashboard";
// import Empty from "./pages/Empty";
// import Sample from "./pages/Sample";
import Privacy from "./Privacy";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import AVMLandingPage from "./avm-landing-page";
import PreOrderPage from "./Preorder";
import AVMLandingPage2 from "./avm-landing-page2";
import TermsAndConditions from "./TermsAndConditions";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      //   element: <Applayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "/Privacy",
          element: <Privacy />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/landing",
          element: <AVMLandingPage />,
        },

        {
          path: "/landing2",
          element: <AVMLandingPage2 />,
        },
        {
          path: "/Waitlist",
          element: <PreOrderPage />,
        },
        {
          path: "/TermsAndConditions",
          element: <TermsAndConditions />,
        },
        // {
        //   path: "empty",
        //   element: <Empty />,
        // },
      ],
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ]
  //   {
  //     basename: global.basename,
  //   }
);
