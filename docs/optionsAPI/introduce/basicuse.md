# 2. Vue的基本使用

::: tip 目标
熟悉Vue的基本步骤
:::

## 2.1 基本步骤

* **Step. 1：** 新建一个HTML文件，在`head`结束标签上面，引入Vue库文件。

```html
<script src="https://unpkg.com/vue@3.2.20/dist/vue.global.js"></script>
```

* **Step. 2：** 在`html`文件的body标签中，创建一个`div`标签，给`div`标签添加`id`属性值为`app`。

```html{5}
<head>
  <!-- 省略代码 -->
</head>
<body>
  <div id="app"></div>
</body>

```

* **Step. 3：** 在`body`标签中，`div`标签平级下面创建`script标签`，编写以下代码。

```js{3,5}
<script>
  // 创建Vue实例
  const vm = Vue.createApp({});
  // 把Vue实例挂载在id为app的div上
  vm.mount('#app');
</script>
```

* **Step. 4：** 在`createApp`方法中定义数据

```js{3-6}
  // 创建Vue实例
  const vm = Vue.createApp({
    data(){
      return {
        name: "WanLum"
      }
    }
  });
  // 把Vue实例挂载在id为app的div上
  vm.mount('#app');
```

::: warning 注意
Step. 4：中 `data(){return {}}`是固定写法，其中定义的数据是`key:value`的形式
:::

* **Step. 5：** 使用 `插值表达式` 把定义的数据 `name` 展示在`id`为`app`的`div`中。

```html{5}
<!-- 省略代码 -->
<body>
  <div id="app">
    <!-- {{}} 双花括号被称为 插值表达式 -->
    {{ name }}
  </div>
</body>
```

## 2.2 `data`属性

组件的 `data` 选项是一个函数。`Vue` 会在创建新组件实例的过程中调用此函数。它应该返回一个对象，然后 `Vue` 会通过响应性系统将其包裹起来，并以 `$data` 的形式存储在组件实例中。

```html
<body>
  <div id="app">{{ name }}</div>

  <script>
    // 创建Vue实例
    const vm = Vue.createApp({
      data() {
        return {
          name: "WanLum"
        }
      }
    });
    // 把Vue实例挂载在id为app的div上
    vm.mount('#app');
  </script>
</body>

</html>
```

## 2.3 `methods`属性

在Vue中，为了实现业务，我们必然会用到很多方法，这时候，我们可以使用`methods`选项，它是一个对象。
Vue自动为`methods`绑定`this`，为了保证方法作为事件监听或回调函数的时候，保证正确的`this`指向，我们要避免在`methods`中定义方法的时候使用箭头函数。

```html
  <div id="app">
    <button v-if="showBtn" v-on:click="handleClick">Click Me</button>
  </div>

  <script>
    const vm = Vue.createApp({
      // data 函数 一定要返回一个对象
      data() {
        return {
          showBtn: 'true'
        }
      },
      // 方法区
      methods: {
        handleClick(){
          console.log('Hello WanLum');
        }
      }
    });
    // 通过vm(view model)把 username渲染到id为app的元素中
    vm.mount('#app');
  </script>
```