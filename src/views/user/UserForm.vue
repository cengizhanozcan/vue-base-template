<template>
  <card class="card" title="New User">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Username"
                      placeholder="Username"
                      v-model="user.username">
            </fg-input>
            <fg-input type="email"
                      label="Email Address"
                      placeholder="Email"
                      v-model="$v.user.emailAddress.$model"
                      :class="{invalid: $v.user.emailAddress.$error}">
            </fg-input>
            <p class="error" v-if="!$v.user.emailAddress.required">this field is required</p>
            <p class="error" v-if="!$v.user.emailAddress.email">email format failure</p>

            <fg-input type="text"
                      label="Name"
                      placeholder="Name"
                      v-model="user.name">
            </fg-input>
            <fg-input type="text"
                      label="Surname"
                      placeholder="Surname"
                      v-model="user.surname">
            </fg-input>
          </div>
        </div>
        <div class="clearfix"></div>
        <p-button type="info" round @click.native.prevent="back">Back</p-button>
        <p-button type="info" round @click.native.prevent="saveUser">Save</p-button>
        <div class="col-md-3">
          <p-button round outline block @click.native="notify">Bottom Right</p-button>
        </div>
      </form>
    </div>
  </card>
</template>
<script>
import UserService from '../../services/UserService';
import { required, email } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      user: {
        name: null,
        surname: null,
        username: null,
        emailAddress: null,
      },
    };
  },
  methods: {
    async saveUser() {
      await UserService.saveUser(this.user);
      this.$notification(this, 'User has been saved successfully.');
    },
    notify() {
      this.$notification(this, 'Hello Worldd');
    },
    back() {
      this.$router.push({ name: 'UserList' });
    },
  },
  validations: {
    user: {
      emailAddress: {
        required,
        email,
      },
    },
  },
};
</script>
<style>
</style>
