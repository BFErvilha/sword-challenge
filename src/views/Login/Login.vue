<template>
  <section class="login">
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
          placeholder="E-mail"
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
      <b-button class="btn-login mt-2" @click="toLogin()" href="#"
        >Sign in
      </b-button>
      <div class="mt-3">
        <p>
          Don't have an account?
          <u class="register-link" @click="toRegister()"
            >Click here to sign up</u
          >
        </p>
      </div>
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
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  .card {
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
    border: none;

    padding: 10px 15px;
    .btn-login {
      background-color: #f46262;
      border-color: #f46262;

      &:hover {
        background-color: #b24747;
        border-color: #8e3636;
      }
    }
  }
  .register-link {
    cursor: pointer;
    color: #f46262;

    &:hover {
      color: #b24747;
    }
  }
  .error {
    color: red;
  }
}
</style>
<style lang="scss">
.form-group {
  label {
    text-align: left;
    margin-bottom: 5px;
  }
}
</style>
