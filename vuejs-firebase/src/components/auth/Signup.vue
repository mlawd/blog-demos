<template>
  <form @submit.prevent="signup">
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <a href="#" class="btn" @click="google">
      Signup with Google
    </a>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { watch, defineComponent } from "vue";
import { user, google, useSignup } from ".";
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
      ...useSignup(),
      google,
    };
  },
});
</script>
