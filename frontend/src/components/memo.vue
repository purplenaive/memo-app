<template>
  <main class="memo">
    <div class="memo__actions">
      <!-- ========== actions ========== -->
      <button 
      class="common-button add-memo-button"
      @click="addMemo"
      >+ 추가</button>
    </div>
    <ul class="memo-list">
      <!-- ========== memo list ========== -->
      <li 
        v-for="memo in memo_data"
        :key="memo.id"
        class="memo__item"
        @click="modifyMemo(memo)"
      >{{memo.content}}</li>
    </ul>
  </main>
</template>

<script>
  import axios from "axios";

  import { reactive, toRefs } from "vue";

  export default {
    name: "memoComp",
    setup() {
      const state = reactive({
        memo_data: [],
      });

      // 메모 추가하기
      const addMemo = () => {
        const content = prompt("내용을 입력하세요");

        if(!content) {
          alert("내용을 입력해주세요!");
          return;
        }
        
        axios.post("/api/memos", {content}).then(res => {
          state.memo_data = res.data;
        }).catch(err => {
          console.error(err);
        })
      };
      // 메모 불러오기
      const getMemos = () => {
        axios.get("/api/memos").then(res => {
          state.memo_data = res.data;
        }).catch(err => {
          console.error(err);
        })
      }
      // 메모 수정하기
      const modifyMemo = (memo) => {
        const {id, content} = memo;
        const new_content = prompt("수정할 내용을 입력하세요", content);

        axios.put(`/api/memos/${id}`, {content: new_content}).then(res => {
          state.memo_data = res.data;
        }).catch(err => {
          console.error(err);
        })
      }

      getMemos();

      return {
        ...toRefs(state),
        addMemo, getMemos, modifyMemo,
      }
    }
  }
</script>

<style scoped lang="scss">
  // ========== memo actions ========== //
  .memo__actions {
    width: 100%;
    text-align: right;
    padding: 12px 16px;
    border-bottom: 1px solid #eeeeee;
  }

  // ========== memo list ========== //
  .memo-list {
    @include flex(false, column, nowrap, flex-start, center);

    gap: 16px;
    padding: 16px;

    .memo__item {
      @include flex(false, row, nowrap, flex-start, center);

      width: 100%;
      height: 40px;
      padding: 0 16px;
      border: 1px solid #eeeeee;
      border-radius: 6px;
    }
  }
</style>
