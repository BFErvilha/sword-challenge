<template>
  <section class="register">
    <div class="card">
      <b-form-group
        id="input-group-1"
        label="E-mail:"
        label-for="input-1"
        class="mb-2"
      >
        <b-form-input
          id="input-1"
          type="email"
          v-model="form.email"
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
      <b-button
        class="btn-register mt-2 mb-2"
        @click="registerUser()"
        variant="primary"
        >Register</b-button
      >

      <div>
        <p>
          Have an account?
          <u class="register-link" @click="toLogin()">Click here to sign in</u>
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  /* eslint-disable */
  name: 'Register',
  data() {
    return {
      form: {
        password: '',
        email: '',
      },
      error: '',
    };
  },
  methods: {
    toLogin() {
      this.$router.push({ name: 'login' });
    },
    async registerUser() {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.push({ name: 'home' });
        })
        .catch((error) => (this.error = error));
    },
  },
};
</script>
<style lang="scss" scoped>
.register {
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
    .btn-register {
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
    font-size: 18px;
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
