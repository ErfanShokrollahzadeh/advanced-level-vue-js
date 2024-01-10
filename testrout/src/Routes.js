import HomePage from "./components/HomePage.vue";

// import UserDetail from "./components/user/UserDetail.vue";
// import UserEdit from "./components/user/UserEdit.vue";
// import UserPage from "./components/user/UserPage.vue";
// import UserStart from "./components/user/UserStart.vue";

const UserPage = () =>
  import(/* webpackChunkName: "user" */ "./components/user/UserPage.vue");

const UserStart = () =>
  import(/* webpackChunkName: "user" */ "./components/user/UserStart.vue");

const UserDetail = () =>
  import(/* webpackChunkName: "user" */ "./components/user/UserDetail.vue");

const UserEdit = () =>
  import(/* webpackChunkName: "user" */ "./components/user/UserEdit.vue");

// var UserPage = (resolve) => {
//   // Use require.ensure for dynamic import
//   require.ensure(["./components/user/UserPage.vue"], () => {
//     resolve(require("./components/user/UserPage.vue"));
//   });
// };

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
        beforeEnter: (to, from, next) => {
          console.log("Local beforeEach");
          console.log(to, from);
          next(); // if it's is false, it will not go to the next page
        },
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
