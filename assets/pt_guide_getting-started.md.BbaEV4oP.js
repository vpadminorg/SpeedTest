import{_ as s,c as a,o as i,aT as e}from"./chunks/framework.CRBGg74g.js";const g=JSON.parse('{"title":"Iniciando","description":"","frontmatter":{},"headers":[],"relativePath":"pt/guide/getting-started.md","filePath":"pt/guide/getting-started.md","lastUpdated":1731160588000}'),t={name:"pt/guide/getting-started.md"},n=e(`<h1 id="getting-started" tabindex="-1">Iniciando <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Iniciando {#getting-started}&quot;">​</a></h1><h2 id="try-it-online" tabindex="-1">Experimente Online <a class="header-anchor" href="#try-it-online" aria-label="Permalink to &quot;Experimente Online {#try-it-online}&quot;">​</a></h2><p>Você pode experimentar VitePress diretamente no seu navegador em <a href="https://vitepress.new" target="_blank" rel="noreferrer">StackBlitz</a>.</p><h2 id="installation" tabindex="-1">Instalação <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Instalação {#installation}&quot;">​</a></h2><h3 id="prerequisites" tabindex="-1">Pré-requisitos <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Pré-requisitos {#prerequisites}&quot;">​</a></h3><ul><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> na versão 18 ou superior.</li><li>Terminal para acessar VitePress através da sua interface de linha de comando (CLI).</li><li>Editor de texto com suporte a sintaxe <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">Markdown</a>. <ul><li><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> é recomendado, junto com a <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">extensão oficial Vue</a>.</li></ul></li></ul><p>VitePress pode ser usado sozinho, ou ser instalado em um projeto já existente. Em ambos os casos, você pode instalá-lo com:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-DJeOF" id="tab-1tJlHfL" checked><label for="tab-1tJlHfL">npm</label><input type="radio" name="group-DJeOF" id="tab-jKYFV15"><label for="tab-jKYFV15">pnpm</label><input type="radio" name="group-DJeOF" id="tab-ZgxD-7s"><label for="tab-ZgxD-7s">yarn</label><input type="radio" name="group-DJeOF" id="tab-Jcq4h8R"><label for="tab-Jcq4h8R">yarn (pnp)</label><input type="radio" name="group-DJeOF" id="tab-6ADzu03"><label for="tab-6ADzu03">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div></div></div><details class="details custom-block"><summary>Está recebendo avisos sobre dependências correspondentes ausentes?</summary><p>Se usar PNPM, você perceberá um aviso de ausência de <code>@docsearch/js</code>. Isso não evita que o VitePress funcione. Se você deseja suprimir este aviso, adicione o seguinte no seu <code>package.json</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pnpm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;peerDependencyRules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ignoreMissing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;@algolia/client-search&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;search-insights&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><div class="tip custom-block"><p class="custom-block-title">NOTA</p><p>VitePress é um pacote apenas para ESM. Não use <code>require()</code> para importá-lo, e certifique de que o <code>package.json</code> mais próximo contém <code>&quot;type&quot;: &quot;module&quot;</code>, ou mude a extensão do arquivo de seus arquivos releavantes como <code>.vitepress/config.js</code> para <code>.mjs</code>/<code>.mts</code>. Refira-se ao <a href="http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only" target="_blank" rel="noreferrer">Guia de resolução de problemas Vite</a> para mais detalhes. Além disso, dentro de contextos de JavaScript comum assíncronos, você pode usar <code>await import(&#39;vitepress&#39;)</code>.</p></div><h3 id="setup-wizard" tabindex="-1">Assistente de Instalação <a class="header-anchor" href="#setup-wizard" aria-label="Permalink to &quot;Assistente de Instalação {#setup-wizard}&quot;">​</a></h3><p>VitePress tem embutido um assistente de instalação pela linha de comando que irá ajudar a construir um projeto básico. Depois da instalação, inicie o assistente rodando:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-FQbxm" id="tab-95aQt9L" checked><label for="tab-95aQt9L">npm</label><input type="radio" name="group-FQbxm" id="tab-DZ4576F"><label for="tab-DZ4576F">pnpm</label><input type="radio" name="group-FQbxm" id="tab-OQAzyPr"><label for="tab-OQAzyPr">yarn</label><input type="radio" name="group-FQbxm" id="tab-Mwq4SIa"><label for="tab-Mwq4SIa">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div></div></div><p>Você será cumprimentado com algumas perguntas simples:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">┌</span><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">  Welcome to VitePress!</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">◇</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Where should VitePress initialize the config?</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  ./docs</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">◇</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Site title:</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  My Awesome Project</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">◇</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Site description:</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  A VitePress Site</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">◆</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Theme:</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">│</span><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">  ●</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Default Theme </span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">(Out of the box, good-looking docs)</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  ○</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;"> Default Theme + Customization</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  ○</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;"> Custom Theme</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">└</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Vue como Dependência Correspondente</p><p>Se você tem a intenção de realizar personalização que usa componentes Vue ou APIs, você deve instalar explicitamente <code>vue</code> como uma dependência correspondente.</p></div><h2 id="file-structure" tabindex="-1">Estrutura de Arquivos <a class="header-anchor" href="#file-structure" aria-label="Permalink to &quot;Estrutura de Arquivos {#file-structure}&quot;">​</a></h2><p>Se você estiver construindo um site VitePress individual, você pode desenvolver seu site no diretório atual (<code>./</code>). Entretanto, se você está instalando VitePress em um projeto existente juntamente com outro código fonte, é recomendado construir o site em um diretório aninhado (e.g. <code>./docs</code>) para que esteja separado do resto do seu projeto.</p><p>Assumindo qa escolha de desenvolver o projeto VitePress em <code>./docs</code>, a estrutura de arquivos gerada deve parecer com a seguinte:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  ├─ api-examples.md</span></span>
<span class="line"><span>│  ├─ markdown-examples.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><p>O diretório <code>docs</code> é considerado a <strong>raiz do projeto</strong> do seu site VitePress. O diretório <code>.vitepress</code> é um local reservado para arquivos de configuração VitePress, cache do servidor de desenvolvimento, resultados da build, e código de personalização de tema opcional.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Por padrão, VitePress armazena o cache do servidor de desenvolvimento em <code>.vitepress/cache</code>, e o resultado da build de produção em <code>.vitepress/dist</code>. Se usar Git, você deve adicioná-los ao seu arquivo <code>.gitignore</code>. Estes locais também podem ser <a href="./../reference/site-config#outdir">configurados</a>.</p></div><h3 id="the-config-file" tabindex="-1">O arquivo de configuração <a class="header-anchor" href="#the-config-file" aria-label="Permalink to &quot;O arquivo de configuração {#the-config-file}&quot;">​</a></h3><p>O arquivo de configuração (<code>.vitepress/config.js</code>) permite que você personalize vários aspectos do seu site VitePress, com as opções mais básicas sendo o título e a descrição do site:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .vitepress/config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // opções a nível do site</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;VitePress&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  description: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Só uma brincadeira.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // opções a nível do tema</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Você também pode configurar o comportamento do tema através da opção <code>themeConfig</code>. Consulte a <a href="./../reference/site-config">Referência de Configuração</a> para detalhes completos sobre todas as opções de configuração.</p><h3 id="source-files" tabindex="-1">Arquivos Fonte <a class="header-anchor" href="#source-files" aria-label="Permalink to &quot;Arquivos Fonte {#source-files}&quot;">​</a></h3><p>Arquivos Markdown fora do diretório <code>.vitepress</code> são considerados <strong>arquivos fonte</strong>.</p><p>VitePress usa <strong>roteamento baseado em arquivos</strong>: cada arquivo <code>.md</code> é compilado em um arquivo correspondente <code>.html</code> com o mesmo caminho. Por exemplo, <code>index.md</code> será compilado em <code>index.html</code>, e pode ser visitado no caminho raiz <code>/</code> do site VitePress resultante.</p><p>VitePress também fornece a habilidade de gerar URLs limpas, reescrever caminhos, e gerar páginas dinamicamente. Estes serão tratados no <a href="./routing">Guia de Roteamento</a>.</p><h2 id="up-and-running" tabindex="-1">Instalado e Funcionando <a class="header-anchor" href="#up-and-running" aria-label="Permalink to &quot;Instalado e Funcionando {#up-and-running}&quot;">​</a></h2><p>A ferramenta deve ter também injetado os seguintes scripts npm no seu <code>package.json</code> se você permitiu isso durante o processo de instalação:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress dev docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>O script <code>docs:dev</code> iniciará um servidor de desenvolvimento local com atualizações instantâneas. Rode-o com o seguinte comando:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Ba24r" id="tab-PdDW3fe" checked><label for="tab-PdDW3fe">npm</label><input type="radio" name="group-Ba24r" id="tab-jgtuDOM"><label for="tab-jgtuDOM">pnpm</label><input type="radio" name="group-Ba24r" id="tab-v7n5LIG"><label for="tab-v7n5LIG">yarn</label><input type="radio" name="group-Ba24r" id="tab-EppD-UI"><label for="tab-EppD-UI">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div></div></div><p>Em vez de scripts npm, você também pode invocar VitePress diretamente com:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-6hqEt" id="tab-ez1Ha7N" checked><label for="tab-ez1Ha7N">npm</label><input type="radio" name="group-6hqEt" id="tab-Lvmys8t"><label for="tab-Lvmys8t">pnpm</label><input type="radio" name="group-6hqEt" id="tab-lwA9C8e"><label for="tab-lwA9C8e">yarn</label><input type="radio" name="group-6hqEt" id="tab-KGAT65u"><label for="tab-KGAT65u">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div></div></div><p>Mais usos da linha de comando estão documentados na <a href="./../reference/cli">Referência CLI</a>.</p><p>O servidor de desenvolvimento deve estar rodando em <code>http://localhost:5173</code>. Visite a URL no seu navegador para ver o seu novo site em ação!</p><h2 id="what-s-next" tabindex="-1">O que vem depois? <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;O que vem depois? {#what-s-next}&quot;">​</a></h2><ul><li><p>Para melhor entender como arquivos markdown são mapeados no HTML gerado, prossiga para o <a href="./routing">Guia de Roteamento</a>.</p></li><li><p>Para descobrir mais sobre o que você pode fazer em uma página, como escrever conteúdo markdown ou usar um componente Vue, refira-se a seção &quot;Escrevendo&quot; do guia. Um ótimo lugar para começar seria aprendendo mais sobre <a href="./markdown">Extensões Markdown</a>.</p></li><li><p>Para explorar as funcionalidades fornecidas pelo tema padrão da documentação, confira a <a href="./../reference/default-theme-config">Referência de Configuração do Tema Padrão</a>.</p></li><li><p>Se você quer aprofundar a personalização da aparência do seu site, explore tanto em <a href="./extending-default-theme">Estenda o Tema Padrão</a> como <a href="./custom-theme">Construa um Tema Personalizado</a>.</p></li><li><p>Uma vez que sua documentação tomar forma, certifique-se de ler o <a href="./deploy">Guia de Lançamento</a>.</p></li></ul>`,41),p=[n];function l(o,d,h,r,c,k){return i(),a("div",null,p)}const m=s(t,[["render",l]]);export{g as __pageData,m as default};
