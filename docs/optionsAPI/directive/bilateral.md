# 6 双向绑定指令

## 6.1 概述

vue 提供了 v-model 双向数据绑定指令，用来辅助开发者在不操作 DOM 的前提下，快速获取表单的数据。

## 6.2 简单使用

```vue
<!-- 假设在data中定义这样的数据:
  data() {
    return {
      username: "Jerry",
      province: "1"
    }
  }
 -->

<p>用户名：{{ username }}</p>
<input type="text" v-model="username"/>

<p>选中的省份：{{ province }}</p>
<select v-model="province">
  <option value="">请选择</option>
  <option value="1">北京</option>
  <option value="2">河北</option>
  <option value="3">黑龙江</option>
</select>
```

## 6.3 修饰符

| 修饰符    | 作用                             | 示例                           |
| --------- | -------------------------------- | ------------------------------ |
| `.number` | 自动将用户输入的值转换为数值类型 | `<input v-model.number="age">` |
| `.trim`   | 自动顾虑用户输入的首位空白字符   | `<input v-model.trim="msg">`   |
| `.lazy`   | 在`change`时而非`input`时更新    | `<input v-model.lazy="msg">`   |

```vue
<!-- 假设在data中定义这样的数据:
  data() {
    return {
      n1: "",
      n2: ""
    }
  }
 -->

<input type="text" v-model.number="n1"/> +
<input type="text" v-model.number="n2"/> =
<span>{{ n1 + n2 }}</span>
```
