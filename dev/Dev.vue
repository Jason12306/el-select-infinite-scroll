<template>
  <div>
    <div>VALUE: {{ value }}</div>
    <el-select-infinite-scroll v-model="value" :data="data" :find-cur-index-fn="(d) => d.value ">
      <template v-slot="{ list }">
        <el-option
          v-for="item in list"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </template>
    </el-select-infinite-scroll>
  </div>
</template>

<script>
import ElSelectInfiniteScroll from '../src/components/ElSelectInfiniteScroll'
import Mock from 'mockjs'

const Random = Mock.Random

const defaultData = () => {
  const options = []
  for (let i = 0; i < 35; i++) {
    options.push({
      value: 'Options' + (i + 1),
      label: 'Label' + (i + 1),
    })
  }
  return options
}

export default {
  name: 'dev',
  components: { ElSelectInfiniteScroll },
  data() {
    return {
      data: [],
      value: '',
    }
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      // this.data = defaultData()
      this.value = 'Options5'
    }, 3000)

     setTimeout(() => {
      this.data = defaultData()
      // this.value = 'Options20'
    }, 2000)
  },
}
</script>
