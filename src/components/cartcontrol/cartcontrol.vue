<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-on:click.stop.prevent="decreaseCart" v-show="food.count>0">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" v-on:click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  export default {
    props: {   // 接收父组件传递过来的参数
      food: {
        type: Object
      }
    },
    methods: {
      addCart(event) {
        if (!event._constructed) {  // 阻止浏览器和移动端点击事件不一致问题
          return
        }
        if (!this.food.count) {
        //  this.food.count = 1    这条语句不能执行
          Vue.set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
        this.$emit('add', event.target)
      },
      decreaseCart(event) {
        if (!event._constructed) {  // 阻止浏览器和移动端点击事件不一致问题
          return
        }
        if (this.food.count) {
          this.food.count--
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      opacity: 1
      transform: translate3D(0, 0, 0)
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0,160,220)
        transform: rotate(0)
      &.move-enter-active, &.move-leave-active
        transition: all 0.4s linear
        transform: rotate(180deg)
      &.move-enter, &.move-leave-active
        opacity: 0
        transform: translate3D(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147,153,159)
    .cart-add
      display: inline-block
      line-height: 24px
      font-size: 24px
      padding: 6px
      color: rgb(0,160,220)
</style>
