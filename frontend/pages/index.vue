<template>
  <section class="container">
    <div>
      <div v-if="loggedIn()" class="content">
        <h2>ログイン中です</h2>
        <nuxt-link class="buttton is-warning" to="/logout">
          <span class="icon"><i class="fa fa-sign-out"></i></span>
          <span>logout</span>
        </nuxt-link>
      </div>

      <div v-if="!loggedIn()" class="content">
        <h2>ログインしてください</h2>
        <nuxt-link class="buttton is-primary" to="/login">
          <span class="icon"><i class="fa fa-sign-in"></i></span>
          <span>login</span>
        </nuxt-link>
      </div>
      <a href="https://rails-app-20200927.auth.ap-northeast-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&response_type=token&client_id=ume2e13blds4nst4kkecu1nnr&redirect_uri=http://localhost:3333/callback

">アンカーテキスト</a>

      <button class="button is-primary" @click="ping">Ping</button>
      <button class="button is-danger" @click="secured">Secured</button>
    </div>
  </section>
</template>

<script>
import AWS from 'aws-sdk'
console.log(AWS)
export default {
  methods: {
    loggedIn() {
        return this.$auth0.isAuthenticated()
      },
      async ping() {
        const ret = await
        this.$axios.get('/api/v1/ping')
        console.log(ret)
      },
      async secured() {
        const ret = await
        this.$axios.$get('/api/v1/secured', { headers: {Authorization: 'Bearer: ' + this.$auth0.getIdToken()}})
        console.log(ret)
      }
    }
  };
</script>
