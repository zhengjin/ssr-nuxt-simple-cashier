<template>
  <div class="container">
    <Logo />
    <h2>Users</h2>
    <ul class="users">
      <li
        v-for="user in users"
        :key="user.id"
      >
        <NuxtLink :to="`/users/${user.id}`">
          {{ user.name }}
        </NuxtLink>
        <!--<a :href="`/users/${user.id}`">-->
        <!--{{ user.name }}-->
        <!--</a>-->
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import axios from 'axios';
  import Logo from '../../client/components/Logo.vue';
  import {Component, Vue} from 'nuxt-property-decorator';

  @Component({
    components: {
      Logo,
    },
  })
  export default class Home extends Vue {
    async asyncData() {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
      return {users: data}
    }
  }
</script>

<style>
  .container {
    text-align: center;
    margin-top: 100px;
    font-family: sans-serif;
  }

  .users {
    list-style-type: none;
  }

  .users li a {
    display: inline-block;
    width: 200px;
    border: 1px #ddd solid;
    padding: 10px;
    text-align: left;
    color: #222;
    text-decoration: none;
  }

  .users li a:hover {
    color: orange;
  }
</style>
