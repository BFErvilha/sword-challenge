<template>
  <b-container fluid class="p-0">
    <b-navbar toggleable="lg" type="dark" variant="secondary" class="p-3">
      <b-navbar-brand to="/"> SwordHealth Challenge </b-navbar-brand>

      <b-navbar-nav class="d-flex ml-auto">
        <b-nav-item href="/home">Discovery</b-nav-item>
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
        style="position: absolute; right: 20px"
      >
        <!-- Right aligned nav items -->
        <b-navbar-nav class="d-flex ml-auto">
          <b-nav-item href="#about">Username</b-nav-item>
          <b-nav-item href="#benefits">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>
<script>
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
};
</script>
