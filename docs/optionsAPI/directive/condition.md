# 2 条件渲染指令

## 2.1 `v-if/v-else-if/v-else`

条件渲染指令用来辅助开发者按需控制 虚拟DOM 是否被编译为真实DOM。

```vue
  <div v-if="type === 'A'">优秀</div>
  <div v-else-if="type === 'B'">良好</div>
  <div v-else-if="type === 'C'">一般</div>
  <div v-else>差</div>
```

## 2.2 `v-show`

`v-show`指令用来辅助开发者按需控制DOM的样式`display:none`或者`display:block`

```vue
  <p v-show="flag">这是被 v-show 控制的元素</p>
```

## 2.3 `v-if` 和 `v-show` 的区别

1. **共同点**

* v-if 和 v-show 都能实现元素的显示隐藏

2. **不同点**

* v-show 只是简单的控制元素的 display 属性，而 v-if 才是条件渲染（条件为真，元素将会被渲染，条件 为假，元素会被销毁）；
* v-show 有更高的首次渲染开销，而 v-if 的首次渲染开销要小的多；
* v-if 有更高的切换开销，v-show 切换开销小
* v-if 有配套的 v-else-if 和 v-else，而 v-show 没有
* v-if 可以搭配 template 使用，而 v-show 不行

::: warning

* v-else 指令必须配合 v-if 指令一起使用，否则它将不会被识别
* v-else-if 指令必须配合 v-if 指令一起使用，否则它将不会被识别
:::
