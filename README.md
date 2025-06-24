# el-select-infinite-scroll

A dropdown select component based on Element UI that supports infinite scrolling for loading options, suitable for Vue 2 projects. This component listens for the dropdown menu reaching the bottom to facilitate scenarios where more data needs to be loaded asynchronously.

## Features

- Wrapper around [Element UI](https://element.eleme.cn/) `el-select` component
- Supports infinite scrolling and automatically triggers loading more data
- Configurable scroll buffer
- Compatible with all `el-select` properties and events

## Installation

```bash
npm install @jason12306/el-select-infinite-scroll
```

## Usage

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElSelectInfiniteScroll from 'el-select-infinite-scroll'

Vue.use(ElementUI)
Vue.component('ElSelectInfiniteScroll', ElSelectInfiniteScroll)
```

In your template:

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
      // Logic to load more data
    },
  },
}
</script>
```

## Props

| Name                | Description                          | Type   | Default                |
| ------------------- | ------------------------------------ | ------ | ---------------------- |
| buffer              | Distance from bottom to trigger load | Number | 40                     |
| scrollWrapClassname | Class name of the scroll container   | String | 'el-scrollbar\_\_wrap' |

## Events

| Event Name     | Description                       | Callback Arguments |
| -------------- | --------------------------------- | ------------------ |
| reached-bottom | Triggered when scrolled to bottom | None               |

## Slots

- Default slot: Used to insert `el-option` components

## Compatibility

- Depends on Vue 2.x
- Depends on Element UI 2.x

## Example

See the [`dev/Dev.vue`](dev/Dev.vue) file.
