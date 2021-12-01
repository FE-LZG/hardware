
# 5 事件绑定指令

## 5.1 基础用法

我们可以使用 `v-on`指令 (通常缩写为 `@` 符号) 来监听 DOM 事件，并在触发事件时执行一些 JavaScript。用法为 v-on:click="methodName" 或使用快捷方式 @click="methodName",如有疑问，官方[事件绑定](https://v3.vuejs.org/guide/events.html#multiple-event-handlers)

```html
<div id="app">
  <button @click="handlerClick">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
```

```js
Vue.createApp({
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    handlerClick (){
      this.counter += 1
    }
  }
}).mount('#app')
```

## 5.2 事件传参

* 如果想要给事件传递参数，那么只需要在事件调用的小括号中传入即可
* 如果想要访问原始的 DOM 事件，可以用特殊变量 $event 把它传入方法

```html
<div id="app">
  <button @click="handlerClick('Hello WanLum', $event)">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
```

```js
Vue.createApp({
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    handlerClick (str, event){
      console.log(str, event);
    }
  }
}).mount('#app')
```

## 5.3 事件修饰符

在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。
尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。
为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。

| 修饰符     | 作用                                                         |
| ---------- | ------------------------------------------------------------|
| `.stop`    | 阻止单击事件继续传播                                         |
| `.prevent` | 提交事件不再重载页面                                         |
| `.capture` | 添加事件监听器时使用事件捕获模式 (内部元素触发的事件先在此处理，然后才交由内部元素进行处理) |
| `.self`    | 只当在 event.target 是当前元素自身时触发处理函数             |
| `.once`    | 事件将只会触发一次                                        |

```html
<!-- 阻止单击事件继续传播 -->
<a @click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a @click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form @submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div @click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div @click.self="doThat">...</div>
```

## 5.4 按键修饰符

在监听**键盘事件**时，我们经常需要检查详细的按键。Vue 允许为 `v-on` 或者 `@` 在监听键盘事件时添加按键修饰符：

```html
!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input @keyup.enter="submit" />
```
