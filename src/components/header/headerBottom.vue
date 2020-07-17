<template>
    <div class="header-bottom">
        <a href="" class="logo"><img src="@/assets/logo.png" alt=""></a>
        <div class="bnt-search">
            <input type="text" name="" id="">
            <input type="text" name="" id="">
            <datalist></datalist>
            <button>Найти</button>
        </div>
        <div class="user-index">
            <div class="user-elem">
                <div class="user-img">
                    <img src="@/assets/icon-avatar.png" alt="">
                </div>
                <div class="auth-blog">
                    <div class="auth-elem">Вход</div>
                    <div class="auth-elem">Регистрация</div>
                </div>
                
            </div>
            <div class="user-elem">
            <div class="user-img">
                <img src="@/assets/icon-shopping-cart.png" alt="">
            </div>
            <div class="auth-elem">Корзина пуста</div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    
}
</script>

<style lang="sass">
    .header-bottom
        margin-top: 40px
        display: flex
        align-items: center
        justify-content: space-between
    .logo
        width: 10%
    .user-index
        display: flex
    .user-img
        width: 30px
    .user-elem
        display: flex
    .auth-blog

</style>