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
            Contact.
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
      <template v-slot:content-title>소개</template>
      <template v-slot:content-desc>
        <p>
          안녕하세요. 프론트엔드 개발자 송노겸입니다.
          <br />
          6년차 프론트엔드 개발자로 모빌리티, 커머스 등의 스타트업에서 웹과 앱 서비스를
          개발/배포/운영 경험이 있습니다.
          <br />
          주로 웹/웹뷰, 관리자 페이지 개발을 담당했으며 팀내 필요에 따라 백엔드 개발 역할도
          겸하였습니다.
          <br />
          평소 구성원들과 기술적인 토론을 선호하며 같이 성장하는 환경을 지향합니다.
          <br />
        </p>
      </template>
    </base-content>

    <base-content>
      <template slot="content-title">기술</template>
      <template slot="content-desc">
        <div class="skill-box">
          <div class="skill__title">Front-End</div>
          <div class="skill__desc">
            <ul>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Vue.js, Vuex, Vue-Query</li>
              <li>React, Recoil, React-Query, GraphQL</li>
              <li>Next.js</li>
              <li>NativeScript-Vue</li>
            </ul>
            활용해 프론트 환경 및 기능, 화면 등을 구성할 수 있습니다.
          </div>
        </div>
        <div class="skill-box">
          <div class="skill__title">Back-End</div>
          <div class="skill__desc">
            <ul>
              <li>Python, Django REST framework</li>
              <li>PHP</li>
              <li>Node.js, Express.js</li>
              활용해 RESTful API, 인증, 웹서버 등을 구성할 수 있습니다.
            </ul>
          </div>
        </div>
        <div class="skill-box">
          <div class="skill__title">DevOps</div>
          <div class="skill__desc">
            <ul>
              <li>
                AWS(RDS, S3, CloudFont, Cloudwatch, Route53, EC2)
              </li>
              <li>
                GitHub Actions, Travis
              </li>
              활용해 어플리케이션 레이어, CI 환경 등을 구성할 수 있습니다.
            </ul>
          </div>
        </div>
      </template>
    </base-content>

    <base-content>
      <template slot="content-title">경력</template>
      <template slot="content-desc">
        <div class="experience">
          <div class="experience__title">
            <h3 class="title">에이블리코퍼레이션(에이블리)</h3>
            <div class="description">
              <p class="job">Front-End</p>
              <p class="period">2021.01 ~</p>
            </div>
          </div>

          <div class="experience-box">
            <div class="experience__desc">
              <h4 class="title">버티컬 카테고리 확장</h4>
              <div class="description">
                <p class="summary">
                  속한 스쿼드에서 버티컬 카테고리 확장에 필요한 가설을 검증 및 실험<br />
                  이에 필요한 웹뷰, 어드민 개발
                </p>
                <ul>
                  <li>초기 스펙 문서 작성 - 여러 변수 및 고려사항 파악</li>
                  <li>MVP로 빠르게 배포 후 가설 검증 및 실험</li>
                  <li>화면 및 기능에 맞게 SSR, CSR, ISR방식으로 구현</li>
                  <li>
                    앱내 웹뷰를 스택 레이어 방식으로 화면이 전환 - 좋아요 기능 등 이전 화면과 싱크를
                    맞춰야 하는 로직을 로컬스토리지로 구현
                    <br />
                    비슷한 환경 또는 기능을 구현할 때 사용 가능하도록 로직 및 훅 분리 구현
                  </li>
                  <li>
                    Vue.js -> React.js환경으로 이전한지 얼마되지 않아 필요한 디자인시스템 및 훅 등을
                    구현
                  </li>
                  <li>
                    웹뷰내에 실험에 필요한 통계 이벤트 로깅 구현
                  </li>
                  <li>여가, 플레이스, TPO등...</li>
                </ul>
                <p class="tech">React, Next.js, React-Query, Recoil, Vue.js, TypeScript</p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">통계 이벤트 로거</h4>
              <div class="description">
                <p class="summary">
                  웹뷰내에서 반복적으로 선언해서 사용하는 이벤트 로깅을 유연하고 확장 가능하게
                  개선<br />
                </p>
                <ul>
                  <li>여러 이벤트를 한번에 처리할 수 있도록 각 타입에 맞게 추상화</li>
                </ul>
                <p class="tech">TypeScript</p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">리뷰 검수</h4>
              <div class="description">
                <p class="summary">
                  리뷰(텍스트, 포토)를 더 빠르고 쉽게 검수할 수 있도록 개선
                </p>
                <ul>
                  <li>
                    키보드로만 검수를 진행할 수 있도록 다양한 단축키 구현 및 방식 변경
                  </li>
                  <li>
                    리뷰를 한눈에 파악할 수 있도록 UI개선
                  </li>
                  <li>
                    검수 정책이 변경에 따른 로직 리팩토링
                  </li>
                </ul>
                <p class="tech">Vue.js, TypeScript</p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">프로모션용 빌더</h4>
              <div class="description">
                <p class="summary">
                  프로모션 화면을 개발하는 반복 작업을 청산<br />
                  자주 사용되는 프로모션 기능과 화면 구성을 쉽게 등록, 관리할 수 프로모션용 빌더
                </p>
                <ul>
                  <li>
                    서버와 타입별 컴포넌트를 Server Driven UI(SDUI)방식과 유사하게 구현
                  </li>
                  <li>
                    각 타입별 컴포넌트(프로모션용 디자인시스템)을 개발
                  </li>
                  <li>등록된 화면을 json형식으로 웹뷰-서버-어드민 통신</li>
                </ul>
                <p class="tech">Vue.js, TypeScript</p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">클래스 모델</h4>
              <div class="description">
                <p class="summary">
                  각 도메인별로 사용되고 있는 모델은 동일하나 비즈니스 로직이 반복적으로 선언되는
                  문제점을 개선
                </p>
                <ul>
                  <li>
                    class-transformer 라이브러리를 활용하여 서버에서 받은 plain object를 class
                    object로 컨버팅
                  </li>
                  <li>
                    class-object내 해당 도메인 모델이 사용되는 비즈니스 로직을 구현
                  </li>
                </ul>
                <p class="tech">Vue.js, TypeScript, class-transformer</p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">채용 페이지</h4>
              <div class="description">
                <p class="summary">
                  회사 및 채용 관련 정보를 확인할 수 있는
                  <a href="https://ably.team/" target="_blank">페이지</a>
                </p>
                <ul>
                  <li>Headless CMS인 prismic을 활용하여 화면 구현</li>
                  <li>prismic의 정해진 형식의 UI를 커스텀</li>
                  <li>
                    리쿠르팅 시스템인 Greenhouse과 연동
                  </li>
                  <li>
                    Prismic CMS, Greenhouse의 사용 정책 문서화
                  </li>
                  <li>Prismic, Greenhouse과 데이터 통신을 GraphQL로 구현</li>
                </ul>
                <p class="tech">React, Next.js, GraphQL, TypeScript, Prismic CMS, Greenhouse</p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">배너</h4>
              <div class="description">
                <p class="summary">
                  가장 사용 빈도가 높지만 각 스쿼드마다 따로 문서로 관리되던 배너 일정을 운영어드민
                  한 곳에서 관리
                  <br />
                  현재/미래 배너를 날짜, 화면 위치/타입, 사이즈, 순서등을 관리
                </p>
                <ul>
                  <li>
                    앱에서 배너가 필요한 화면 타입에 맞게 등록 및 일정 관리할 수 있는 화면/기능 구현
                  </li>
                </ul>
                <p class="tech">Vue.js, TypeScript</p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">실험 플랫폼</h4>
              <div class="description">
                <p class="summary">
                  분산되어 관리가 제대로 되지 않는 실험 관련된 이벤트, 파라미터등을 운영어드민 한
                  곳에서 관리
                </p>
                <ul>
                  <li>
                    웹뷰/앱에서 사용되는 앰플리튜드, 파이어베이스, 브레이즈등의 실험,A/B테스트 관련
                    이벤트 및 파라미터를 등록, 관리할 수 있도록 화면/기능 구현
                  </li>
                </ul>
                <p class="tech">Vue.js, TypeScript</p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">어드민 관리</h4>
              <div class="description">
                <p class="summary">
                  내부 어드민, 셀러(파트너스, 셀러스) 어드민을 전반적으로 운영 및 관리
                </p>
                <ul>
                  <li>
                    지속적으로 관리 및 운영을 해야하는 기능이 추가될 때마다 어드민내 화면/기능 개발
                  </li>
                  <li>
                    유지보수 어려움이 있는 레거시 어드민 기능을 이전
                  </li>
                </ul>
                <p class="tech">Vue.js, TypeScript, PHP</p>
              </div>
            </div>
          </div>
        </div>

        <div class="experience">
          <div class="experience__title">
            <h3 class="title">미로(라스트오더)</h3>
            <div class="description">
              <p class="job">Front-End, Back-End</p>
              <p class="period">2019.02 ~ 2020.06 (17개월)</p>
            </div>
          </div>

          <div class="experience-box">
            <div class="experience__desc">
              <h4 class="title">결제 이전</h4>
              <p class="period">2020.03 ~ 2020.05</p>
              <div class="description">
                <p class="summary">
                  결제 API 이전 및 PG사 변경으로 인한 신규 개발
                </p>
                <ul>
                  <li>기존 php와 pg사 관련 로직 청산</li>
                  <li>신규 결제 로직 구현</li>
                  <li>운영, 어드민, 주문중개로 분리된 API 통합</li>
                  <li>결제 부분취소 추가</li>
                  <li>쿠폰, 포인트 등 결제시 할인에 관련된 로직 개선</li>
                </ul>
                <p class="tech">JavaScript, Python(Django), Php</p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">성인인증</h4>
              <p class="period">2020.03 ~ 2020.03</p>
              <div class="description">
                <p class="summary">성인인증 상품 추가</p>
                <ul>
                  <li>일반상품/성인상품 UI/기능 구분 처리</li>
                  <li>본인인증 로직 구현</li>
                </ul>
                <p class="tech">JavaScript, Python(Django), HTML, CSS</p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">회원통합 및 로그인/회원가입 개편</h4>
              <p class="period">2020.02 ~ 2020.04</p>
              <div class="description">
                <p class="summary">
                  일반계정, 소셜계정 통합 및 로그인/회원가입 리뉴얼
                </p>
                <ul>
                  <li>회원통합 및 연동 상태에 따른 UI/기능 구분 처리</li>
                  <li>소셜 가입시 회원여부, 인증 및 가입 절차 구현</li>
                  <li>소셜 계정과 일반계정 통합 및 연동</li>
                </ul>
                <p class="tech">JavaScript, Python(Django), PHP</p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">지도 서비스 개편</h4>
              <p class="period">2020.01 ~ 2020.02</p>
              <div class="description">
                <p class="summary">
                  카카오 지도 API를 사용하여 지도 커스텀 및 UI 리뉴얼
                </p>
                <ul>
                  <li>
                    기존 모든 매장 위치를 마커로 인한 속도 저하와 잦은 호출 문제를 영역범위,
                    드래그/줌 제어 등을 통해 속도 및 사용성 개선
                  </li>
                  <li>특정 반경 또는 동일 좌표내 마커 및 오버레이 정보 중첩 처리</li>
                  <li>Redis를 사용하여 좌표 클러스터링 기능 개발</li>
                  <li>위치기반 API 개발</li>
                </ul>
                <p class="tech">
                  JavaScript, Kakao Map, Python(Django), HTML
                </p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">편의점(세븐일레븐) 업주용 앱 런칭</h4>
              <p class="period">2019.12 ~ 2020.05</p>
              <div class="description">
                <p class="summary">
                  주문관리(주문확정, 주문완료, 주문취소등), 실시간 주문확인, 상품등관리, 통계 등의
                  기능을 제공하는 편의점 업주 전용앱
                </p>
                <ul>
                  <li>
                    Firebase ML Kit (Barcode Scan)연동을 통해 빠른 바코드 등록
                  </li>
                  <li>Socket통신을 통한 실시간 주문확인</li>
                  <li>Andriod, iOS 배포 및 관리</li>
                </ul>
                <p class="tech">
                  NativeScript-Vue, Vuex, Socket.io, Python(Django), Firebase
                </p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">영업자용 앱 런칭</h4>
              <p class="period">2019.10 ~ 2019.12</p>
              <div class="description">
                <p class="summary">
                  영업자분들이 쉽게 매장을 등록할 수 있고 관리할 수 있는 영업 전용앱
                </p>
                <ul>
                  <li>트리형 사용자 권한 기능 구현</li>
                </ul>
                <p class="tech">
                  Vue, Vuex, JavaScript, Python(DRF), Material-UI
                </p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">일반 업주용 앱 런칭</h4>
              <p class="period">2019.06 ~ 2020.04</p>
              <div class="description">
                <p class="summary">
                  주문관리(주문확정, 주문완료, 주문취소), 실시간 주문확인, 상품등관리, 통계 등의
                  기능을 제공하는 일반 업주 전용앱
                </p>
                <ul>
                  <li>화면 및 기능 개발</li>
                  <li>컴포넌트 캐싱, 코드스플리팅 등을 통한 속도 개선</li>
                  <li>업주 니즈에 맞게 화면 및 기능 개발/개선</li>
                  <li>Socket통신을 통한 실시간 주문확인 구현</li>
                  <li>백엔드 개발</li>
                  <li>추후 신규 업주용 앱 코드 베이스</li>
                </ul>
                <p class="tech">
                  NativeScript-Vue, Vuex, Socket.io, Python(Django)
                </p>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">라스트오더 프론트/백엔드 개발 및 유지보수</h4>
              <p class="period">2019.02 ~ 2020.06</p>
              <div class="description">
                <p class="summary">운영 서비스</p>
                <ul>
                  <li>
                    기본적인 유지보수 및 운영 비롯해 비즈니스 요구에 맞는 다양한 화면 및 기능 구현
                  </li>
                  <li>
                    각 도메인, 목적에 맞게 로직 및 API 분리
                  </li>
                  <li>모여있는 로직, 모듈화 진행</li>
                  <li>
                    모듈 독립성을 최대한 보장하기 위해 의존성 최소화로 로직 개선
                  </li>
                  <li>리플로우, 리페인트 최소화로 렌더링 개선</li>
                  <li>스켈레톤 UI, 이미지 로딩 등을 통한 UX 개선</li>
                  <li>
                    각 화면에서 라이프사이클 훅을 상황에 맞게 고려하여 API 호출 최소화 및 사용성
                    개선
                  </li>
                  <li>
                    Hash 및 history를 제어하여 브라우저 뒤로가기, 외부 공유 등의 상황에서 사용자가
                    바라보고 있던 화면이 유지되도록 개선
                  </li>
                  <li>
                    배송, 포인트 정책등 변경 및 신규 정책등이 추가/변경됨에 따라 화면 및 기능 구현
                  </li>
                  <li>다양한 브라우저, 앱 환경 대응</li>
                  <li>기존 PHP로 작성된 레거시를 Django로 부분 이전 작업</li>
                  <li>RDS read, master 등 프론트, 백엔드 프로덕션과 개발 환경 분리</li>
                  <li>전반적인 환경 배포 환경 관리</li>
                </ul>
                <p class="tech">
                  JavaScript, jQuery, PHP, Python(Django), HTML, CSS, Webpack, MySQL, S3, Nginx,
                  Apache, EC2, Docker, Travis CI, Onsen UI
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="experience">
          <div class="experience__title">
            <h3 class="title">알티스</h3>
            <div class="description">
              <p class="job">Front-End, Back-End</p>
              <p class="period">2018.02 ~ 2018.10 (9개월)</p>
            </div>
          </div>

          <div class="experience-box">
            <div class="experience__desc">
              <h4 class="title">SK하이닉스 통근버스 관제시스템</h4>
              <p class="period">2018.04 ~ 2018.10</p>
              <div class="description">
                <p class="summary">
                  SK하이닉스 통근버스 앱 및 어드민 페이지 개발
                </p>
                <ul>
                  <li>웹뷰 및 API 개발</li>
                  <li>관리자 페이지 및 API 개발</li>
                  <li>화면 기획</li>
                </ul>
                <p class="tech">
                  JavaScript, HTML, CSS, jQuery, Java, Spring Boot, MyBatis, MySQL
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="experience">
          <div class="experience__title">
            <h3 class="title">디오네르(크라운구스)</h3>
            <div class="description">
              <p class="job">Front-End, Publishing</p>
              <p class="period">2016.12 ~ 2018.01 (14개월)</p>
            </div>
          </div>

          <div class="experience-box">
            <div class="experience__desc">
              <h4 class="title">쇼핑몰 유지보수 및 리뉴얼</h4>
              <p class="period">2016.12 ~ 2018.1</p>
              <div class="description">
                <p class="tech">PHP, HTML, CSS, jQuery, JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </base-content>

    <base-content>
      <template slot="content-title">Education.</template>
      <template slot="content-desc">
        2011.03 ~ 2017.08 서경대학교 컴퓨터과학과
      </template>
    </base-content>

    <base-content>
      <template slot="content-title">Etc.</template>
      <template slot="content-desc">
        2016.05 정보처리기사 취득 <br />
        2015.04 ~ 2015.12 한이음 ICT멘토링 참여
      </template>
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
@import '@/assets/css/_mixin.scss';
.container {
  @include mobile {
    width: 90%;
  }
  @include desktop {
    width: 100%;
  }
  max-width: 50rem;
  margin: 5rem auto;

  .header {
    margin: 4rem auto;
    align-items: center;
    justify-content: space-between;
    @include mobile {
      display: block;

      .header-box {
        margin: 2rem 0;
      }
    }
    @include desktop {
      display: flex;
    }
    .header-box {
      .header__title {
        margin: 0.4rem 0;
        font-size: 1.8rem;
      }
      .header__subtitle {
        font-size: 1rem;
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
          font-size: 1.3rem;
        }
      }
    }
  }

  .skill-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 0 1.6rem 0;
    .skill__title {
      width: 32%;
      font-size: 1.1rem;
      font-weight: 700;
    }
    .skill__desc {
      width: 68%;
      ul {
        list-style-position: inside;
        text-indent: 1rem;
        li {
          line-height: 1.5;
          padding: 0 0 0 1.5rem;
          text-indent: -1.5rem;
          text-align: left;
        }
      }
    }
  }

  .experience {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 0 1rem 0;
    margin: 0 0 2rem 0;
    border-bottom: 1px solid #eee;

    @include mobile {
      display: block;
      .experience__title {
        width: 100%;
        text-align: center;
        margin: 0 0 2rem;
      }
      .experience-box {
        width: 85%;
        margin: 0 auto;
        text-align: left;
      }
    }
    @include desktop {
      display: flex;
      .experience__title {
        width: 35%;
        text-align: left;
        margin: 0;
      }
      .experience-box {
        width: 65%;
        margin: 0;
        text-align: left;
      }
    }

    .experience__title {
      .title {
        font-size: 1.2rem;
        font-weight: 700;
      }
      .description {
        font-size: 1rem;
        margin: 0.5rem 0;
        line-height: 1.2;
        .period {
          font-weight: 300;
        }
      }
    }
    .experience-box {
      display: flex;
      flex-direction: column;

      .experience__desc {
        margin: 0 0 2rem 0;

        .title {
          font-size: 1.4rem;
          font-weight: 500;
        }
        .period {
          font-size: 1rem;
          font-weight: 300;
        }
        .description {
          margin: 0.5rem 0;
          line-height: 1.2;
          .summary {
            margin: 1rem 0;
            font-size: 1rem;
            font-weight: 400;

            > a {
              text-decoration: underline;
            }
          }

          ul {
            text-indent: 1rem;
            list-style-position: inside;
            li {
              padding: 0 0 0 1.5rem;
              text-indent: -1.5rem;
              font-size: 1rem;
              line-height: 1.5;
            }
          }
          .tech {
            font-size: 1rem;
            margin: 1rem 0;
          }
        }
      }
    }
  }

  .freelancer {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 0 1rem 0;
    margin: 0 0 2rem 0;
    border-bottom: 1px solid #eee;

    @include mobile {
      display: block;
      .freelancer__title {
        width: 100%;
        text-align: center;
        margin: 0 0 2rem;
      }
      .freelancer-box {
        width: 85%;
        margin: 0 auto;
        text-align: left;
      }
    }
    @include desktop {
      display: flex;
      .freelancer__title {
        width: 32%;
        text-align: left;
        margin: 0;
      }
      .freelancer-box {
        width: 68%;
        margin: 0;
        text-align: left;
      }
    }

    .freelancer__title {
      .title {
        font-size: 1.4rem;
        font-weight: 700;
      }
      .description {
        font-size: 1rem;
        margin: 0.5rem 0;
        line-height: 1.2;
        .period {
          font-weight: 300;
        }
      }
    }
    .freelancer-box {
      display: flex;
      flex-direction: column;

      .freelancer__desc {
        margin: 0 0 3rem 0;

        .title {
          font-size: 1.3rem;
          font-weight: 500;
        }
        .period {
          font-size: 1rem;
          font-weight: 300;
        }
        .description {
          margin: 0.5rem 0;
          line-height: 1.2;
          .summary {
            margin: 1rem 0;
            font-size: 1rem;
            font-weight: 400;
          }

          ul {
            text-indent: 1rem;
            list-style-position: inside;
            li {
              padding: 0 0 0 1.5rem;
              text-indent: -1.5rem;
              font-size: 1rem;
              line-height: 1.5;
            }
          }
          .tech {
            font-size: 1rem;
            margin: 1rem 0;
          }
        }
      }
    }
  }
}
</style>
