<template>
  <section>
    <div class="card">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-moldel="form.username"
          type="email"
          placeholder="Username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Password:"
        label-for="input-1"
        class="mb-2"
      >
        <b-form-input
          id="input-1"
          type="password"
          v-moldel="form.password"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button class="mt-2" href="#" variant="primary">Sign in</b-button>
    </div>
    <div>
      <p>
        Don't have an account?
        <u class="register-link" @click="toRegister()">Click here to sign up</u>
      </p>
    </div>
  </section>
</template>
<script>
export default {
  /* eslint-disable */
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    toRegister() {
      this.$router.push({ name: 'register' });
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
  border: none;

  padding: 10px 15px;
}
.register-link {
  cursor: pointer;
}
</style>
