<template>
  <div>
    <main
      v-show="page_loading"
      class="main"
    >
      <facebook-loader
        v-if="skeleton === 'skeleton-page-one'"
        :unique-key="uniqueKey"
      />
    </main>
    <nuxt
      v-show="!page_loading"
      :nuxt-child-key="nuxtUniqueKey"
    />
  </div>
</template>

<script lang="ts">
  import {FacebookLoader} from 'vue-content-loader';

  export default {
    components: {
      FacebookLoader
    },
    data() {
      return {
        uniqueKey: Math.random().toString(36).substring(2),
        nuxtUniqueKey: Math.random().toString(36).substring(2),
      }
    },
    computed: {
      skeleton(): any {
        // @ts-ignore
        return this.$store.state.skeleton;
      },
      page_loading(): any {
        // @ts-ignore
        return this.$store.state.page_loading;
      }
    }
  }
</script>

<style>
  html {
    font-size: 16px;
    word-spacing: 1px;
    text-size-adjust: 100%;
    font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
