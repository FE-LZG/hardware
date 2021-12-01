# 3 列表渲染指令

我们可以用 `v-for` 指令基于一个数组来渲染一个列表。
`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的别名

## 3.1 用 `v-for` 渲染一组元素

```vue
<!-- 假设在data中定义这样的数据:
 data() {
    return {
      items: [
        { message: 'Foo' }, 
        { message: 'Bar' }
      ]
    }
  }
 -->

 <ul id="list">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```

## 3.2 用 `v-for` 展示索引及元素

```vue
<!-- 假设在data中定义这样的数据:
  data() {
    return {
      items: [{ message: 'Foo' }, { message: 'Bar' }]
    }
  }
 -->

<ul id="list">
  <li v-for="(item, index) in items">
     {{ index }} - {{ item.message }}
  </li>  
</ul>
```

::: warning
v-for 指令中的 `item` 项和 `index` 索引都**是形参**，可以根据需要进行重命名。例如 (user, i) in list
:::

## 3.3 给 `v-for` 添加 `key`

当 `Vue` 正在更新使用 `v-for` 渲染的元素列表时，它默认使用“就地更新”的策略。
但这种默认的性能优化策略，会导致有状态的列表无法被正确更新。
为了给 `Vue` 一个提示，以便它能跟踪每个节点的身份，从而在保证有状态的列表被正确更新的前提下，
提升渲染的性能。此时，需要为每项提供一个唯一的 `key` 属性

```vue
<!-- 假设在data中定义这样的数据:
  data() {
    return {
     todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
    }
  }
 -->

<ul id="list">
  <li v-for="(item, index) in todos" :key="item.id">
     {{ index }} - {{ item.title }}
  </li>  
</ul>
```

::: warning

* key 的值只能是字符串或数字类型
* key 的值必须具有唯一性（即：key 的值不能重复）
* 建议把数据项 id 属性的值作为 key 的值（因为 id 属性的值具有唯一性）
* 使用 index 的值当作 key 的值没有任何意义（因为 index 的值不具有唯一性）
* 建议使用 v-for 指令时一定要指定 key 的值（既提升性能、又防止列表状态紊乱）
:::

## 3.4 `v-for` 与 `v-if` 一同使用

当它们处于同一节点，`v-if` 的优先级比 `v-for` 更高，这意味着 `v-if` 将没有权限访问 `v-for` 里的变量：

```vue

<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo.name }}
</li>
```

可以把 `v-for` 移动到 `<template>` 标签中来修正：

```vue
<template v-for="todo in todos" :key="todo.name">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```
