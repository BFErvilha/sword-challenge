<template>
  <b-container class="bookmarks">
    <b-row>
      <b-col cols="12">
        <div class="title">
          <h1>My Bookmarks</h1>
        </div>
      </b-col>
      <b-col>
        <b-row>
          <b-col>
            <BookMarkCard />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import BookMarkCard from '@/components/bookmarks/BookMarkCard';

export default {
  // eslint-disable-next-line
  name: 'Bookmarks',
  components: {
    BookMarkCard,
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
    }
  }
}
</style>
