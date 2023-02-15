<template>
  <div>
    <b-overlay :show="isLoading" rounded="sm">
      <b-card class="item-card mb-2">
        <b-card-body class="text-center">
          <b-card-text>
            <span class="badge">{{ repo.language }}</span>
            <span class="star-favorite" @click="toBookMark(repo)">
              <img
                src="@/assets/icons/star.svg"
                v-b-tooltip.hover.bottom="`BookMark`"
                class="mt-1"
              />
            </span>
            <b-avatar
              variant="info"
              :src="repo.owner.avatar_url"
              class="mr-3"
              v-b-tooltip.hover.bottom="repo.owner.login"
            />
            <div class="title">
              <h3>{{ repo.name }}</h3>
              <small class="full-name"> {{ repo.full_name }}</small>
            </div>
            <p class="description mt-4">
              {{ repo.description }}
            </p>
            <a @click="goToRepoLink(repo.owner.html_url)"
              >More projects for this owner</a
            >
          </b-card-text>
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
    </b-overlay>
  </div>
</template>
<script>
import { VBTooltip } from 'bootstrap-vue';

export default {
  name: 'Language-Card',
  props: {
    repo: { type: Object, required: true },
    isLoading: { type: Boolean, default: false, required: true },
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

<style lang="scss" scoped>
.item-card {
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
}
.badge {
  background-color: #1e1e1e;
  position: absolute;
  top: 5px;
  left: 5px;
}

.star-favorite {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

.title {
  h3 {
    font-size: 20px;
  }
}

.description {
  font-size: 15px;
}
</style>
