# 1. 内容渲染指令

## 1.1 `v-text`

`v-text`指令，用来渲染DOM元素的文本内容，类似于JavaScript中的`innerText`

```html
<body>
  <div id="app">
    <p v-text="username"></p>

    <p v-text="gender">性别</p>

    <div v-text="book"></div>
  </div> 
  <script>
    // 创建 Vue 的实例对象
    const vm = new Vue({
      // el 属性是固定的写法，表示当前 vm 实例要控制页面上的哪个区域，接收的值是一个选择器
      el: '#app',
      // data 对象就是要渲染到页面上的数据
      data: {
        username: '法外狂徒',
        gender: '男',
        book: '<h2>理想国</h2>'
      }
    })
  </script>
</body>
```

**特点：**

1. `v-text` 指令会覆盖元素内默认的内容
2. `v-text` 指令不能解析标签

## 1.2 插值表达式

vue 提供的 {{ }} 语法，专门用来解决 v-text 会覆盖默认文本内容的问题。
这种 {{ }} 语法的专业名称是插值表达式(英文名为:Mustache)。

```html
<!-- 使用 {{}} 插值表达式， 将对应的值渲染到元素的内容节点中 -->
<!-- 同时保留元素自身的默认值 -->

<p>姓名：{{ username }}</p>
<p>性别：{{ gender }}</p>
```

**特点：**

1. 相对于 v-text 指令来说，插值表达式在开发中更常用一些!因为它不会覆盖元素中默认的文本内容。
2. 不能在标签的属性中使用插值表达式

## 1.3 `v-html`

如果要把包含 HTML 标签的字符串渲染为页面的 HTML 元素， 需要用到 v-html 这个指令。

```html
<!-- 假设 data 中定义了名为 discription 的数据， 数据的值为包含 HTML 标签的字符串: -->
<!-- '<h5 style="color: red;">书山有路勤为径，学海无涯苦作舟</h5>' -->

<p v-html="discription"></p>
```

::: warning 注意

在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。只在可信内容上使用 v-html，永不用在用户提交的内容上。
:::
