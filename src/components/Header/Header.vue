<template>
  <b-container fluid class="p-0">
    <b-navbar toggleable="lg" class="header p-3">
      <b-navbar-brand> <strong>SwordHealth Challenge</strong> </b-navbar-brand>

      <b-navbar-nav class="d-flex ml-auto">
        <b-nav-item to="/home">Discovery</b-nav-item>
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
        style="position: absolute; right: 20px"
      >
        <!-- Right aligned nav items -->
        <b-navbar-nav class="d-flex ml-auto">
          <b-nav-item to="/username">Username</b-nav-item>
          <b-nav-item @click="signOut()">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>
<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
  BNavbar,
  BNavbarBrand,
  BCollapse,
  BNavItem,
  BContainer,
  BNavbarToggle,
} from 'bootstrap-vue';
export default {
  // eslint-disable-next-line
  name: 'Header',
  components: {
    BNavbar,
    BNavbarBrand,
    BCollapse,
    BNavItem,
    BContainer,
    BNavbarToggle,
  },
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: 'login' });
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  background-color: #1e1e1e;

  .navbar-brand {
    color: #f46262;
  }
  .nav-link {
    color: #f7f4f2;

    &.router-link-active {
      color: #f46262;
    }

    &:hover {
      color: #f46262;
    }
  }
}
</style>
