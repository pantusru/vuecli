<template>
    <div class="footer-pantus">
        <div class="footer-block">
            <div class="footer-elem">
                <div class="footer-ul">
                    <h2 class="footer-item">Пантус</h2>
                    <router-link v-for="link in links" :key ="link.id" class="footer-link" :to="link.href">{{ link.name}} </router-link>
                </div>
            </div>
            <div class="footer-elem">
                <div class="footer-ul">
                    <h2 class="footer-item">Партнерство</h2>
                    <router-link v-for="link in links_bottom" :key ="link.id" class="footer-link" :to="link.href">{{ link.name}} </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            links:[
                {name:"О компании", href: ""},
                {name:"Вакансии", href: ""},     
                {name:"Помощь", href: ""}, 
                {name:"Возврат", href: ""}, 
                {name:"Единая служба качества ", href: ""}, 
                {name:"Контакты", href: ""},
            ],
            links_bottom:[
                {name:"Спецпредложение для оптовиков", href: ""},
                {name:"Поставщикам", href: ""}, 
            ]
        }
    }
}
</script>

<style lang="sass">


</style>