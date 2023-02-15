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
            :key="index"
            class="language-filter"
          >
            <b-button
              class="w-100"
              pill
              :pressed.sync="lang.state"
              variant="primary"
              >{{ lang.name }}</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <div v-for="(lang, index) in languages" :key="index">
      <LanguageTop v-if="lang.state" :language="lang.name" />
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
    };
  },
  methods: {},
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
    }
  }
}
</style>
