<template>
  <p>Signing in...</p>
</template>

<script>
export default {
  mounted() {
    debugger;
    this.$auth0.setTokenByQuery()
    this.$router.replace('/')
  }
};

</script>
