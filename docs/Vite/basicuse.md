# 2. Vite的基本使用

::: warning 注意
Vite 需要 Node.js 版本 >= 12.0.0
:::

* **Step. 1：** 在想要创建项目的目录下打开命令行，并输入以下命令创建项目：

```bash
npm init vite@latest
```

* **Step. 2：** 定义项目名称，多个单词(project) 请使用"_"下划线分隔(my_project)

```bash
? Project name: » vite-project
```

* **Step. 3：** 选择要创建的项目使用什么框架：

```bash
√ Project name: ... vite-project
? Select a framework: » - Use arrow-keys. Return to submit.
    vanilla
>   vue
    react
    preact
    lit
    svelte
```

* **Step. 4：** 选择是否使用"TypeScript"

```bash
√ Project name: ... vite-project
√ Select a framework: » vue
? Select a variant: » - Use arrow-keys. Return to submit.
>   vue
    vue-ts
```

* **Step. 5：** 项目创建好之后，启动项目的步骤：

```bash
Done. Now run:

  cd vite-project
  npm install
  npm run dev
```

* **Step. 6：** 项目创建好之后的目录结构

```txt
vite-project
    │
    ├───► .vscode
    │
    ├───► node_modules 项目依赖包
    │
    ├───► public 项目公用文件
    │
    ├───► src ────────────┬─────►  assets 静态文件目录
    │                     │
    ├───► .gitignore      ├─────►  components 自定义组件目录
    │                     │
    ├───► index.html      ├─────►  App.vue 主组件(根组件)
    │                     │
    ├───► package.json    └─────►  main.js 项目入口文件
    │
    ├───► README.md
    │
    ├───► vite.config.js 配置文件
    │
    ▼
```
