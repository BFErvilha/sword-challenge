<template>
  <section>
    <b-overlay :show="isLoading" rounded="sm">
      <b-row>
        <b-col cols="12" class="mt-2">
          <div class="d-flex flex-wrap justify-content-between">
            <b-dropdown
              :id="language"
              :text="`Top ${language}`"
              class="sortDropdown m-2"
            >
              <b-dropdown-item-button @click="filter.sort = 'stars'"
                >Sort by stars
              </b-dropdown-item-button>
              <b-dropdown-item-button @click="filter.sort = 'forks'"
                >Sort by forks
              </b-dropdown-item-button>
              <b-dropdown-item-button
                @click="filter.sort = 'help-wanted-issues'"
                >Sort by help wanted issues
              </b-dropdown-item-button>
              <b-dropdown-item-button @click="filter.sort = 'updated'"
                >Sort by update
              </b-dropdown-item-button>
            </b-dropdown>

            <b-pagination
              class="langPagination mt-2"
              v-model="filter.currentPage"
              :total-rows="filter.totalRows"
              :per-page="filter.per_page"
              first-number
            ></b-pagination>
          </div>
        </b-col>
        <b-col cols="12">
          <b-row>
            <b-col
              class="match-height mt-2 mb-2"
              sm="12"
              md="6"
              lg="3"
              v-for="repo in data"
              :key="repo.id"
            >
              <LanguageCard
                :repo="repo"
                :isLoading="loading"
                @toBookMark="toBookMark"
                :isBookmarked="isBookmarked(repo.id)"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-overlay>
  </section>
</template>
<script>
import { getTopRepos } from '@/services/language.services';
import LanguageCard from '@/components/LanguageTop/LanguageCard';
export default {
  name: 'LanguageTop',
  props: {
    language: { type: String, require: true },
    isLoading: { type: Boolean, default: false },
  },
  components: {
    LanguageCard,
  },
  data() {
    return {
      filter: {
        sort: '',
        per_page: 4,
        order: 'desc',
        currentPage: 1,
        totalRows: 0,
      },
      data: [],
      sortEnum: [
        { name: 'stars', queryType: 'stars' },
        { name: 'forks', queryType: 'forks' },
        { name: 'issues', queryType: 'help-wanted-issues' },
        { name: 'update', queryType: 'updated' },
      ],
      loading: false,
    };
  },
  computed: {
    bookmarks() {
      return this.$store.getters.bookmarks;
    },
  },
  watch: {
    'filter.sort'(newValue) {
      if (newValue) {
        this.getTop();
      }
    },
    'filter.currentPage'(newValue) {
      if (newValue) {
        this.getTop();
      }
    },
  },
  methods: {
    async getTop() {
      this.loading = true;
      await getTopRepos(this.language, this.filter)
        .then((res) => {
          this.data = res.data.items;
          this.filter.totalRows = res.data.total_count / this.filter.per_page;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        })
        .finally(() => (this.loading = false));
    },
    toBookMark(item) {
      if (!this.bookmarks.find((el) => el.id === item.id)) {
        this.$store.commit('addBookmark', item);
      } else {
        this.$store.commit('removeBookmark', item);
      }
    },
    isBookmarked(id) {
      if (this.bookmarks.find((item) => item.id === id)) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.getTop();
  },
};
</script>

<style lang="scss" scoped>
.match-height {
  display: flex;
  flex-flow: column;
}
</style>
<style lang="scss">
.sortDropdown {
  button.dropdown-toggle {
    background-color: #1e1e1e;
    boder-color: #1e1e1e;
    color: #f7f4f2;
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
