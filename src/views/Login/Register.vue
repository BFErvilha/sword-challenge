<template>
  <section>
    <div v-if="error">{{ error }}</div>
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
      <b-button class="mt-2" @click="registerUser()" variant="primary"
        >Register</b-button
      >
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
    async registerUser() {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((response) => {
          this.$bvToast.toast(`Account created successfully`, {
            title: 'Register Success',
            variant: 'danger',
            autoHideDelay: 5000,
          });
          this.$router.push({ name: 'login' });
        })
        .catch((error) => {
          this.$bvToast.toast(error.message, {
            title: 'Register Error',
            variant: 'danger',
            autoHideDelay: 5000,
          });
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
</style>
