import{_ as n,c as s,o as e,d as a}from"./app.7360bdf4.js";const v='{"title":"2. Vite\u7684\u57FA\u672C\u4F7F\u7528","description":"","frontmatter":{},"relativePath":"Vite/basicuse.md","lastUpdated":1637842934199}',r={},l=a(`<h1 id="_2-vite\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1">2. Vite\u7684\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#_2-vite\u7684\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>Vite \u9700\u8981 Node.js \u7248\u672C &gt;= 12.0.0</p></div><ul><li><strong>Step. 1\uFF1A</strong> \u5728\u60F3\u8981\u521B\u5EFA\u9879\u76EE\u7684\u76EE\u5F55\u4E0B\u6253\u5F00\u547D\u4EE4\u884C\uFF0C\u5E76\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u521B\u5EFA\u9879\u76EE\uFF1A</li></ul><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> init vite@latest
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li><strong>Step. 2\uFF1A</strong> \u5B9A\u4E49\u9879\u76EE\u540D\u79F0\uFF0C\u591A\u4E2A\u5355\u8BCD(project) \u8BF7\u4F7F\u7528&quot;_&quot;\u4E0B\u5212\u7EBF\u5206\u9694(my_project)</li></ul><div class="language-bash line-numbers-mode"><pre><code>? Project name: \xBB vite-project
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li><strong>Step. 3\uFF1A</strong> \u9009\u62E9\u8981\u521B\u5EFA\u7684\u9879\u76EE\u4F7F\u7528\u4EC0\u4E48\u6846\u67B6\uFF1A</li></ul><div class="language-bash line-numbers-mode"><pre><code>\u221A Project name: <span class="token punctuation">..</span>. vite-project
? Select a framework: \xBB - Use arrow-keys. Return to submit.
    vanilla
<span class="token operator">&gt;</span>   vue
    react
    preact
    lit
    svelte
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><strong>Step. 4\uFF1A</strong> \u9009\u62E9\u662F\u5426\u4F7F\u7528&quot;TypeScript&quot;</li></ul><div class="language-bash line-numbers-mode"><pre><code>\u221A Project name: <span class="token punctuation">..</span>. vite-project
\u221A Select a framework: \xBB vue
? Select a variant: \xBB - Use arrow-keys. Return to submit.
<span class="token operator">&gt;</span>   vue
    vue-ts
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>Step. 5\uFF1A</strong> \u9879\u76EE\u521B\u5EFA\u597D\u4E4B\u540E\uFF0C\u542F\u52A8\u9879\u76EE\u7684\u6B65\u9AA4\uFF1A</li></ul><div class="language-bash line-numbers-mode"><pre><code>Done. Now run:

  <span class="token builtin class-name">cd</span> vite-project
  <span class="token function">npm</span> <span class="token function">install</span>
  <span class="token function">npm</span> run dev
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>Step. 6\uFF1A</strong> \u9879\u76EE\u521B\u5EFA\u597D\u4E4B\u540E\u7684\u76EE\u5F55\u7ED3\u6784</li></ul><div class="language-txt line-numbers-mode"><pre><code>vite-project
    \u2502
    \u251C\u2500\u2500\u2500\u25BA .vscode
    \u2502
    \u251C\u2500\u2500\u2500\u25BA node_modules \u9879\u76EE\u4F9D\u8D56\u5305
    \u2502
    \u251C\u2500\u2500\u2500\u25BA public \u9879\u76EE\u516C\u7528\u6587\u4EF6
    \u2502
    \u251C\u2500\u2500\u2500\u25BA src \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u25BA  assets \u9759\u6001\u6587\u4EF6\u76EE\u5F55
    \u2502                     \u2502
    \u251C\u2500\u2500\u2500\u25BA .gitignore      \u251C\u2500\u2500\u2500\u2500\u2500\u25BA  components \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u76EE\u5F55
    \u2502                     \u2502
    \u251C\u2500\u2500\u2500\u25BA index.html      \u251C\u2500\u2500\u2500\u2500\u2500\u25BA  App.vue \u4E3B\u7EC4\u4EF6(\u6839\u7EC4\u4EF6)
    \u2502                     \u2502
    \u251C\u2500\u2500\u2500\u25BA package.json    \u2514\u2500\u2500\u2500\u2500\u2500\u25BA  main.js \u9879\u76EE\u5165\u53E3\u6587\u4EF6
    \u2502
    \u251C\u2500\u2500\u2500\u25BA README.md
    \u2502
    \u251C\u2500\u2500\u2500\u25BA vite.config.js \u914D\u7F6E\u6587\u4EF6
    \u2502
    \u25BC
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,14),p=[l];function i(c,t,b,u,o,m){return e(),s("div",null,p)}var g=n(r,[["render",i]]);export{v as __pageData,g as default};
