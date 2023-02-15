<template>
  <b-container class="account">
    <b-row>
      <b-col cols="12">
        <div class="title">
          <h1>My Account</h1>
        </div>
      </b-col>
      <b-col sm="12" md="4">
        <b-alert variant="success" v-model="showAlert">Success Alert</b-alert>
        <b-form-group id="input-group-1" label="Username:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.username"
            type="text"
            placeholder="Username"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="E-mail:"
          label-for="input-1"
          class="mb-2"
        >
          <b-form-input
            id="input-1"
            type="text"
            v-model="form.email"
            placeholder="E-mail"
            required
          ></b-form-input>
        </b-form-group>
        <div class="text-left">
          <b-button
            class="mt-2"
            @click="updateUser()"
            href="#"
            variant="primary"
            >Save
          </b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  // eslint-disable-next-line
  name: 'Account',
  data() {
    return {
      form: {
        username: '',
        email: '',
      },
      user: [],
      showAlert: false,
    };
  },
  watch: {
    showAlert(newValue) {
      if (newValue) {
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
  },
  methods: {
    async getUser() {
      this.user = await firebase.auth().currentUser;
      this.form.username = this.user.displayName;
      this.form.email = this.user.email;
    },
    async updateUser() {
      await firebase
        .auth()
        .currentUser.updateProfile({
          displayName: this.form.username,
          email: this.form.email,
        })
        .then(() => {
          this.showAlert = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getUser();
  },
};
</script>
<style lang="scss" scoped>
.account {
  margin: 30px auto;
  .title {
    text-align: left;
    h1 {
      font-weight: bold;
      font-size: 22px;
    }
  }

  .text-left {
    text-align: left;
  }
}
</style>
