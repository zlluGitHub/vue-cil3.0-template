<template>
<div class="child">
  <p>我是儿子，父亲对我说： {{value}}</p>
  <a href="javascript:;" rel="external nofollow" @click="returnBackFn">回应</a>
</div>
</template>
<script>
export default {
  props: {
    value: String
  },
  model: {
    // prop: 'give',
    // event: 'returnBack'
  },
  methods: {
    returnBackFn() {
      this.$emit('input', '还你200块');
    }
  }
}
</script>