import{_ as a,c as e,o as t,aT as s}from"./chunks/framework.CRBGg74g.js";const k=JSON.parse('{"title":"Última Atualização","description":"","frontmatter":{},"headers":[],"relativePath":"pt/reference/default-theme-last-updated.md","filePath":"pt/reference/default-theme-last-updated.md","lastUpdated":1731160588000}'),i={name:"pt/reference/default-theme-last-updated.md"},l=s(`<h1 id="last-updated" tabindex="-1">Última Atualização <a class="header-anchor" href="#last-updated" aria-label="Permalink to &quot;Última Atualização {#last-updated}&quot;">​</a></h1><p>O tempo em que o conteúdo foi atualizado pela última vez será mostrado no canto inferior direito da página. Para habilitar, adicione a opção <code>lastUpdated</code> na sua configuração.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Você precisa fazer <em>commit</em> no arquivo markdown para ver o tempo atualizado.</p></div><h2 id="site-level-config" tabindex="-1">Configuração a nível de Site <a class="header-anchor" href="#site-level-config" aria-label="Permalink to &quot;Configuração a nível de Site {#site-level-config}&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lastUpdated: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="frontmatter-config" tabindex="-1">Configuração Frontmatter <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;Configuração Frontmatter {#frontmatter-config}&quot;">​</a></h2><p>Isso pode ser desabilitado por página usando a opção <code>lastUpdated</code> no frontmatter:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>Refira-se ao <a href="./default-theme-config#lastupdated">Tema Padrão: Última Atualização</a> para mais detalhes. Qualquer valor positivo a nível de tema também habilitará a funcionalidade a não ser que esteja explicitamente desabilitada a nível de página ou de site.</p>`,9),n=[l];function o(d,p,r,h,c,u){return t(),e("div",null,n)}const f=a(i,[["render",o]]);export{k as __pageData,f as default};
