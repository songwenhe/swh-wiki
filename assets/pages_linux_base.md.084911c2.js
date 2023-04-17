import{_ as s,c as t,o as a,Q as l}from"./chunks/framework.8dca3095.js";const u=JSON.parse('{"title":"linux 基础知识","description":"","frontmatter":{"title":"linux 基础知识","order":1},"headers":[],"relativePath":"pages/linux/base.md","lastUpdated":1681724032000}'),n={name:"pages/linux/base.md"},e=l(`<h1 id="linux-基础" tabindex="-1">Linux 基础 <a class="header-anchor" href="#linux-基础" aria-label="Permalink to &quot;Linux 基础&quot;">​</a></h1><h2 id="linux-目录结构" tabindex="-1">Linux 目录结构 <a class="header-anchor" href="#linux-目录结构" aria-label="Permalink to &quot;Linux 目录结构&quot;">​</a></h2><table><thead><tr><th>路径</th><th>说明</th></tr></thead><tbody><tr><td>/bin</td><td>存放命令(二进制文件)</td></tr><tr><td>/boot</td><td>一些连接文件以及镜像文件</td></tr><tr><td>/dev</td><td>Device(设备) 的缩写，存放的是 Linux 的外部设备</td></tr><tr><td>/etc</td><td>系统管理的配置文件和子目录。</td></tr><tr><td>/home</td><td>用户的主目录</td></tr><tr><td>/lib</td><td>动态连接共享库</td></tr><tr><td>/lost+found</td><td>系统非法关机的错误日志</td></tr><tr><td>/media</td><td>自动识别的设备</td></tr><tr><td>/mnt</td><td>临时挂载别的文件系统</td></tr><tr><td>/opt</td><td>额外安装软件的目录，默认是空的。</td></tr><tr><td>/proc</td><td>proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统）。</td></tr><tr><td>/root</td><td>超级权限者的用户主目录</td></tr><tr><td>/sbin</td><td>系统管理员使用的系统管理程序</td></tr><tr><td>/selinux</td><td>存放 selinux 相关的文件</td></tr><tr><td>/srv</td><td>存放一些服务启动之后需要提取的数据。</td></tr><tr><td>/sys</td><td>新的一个文件系统 sysfs</td></tr><tr><td>/tmp</td><td>存放一些临时文件的</td></tr><tr><td>/usr</td><td>共享资源</td></tr><tr><td>/usr/bin</td><td>系统用户使用的应用程序</td></tr><tr><td>/usr/sbin</td><td>超级用户使用的比较高级的管理程序和系统守护程序</td></tr><tr><td>/usr/src</td><td>内核源代码默认的放置目录。</td></tr><tr><td>/var</td><td>不断扩充着的文件目录。包括各种日志文件。</td></tr><tr><td>/run</td><td>是一个临时文件系统，存储系统启动以来的信息。</td></tr><tr><td>/etc</td><td>系统中的配置文件</td></tr></tbody></table><p><strong>/home</strong>：用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。</p><p><strong>/lib</strong>：lib 是 Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。</p><p><strong>/media</strong>：linux 系统会自动识别一些设备，例如 U 盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。</p><p><strong>/mnt</strong>：系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。</p><p><strong>/proc</strong>：proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。 这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，比如可以通过下面的命令来屏蔽主机的 ping 命令，使别人无法 ping 你的机器：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/proc/sys/net/ipv4/icmp_echo_ignore_all</span></span></code></pre></div><p><strong>/selinux</strong>： 这个目录是 Redhat/CentOS 所特有的目录，Selinux 是一个安全机制，类似于 windows 的防火墙，但是这套机制比较复杂，这个目录就是存放 selinux 相关的文件的。</p><p><strong>/sys</strong>：这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。sysfs 文件系统集成了下面 3 种文件系统的信息：针对进程信息的 proc 文件系统、针对设备devfs 文件系统以及针对伪终端的 devpts 文件系统。该文件系统是内核设备树的一个直观反映。当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。</p><p><strong>/usr</strong>：usr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。</p><p>注释：<strong>/bin, /sbin, /usr/bin, /usr/sbin</strong>: 这是系统预设的执行文件的放置目录，比如 <strong>ls</strong> 就是在 <strong>/bin/ls</strong> 目录下的。值得提出的是 <strong>/bin</strong>、<strong>/usr/bin</strong> 是给系统用户使用的指令（除 root 外的通用用户），而/sbin, /usr/sbin 则是给 root 使用的指令。</p><h2 id="linux-忘记密码解决方法" tabindex="-1">Linux 忘记密码解决方法 <a class="header-anchor" href="#linux-忘记密码解决方法" aria-label="Permalink to &quot;Linux 忘记密码解决方法&quot;">​</a></h2><p>进入单用户模式更改一下 root 密码即可。</p><h2 id="linux-用户和用户组管理" tabindex="-1">Linux 用户和用户组管理 <a class="header-anchor" href="#linux-用户和用户组管理" aria-label="Permalink to &quot;Linux 用户和用户组管理&quot;">​</a></h2><h3 id="linux-系统用户账号的管理" tabindex="-1">Linux 系统用户账号的管理 <a class="header-anchor" href="#linux-系统用户账号的管理" aria-label="Permalink to &quot;Linux 系统用户账号的管理&quot;">​</a></h3><h4 id="添加新的用户账号" tabindex="-1">添加新的用户账号 <a class="header-anchor" href="#添加新的用户账号" aria-label="Permalink to &quot;添加新的用户账号&quot;">​</a></h4><p>使用 useradd 命令，其语法如下：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">useradd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">选项</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">用户名</span></span></code></pre></div><p>选项:</p><table><thead><tr><th style="text-align:center;">-c</th><th>comment 指定一段注释性描述。</th></tr></thead><tbody><tr><td style="text-align:center;">-d</td><td>目录 指定用户主目录，如果此目录不存在，则同时使用-m 选项，可以创建主目录。</td></tr><tr><td style="text-align:center;">-g</td><td>用户组 指定用户所属的用户组。</td></tr><tr><td style="text-align:center;">-G</td><td>用户组，用户组 指定用户所属的附加组。</td></tr><tr><td style="text-align:center;">-s</td><td>Shell 文件 指定用户的登录 Shell。</td></tr><tr><td style="text-align:center;">-u</td><td>用户号 指定用户的用户号，如果同时有-o 选项，则可以重复使用其他用户的标识号。</td></tr></tbody></table><p>用户名: 指定新账号的登录名。</p><h4 id="删除账号" tabindex="-1">删除账号 <a class="header-anchor" href="#删除账号" aria-label="Permalink to &quot;删除账号&quot;">​</a></h4><p>删除一个已有的用户账号使用<code>userdel</code>命令，其格式如下：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">userdel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">选项</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">用户名</span></span></code></pre></div><p>常用的选项是 <strong>-r</strong>，它的作用是把用户的主目录一起删除。</p><p>例如：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">userdel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sam</span></span></code></pre></div><p>此命令删除用户 sam 在系统文件中（主要是/etc/passwd, /etc/shadow, /etc/group 等）的记录，同时删除用户的主目录。</p><h4 id="修改帐号" tabindex="-1">修改帐号 <a class="header-anchor" href="#修改帐号" aria-label="Permalink to &quot;修改帐号&quot;">​</a></h4><p>修改用户账号就是根据实际情况更改用户的有关属性，如用户号、主目录、用户组、登录 Shell 等。</p><p>修改已有用户的信息使用<code>usermod</code>命令，其格式如下：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">usermod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">选项</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">用户名</span></span></code></pre></div><p>常用的选项包括<code>-c, -d, -m, -g, -G, -s, -u以及-o等</code>，这些选项的意义与<code>useradd</code>命令中的选项一样，可以为用户指定新的资源值。</p><p>另外，有些系统可以使用选项：-l 新用户名</p><p>这个选项指定一个新的账号，即将原来的用户名改为新的用户名。</p><p>例如：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">usermod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/bin/ksh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/z</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">–g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">developer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sam</span></span></code></pre></div><p>此命令将用户 sam 的登录 Shell 修改为 ksh，主目录改为/home/z，用户组改为 developer。</p><h4 id="用户口令的管理" tabindex="-1">用户口令的管理 <a class="header-anchor" href="#用户口令的管理" aria-label="Permalink to &quot;用户口令的管理&quot;">​</a></h4><p>指定和修改用户口令的 Shell 命令是<code>passwd</code>。超级用户可以为自己和其他用户指定口令，普通用户只能用它修改自己的口令。命令的格式为：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">passwd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">选项</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">用户名</span></span></code></pre></div><p>可使用的选项：</p><ul><li>-l 锁定口令，即禁用账号。</li><li>-u 口令解锁。</li><li>-d 使账号无口令。</li><li>-f 强迫用户下次登录时修改口令。</li></ul><p>如果默认用户名，则修改当前用户的口令。</p><p>例如，假设当前用户是 sam，则下面的命令修改该用户自己的口令：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">passwd</span></span>
<span class="line"><span style="color:#FFCB6B;">Old</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password:</span><span style="color:#A6ACCD;">******</span></span>
<span class="line"><span style="color:#FFCB6B;">New</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password:</span><span style="color:#A6ACCD;">*******</span></span>
<span class="line"><span style="color:#FFCB6B;">Re-enter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password:</span><span style="color:#A6ACCD;">*******</span></span></code></pre></div><p>如果是超级用户，可以用下列形式指定任何用户的口令：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">passwd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sam</span></span>
<span class="line"><span style="color:#FFCB6B;">New</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password:</span><span style="color:#A6ACCD;">*******</span></span>
<span class="line"><span style="color:#FFCB6B;">Re-enter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password:</span><span style="color:#A6ACCD;">*******</span></span></code></pre></div>`,50),o=[e];function p(r,d,c,i,C,h){return a(),t("div",null,o)}const g=s(n,[["render",p]]);export{u as __pageData,g as default};