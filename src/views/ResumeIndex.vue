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
      <template slot="content-title">Introduce.</template>
      <template slot="content-desc">
        <p>
          3년차 프론트 개발자로, 모빌리티, 커머스에서 웹과 앱 서비스를 개발/배포/운영 경험이 있습니다.<br />
          주로 웹 기반 개발을 담당했으며 팀내 필요에 따라 백엔드 개발 역할도 겸하였습니다.<br />
          혼자가 아닌 함께 이뤄낼 수 있다고 생각하기에 다양한 구성원들과 적극적으로 협업해왔습니다. <br />
          확장성과 유지보수성이 높은 프론트 아키텍쳐와 패턴을 위해 항상 고민하고 있습니다.<br />
        </p>
      </template>
    </base-content>

    <base-content>
      <template slot="content-title">Skill.</template>
      <template slot="content-desc"> </template>
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
  max-width: 50rem;
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
