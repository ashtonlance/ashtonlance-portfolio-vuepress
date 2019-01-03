<template>
  <div class="project-list">
    <a
      :href="post.frontmatter.link"
      v-for="post in posts"
      :key="post.title"
      class="post"
      :style="{ backgroundImage: `url(${post.frontmatter.thumbnail})` }"
    >
      <div class="info">
        <h2>{{ post.frontmatter.title }}</h2>
        <span v-if="post.frontmatter.description">{{ post.frontmatter.description }}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/works/") && !x.frontmatter.works_index)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  }
};
</script>

<style scoped>
.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.post {
  position: relative;
  width: 48.5%;
  height: 50vh;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  margin-bottom: 5vw;
  cursor: pointer;
}

@media screen and (min-width: 769px) {
  .post {
    height: 500px;
  }
}

.post:visited {
  color: #222;
}

.info {
  position: absolute;
  left: 0;
  top: 2rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 1);
  max-width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.19), 6px 6px 6px rgba(0, 0, 0, 0.23);
}

.info h2 {
  display: inline-block;
  width: auto;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0;
}

.info span {
  display: inline-block;
  width: auto;
  margin: 0;
  margin-left: 0.5rem;
  font-size: 0.8rem;
}
</style>
