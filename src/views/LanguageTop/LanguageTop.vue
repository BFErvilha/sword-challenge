<template>
  <section>
    <b-row>
      <b-col cols="12" class="mt-2">
        <div class="d-flex">
          <b-dropdown :id="language" :text="`Top ${language}`" class="m-2">
            <b-dropdown-item-button @click="filter.sort = 'stars'"
              >Sort by stars
            </b-dropdown-item-button>
            <b-dropdown-item-button @click="filter.sort = 'forks'"
              >Sort by forks
            </b-dropdown-item-button>
            <b-dropdown-item-button @click="filter.sort = 'help-wanted-issues'"
              >Sort by help wanted issues
            </b-dropdown-item-button>
            <b-dropdown-item-button @click="filter.sort = 'updated'"
              >Sort by update
            </b-dropdown-item-button>
          </b-dropdown>
        </div>
      </b-col>
      <b-col cols="12">
        <b-row>
          <b-col v-for="repo in data" :key="repo.id">
            <LanguageCard :repo="repo" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import { getTopRepos } from '@/services/language.services';
import LanguageCard from '@/components/LanguageTop/LanguageCard';
export default {
  name: 'LanguageTop',
  props: {
    language: { type: String, require: true },
  },
  components: {
    LanguageCard,
  },
  data() {
    return {
      filter: {
        sort: '',
        per_page: 6,
        order: 'desc',
      },
      data: [],
      sortEnum: [
        { name: 'stars', queryType: 'stars' },
        { name: 'forks', queryType: 'forks' },
        { name: 'issues', queryType: 'help-wanted-issues' },
        { name: 'update', queryType: 'updated' },
      ],
    };
  },
  watch: {
    'filter.sort'(newValue) {
      if (newValue) {
        this.getTop();
      }
    },
  },
  methods: {
    async getTop() {
      await getTopRepos(this.language, this.filter).then((res) => {
        this.data = res.data.items;
      });
    },
  },
  created() {
    this.getTop();
  },
};
</script>

<style lang="scss" scoped></style>
