import{_ as s,c as a,o as t,Q as n}from"./chunks/framework.8adc4ca2.js";const u=JSON.parse('{"title":"Dockerfile","description":"","frontmatter":{"title":"Dockerfile","order":4},"headers":[],"relativePath":"pages/docker/file.md","lastUpdated":1683370865000}'),e={name:"pages/docker/file.md"},l=n(`<h2 id="docker-file" tabindex="-1">docker file <a class="header-anchor" href="#docker-file" aria-label="Permalink to &quot;docker file&quot;">​</a></h2><table><thead><tr><th>FROM</th><th>基础镜像，基于哪个镜像</th></tr></thead><tbody><tr><td>MAINTAINER</td><td>镜像维护者的姓名和邮箱地址</td></tr><tr><td>RUN</td><td>容器构建的时候执行的命令</td></tr><tr><td>EXPOSE</td><td>容器对外暴露的端口</td></tr><tr><td>WORKDIR</td><td>指定创建容器后，默认终端登录进来的工作目录</td></tr><tr><td>USER</td><td>指定该镜像以什么样的用户去执行，如果不指定，默认是 root</td></tr><tr><td>ENV</td><td>用来在构建镜像的过程中设置环境变量</td></tr><tr><td>ADD</td><td>将宿主机目录下的文件拷贝进镜像且会自动处理 URL 和解压 tar 压缩包</td></tr><tr><td>COPY</td><td>类似<code>ADD</code>，拷贝文件和目录到镜像中</td></tr><tr><td>VOLUME</td><td>容器数据卷，用于数据保存和持久化工作</td></tr><tr><td>CMD</td><td>指定容器启动后要干的事情。<br>CMD [&quot;参数 1&quot;,&quot;参数 2&quot;]。在指定<code>ENTRYPOINT</code>指令后，用<code>CMD</code>指定具体参数<br>一个 docker file 可以有多个 CMD 指令，但只有最后一个会生效，<code>CMD</code>指令还会被<code>docker run</code>之后的参数替换</td></tr><tr><td>ENTRYPOINT</td><td>指定容器启动时要允许的命令<br>类似<code>CMD</code>指令，但是<code>ENTRYPOINT</code>不会被 docker run 后面的命令覆盖<br>而且这些命令行参数会被当做参数传给<code>ENTRYPOINT</code>指令指定的程序</td></tr></tbody></table><p>构建一个安装了 vim，net-tools，jdk8 的 ubunut 镜像</p><div class="language-dockerfile"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">FROM ubuntu</span></span>
<span class="line"><span style="color:#A6ACCD;">MAINTAINER songwenhe&lt;songwenhe1997@qq.com&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV MYPATH /usr/local</span></span>
<span class="line"><span style="color:#A6ACCD;">WORKDIR $MYPATH</span></span>
<span class="line"><span style="color:#A6ACCD;">RUN apt update</span></span>
<span class="line"><span style="color:#A6ACCD;">RUN apt -y install vim</span></span>
<span class="line"><span style="color:#A6ACCD;">RUN apt -y install net-tools</span></span>
<span class="line"><span style="color:#A6ACCD;">RUN mkdir /usr/local/java</span></span>
<span class="line"><span style="color:#A6ACCD;">ADD jdk-8u351-linux-x64.tar.gz /usr/local/java/</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV JAVA_HOME /usr/local/java/jdk1.8.0_351</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV JRE_HOME $JAVA_HOME/jre</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV PATH $JAVA_HOME/bin:$PATH</span></span>
<span class="line"><span style="color:#A6ACCD;">EXPOSE 80</span></span>
<span class="line"><span style="color:#A6ACCD;">CMD echo $MYPATH</span></span>
<span class="line"><span style="color:#A6ACCD;">CMD echo &quot;successful&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">CMD /bin/bash</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">centosjava8:</span><span style="color:#F78C6C;">2.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div>`,5),o=[l];function p(c,r,d,i,A,C){return t(),a("div",null,o)}const y=s(e,[["render",p]]);export{u as __pageData,y as default};
