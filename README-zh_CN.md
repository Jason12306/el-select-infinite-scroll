# el-select-infinite-scroll

基于 Element UI 的下拉选择组件，支持无限滚动加载选项，适用于 Vue 2 项目。该组件通过监听下拉菜单滚动到底部事件，便于实现异步加载更多数据的场景。

## 组件特性

- 基于 [Element UI](https://element.eleme.cn/) 的 `el-select` 组件封装
- 支持无限滚动，自动触发加载更多
- 可配置滚动缓冲区
- 兼容所有 `el-select` 的属性和事件

## 安装

```bash
npm install @jason12306/el-select-infinite-scroll
```

## 使用方法

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElSelectInfiniteScroll from 'el-select-infinite-scroll'

Vue.use(ElementUI)
Vue.component('ElSelectInfiniteScroll', ElSelectInfiniteScroll)
```

在模板中使用：

```vue
<template>
  <el-select-infinite-scroll v-model="value" @reached-bottom="loadMore">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select-infinite-scroll>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      options: [],
    }
  },
  methods: {
    loadMore() {
      // 加载更多数据逻辑
    },
  },
}
</script>
```

## 配置参数

| 属性名              | 说明                     | 类型   | 默认值                 |
| ------------------- | ------------------------ | ------ | ---------------------- |
| buffer              | 距离底部多少像素触发加载 | Number | 40                     |
| scrollWrapClassname | 滚动容器的 class 名称    | String | 'el-scrollbar\_\_wrap' |

## 事件

| 事件名         | 说明             | 回调参数 |
| -------------- | ---------------- | -------- |
| reached-bottom | 滚动到底部时触发 | 无       |

## 插槽

- 默认插槽：用于插入 `el-option` 组件

## 兼容性

- 依赖 Vue 2.x
- 依赖 Element UI 2.x

## 示例

可参考 [`dev/Dev.vue`](dev/Dev.vue) 文件获取完整示例。
