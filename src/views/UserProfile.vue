<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ state.user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
        Admin
      </div>
      <div class="user-profile__follower-count">
        <strong>Followers: </strong> {{ state.followers }}
      </div>
      <CreateTwootPanel
        @add-twoot="addTwoot"
      />
    </div>
    <div class="user-profile__twoots-wrapper">
     <TwootItem
        v-for="twoot in state.user.twoots"
        :key="twoot.id"
        :username="state.user.username"
        :twoot="twoot"
     />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router'
import TwootItem from "@/components/TwootItem";
import CreateTwootPanel from "@/components/CreateTwootPanel";
import { users } from "@/assets/users";

export default {
  name: "UserProfile",
  components: { TwootItem, CreateTwootPanel },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId) // /user/:userId의 값을 가져오기

    // 원래는 위의 userId를 이용하여 백엔드 API를 통해 유저 정보를 가져와서 state에 셋팅해야된다.
    // 강의 내용에는 API부분이 없고 user.js 파일의 데이터를 이용해서 작업했다.

    const state = reactive({
      followers: 0,
      user : users[userId.value - 1] || users[0] // users[userId]가 없으면 users[1]로 집어넣으라는 구문
      // user: {
      //   id: 1,
      //   username: '_MitchellRomney',
      //   firstName: 'Mitchell',
      //   lastName: 'Romney',
      //   email: 'mitchellromney@theearthissquare.com',
      //   isAdmin: true,
      //   twoots: [
      //     { id: 1, content: 'Twotter is Amazing!'},
      //     { id: 2, content: "Dont' forget to subscriber to The Earth is Square!"},
      //   ]
      // }

    })

    function addTwoot(twoot) {
      // unshift는 배열 앞에 요소를 추가한다
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: twoot
      })
    }

    return {
      state,
      addTwoot,
      userId
    }
  },
}
</script>

<style lang="scss" scoped>

.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    margin-bottom: auto;

    h1 {
      margin: 0
    }


    .user-profile__admin-badge {
      background-color: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0px 10px;
      font-weight: bold;
    }
  }
}
.user-profile__twoots-wrapper {
  display: grid;
  grid-gap: 10px;
  margin-bottom: auto;
}







</style>