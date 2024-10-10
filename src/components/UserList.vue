<template>
  <div>
    <div class="toolbar">
      <button @click="filterGender('чоловік')">Чоловіки</button>
      <button @click="filterGender('жінка')">Жінки</button>
      <button @click="resetFilter">Показати всіх</button>
    </div>

    <div v-if="filteredUsers.length">
      <UserCard v-for="user in filteredUsers" :key="user.id" :userData="user" />
    </div>
    <p v-else>Список юзерів пустий</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import UserCard from "./UserCard.vue";
import { User } from "../models/user";

export default defineComponent({
  name: "UserList",

  components: {
    UserCard,
  },

  setup() {
    const users = ref<User[]>([
      {
        id: 1,
        firstName: "Джон",
        lastName: "Уільямс",
        gender: "чоловік",
        age: 15,
        position: "веб-розробник",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        hobbies: [],
      },
      {
        id: 2,
        firstName: "Кейт",
        lastName: "Сміт",
        gender: "жінка",
        age: 30,
        position: "дизайнер",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
        hobbies: ["малювання", "біг"],
      },
      {
        id: 3,
        firstName: "Кейт",
        lastName: "Мідлтон",
        gender: "жінка",
        age: 39,
        position: "якась посада",
        photo: "https://randomuser.me/api/portraits/women/22.jpg",
        hobbies: ["благодійність", "біг"],
      },
      {
        id: 4,
        firstName: "Селена",
        lastName: "Пейдж",
        gender: "жінка",
        age: 28,
        position: "співачка",
        photo: "https://randomuser.me/api/portraits/women/29.jpg",
        hobbies: ["спів"],
      },
      // {
      //   id: 5,
      //   firstName: "Адам",
      //   lastName: "Грей",
      //   gender: "чоловік",
      //   age: 26,
      //   position: "стажер",
      //   photo: "https://randomuser.me/api/portraits/men/15.jpg",
      //   hobbies: [],
      // },
      // {
      //   id: 6,
      //   firstName: "Бен",
      //   lastName: "Камбербетч",
      //   gender: "чоловік",
      //   age: 30,
      //   position: "актор",
      //   photo: "https://randomuser.me/api/portraits/men/56.jpg",
      //   hobbies: ["плавання"],
      // },
      // {
      //   id: 7,
      //   firstName: "Пітер",
      //   lastName: "Паркер",
      //   gender: "чоловік",
      //   age: 30,
      //   position: "лікар",
      //   photo: "https://randomuser.me/api/portraits/men/3.jpg",
      //   hobbies: ["петсіттер", "біг"],
      // },
      {
        id: 8,
        firstName: "Алла",
        lastName: "Макарова",
        gender: "жінка",
        age: 16,
        position: "учениця",
        photo: "https://randomuser.me/api/portraits/women/16.jpg",
        hobbies: ["малювання", "біг", "читання"],
      },
      {
        id: 9,
        firstName: "Настя",
        lastName: "Павлова",
        gender: "жінка",
        age: 17,
        position: "стажерка",
        photo: "https://randomuser.me/api/portraits/women/17.jpg",
        hobbies: ["написання музики"],
      },
      {
        id: 10,
        firstName: "Алекс",
        lastName: "Мейт",
        gender: "чоловік",
        age: 38,
        position: "дизайнер",
        photo: "https://randomuser.me/api/portraits/men/60.jpg",
        hobbies: [],
      },
    ]);

    const genderFilter = ref<string | null>(null);

    const filteredUsers = computed(() => {
      if (!genderFilter.value) return users.value;
      return users.value.filter((user) => user.gender === genderFilter.value);
    });

    const filterGender = (gender: string) => {
      genderFilter.value = gender;
    };

    const resetFilter = () => {
      genderFilter.value = null;
    };

    return {
      users,
      filteredUsers,
      filterGender,
      resetFilter,
    };
  },
});
</script>

<style scoped>
.toolbar {
  margin-bottom: 20px;
}

button {
  padding: 10px 15px;
  margin-right: 10px;
  cursor: pointer;
  background-color: #ddd;
}

button:hover {
  background-color: #60d6e9;
}
</style>
