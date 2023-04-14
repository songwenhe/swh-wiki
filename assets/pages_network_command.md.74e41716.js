import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.8dca3095.js";const A=JSON.parse('{"title":"ss","description":"","frontmatter":{"title":"ss","order":1},"headers":[],"relativePath":"pages/network/command.md","lastUpdated":1681372154000}'),p={name:"pages/network/command.md"},o=l(`<h3 id="ss" tabindex="-1">ss <a class="header-anchor" href="#ss" aria-label="Permalink to &quot;ss&quot;">​</a></h3><p>ss 是 Socket Statistics 的缩写。ss 命令可以用来获取 socket 统计信息，它显示的内容和 netstat 类似。但 ss 的优势在于它能够显示更多更详细的有关 TCP 和连接状态的信息，而且比 netstat 更快。当服务器的 socket 连接数量变得非常大时，无论是使用 netstat 命令还是直接 cat /proc/net/tcp，执行速度都会很慢。ss 命令利用到了 TCP 协议栈中 tcp_diag。tcp_diag 是一个用于分析统计的模块，可以获得 Linux 内核中第一手的信息，因此 ss 命令的性能会好很多。</p><p>常用选项</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Usage:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ss</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> OPTIONS </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">ss</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> OPTIONS </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> FILTER </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">-h,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#A6ACCD;">          </span><span style="color:#C3E88D;">this</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">message</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">-V,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">output</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">information</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">-n,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--numeric</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">don</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">t resolve service names</span></span>
<span class="line"><span style="color:#C3E88D;">   -r, --resolve       resolve host names</span></span>
<span class="line"><span style="color:#C3E88D;">   -a, --all           display all sockets</span></span>
<span class="line"><span style="color:#C3E88D;">   -l, --listening     display listening sockets</span></span>
<span class="line"><span style="color:#C3E88D;">   -o, --options       show timer information</span></span>
<span class="line"><span style="color:#C3E88D;">   -e, --extended      show detailed socket information</span></span>
<span class="line"><span style="color:#C3E88D;">   -m, --memory        show socket memory usage</span></span>
<span class="line"><span style="color:#C3E88D;">   -p, --processes     show process using socket</span></span>
<span class="line"><span style="color:#C3E88D;">   -i, --info          show internal TCP information</span></span>
<span class="line"><span style="color:#C3E88D;">       --tipcinfo      show internal tipc socket information</span></span>
<span class="line"><span style="color:#C3E88D;">   -s, --summary       show socket usage summary</span></span>
<span class="line"><span style="color:#C3E88D;">       --tos           show tos and priority information</span></span>
<span class="line"><span style="color:#C3E88D;">       --cgroup        show cgroup information</span></span>
<span class="line"><span style="color:#C3E88D;">   -b, --bpf           show bpf filter socket information</span></span>
<span class="line"><span style="color:#C3E88D;">   -E, --events        continually display sockets as they are destroyed</span></span>
<span class="line"><span style="color:#C3E88D;">   -Z, --context       display process SELinux security contexts</span></span>
<span class="line"><span style="color:#C3E88D;">   -z, --contexts      display process and socket SELinux security contexts</span></span>
<span class="line"><span style="color:#C3E88D;">   -N, --net           switch to the specified network namespace name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">   -4, --ipv4          display only IP version 4 sockets</span></span>
<span class="line"><span style="color:#C3E88D;">   -6, --ipv6          display only IP version 6 sockets</span></span>
<span class="line"><span style="color:#C3E88D;">   -0, --packet        display PACKET sockets</span></span>
<span class="line"><span style="color:#C3E88D;">   -t, --tcp           display only TCP sockets</span></span>
<span class="line"><span style="color:#C3E88D;">   -M, --mptcp         display only MPTCP sockets</span></span>
<span class="line"><span style="color:#C3E88D;">   -S, --sctp          display only SCTP sockets</span></span>
<span class="line"><span style="color:#C3E88D;">   -u, --udp           display only UDP sockets</span></span>
<span class="line"><span style="color:#C3E88D;">   -d, --dccp          display only DCCP sockets</span></span>
<span class="line"><span style="color:#C3E88D;">   -w, --raw           display only RAW sockets</span></span>
<span class="line"><span style="color:#C3E88D;">   -x, --unix          display only Unix domain sockets</span></span>
<span class="line"><span style="color:#C3E88D;">       --tipc          display only TIPC sockets</span></span>
<span class="line"><span style="color:#C3E88D;">       --vsock         display only vsock sockets</span></span>
<span class="line"><span style="color:#C3E88D;">   -f, --family=FAMILY display sockets of type FAMILY</span></span>
<span class="line"><span style="color:#C3E88D;">       FAMILY := {inet|inet6|link|unix|netlink|vsock|tipc|xdp|help}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">   -K, --kill          forcibly close sockets, display what was closed</span></span>
<span class="line"><span style="color:#C3E88D;">   -H, --no-header     Suppress header line</span></span>
<span class="line"><span style="color:#C3E88D;">   -O, --oneline       socket</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">printed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">single</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">line</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">--inet-sockopt</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">various</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">inet</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">socket</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">options</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">-A,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--query=QUERY,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--socket=QUERY</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">QUERY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{all</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">inet</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">tcp</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">mptcp</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">udp</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">raw</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">unix</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">unix_dgram</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">unix_stream</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">unix_seqpacket</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">packet</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">netlink</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">vsock_stream</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">vsock_dgram</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">tipc</span><span style="color:#A6ACCD;">}</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">,QUERY</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">-D,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--diag=FILE</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">Dump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">raw</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">information</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">about</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TCP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sockets</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FILE</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">-F,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--filter=FILE</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">read</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">filter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">information</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FILE</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">FILTER</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> state STATE-FILTER </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> EXPRESSION </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">STATE-FILTER</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{all</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">connected</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">synchronized</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">bucket</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">big</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">TCP-STATES</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">TCP-STATES</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{established</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">syn-sent</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">syn-recv</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">fin-</span><span style="color:#82AAFF;">wait</span><span style="color:#FFCB6B;">-</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}|</span><span style="color:#A6ACCD;">time-wait</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">closed</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">close-</span><span style="color:#82AAFF;">wait</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">last-ack</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">listening</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">closing</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">connected</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{established</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">syn-sent</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">syn-recv</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">fin-</span><span style="color:#82AAFF;">wait</span><span style="color:#FFCB6B;">-</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}|</span><span style="color:#A6ACCD;">time-wait</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">close-</span><span style="color:#82AAFF;">wait</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">last-ack</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">closing</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">synchronized</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{established</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">syn-recv</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">fin-</span><span style="color:#82AAFF;">wait</span><span style="color:#FFCB6B;">-</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}|</span><span style="color:#A6ACCD;">time-wait</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">close-</span><span style="color:#82AAFF;">wait</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">last-ack</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">closing</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#FFCB6B;">bucket</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{syn-recv</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">time-wait}</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">big</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{established</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">syn-sent</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">fin-</span><span style="color:#82AAFF;">wait</span><span style="color:#FFCB6B;">-</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}|</span><span style="color:#FFCB6B;">closed</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">close-</span><span style="color:#82AAFF;">wait</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">last-ack</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">listening</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">closing</span><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ss</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-tnl</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#查看主机监听的端口</span></span>
<span class="line"><span style="color:#FFCB6B;">ss</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-tlr</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#通过 -r 选项解析 IP 和端口号</span></span>
<span class="line"><span style="color:#FFCB6B;">ss</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-tlp</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#使用 -p 选项查看监听端口的程序名称</span></span></code></pre></div>`,5),e=[o];function t(c,r,y,C,D,F){return a(),n("div",null,e)}const B=s(p,[["render",t]]);export{A as __pageData,B as default};