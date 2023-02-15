<template>
  <div>
    <b-card style="max-width: 20rem" class="mb-2">
      <b-card-body class="text-center">
        <b-card-text>
          <div class="title">
            <h3>{{ repo.name }}</h3>
            <small> {{ repo.full_name }}</small>
          </div>
          <b-avatar variant="info" :src="repo.owner.avatar_url" class="mr-3" />

          {{ repo.description }}
          {{ repo.language }}
          {{ repo.owner.login }} - {{ repo.owner.html_url }}
        </b-card-text>
        <!-- <b-button variant="primary">Go somewhere</b-button> -->
      </b-card-body>
      <template #footer>
        <b-row>
          <b-col>
            <img
              src="@/assets/icons/repo-forked.svg"
              v-b-tooltip.hover.bottom="`Forks: ${repo.forks_count}`"
              class="mt-1"
            />
          </b-col>
          <b-col>
            <img
              src="@/assets/icons/star.svg"
              v-b-tooltip.hover.bottom="`Stars: ${repo.stargazers_count}`"
              class="mt-1"
            />
          </b-col>
          <b-col>
            <b-button
              variant="primary"
              size="sm"
              @click="goToRepoLink(repo.svn_url)"
              >Repo</b-button
            >
          </b-col>
        </b-row>
        <!-- Commented because the data does not match what is shown on the repository page -->
        <!-- Watchers: {{ repo.watchers_count }} -->
      </template>
    </b-card>
  </div>
</template>
<script>
import { VBTooltip } from 'bootstrap-vue';

export default {
  name: 'Language-Card',
  props: {
    repo: { type: Object, required: true },
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  methods: {
    goToRepoLink(link) {
      window.open(link, '_blank');
    },
  },
};
</script>

<style lang="" scoped></style>
