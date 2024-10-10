<template>
  <div class="user-card" :class="{ 'under-age': userData.age <= 18 }">
    <img :src="userData.photo" alt="User Photo" />
    <h2>{{ userData.firstName }} {{ userData.lastName }}</h2>
    <p v-if="userData.age > 18">Вік: {{ userData.age }}</p>
    <p>Стать: {{ userData.gender }}</p>
    <p>Посада: {{ userData.position }}</p>
    <p>Хобі:</p>
    <ul v-if="userData.hobbies.length">
      <li v-for="hobby in userData.hobbies" :key="hobby">{{ hobby }}</li>
    </ul>
    <p v-else>Немає хобі</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { User } from '../models/user'; 

export default defineComponent({
  name: 'UserCard',
  props: {
    userData: {
      type: Object as () => User, 
      required: true,
    },
  },
});
</script>

<style>
.user-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  margin: 10px auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.user-card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}
.user-card h2 {
  margin: 0;
  font-size: 20px;
}
.user-card p {
  margin: 2px 0;
}

.user-card.under-age {
  background-color: lightcoral;
}

.user-card:not(.under-age) {
  background-color: lightgreen;
}
</style>