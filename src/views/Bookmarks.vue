<template>
  <b-container class="bookmarks">
    <b-row>
      <b-col class="d-flex justify-content-between" cols="12">
        <div class="title">
          <h1>My Bookmarks</h1>
        </div>
        <b-pagination
          v-if="bookmarksList.length > 0"
          class="langPagination mt-2"
          :total-rows="bookmarksList.length"
          v-model="currentPage"
          :per-page="4"
          first-number
        ></b-pagination>
      </b-col>
      <b-col>
        <b-row>
          <b-col
            class="match-height mt-2 mb-2"
            sm="12"
            lg="3"
            v-for="bookmark in itemsForPage"
            :key="bookmark.id"
          >
            <BookMarkCard :repo="bookmark" @removeBookMark="removeBookMark" />
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
      currentPage: 1,
    };
  },
  watch: {
    bookmarksList() {
      this.setList();
    },
    '$store.state.bookmarks': {
      immediate: true,
      handler() {
        this.setList();
      },
    },
  },
  computed: {
    itemsForPage() {
      const page = this.currentPage;
      const itemsPerPage = 4;
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const itemsForPage = this.bookmarksList.slice(startIndex, endIndex);
      return itemsForPage;
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
      color: #8e3636;
    }
  }
}

.langPagination {
  .page-item {
    .page-link {
      color: #f46262;
    }
    &.active {
      .page-link {
        color: #f46262;
        background-color: #1e1e1e;
        border-color: #1e1e1e;
        box-shadow: none;
      }
    }
  }
}
</style>
