<template>
  <footer>
    <div class="container">
      <ul class="icons">
        <li class="icon">
          <a
            href="https://github.com/hi1004/Food-Search-App"
            target="_blank"><img
              src="~/assets/images/footer/footer_github_icon.png"
              alt="frontend_github" />
          </a>
          <span>Frontend</span>
        </li>
        <li class="icon">
          <a
            href="https://github.com/Kim0914/Food_Server"
            target="_blank">
            <img
              src="~/assets/images/footer/footer_github_icon.png"
              alt="backend_github" />
          </a>
          <span>Backend</span>
        </li>
        <li class="icon">
          <a
            href="https://join.slack.com/t/4weekproject/shared_invite/zt-12998u5z7-e0~Jy9I27Raeb3u19v3yhQ"
            target="_blank">
            <img
              src="~/assets/images/footer/footer_slack_icon.png"
              alt="slack" />
          </a>
          <span>Slack</span>
        </li>
        <li class="icon">
          <a
            href="https://buscp.org/"
            target="_blank">
            <img
              src="~/assets/images/footer/footer_PROJECT_icon.png"
              alt="PROJECT" />
          </a>
          <span>PROJECT</span>
        </li>
      </ul>
      <Logo />
      <div class="copyright">
        &copy;COPYRIGHT {{ new Date().getFullYear() }}. PROJECT. ALL RIGHTS RESERVED.
      </div>
    </div>
  </footer>
</template>

<script>
  import Logo from '~/components/Logo';

  export default {
    components: {
      Logo,
    },
  };
</script>

<style lang="scss" scoped>
  footer {
    padding: 30px 0;
    text-align: center;
    font-family: 'Oswald', sans-serif;
    background: #2f2d30;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 15vh;
 
      .copyright {
        color: $white;
        font-size: 14px;
        line-height: 14px;
      }
      ul.icons {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;
        li.icon {
          width: 55px;
          overflow: hidden;
          margin-right: 16px;
          a {
            img {
              width: 20px;
              height: 20px;
              transition: transform 0.4s;
            }
            &:hover img {
              transform: scale(1.05);
            }
          }
          span {
            color: $white;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
