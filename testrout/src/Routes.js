import HomePage from "./components/HomePage.vue";
import UserPage from "./components/user/UserPage.vue";
import UserEdit from "./components/user/UserEdit.vue";

export const Routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/User",
    component: UserPage,
  },
  {
    path: "/UserEdit/:id",
    component: UserEdit,
  },
];
