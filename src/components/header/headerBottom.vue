<template>
  <div class="conteiner">
    <div class="header-bottom">
      <a href="" class="logo"><img src="@/assets/logo.png" alt=""/></a>
      <div class="blog-bnt-search">
        <input class="inp-search" type="text" id="" placeholder="Введите" />
        <button class="bnt-search">Найти</button>
      </div>
      <div class="user-index">
        <div class="user-elem">
          <div class="user-img">
            <img src="@/assets/icon-avatar.png" alt="" />
          </div>
          <div class="auth-blog">
            <a href="" class="auth-elem">Вход</a>
            <a href="" class="auth-elem">Регистрация</a>
          </div>
        </div>
        <a href="" class="user-elem link-hover">
          <div class="user-img">
            <img src="@/assets/icon-shopping-cart.png" alt="" />
          </div>
          <div class="auth-elem">Корзина пуста</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.header-bottom
    margin-top: 40px
    margin-bottom: 20px
    display: flex
    align-items: center
    justify-content: space-between
    .logo
        +size(2)
    .blog-bnt-search
        +size(6)
        display: flex
        .inp-search
            border: 2px solid #e1002b
            border-top-left-radius: 5px
            border-bottom-left-radius: 5px
            +size(10)
            padding-left: 10px
        .bnt-search
            color: #fff
            padding: 10px
            background-color: #e1002b
    .user-index
        +size(4)
        display: flex
        justify-content: space-between
        .user-elem
            display: flex
            align-items: center
            &::last-child
                margin-left: 10px
            .user-img
                width: 30px
                margin-right: 20px
            .auth-blog

            .auth-elem
                display: block
                color: #777
                font-size: 13px
                &:hover
                    color: #98001F
</style>
