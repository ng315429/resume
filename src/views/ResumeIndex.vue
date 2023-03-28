<template>
  <div class="container">
    <div class="header">
      <div class="header-box">
        <h1 class="header__title">송노겸</h1>
        <p class="header__subtitle">프론트엔드 개발자</p>
      </div>
      <div class="header-box">
        <div class="add-info">
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
          프론트엔드 개발자로 모빌리티, 커머스 등의 스타트업에서 웹과 앱 서비스를 개발/배포/운영한
          경험이 있습니다.
          <br />
          주로 웹/웹뷰, 관리자 페이지 개발을 담당하였습니다.
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
              <li>Vue.js, Nuxt.js, Vuex</li>
              <li>React, Next.js Recoil, React-Query</li>
              <li>NativeScript-Vue</li>
            </ul>
          </div>
        </div>
        <!-- <div class="skill-box">
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
        </div> -->
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
                  스쿼드에서 버티컬 카테고리 확장에 필요한 가설 검증 및 실험
                </p>
                <ul>
                  <li>Next.js의 SSR, CSR, ISR방식 구현 및 SSR내 부분 CSR 구현</li>
                  <li>
                    환경 이전 - 공용 디자인시스템 및 훅 구현
                  </li>
                  <li>
                    React-Query로 캐싱, 서버 상태 관리 및 중복 호출 제거, optimistic update 등
                    처리로 유저 사용성 최적화 및 서버와의 통신 최소화
                  </li>
                  <li>Recoil을 활용하여 Portal 컴포넌트 상태 관리</li>
                  <li>
                    앱내 웹뷰를 스택 레이어 방식으로 화면 전환 - React-Query 캐싱 또는 로컬스토리지
                    등으로 데이터 싱크 구현
                  </li>
                  <li>
                    통계 이벤트 로깅 구현
                  </li>
                  <li>SEO 처리</li>
                  <li>선물하기, 유저 리뷰 콘텐츠 커뮤니티, 퍼스널컬러 테스트 등</li>
                </ul>
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
                  <li>Headless CMS인 Prismic, 리쿠르팅 시스템인 Greenhouse 활용</li>
                  <li>GraphQL를 활용하여 Prismic, Greenhouse과 데이터 통신 구현</li>
                  <li>Next.js와 Prismic의 meta를 활용하여 SEO 처리</li>
                  <li>Prismic의 정해진 형식 UI 커스텀</li>
                  <li>Prismic CMS, Greenhouse 사용 정책 문서화</li>
                </ul>
              </div>
            </div>

            <!-- <div class="experience__desc">
              <h4 class="title">프로모션용 빌더</h4>
              <div class="description">
                <p class="summary">
                  프로모션 화면을 개발하는 반복 작업을 청산<br />
                  자주 사용되는 프로모션 기능과 화면 구성을 쉽게 등록, 관리할 수 프로모션용 빌더
                </p>
                <ul>
                  <li>
                    서버와 타입별 컴포넌트를 Server-Driven UI(SDUI)방식과 유사하게 구현
                  </li>
                  <li>
                    각 타입별 컴포넌트(프로모션용 디자인시스템)를 개발
                  </li>
                  <li>등록된 프로모션을 json형식으로 웹뷰-서버-어드민 통신</li>
                  <li>Vue, React환경에서 렌더방식 각각 구현</li>
                </ul>
              </div>
            </div> -->

            <div class="experience__desc">
              <h4 class="title">클래스 모델</h4>
              <div class="description">
                <p class="summary">
                  각 도메인별로 사용되고 있는 모델들은 동일하나 비즈니스 로직이 반복적으로 선언되는
                  문제점을 개선
                </p>
                <ul>
                  <li>
                    class-transformer 라이브러리를 활용, 서버에서 받은 plain object를 class object로
                    컨버팅
                  </li>
                  <li>
                    class-object내 해당 도메인 모델이 사용되는 비즈니스 로직을 구현
                  </li>
                </ul>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">통계 이벤트 로거</h4>
              <div class="description">
                <p class="summary">
                  웹뷰에서 반복적으로 선언해서 사용하는 이벤트 로깅을 유연하고 확장 가능하게 개선
                </p>
                <ul>
                  <li>여러 이벤트를 한번에 처리할 수 있도록 각 타입에 맞게 추상화</li>
                  <li>이벤트 타입별 추상 클래스로 처리</li>
                </ul>
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
                    웹뷰/앱에서 사용되는 앰플리튜드, 파이어베이스, 브레이즈 등의 통계 이벤트를
                    관리할 수 있는 화면/기능 개발
                  </li>
                </ul>
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
              <h4 class="title">편의점/라스트오더 업주용 앱 런칭</h4>
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
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">위치 서비스 개편</h4>
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
                  <li>Redis내 좌표 클러스터링된 데이터를 활용하여 위치 기반 API 개발</li>
                </ul>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">결제 및 인증</h4>
              <div class="description">
                <p class="summary">
                  결제 서버 분리 및 PG사 변경으로 인한 신규 개발
                </p>
                <ul>
                  <li>결제 로직 구현 및 데이터 구조 설계</li>
                  <li>운영, 어드민, 주문중개로 분리된 API 통합</li>
                  <li>성인용품 - 웹뷰내 상품 타입별 주문/결제 등 로직 개선</li>
                </ul>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">회원통합</h4>
              <div class="description">
                <p class="summary">
                  일반계정, 소셜계정 통합 및 로그인/회원가입 리뉴얼
                </p>
                <ul>
                  <li>소셜 계정과 일반계정 통합 및 연동</li>
                </ul>
              </div>
            </div>

            <div class="experience__desc">
              <h4 class="title">라스트오더 프론트/백엔드 개발 및 유지보수</h4>
              <div class="description">
                <p class="summary">운영 서비스</p>
                <ul>
                  <li>라이프사이클 훅을 상황에 맞게 고려하여 API 호출 최소화</li>
                  <li>리플로우, 리페인트 최소화하기 위해 영역, 렌더링 관련된 로직 개선</li>
                  <li>각 도메인, 목적에 맞게 로직 및 API 분리</li>
                  <li>컴포넌트 의존성 최소화</li>
                  <li>스켈레톤 UI, 이미지 로딩 등을 통한 UX 개선</li>
                  <li>
                    Hash 및 history를 제어하여 브라우저 뒤로가기, 외부 공유 등의 상황에서 사용자가
                    바라보고 있던 화면이 유지되도록 개선
                  </li>
                  <li>기존 PHP로 작성된 레거시를 Django로 이전</li>
                  <li>RDS read, master 분리로 로드 퍼포먼스 개선</li>
                  <li>프로덕션과 개발 환경 분리</li>
                </ul>
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
              <div class="description"></div>
            </div>
          </div>
        </div>

        <div class="experience">
          <div class="experience__title">
            <h3 class="title">디오네르(크라운구스)</h3>
            <p class="job">Front-End</p>
            <div class="description">
              <p class="period">2016.12 ~ 2018.01 (14개월)</p>
            </div>
          </div>

          <div class="experience-box">
            <div class="experience__desc">
              <h4 class="title">쇼핑몰 유지보수 및 리뉴얼</h4>
              <p class="period">2016.12 ~ 2018.1</p>
            </div>
          </div>
        </div>
      </template>
    </base-content>

    <base-content>
      <template slot="content-title">교육</template>
      <template slot="content-desc">
        2011.03 ~ 2017.08 서경대학교 컴퓨터과학과
      </template>
    </base-content>

    <base-content>
      <template slot="content-title">기타</template>
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
