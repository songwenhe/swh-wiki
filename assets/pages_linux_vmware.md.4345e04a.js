import{_ as s,c as a,o as n,N as l}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"vmware","description":"","frontmatter":{"title":"vmware","order":4},"headers":[],"relativePath":"pages/linux/vmware.md","lastUpdated":1681183855000}'),o={name:"pages/linux/vmware.md"},e=l(`<h2 id="mnt-hgfs-share-文件夹" tabindex="-1">/mnt/hgfs/share 文件夹 <a class="header-anchor" href="#mnt-hgfs-share-文件夹" aria-label="Permalink to &quot;/mnt/hgfs/share 文件夹&quot;">​</a></h2><h3 id="如果之前已经挂载-hgfs-先取消挂载" tabindex="-1">如果之前已经挂载 hgfs，先取消挂载 <a class="header-anchor" href="#如果之前已经挂载-hgfs-先取消挂载" aria-label="Permalink to &quot;如果之前已经挂载 hgfs，先取消挂载&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">umount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/hgfs</span></span></code></pre></div><h3 id="重新用以下命令挂载即可" tabindex="-1">重新用以下命令挂载即可 <a class="header-anchor" href="#重新用以下命令挂载即可" aria-label="Permalink to &quot;重新用以下命令挂载即可&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/vmhgfs-fuse</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.host:/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/hgfs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">allow_other</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uid=</span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gid=</span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">umask=</span><span style="color:#F78C6C;">022</span></span></code></pre></div><h3 id="如果出现以下报错" tabindex="-1">如果出现以下报错： <a class="header-anchor" href="#如果出现以下报错" aria-label="Permalink to &quot;如果出现以下报错：&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fuse: mountpoint is not empty</span></span>
<span class="line"><span style="color:#A6ACCD;">fuse: if you are sure this is safe, use the &#39;nonempty&#39; mount option</span></span></code></pre></div><h3 id="就允许下面这个命令" tabindex="-1">就允许下面这个命令 <a class="header-anchor" href="#就允许下面这个命令" aria-label="Permalink to &quot;就允许下面这个命令&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo /usr/bin/vmhgfs-fuse .host:/ /mnt/hgfs -o nonempty -o allow_other -o uid=1000 -o gid=1000 -o umask=022</span></span></code></pre></div><h3 id="开机自启" tabindex="-1">开机自启 <a class="header-anchor" href="#开机自启" aria-label="Permalink to &quot;开机自启&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/fstab</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 打开配置文件</span></span>
<span class="line"><span style="color:#FFCB6B;">.host:/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/hgfs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fuse.vmhgfs-fuse</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">allow_other,uid=</span><span style="color:#F78C6C;">1000</span><span style="color:#C3E88D;">,gid=</span><span style="color:#F78C6C;">1000</span><span style="color:#C3E88D;">,umask=</span><span style="color:#F78C6C;">022</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span></code></pre></div>`,11),t=[e];function p(r,c,C,i,h,y){return n(),a("div",null,t)}const A=s(o,[["render",p]]);export{u as __pageData,A as default};
