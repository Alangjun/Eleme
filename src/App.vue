<template>
  <div>
    <v-header v-bind:seller="seller"></v-header><!--通过v-header将seller内容传递给header组件-->
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view v-bind:seller="seller"></router-view> <!--通过router-view将seller内容传递给goods组件-->
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import {urlParse} from './common/js/util'   //   /表示当前路径,./表示根目录路径,../ 表示上一级目录路径
  import header from './components/header/header.vue'

  const ERR_OK = 0
  export default {
    data() {
      return {
        seller: {
          id: (() => {  // 商家的id
            let queryParam = urlParse()
            return queryParam.id
          })()
        }
      }
    },
    created() {
      this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.seller = Object.assign({}, this.seller, response.data)
        }
      })
    },
    components: {
      'v-header': header
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../static/css/reset.css"   // 引入自定义的css  @是stylus的语法，可以引用任何路径下的语法
  @import "./common/stylus/mixin.styl"
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px   // 注意注释不能加在行里，可以在代码后边
      border-1px(rgba(7,17,27,0.1))   // 调用border-1px这个函数
      .tab-item
        flex: 1
        text-align:center
        & > a  // &表示.tab-item
          display:block
          font-size: 14px
          color:rgb(77,85,93)
          &.active   // &这里表示的是a
            color: rgb(240,20,20)


</style>
