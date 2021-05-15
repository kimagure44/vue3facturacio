import { createStore } from 'vuex'
import dashboardModules from "./dashboardModule.js";

export default createStore({
  modules: {
    dashboardModules
  }
});
