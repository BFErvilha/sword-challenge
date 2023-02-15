<template>
  <b-container class="bookmarks">
    <b-row>
      <b-col cols="12">
        <div class="title">
          <h1>My Bookmarks</h1>
        </div>
      </b-col>
      <b-col>
        <b-row>
          <b-col
            class="match-height mt-2 mb-2"
            sm="12"
            lg="3"
            v-for="bookmark in bookmarksList"
            :key="bookmark.id"
          >
            <BookMarkCard
              :repo="bookmark"
              :isLoading="loading"
              @removeBookMark="removeBookMark"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import BookMarkCard from '@/components/BookMarks/BookMarkCard';

export default {
  // eslint-disable-next-line
  name: 'Bookmarks',
  components: {
    BookMarkCard,
  },
  data() {
    return {
      bookmarksList: [],
    };
  },
  watch: {
    bookmarksList() {
      this.setList();
    },
  },
  methods: {
    setList() {
      this.bookmarksList = this.$store.getters.bookmarks;
    },
    removeBookMark(item) {
      this.bookmarksList = this.bookmarksList.filter((el) => el.id !== item.id);
      this.$store.commit('removeBookmark', item);
    },
  },
  created() {
    this.setList();
  },
};
</script>
<style lang="scss" scoped>
.bookmarks {
  margin: 30px auto;
  .title {
    text-align: left;
    h1 {
      font-weight: bold;
      font-size: 22px;
    }
  }
}
</style>
