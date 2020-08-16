<template>
  <div class="container">
    <div class="header">
      <div class="header-box">
        <h1 class="header__title">송노겸</h1>
        <p class="header__subtitle">프론트엔드 개발자</p>
      </div>
      <div class="header-box">
        <div class="add-info">
          <h3 class="add-info__title">
            Contact
          </h3>
          <ul class="contact-list">
            <li>
              Email :
              <a href="mailto:ng315429@gmail.com">
                ng315429@gmail.com
              </a>
            </li>
            <li>
              Github :
              <a href="https://github.com/ng315429" target="_blank">
                https://github.com/ng315429
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <base-content>
      <template slot="content-title">Introduce</template>
      <template slot="content-desc">Introduce desc</template>
    </base-content>
  </div>
</template>

<script>
export default {
  components: {
    BaseContent: () => import('@/components/BaseContent'),
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 60rem;
  margin: 5rem auto;

  .header {
    margin: 4rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-box {
      .header__title {
        margin: 0.4rem 0;
      }
      .add-info {
        display: flex;
        flex-direction: column;

        .contact-list {
          list-style: none;
          li {
            margin: 0.4rem 0;
            a {
              font-weight: 700;
            }
          }
        }
        .add-info__title {
          color: $main-color;
          margin: 0.5rem 0;
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
