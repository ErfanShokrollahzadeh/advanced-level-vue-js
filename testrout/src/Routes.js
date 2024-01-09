import HomePage from "./components/HomePage.vue";
import UserDetail from "./components/user/UserDetail.vue";
import UserEdit from "./components/user/UserEdit.vue";
import UserPage from "./components/user/UserPage.vue";
import UserStart from "./components/user/UserStart.vue";
// import UserEdit from "./components/user/UserEdit.vue";

export const Routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/User",
    component: UserPage,
    children: [
      {
        path: "",
        component: UserStart,
      },
      {
        path: "edit/:id",
        component: UserEdit,
        name: "editUser",
      },
      {
        path: "detail/:id",
        component: UserDetail,
      },
    ],
  },
  {
    path: "/404",
    redirect: "/",
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];
