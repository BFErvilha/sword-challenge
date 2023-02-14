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
          v-model="form.email"
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
          v-model="form.password"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>
      <div class="error" v-if="error">{{ error.message }}</div>
      <b-button class="mt-2" @click="toLogin()" href="#" variant="primary"
        >Sign in
      </b-button>
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
import firebase from 'firebase';
import store from '@/store';

export default {
  /* eslint-disable */
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      error: '',
    };
  },
  methods: {
    toRegister() {
      this.$router.push({ name: 'register' });
    },
    async toLogin() {
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((response) => {
          store.commit('setToken', response.user.l);
          store.commit('setRefreshToken', response.user.refreshToken);
          this.$router.push({ name: 'home' });
        })
        .catch((error) => {
          this.error = error;
        });
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
.error {
  color: red;
}
</style>
