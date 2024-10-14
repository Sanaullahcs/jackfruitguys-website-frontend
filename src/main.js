/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Plugins
import { registerPlugins } from "@/plugins";
import VueGtag from "vue-gtag"; // Import the Google Analytics plugin

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Import the router here
import router from "@/router"; // Make sure you have a valid router setup

const app = createApp(App);

app.use(
  VueGtag,
  {
    config: { id: "G-WCF0DLX13Y" }, // Replace with your Google Analytics Tracking ID
  },
  router // Pass the router here
);

registerPlugins(app);

app.use(router); // Make sure to use the router in your app

app.mount("#app");
