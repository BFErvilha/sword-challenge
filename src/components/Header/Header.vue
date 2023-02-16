<template>
  <b-container fluid class="p-0">
    <b-navbar toggleable="sm" class="header p-3">
      <b-navbar-brand> <strong>SwordHealth Challenge</strong> </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="menu ml-auto">
        <b-nav-item to="/home">Discovery</b-nav-item>
        <span class="d-flex">
          <b-nav-item to="/username">Username</b-nav-item>
          <b-nav-item @click="signOut()">Logout</b-nav-item>
        </span>
      </b-navbar-nav>
    </b-navbar>
  </b-container>
</template>
<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { BNavbar, BNavbarBrand, BNavItem, BContainer } from 'bootstrap-vue';
export default {
  // eslint-disable-next-line
  name: 'Header',
  components: {
    BNavbar,
    BNavbarBrand,
    BNavItem,
    BContainer,
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
  justify-content: space-between;
  .navbar-nav {
    width: 100%;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    @media (max-width: 575px) {
      flex-direction: row;
    }
  }

  .navbar-brand {
    color: #f46262;
    width: 300px;
  }

  .nav-item {
    @media (max-width: 575px) {
      margin-right: 20px;
    }
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
