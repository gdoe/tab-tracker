<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title >Login</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field 
              v-model="email" 
              label="Email" 
              type="email"/>
            <br>
            <v-text-field 
              v-model="password" 
              label="Password" 
              type="password"/>
            <br>
            <div class="error" v-html="error"/>
            <br>
            <v-btn dark class="cyan" @click="login">Login</v-btn>
          </div>
        </div>
      </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email has changed', value)
  //   }
  // },
  methods: {
    async login() {
      try {
        var response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
  // mounted() {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 1000)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
