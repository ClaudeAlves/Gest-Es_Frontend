<template>
  <h1>fichier composant helloworld</h1>
  <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    fetch("/api/messages/hello")
        .then((response) => response.text())
        .then((data) => {
          this.msg = data;
        })
  }
}
</script>