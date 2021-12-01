# 4. 属性绑定指令

## 4.1 基本用法

如果需要为元素的属性动态绑定属性值，则需要用到 v-bind 属性绑定指令。

```html
<!-- 假设有如下的 data 数据：
data: {
  inputValue: "请输入内容",
  imgSrc: "https://cn.vuejs.org/images/logo.png"
}
-->

<!-- 使用 v-bind 指令， 为 input 的 placeholder 动态绑定属性值 -->
<input type="text" v-bind:placeholder="inputValue">
<!-- 也可以简写为: -->
<!-- <input type="text" :placeholder="inputValue"> -->
<br>
<!-- 使用 v-bind 指令， 为 img 的 src 动态绑定属性值 -->
<img v-bind:src="imgSrc" alt="" >
<!-- 也可以简写为: -->
<!-- <img :src="imgSrc" alt="" > -->
```

## 4.2 绑定 `Class`

* **对象语法：**

```html
<!-- 假设有如下的 data 数据：
data: {
  isActive: true,
}
 -->
 <!-- 下面的语法表示 当isActive为true时，active这个类名 存在，否则不存在 -->
<div v-bind:class="{ active: isActive }"></div>
```

* **数组语法：**

```html
<!-- 假设有如下的 data 数据：
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
 -->
 <!-- 下面的语法 -->
<div v-bind:class="[activeClass, errorClass]"></div>
<!-- 渲染为:  -->
<div class="active text-danger"></div>
```

## 4.3 绑定内联样式

`v-bind:style` 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名：

* **对象语法：**

```html
<!-- 假设有如下的 data 数据：
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
-->
<div v-bind:style="styleObject"></div>
```

* **数组语法：**

```html
<!-- 假设有如下的 data 数据：
data: {
  baseStyles: {
    color: 'red',
    fontSize: '13px'
  },
  overridingStyles:{
    margin: '40px',
    height: '500px'
  }
}
-->
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```
