<template>
  <button class="component-b" @click="increment"> {{ text }} </button>
</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class ComponentB extends Vue {

    private count = 0;

    get times(): string {

      return this.count > 1
        ? 'times'
        : 'time';
    }

    get text(): string {

      return `I have been clicked ${this.count} ${this.times} in Component B`;
    }

    public increment(): void {

      this.count += 1;
    }
  }
</script>
