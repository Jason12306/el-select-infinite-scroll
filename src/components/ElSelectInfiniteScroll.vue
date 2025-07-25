<template>
  <el-select
    ref="selectInfiniteScrollRef"
    v-bind="$attrs"
    v-on="$listeners"
    @visible-change="onVisibleChange"
  >
    <!-- 透传具名插槽
    <template v-for="(_, slot) in $scopedSlots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope"/>
    </template> -->

    <!-- 透传默认插槽 -->
    <slot v-bind="{ list: list }" />
    <div ref="guard"></div>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      limit: 10,
      pageNo: 1,
      scrollbarEl: null,
      visible: false,
    }
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    findCurIndexFn: {
      type: Function,
    },
  },
  computed: {
    list() {
      return this.data.slice(0, this.limit * this.pageNo)
    },
  },
  methods: {
    startObserver() {
      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (!this.visible) {
            return
          }
          const entry = entries[0]
          if (entry.isIntersecting) {
            this.pageNo++
          }
        },
        {
          root: this.scrollbarEl,
          rootMargin: '0px 0px 40px 0px',
        }
      )
      this.intersectionObserver.observe(this.guardEl)
    },
    onVisibleChange(visible) {
      this.visible = visible
      if (visible) {
        // ... nothing to do
      } else {
        // this.pageNo = 1
      }
    },
    
    adjustPageNo() {
      // 如果 this.$attrs.value 的值存在于 list 的索引外
      // 则 将 pageNo 设置为合适的值 保证 this.$attrs.value 在可见范围内
      if (this.pageNo !== 1) return

      const value =this.$attrs.value

      if(value === undefined || value === null) return
      if(!this.data || !this.data.length) return

      const visibleIndex = this.list.findIndex(
        (d) => this.findCurIndexFn(d) === this.$attrs.value
      )

      // 当前值不在切片中
      if (visibleIndex === -1) {
        const existIndex = this.data.findIndex(
          (d) => this.findCurIndexFn(d) === this.$attrs.value
        )
        while(this.pageNo * this.limit < existIndex) {
          this.pageNo +=1
        }
      }

      console.log("this.pageNo", this.pageNo);
      
    }
  },
  watch: {
    "$attrs.value": {
      handler(newVal) {
        console.log('$attrs.value', newVal)
        this.adjustPageNo()
      },
      immediate: true,
    },

    data: {
      handler(newVal) {
        console.log('data', newVal)
        this.adjustPageNo()
      },
      immediate: true,
    },
  },
  mounted() {
    const scrollbarWrap =
      this.$refs.selectInfiniteScrollRef.$el.getElementsByClassName(
        'el-scrollbar__wrap'
      )

    this.scrollbarEl = scrollbarWrap[0]

    this.guardEl = this.$refs.guard

    this.startObserver()

  },
  beforeDestroy() {
    this.intersectionObserver.disconnect()
    this.intersectionObserver = null
  },
}
</script>

<style scoped></style>
