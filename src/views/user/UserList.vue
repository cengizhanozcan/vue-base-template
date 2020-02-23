<template>
  <div class="row">
    <div class="col-12">
      <p-button type="info" round @click.native.prevent="newUserForm"> New User </p-button>
    </div>

    <div class="col-12">
      <card :title="title" >
        <div slot="raw-content" class="table-responsive">

          <table class="table">
            <thead>
            <slot name="columns">
              <th v-for="column in columns" :key="column.key">{{column.title}}</th>
            </slot>
            </thead>
            <tbody>
            <tr v-for="(item, index) in users" :key="index">
              <slot :row="item">
                <td v-for="(column, index) in columns" :key="index">
                  {{itemValue(item, column.key)}}
                </td>
              </slot>
            </tr>
            </tbody>
          </table>

        </div>
      </card>
    </div>
  </div>
</template>

<script>
import UserService from '../../services/UserService';

const tableColumns = [{ key: 'username', title: 'UserName' }, { key: 'emailAddress', title: 'Email Address' }, { key: 'name', title: 'Name' }, { key: 'surname', title: 'Surname' }];
export default {
  data() {
    return {
      users: '',
      columns: tableColumns,
      title: 'User List',
    };
  },
  computed: {
  },
  methods: {
    itemValue(item, columnKey) {
      return item[columnKey];
    },
    async getAllUsers() {
      this.users = await UserService.getAllUsers();
    },
    newUserForm() {
      this.$router.push({ name: 'UserForm' });
    },
  },

  beforeMount() {
    this.getAllUsers();
  },

};
</script>
<style>
</style>
