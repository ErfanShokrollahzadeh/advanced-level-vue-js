<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="bordered">
          <h1>{{ msg }}</h1>
          <hr />
          <a
            class="btn btn-success"
            v-on:click="selectedComponent = 'app-component-1'"
            >component 1</a
          >
          <a
            class="btn btn-success"
            v-on:click="selectedComponent = 'app-component-2'"
            >component 2</a
          >
          <hr />

          <KeepAlive>
            <component :is="selectedComponent">
              <template v-if="selectedComponent == 'app-component-1'">
                <div slot="header">
                  <h2>{{ title_1 }}</h2>
                  <p>{{ title_1 }}</p>
                </div>
                <p slot="paragraph">test</p>
                <div slot="footer">
                  <h3>sent footer</h3>
                </div>
              </template>

              <template v-if="selectedComponent == 'app-component-2'">
                <div slot="header">
                  <h2>{{ title_2 }}</h2>
                  <p>{{ title_2 }}</p>
                </div>
                <p slot="paragraph">test</p>
                <div slot="footer">
                  <h3>sent footer</h3>
                </div>
              </template>
            </component>
          </KeepAlive>
          <hr />

          <!-- <user-component></user-component> -->
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <span class="glyphicon glyphicon-fire"></span> Logo
          </a>
        </div>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="about-us">
                <li>
                  <a href="#">Engage</a>
                </li>
                <li>
                  <a href="#">Pontificate</a>
                </li>
                <li>
                  <a href="#">Synergize</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-right" role="search">
            <div class="form-group">
              <input type="text" class="form-control" />
            </div>
            <button type="submit" class="btn btn-default">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <div class="jumbotron feature">
      <div class="container">
        <h1>Dramatically Engage</h1>
        <p>
          Objectively innovate empowered manufactured products whereas parallel
          platforms.
        </p>
        <p>
          <a class="btn btn-primary" href="#">Engage Now</a>
        </p>
      </div>
    </div>

    <div class="container">
      <div class="row page-intro">
        <div class="col-lg-12">
          <h1>
            Superior Collaboration
            <small>Visualize Quality</small>
          </h1>
          <p>
            Proactively envisioned multimedia based expertise and cross-media
            growth strategies. Seamlessly visualize quality intellectual capital
            without superior collaboration and idea-sharing. Holistically
            pontificate installed base portals after maintainable products.
          </p>
        </div>
      </div>
      <div class="row">
        <article class="col-md-4 article-intro test">
          <a href="#">
            <img
              class="img-responsive img-rounded"
              src="holder.js/700x300"
              alt
            />
          </a>
          <h3>
            <a href="#">Efficiently Unleash</a>
          </h3>
          <p>
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits. Dramatically visualize customer directed convergence
            without revolutionary ROI.
          </p>
        </article>
        <article class="col-md-4 article-intro test">
          <a href="#">
            <img
              class="img-responsive img-rounded"
              src="holder.js/700x300"
              alt
            />
          </a>
          <h3>
            <a href="#">Completely Synergize</a>
          </h3>
          <p>
            Dramatically maintain clicks-and-mortar solutions without functional
            solutions. Efficiently unleash cross-media information without
            cross-media value. Quickly maximize timely deliverables for
            real-time schemas.
          </p>
        </article>

        <article class="col-md-4 article-intro test">
          <a href="#">
            <img
              class="img-responsive img-rounded"
              src="holder.js/700x300"
              alt
            />
          </a>
          <h3>
            <a href="#">Dynamically Procrastinate</a>
          </h3>
          <p>
            Professionally cultivate one-to-one customer service with robust
            ideas. Completely synergize resource taxing relationships via
            premier niche markets. Dynamically innovate resource-leveling
            customer service for state of the art customer service.
          </p>
        </article>
      </div>
    </div>

   <app-footer></app-footer>

  </div> -->
</template>

<script>
// import User from "./components/user.vue";
import component_1 from "./components/component_1.vue";
import component_2 from "./components/component_2.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      title_1: "title for component 1",
      title_2: "title for component 2",
      selectedComponent: "app-component-1",
    };
  },
  components: {
    // "user-component": User,
    "app-component-1": component_1,
    "app-component-2": component_2,
  },
};
</script>

<style scoped>
.bordered {
  border: 2px solid red;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  background-color: lightgray;
}
.bordered h1 {
  text-align: center;
}
</style>
