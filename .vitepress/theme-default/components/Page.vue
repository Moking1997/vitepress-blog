<template>
  <div class="content">
    <slot name="top" />
    <div class="md-header">
      <div class="md-title">{{ pageData.title }}</div>
      <span id="jinrishici-sentence">正在加载今日诗词....</span>
      <div class="md-date">{{ pageData.frontmatter.date }}</div>
    </div>
    <ul class="catalog">
      <li class="catalog-item" v-for="item in pageData.headers">
        <a
          class="level level-2"
          v-if="item.level == 2"
          :href="'#' + item.slug"
          >{{ item.title }}</a
        >
        <a
          class="level level-3"
          v-if="item.level == 3"
          :href="'#' + item.slug"
          >{{ item.title }}</a
        >
      </li>
    </ul>
    <Content />
    <NextAndPrevLinks />
    <PageEdit />
    <slot name="bottom" />
  </div>
</template>

<script>
  import NextAndPrevLinks from "./NextAndPrevLinks.vue";
  import PageEdit from "./PageEdit.vue";
  import { usePageData } from "vitepress";
  export default {
    components: { NextAndPrevLinks, PageEdit },

    setup() {
      const pageData = usePageData();

      return {
        pageData,
      };
    },
  };
</script>

<style>
  .content {
    margin: 0 auto;
    padding: 0.025rem 2.5rem 2rem;
    /* if this is moved to a variable, add it to BuySellAds.vue */
    max-width: 50rem;
  }

  .content a {
    color: var(--accent-color);
  }

  .content a:hover {
    text-decoration: underline;
  }

  .content img {
    max-width: 100%;
  }
  /*
  .content div > h1:first-child, .content div > h2:first-child {
    margin-top: 0;
  } */
  .md-header {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .md-title {
    font-size: 2rem;
    font-weight: bold;
    color: #353535;
  }
  #jinrishici-sentence {
    margin: 0.5rem 0 0.4rem;
  }
  .md-date {
    font-size: 1rem;
    font-style: italic;
    color: #aaa;
  }
  .catalog {
    border-left: 1px solid #ccc;
    position: fixed;
    top: 100px;
    right: 6vw;
    padding-left: 12px;
  }
  .catalog-item {
    display: block;
  }

  .level-2 {
    color: #313131 !important;
    font-size: 12px;
  }
  .level-3 {
    margin: 10px 0;
    display: list-item;
    list-style-position: inside;
    color: #717171 !important;
    padding-left: 1rem;
    font-size: 12px;
    list-style-type: circle;
  }
  .level-3::marker {
    font-size: 2px;
    padding-right: 10px;
    width: 100px;
  }
  @media screen and (max-width: 1200px) {
    .catalog {
      display: none;
    }
  }
</style>
