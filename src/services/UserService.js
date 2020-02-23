import Vue from 'vue';

class UserService {
  // eslint-disable-next-line class-methods-use-this
  async getAllUsers() {
    return await Vue.prototype.$axios.get('/user/');
  }

  async saveUser(user) {
    return await Vue.prototype.$axios.post('/user/', user);
  }
}

export default new UserService();
