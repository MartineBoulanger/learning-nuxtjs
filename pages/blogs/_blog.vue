<template>
  <div>
    <h1>Blog Post {{ slug.blog }}</h1>
  </div>
</template>

<script>
import consola from 'consola'
export default {
  name: 'BlogPostPage',
  layout: 'defaultLayout',
  validate({ params }) {
    return /^\d+$/.test(params.blog)
  },
  data() {
    return {
      slug: this.$route.params,
    }
  },
  created() {
    consola.ready(this.$route.params)
  },
}
</script>
