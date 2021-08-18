---
works_index: true
hero_text: "<strong>Ashton Lance </strong><br>Frontend Developer<br>in Chattanooga,
  TN."
title: Hello
technologies:
- technology: <i class="fab fa-react"></i></br>React
- technology: <i class="fab fa-vuejs"></i></br>Vue
- technology: <i class="fab fa-js-square"></i></br>Javascript
- technology: <i class="fab fa-laravel"></i></br>Laravel
- technology: <i class="fab fa-wordpress"></i></br>Wordpress
- technology: <i class="fas fa-globe"></i></i></br>CraftCMS
- technology: <i class="fas fa-shopping-bag"></i></i></br>Shopify

---
<Hero :text="$page.frontmatter.hero_text" />
<WorksList />