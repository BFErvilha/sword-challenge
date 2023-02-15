<template>
  <section>
    <Header />
    <Account />
  </section>
</template>
<script>
import Header from '@/components/Header/Header';
import Account from './Account/Account';
export default {
  // eslint-disable-next-line
  name: 'Username',
  components: {
    Header,
    Account,
  },
};
</script>
<style lang="scss" scoped></style>
