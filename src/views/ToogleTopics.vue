<template>
  <b-container class="toogle-topics">
    <b-row>
      <b-col cols="12">
        <div class="title">
          <h1>Toogle Topics to show</h1>
        </div>
      </b-col>
      <b-col>
        <b-row>
          <b-col
            v-for="(lang, index) in languages"
            sm="4"
            md="4"
            lg="2"
            :key="index"
            class="language-filter mb-2"
          >
            <b-button
              class="btn-toogle w-100"
              pill
              :class="lang.state ? 'active' : ''"
              variant="primary"
              @click="showLang(lang)"
              >{{ lang.name }}</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <div v-for="(lang, index) in languages" :key="index">
      <LanguageTop
        v-if="lang.state"
        :isLoading="loading"
        :language="lang.name"
      />
    </div>
  </b-container>
</template>
<script>
import LanguageTop from './LanguageTop/LanguageTop';
export default {
  // eslint-disable-next-line
  name: 'ToogleTopics',
  components: {
    LanguageTop,
  },
  data() {
    return {
      languages: [
        { name: 'Vue', state: true },
        { name: 'Typescript', state: false },
        { name: 'Javascript', state: false },
        { name: 'Go', state: false },
        { name: 'CSS', state: false },
        { name: 'Node', state: false },
      ],
      loading: false,
    };
  },
  methods: {
    showLang(lang) {
      this.loading = true;
      setTimeout(() => {
        lang.state = !lang.state;
        this.loading = false;
      }, 500);
    },
  },
};
</script>
<style lang="scss" scoped>
.toogle-topics {
  margin: 30px auto;
  .title {
    text-align: left;
    margin-bottom: 15px;
    h1 {
      font-weight: bold;
      font-size: 22px;
      color: #8e3636;
    }
  }

  .btn-toogle {
    background-color: #f46262;
    border-color: #f46262;

    &:hover,
    &.active {
      background-color: #b24747;
      border-color: #8e3636;
    }
  }
}
</style>
