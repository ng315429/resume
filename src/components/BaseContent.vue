<template>
  <div class="content">
    <div class="content__title">
      <slot name="content-title"></slot>
    </div>
    <div class="content__desc">
      <slot name="content-desc"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  margin: 2rem 0;
  text-align: left;

  .content__title {
    width: 100%;
    font-size: 1.7rem;
    font-weight: 900;
    color: $main-color;
    border-bottom: dashed 2px #ccc;
    padding: 0.5rem 0;
  }
  .content__desc {
    width: 100%;
    // font-size: 1.2rem;
    padding: 1rem 0;
  }
}
</style>
