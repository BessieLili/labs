<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <UserCard v-for="(user, index) in users" :key="index" :userData="user" />
     <UserList/>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import UserCard from "./components/UserCard.vue";
import UserList from "./components/UserList.vue";
import { User } from "./models/user";

@Options({
  components: {
    HelloWorld,
    UserCard,
    UserList,
  },
})
export default class App extends Vue {
   users: User[] = [
    new User(
      1,
      "Камала",
      "Харріс",
      59,
      "жінка",
      "політична діячка",
      ["зумерські едіти", "читання", "політика"],
      require("./assets/userData.jpg")
    ),
    new User(
      2,
      "Камала",
      "Харріс",
      13,
      "жінка",
      "учениця",
      [],
      require("./assets/userData.jpg")
    ),
  ];
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
