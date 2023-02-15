<template>
  <section>
    <Bookmarks />
    <ToogleTopics />
  </section>
</template>
<script>
import Bookmarks from './Bookmarks';
import ToogleTopics from './ToogleTopics';
export default {
  // eslint-disable-next-line
  name: 'Home',
  components: {
    Bookmarks,
    ToogleTopics,
  },
};
</script>
<style lang="scss" scoped></style>
