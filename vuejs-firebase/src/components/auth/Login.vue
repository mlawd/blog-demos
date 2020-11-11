<template>
  <form @submit.prevent="login">
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <a href="#" class="btn" @click="google">
      Login with Google
    </a>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { watch, defineComponent } from "vue";
import { user, google, useLogin } from ".";
import router from "@/router";

export default defineComponent({
  props: {
    loginReturnUrl: { type: String, default: "/" },
  },
  setup(props) {
    watch(
      () => user.value,
      newUser => {
        if (newUser) {
          router.push(props.loginReturnUrl);
        }
      }
    );
    return {
      ...useLogin(),
      google,
    };
  },
});
</script>
