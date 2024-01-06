<template>
  <div class="container" style="color: black">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ title }}</h1>
        <hr />
        <p>{{ title | toUpper }}</p>
        <p>{{ title | tolower }}</p>
        <p>{{ title | tolower | toUpper }}</p>
      </div>
      <div class="clearfix"></div>
      <hr />
      <div class="form-group">
        <label>filter names</label>
        <input type="text" class="form-control" v-model="filterText" />
      </div>
      <ul>
        <li v-for="name in filteredNames" :key="name">{{ name }}</li>
      </ul>
    </div>
    <div>
      <app-list></app-list>
    </div>
  </div>

  <!-- <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Create custom Directives</h1>
        <hr />
        <p v-custom:textcolor.delayed="'yellow'">
          this is paragraph has custom directive
        </p>
        <hr />
        <p v-test="{ color: 'orange', padding: '30px', fontSize: '2em' }">
          this paragraph local directives
        </p>
      </div>
    </div>
  </div> -->
  <!-- <div class="container">
    <h1 id="header">Form</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-primary">
          <div class="panel-heading">Form Inputs :</div>
          <div class="panel-body">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                class="form-control"
                placeholder="enter your email"
                v-model.lazy="user.email"
              />
            </div>
            <div class="form-group">
              <label for="age">Age</label>
              <input
                type="number"
                name="age"
                id="age"
                class="form-control"
                placeholder="enter your age"
                v-model="user.age"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="enter your password"
                v-model="user.password"
              />
            </div>
            <hr />
            <div class="form-group">
              <label>Message</label>
              <textarea class="form-control" v-model="message"></textarea>
            </div>
            <hr />
            <div class="col-md-4">
              <div class="form-group">
                <div class="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      value="ReciveMail"
                      v-model="recieveTypes"
                    />
                    Recive Mail
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <div class="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      value="ReciveMessages"
                      v-model="recieveTypes"
                    />
                    Recive Messages
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <div class="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      value="ReciveCalls"
                      v-model="recieveTypes"
                    />
                    Recive Calls
                  </label>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <hr />
            <div class="col-md-4">
              <div class="form-group">
                <div class="radio">
                  <label>
                    <input type="radio" value="male" v-model="gender" /> Male
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <div class="radio">
                  <label>
                    <input
                      type="radio"
                      value="female"
                      id="ReciveMessages"
                      v-model="gender"
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <hr />
            <div class="form-group">
              <select
                id="selectOptions"
                class="form-control"
                v-model="selectedPriority"
              >
                <option v-for="item in priorities" :key="item">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="panel panel-primary">
          <div class="panel-heading">Input Results :</div>
          <div class="panel-body">
            <div>
              <span>Email :</span>
              <strong>{{ user.email }}</strong>
            </div>

            <div>
              <span>Age :</span>
              <strong>{{ user.age }}</strong>
            </div>

            <div>
              <span>Password :</span>
              <strong>{{ user.password }}</strong>
            </div>

            <div>
              <span>TextArea Message :</span>
              <strong style="white-space: pre">{{ message }}</strong>
            </div>
            <hr />
            <ul>
              <li v-for="item in recieveTypes" :key="item">{{ item }}</li>
            </ul>
            <hr />
            <div>
              <span>User Gender :</span>
              <strong>{{ gender }}</strong>
            </div>
            <div>
              <span>User Priority :</span>
              <strong>{{ selectedPriority }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div> -->
  <!-- <div class="container">
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

          <user-component></user-component>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div> -->
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
import list from "./components/list.vue";
export default {
  // name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      names: ["mohamad", "milad", "iman", "elnaz", "reza", "shirin"],
      filterText: "",
      title: "Filters in Vue",
      title_1: "title for component 1",
      title_2: "title for component 2",
      selectedComponent: "app-component-1",
      user: {
        email: "",
        age: 22,
        password: "",
      },
      message: "",
      recieveTypes: [],
      gender: "male",
      priorities: ["low", "medium", "high"],
      selectedPriority: "low",
    };
  },
  components: {
    // "user-component": User,
    "app-component-1": component_1,
    "app-component-2": component_2,
    "app-list": list,
  },
  directives: {
    test: {
      bind(el, binding, vnode) {
        el.style.fontSize = binding.value.fontSize;
        el.style.color = binding.value.color;
        el.style.padding = binding.value.padding;
        el.style.backgroundColor = "green";
      },
    },
  },
  filters: {
    toUpper(value) {
      return value.toUpperCase();
    },
  },
  computed: {
    filteredNames() {
      return this.names.filter((name) => {
        return name.match(this.filterText);
      });
    },
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

#header {
  text-align: center;
}

span {
  color: red;
  font-size: 1.5em;
}

textarea {
  resize: vertical;
}
</style>
