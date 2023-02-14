<template>
  <section>
    <Header />
    <Bookmarks />
    <ToogleTopics />
  </section>
</template>
<script>
import Header from './Header';
import Bookmarks from './Bookmarks';
import ToogleTopics from './ToogleTopics';
export default {
  // eslint-disable-next-line
  name: 'Home',
  components: {
    Header,
    Bookmarks,
    ToogleTopics,
  },
};
</script>
<style lang="scss" scoped></style>
