<template>
  <div class="project-list">
    <a
      :href="post.frontmatter.link"
      v-for="post in posts"
      :key="post.title"
      class="post"
      target="_blank"
      rel="noopener noreferrer"
      :style="{ backgroundImage: `url(${post.frontmatter.thumbnail})` }"
    >
      <div class="info">
        <h2>{{ post.frontmatter.title }}</h2>
        <span v-if="post.frontmatter.description">{{ post.frontmatter.description }}</span>
      </div>
    </a>
    <h3>I work with:</h3>
    <ul>
      <li v-for="item in $page.frontmatter.technologies" v-html="item.technology"></li>
    </ul>
    <p v-html="$page.frontmatter.hero_description"></p>
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
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  margin-bottom: 2rem;
  cursor: pointer;
  color: #222;
  transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.post:hover {
  box-shadow: 0 12px 42px 0 rgba(0, 0, 0, 0.1);
  transform: translate(5px, -5px);
  transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), box-shadow 0.3s ease-in-out 0.15s, -webkit-box-shadow 0.3s ease-in-out 0.15s;
}

@media screen and (min-width: 769px) {
  .post {
    width: 48.5%;
    height: 500px;
    margin-bottom: 5vw;
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
  box-shadow: 0 11px 26px rgba(0, 0, 0, 0.19), 7px 5px 13px rgba(0, 0, 0, 0.19);
}

.info h2 {
  display: inline-block;
  width: auto;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0;
}

.info span {
  display: block;
  width: auto;
  margin: 0;
  margin-top: 8px;
  font-size: 0.8rem;
}

ul {
  margin: 0 auto 0 auto;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  width: 100%;
}

li {
  text-align: center;
  padding: 8px;
}

@media screen and (max-width: 773px) {
  li {
    margin-top: .5rem;
    margin-right: 0
  }
}

li:last-of-type {
  margin-right: 0;
}
</style>
