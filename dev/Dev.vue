<template>
  <div>
    <div>VALUE: {{ value }}</div>
    <el-select-infinite-scroll
      v-model="value"
      @reached-bottom="handleReachedBottom"
      @visible-change="handleVisibleChange"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select-infinite-scroll>
  </div>
</template>

<script>
import ElSelectInfiniteScroll from '../src/components/ElSelectInfiniteScroll'
import Mock from 'mockjs'

const Random = Mock.Random

const defaultData = () => {
  const options = []
  for (let i = 0; i < 10; i++) {
    options.push({
      value: 'Options' + (i + 1),
      label: Random.name(),
    })
  }
  return options
}

export default {
  name: 'dev',
  components: { ElSelectInfiniteScroll },
  data() {
    return {
      options: defaultData(),
      value: '',
    }
  },
  methods: {
    handleReachedBottom() {
      this.options.push({
        value: 'Options' + Date.now(),
        label: 'new ' + Random.name(),
      })
    },
    handleVisibleChange(visible) {
      if (!visible) {
        // this.options = defaultData()
      }
    },
  },
}
</script>
