<template>
  <footer>
    <div class="container">     
      <ul class="icons">
        <li class="icon">
          <a
            href="https://github.com/hi1004/Food-Search-App"
            target="_blank"><img
              src="~/assets/images/footer/footer_github_icon.png"
              alt="github" />
          </a>
        </li>
        <li class="icon">
          <a
            href="javascript:void(0)"
            target="_blank">          
            <img
              src="~/assets/images/footer/footer_slack_icon.png"
              alt="slack" />
          </a>
        </li>
        <li class="icon">
          <a
            href="https://buscp.org/"
            target="_blank">
            <img
              src="~/assets/images/footer/footer_PROJECT_icon.png"
              alt="PROJECT" />
          </a>
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
      justify-content:space-between;
      height: 15vh;
      .logo {
        display: inline-block;
        position: relative;
        line-height: 40px;
        opacity: 0.9;
      }
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
          width: 30px;
          overflow: hidden;
          margin-right: 16px;
          a {
            img {
              width: 100%;
              transition: transform 0.4s;
            }
            &:hover img {
            transform: scale(1.05);
          }
          }
          &:last-child {
            margin-right: 0;
          }
          
        }
      }
    }
  }

</style>
