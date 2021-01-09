<template>
  <div class="twoot-item">
    <div class="user-profile__twoot">
      <div class="twoot-item__user">
        @ {{ username }}
      </div>
      <div class="twoot-item__content">
        {{ twoot.content}}
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive }  from 'vue'
export default {
  name: "TwootItem",
  props: {
    username: {
      type: String,
      require: true
    },
    twoot: {
      type: Object,
      require: true
    }
  },
}
</script>

<style lang="scss" scoped>
.twoot-item {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
  /*ease: 느린 시작, 빠른, 천천히 종료하는 전환 효과를 지정합니다 (기본값)*/


  //.twoot-item:hover와 &:hover는 같다
  &:hover {
    /*가로/세로 10% 확대*/
    transform: scale(1.1, 1.1);
  }

  .twoot-item__user {
    font-weight: bold;
  }
}

</style>