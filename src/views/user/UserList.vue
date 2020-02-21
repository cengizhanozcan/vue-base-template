<template>
  <div class="row">
    <div class="col-12">
      <card :title="title" >
        <div slot="raw-content" class="table-responsive">

          <table class="table" :class="tableClass">
            <thead>
            <slot name="columns">
              <th v-for="column in columns" :key="column">{{column}}</th>
            </slot>
            </thead>
            <tbody>
            <tr v-for="(item, index) in users" :key="index">
              <slot :row="item">
                <td v-for="(column, index) in columns"
                    :key="index">
                  {{itemValue(item, column)}}
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

const tableColumns = ['id', 'name', 'surname'];
// const tableData = [
//   {
//     id: 1,
//     name: 'Dakota Rice',
//     salary: '$36.738',
//     country: 'Niger',
//     city: 'Oud-Turnhout',
//   },
//   {
//     id: 2,
//     name: 'Minerva Hooper',
//     salary: '$23,789',
//     country: 'Curaçao',
//     city: 'Sinaai-Waas',
//   },
//   {
//     id: 3,
//     name: 'Sage Rodriguez',
//     salary: '$56,142',
//     country: 'Netherlands',
//     city: 'Baileux',
//   },
//   {
//     id: 4,
//     name: 'Philip Chaney',
//     salary: '$38,735',
//     country: 'Korea, South',
//     city: 'Overland Park',
//   },
//   {
//     id: 5,
//     name: 'Doris Greene',
//     salary: '$63,542',
//     country: 'Malawi',
//     city: 'Feldkirchen in Kärnten',
//   },
// ];
export default {
  data() {
    return {
      users: { name: 'Cengiz' },
      columns: tableColumns,
      title: 'User List',
    };
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    },
  },
  methods: {
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
    async getAllUsers() {
      this.users = await UserService.getAllUsers();
      console.log(JSON.stringify(this.users));
    },
  },

  beforeMount() {
    this.getAllUsers();
  },

};
</script>
<style>
</style>
