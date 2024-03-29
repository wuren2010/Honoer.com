/* KindEditor 4.1.6 (2013-03-24), Copyright (C) kindsoft.net, Licence: http://www.kindsoft.net/license.php */(function(b,c){
    function g(a){
        if(!a)return!1;
        return Object.prototype.toString.call(a)==="[object Array]"
        }
        function k(a){
        if(!a)return!1;
        return Object.prototype.toString.call(a)==="[object Function]"
        }
        function f(a,d){
        for(var e=0,b=d.length;e<b;e++)if(a===d[e])return e;return-1
        }
        function h(a,d){
        if(g(a))for(var e=0,b=a.length;e<b;e++){
            if(d.call(a[e],e,a[e])===!1)break
        }else for(e in a)if(a.hasOwnProperty(e)&&d.call(a[e],e,a[e])===!1)break
            }
            function n(a){
        return a.replace(/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,"")
        }
    function m(a,d,e){
        e=e===c?",":e;
        return(e+d+e).indexOf(e+a+e)>=0
        }
        function j(a,d){
        d=d||"px";
        return a&&/^\d+$/.test(a)?a+d:a
        }
        function o(a){
        var d;
        return a&&(d=/(\d+)/.exec(a))?parseInt(d[1],10):0
        }
        function p(a){
        return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")
        }
        function t(a){
        return a.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")
        }
        function q(a){
        var d=a.split("-"),a="";
        h(d,function(d,b){
            a+=d>0?b.charAt(0).toUpperCase()+
            b.substr(1):b
            });
        return a
        }
        function r(a){
        function d(a){
            a=parseInt(a,10).toString(16).toUpperCase();
            return a.length>1?a:"0"+a
            }
            return a.replace(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/ig,function(a,b,c,l){
            return"#"+d(b)+d(c)+d(l)
            })
        }
        function z(a,d){
        var d=d===c?",":d,e={},b=g(a)?a:a.split(d),u;
        h(b,function(a,d){
            if(u=/^(\d+)\.\.(\d+)$/.exec(d))for(var b=parseInt(u[1],10);b<=parseInt(u[2],10);b++)e[b.toString()]=!0;else e[d]=!0
                });
        return e
        }
        function D(a,d){
        return Array.prototype.slice.call(a,d||0)
        }
        function s(a,
        d){
        return a===c?d:a
        }
        function A(a,d,e){
        e||(e=d,d=null);
        var b;
        if(d){
            var c=function(){};
            
            c.prototype=d.prototype;
            b=new c;
            h(e,function(a,d){
                b[a]=d
                })
            }else b=e;
        b.constructor=a;
        a.prototype=b;
        a.parent=d?d.prototype:null
        }
        function w(a){
        var d;
        if(d=/\{[\s\S]*\}|\[[\s\S]*\]/.exec(a))a=d[0];
        d=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        d.lastIndex=0;
        d.test(a)&&(a=a.replace(d,function(a){
            return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
            }));
        if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return eval("("+a+")");
        throw"JSON parse error";
    }
    function H(a,d,e){
        a.addEventListener?a.addEventListener(d,e,db):a.attachEvent&&a.attachEvent("on"+d,e)
        }
        function v(a,d,e){
        a.removeEventListener?a.removeEventListener(d,e,db):a.detachEvent&&a.detachEvent("on"+d,e)
        }
        function E(a,d){
        this.init(a,d)
        }
        function U(a){
        try{
            delete a[la]
        }catch(d){
            a.removeAttribute&&
            a.removeAttribute(la)
            }
        }
    function F(a,d,e){
    if(d.indexOf(",")>=0)h(d.split(","),function(){
        F(a,this,e)
        });
    else{
        var b=a[la]||null;
        b||(a[la]=++eb,b=eb);
        L[b]===c&&(L[b]={});
        var u=L[b][d];
        u&&u.length>0?v(a,d,u[0]):(L[b][d]=[],L[b].el=a);
        u=L[b][d];
        u.length===0&&(u[0]=function(d){
            var e=d?new E(a,d):c;
            h(u,function(d,b){
                d>0&&b&&b.call(a,e)
                })
            });
        f(e,u)<0&&u.push(e);
        H(a,d,u[0])
        }
    }
function N(a,d,e){
    if(d&&d.indexOf(",")>=0)h(d.split(","),function(){
        N(a,this,e)
        });
    else{
        var b=a[la]||null;
        if(b)if(d===c)b in L&&(h(L[b],
            function(d,e){
                d!="el"&&e.length>0&&v(a,d,e[0])
                }),delete L[b],U(a));
            else if(L[b]){
            var u=L[b][d];
            if(u&&u.length>0){
                e===c?(v(a,d,u[0]),delete L[b][d]):(h(u,function(a,d){
                    a>0&&d===e&&u.splice(a,1)
                    }),u.length==1&&(v(a,d,u[0]),delete L[b][d]));
                var l=0;
                h(L[b],function(){
                    l++
                });
                l<2&&(delete L[b],U(a))
                }
            }
        }
}
function ea(a,d){
    if(d.indexOf(",")>=0)h(d.split(","),function(){
        ea(a,this)
        });
    else{
        var e=a[la]||null;
        if(e){
            var b=L[e][d];
            if(L[e]&&b&&b.length>0)b[0]()
                }
            }
}
function V(a,d,e){
    d=/^\d{2,}$/.test(d)?d:d.toUpperCase().charCodeAt(0);
    F(a,"keydown",function(b){
        b.ctrlKey&&b.which==d&&!b.shiftKey&&!b.altKey&&(e.call(a),b.stop())
        })
    }
    function Q(a){
    for(var d={},e=/\s*([\w\-]+)\s*:([^;]*)(;|$)/g,b;b=e.exec(a);){
        var c=n(b[1].toLowerCase());
        b=n(r(b[2]));
        d[c]=b
        }
        return d
    }
    function G(a){
    for(var d={},e=/\s+(?:([\w\-:]+)|(?:([\w\-:]+)=([^\s"'<>]+))|(?:([\w\-:"]+)="([^"]*)")|(?:([\w\-:"]+)='([^']*)'))(?=(?:\s|\/|>)+)/g,b;b=e.exec(a);){
        var c=(b[1]||b[2]||b[4]||b[6]).toLowerCase();
        d[c]=(b[2]?b[3]:b[4]?b[5]:b[7])||""
        }
        return d
    }
    function S(a,d){
    return a=
    /\s+class\s*=/.test(a)?a.replace(/(\s+class=["']?)([^"']*)(["']?[\s>])/,function(a,b,c,l){
        return(" "+c+" ").indexOf(" "+d+" ")<0?c===""?b+d+l:b+c+" "+d+l:a
        }):a.substr(0,a.length-1)+' class="'+d+'">'
    }
    function Y(a){
    var d="";
    h(Q(a),function(a,b){
        d+=a+":"+b+";"
        });
    return d
    }
    function M(a,d,e,b){
    function u(a){
        for(var a=a.split("/"),d=[],e=0,b=a.length;e<b;e++){
            var c=a[e];
            c==".."?d.length>0&&d.pop():c!==""&&c!="."&&d.push(c)
            }
            return"/"+d.join("/")
        }
        function l(d,e){
        if(a.substr(0,d.length)===d){
            for(var c=[],u=
                0;u<e;u++)c.push("..");
            u=".";
            c.length>0&&(u+="/"+c.join("/"));
            b=="/"&&(u+="/");
            return u+a.substr(d.length)
            }else if(i=/^(.*)\//.exec(d))return l(i[1],++e)
            }
            d=s(d,"").toLowerCase();
    a.substr(0,5)!="data:"&&(a=a.replace(/([^:])\/\//g,"$1/"));
    if(f(d,["absolute","relative","domain"])<0)return a;
    e=e||location.protocol+"//"+location.host;
    if(b===c)var B=location.pathname.match(/^(\/.*)\//),b=B?B[1]:"";
    var i;
    if(i=/^(\w+:\/\/[^\/]*)/.exec(a)){
        if(i[1]!==e)return a
            }else if(/^\w+:/.test(a))return a;
    /^\//.test(a)?
    a=e+u(a.substr(1)):/^\w+:\/\//.test(a)||(a=e+u(b+"/"+a));
    d==="relative"?a=l(e+b,0).substr(2):d==="absolute"&&a.substr(0,e.length)===e&&(a=a.substr(e.length));
    return a
    }
    function J(a,d,e,b,c){
    var e=e||"",b=s(b,!1),c=s(c,"\t"),l="xx-small,x-small,small,medium,large,x-large,xx-large".split(","),a=a.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/ig,function(a,d,e,b){
        return d+e.replace(/<(?:br|br\s[^>]*)>/ig,"\n")+b
        }),a=a.replace(/<(?:br|br\s[^>]*)\s*\/?>\s*<\/p>/ig,"</p>"),a=a.replace(/(<(?:p|p\s[^>]*)>)\s*(<\/p>)/ig,
        "$1<br />$2"),a=a.replace(/\u200B/g,""),a=a.replace(/\u00A9/g,"&copy;"),B={};
    
    d&&(h(d,function(a,d){
        for(var e=a.split(","),b=0,c=e.length;b<c;b++)B[e[b]]=z(d)
            }),B.script||(a=a.replace(/(<(?:script|script\s[^>]*)>)([\s\S]*?)(<\/script>)/ig,"")),B.style||(a=a.replace(/(<(?:style|style\s[^>]*)>)([\s\S]*?)(<\/style>)/ig,"")));
    var i=[],a=a.replace(/([ \t\n\r]*)<(\/)?([\w\-:]+)((?:\s+|(?:\s+[\w\-:]+)|(?:\s+[\w\-:]+=[^\s"'<>]+)|(?:\s+[\w\-:"]+="[^"]*")|(?:\s+[\w\-:"]+='[^']*'))*)(\/)?>([ \t\n\r]*)/g,function(a,
        g,j,m,o,k,n){
        var g=g||"",j=j||"",p=m.toLowerCase(),r=o||"",m=k?" "+k:"",n=n||"";
        if(d&&!B[p])return"";
        m===""&&fb[p]&&(m=" /");
        gb[p]&&(g&&(g=" "),n&&(n=" "));
        Ja[p]&&(j?n="\n":g="\n");
        b&&p=="br"&&(n="\n");
        if(hb[p]&&!Ja[p])if(b){
            j&&i.length>0&&i[i.length-1]===p?i.pop():i.push(p);
            n=g="\n";
            o=0;
            for(k=j?i.length:i.length-1;o<k;o++)g+=c,j||(n+=c);
            m?i.pop():j||(n+=c)
            }else g=n="";
        if(r!==""){
            var t=G(a);
            if(p==="font"){
                var q={},w="";
                h(t,function(a,d){
                    if(a==="color")q.color=d,delete t[a];
                    a==="size"&&(q["font-size"]=
                        l[parseInt(d,10)-1]||"",delete t[a]);
                    a==="face"&&(q["font-family"]=d,delete t[a]);
                    a==="style"&&(w=d)
                    });
                w&&!/;$/.test(w)&&(w+=";");
                h(q,function(a,d){
                    d!==""&&(/\s/.test(d)&&(d="'"+d+"'"),w+=a+":"+d+";")
                    });
                t.style=w
                }
                h(t,function(a,b){
                Jb[a]&&(t[a]=a);
                f(a,["src","href"])>=0&&(t[a]=M(b,e));
                (d&&a!=="style"&&!B[p]["*"]&&!B[p][a]||p==="body"&&a==="contenteditable"||/^kindeditor_\d+$/.test(a))&&delete t[a];
                if(a==="style"&&b!==""){
                    var c=Q(b);
                    h(c,function(a){
                        d&&!B[p].style&&!B[p]["."+a]&&delete c[a]
                    });
                    var K=
                    "";
                    h(c,function(a,d){
                        K+=a+":"+d+";"
                        });
                    t.style=K
                    }
                });
        r="";
        h(t,function(a,d){
            a==="style"&&d===""||(d=d.replace(/"/g,"&quot;"),r+=" "+a+'="'+d+'"')
            })
        }
        p==="font"&&(p="span");
        return g+"<"+j+p+r+m+">"+n
        }),a=a.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/ig,function(a,d,e,b){
    return d+e.replace(/\n/g,'<span id="__kindeditor_pre_newline__">\n')+b
    }),a=a.replace(/\n\s*\n/g,"\n"),a=a.replace(/<span id="__kindeditor_pre_newline__">\n/g,"\n");
return n(a)
}
function W(a,d){
    a=a.replace(/<meta[\s\S]*?>/ig,"").replace(/<![\s\S]*?>/ig,
        "").replace(/<style[^>]*>[\s\S]*?<\/style>/ig,"").replace(/<script[^>]*>[\s\S]*?<\/script>/ig,"").replace(/<w:[^>]+>[\s\S]*?<\/w:[^>]+>/ig,"").replace(/<o:[^>]+>[\s\S]*?<\/o:[^>]+>/ig,"").replace(/<xml>[\s\S]*?<\/xml>/ig,"").replace(/<(?:table|td)[^>]*>/ig,function(a){
        return a.replace(/border-bottom:([#\w\s]+)/ig,"border:$1")
        });
    return J(a,d)
    }
    function T(a){
    if(/\.(rm|rmvb)(\?|$)/i.test(a))return"audio/x-pn-realaudio-plugin";
    if(/\.(swf|flv)(\?|$)/i.test(a))return"application/x-shockwave-flash";
    return"video/x-ms-asf-plugin"
    }
function fa(a){
    return G(unescape(a))
    }
    function Ka(a){
    var d="<embed ";
    h(a,function(a,b){
        d+=a+'="'+b+'" '
        });
    d+="/>";
    return d
    }
    function ib(a,d){
    var e=d.width,b=d.height,c=d.type||T(d.src),l=Ka(d),i="";
    e>0&&(i+="width:"+e+"px;");
    b>0&&(i+="height:"+b+"px;");
    e=/realaudio/i.test(c)?"ke-rm":/flash/i.test(c)?"ke-flash":"ke-media";
    e='<img class="'+e+'" src="'+a+'" ';
    i!==""&&(e+='style="'+i+'" ');
    e+='data-ke-tag="'+escape(l)+'" alt="" />';
    return e
    }
    function Ba(a,d){
    if(a.nodeType==9&&d.nodeType!=9)return!0;
    for(;d=
        d.parentNode;)if(d==a)return!0;return!1
    }
    function Ca(a,d){
    var d=d.toLowerCase(),e=null;
    if(!Kb&&a.nodeName.toLowerCase()!="script"){
        var b=a.ownerDocument.createElement("div");
        b.appendChild(a.cloneNode(!1));
        b=G(t(b.innerHTML));
        d in b&&(e=b[d])
        }else try{
        e=a.getAttribute(d,2)
        }catch(c){
        e=a.getAttribute(d,1)
        }
        d==="style"&&e!==null&&(e=Y(e));
    return e
    }
    function Da(a,d){
    function e(a){
        if(typeof a!="string")return a;
        return a.replace(/([^\w\-])/g,"\\$1")
        }
        function b(a,d){
        return a==="*"||a.toLowerCase()===e(d.toLowerCase())
        }
    function c(a,d,e){
        var u=[];
        (a=(e.ownerDocument||e).getElementById(a.replace(/\\/g,"")))&&b(d,a.nodeName)&&Ba(e,a)&&u.push(a);
        return u
        }
        function l(a,d,e){
        var c=e.ownerDocument||e,u=[],l,i,B;
        if(e.getElementsByClassName){
            c=e.getElementsByClassName(a.replace(/\\/g,""));
            l=0;
            for(i=c.length;l<i;l++)B=c[l],b(d,B.nodeName)&&u.push(B)
                }else if(c.querySelectorAll){
            c=c.querySelectorAll((e.nodeName!=="#document"?e.nodeName+" ":"")+d+"."+a);
            l=0;
            for(i=c.length;l<i;l++)B=c[l],Ba(e,B)&&u.push(B)
                }else{
            c=e.getElementsByTagName(d);
            a=" "+a+" ";
            l=0;
            for(i=c.length;l<i;l++)if(B=c[l],B.nodeType==1)(d=B.className)&&(" "+d+" ").indexOf(a)>-1&&u.push(B)
                }
                return u
        }
        function i(a,d,b,c){
        for(var K=[],b=c.getElementsByTagName(b),u=0,l=b.length;u<l;u++)c=b[u],c.nodeType==1&&(d===null?Ca(c,a)!==null&&K.push(c):d===e(Ca(c,a))&&K.push(c));
        return K
        }
        function g(a,d){
        var e=[],f,P=(f=/^((?:\\.|[^.#\s\[<>])+)/.exec(a))?f[1]:"*";
        if(f=/#((?:[\w\-]|\\.)+)$/.exec(a))e=c(f[1],P,d);
        else if(f=/\.((?:[\w\-]|\\.)+)$/.exec(a))e=l(f[1],P,d);
        else if(f=/\[((?:[\w\-]|\\.)+)\]/.exec(a))e=
            i(f[1].toLowerCase(),null,P,d);
        else if(f=/\[((?:[\w\-]|\\.)+)\s*=\s*['"]?((?:\\.|[^'"]+)+)['"]?\]/.exec(a)){
            e=f[1].toLowerCase();
            f=f[2];
            if(e==="id")P=c(f,P,d);
            else if(e==="class")P=l(f,P,d);
            else if(e==="name"){
                e=[];
                f=(d.ownerDocument||d).getElementsByName(f.replace(/\\/g,""));
                for(var h,j=0,o=f.length;j<o;j++)h=f[j],b(P,h.nodeName)&&Ba(d,h)&&h.getAttributeNode("name")&&e.push(h);
                P=e
                }else P=i(e,f,P,d);
            e=P
            }else{
            P=d.getElementsByTagName(P);
            h=0;
            for(j=P.length;h<j;h++)f=P[h],f.nodeType==1&&e.push(f)
                }
                return e
        }
    var j=a.split(",");
    if(j.length>1){
        var m=[];
        h(j,function(){
            h(Da(this,d),function(){
                f(this,m)<0&&m.push(this)
                })
            });
        return m
        }
        for(var d=d||document,j=[],o,p=/((?:\\.|[^\s>])+|[\s>])/g;o=p.exec(a);)o[1]!==" "&&j.push(o[1]);
    o=[];
    if(j.length==1)return g(j[0],d);
    var p=!1,n,k,r,t,w,q,s,N,F,v;
    q=0;
    for(lenth=j.length;q<lenth;q++)if(n=j[q],n===">")p=!0;
        else{
        if(q>0){
            k=[];
            s=0;
            for(F=o.length;s<F;s++){
                t=o[s];
                r=g(n,t);
                N=0;
                for(v=r.length;N<v;N++)w=r[N],p?t===w.parentNode&&k.push(w):k.push(w)
                    }
                    o=k
            }else o=g(n,d);
        if(o.length===
            0)return[]
            }
            return o
    }
    function ga(a){
    if(!a)return document;
    return a.ownerDocument||a.document||a
    }
    function ha(a){
    if(!a)return b;
    a=ga(a);
    return a.parentWindow||a.defaultView
    }
    function Lb(a,d){
    if(a.nodeType==1){
        var e=ga(a);
        try{
            a.innerHTML='<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />'+d;
            var b=e.getElementById("__kindeditor_temp_tag__");
            b.parentNode.removeChild(b)
            }catch(c){
            i(a).empty(),i("@"+d,e).each(function(){
                a.appendChild(this)
                })
            }
        }
}
function La(a,d,e){
    C&&O<8&&d.toLowerCase()==
    "class"&&(d="className");
    a.setAttribute(d,""+e)
    }
    function Ma(a){
    if(!a||!a.nodeName)return"";
    return a.nodeName.toLowerCase()
    }
    function Mb(a,d){
    var e=ha(a),b=q(d),c="";
    e.getComputedStyle?(e=e.getComputedStyle(a,null),c=e[b]||e.getPropertyValue(d)||a.style[b]):a.currentStyle&&(c=a.currentStyle[b]||a.style[b]);
    return c
    }
    function X(a){
    a=a||document;
    return aa?a.body:a.documentElement
    }
    function ma(a){
    var a=a||document,d;
    C||Na?(d=X(a).scrollLeft,a=X(a).scrollTop):(d=ha(a).scrollX,a=ha(a).scrollY);
    return{
        x:d,
        y:a
    }
}
function R(a){
    this.init(a)
    }
    function jb(a){
    a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset;
    return a
    }
    function Oa(a,d,e){
    function b(c,K,u){
        var l=c.nodeValue.length,i;
        d&&(i=c.cloneNode(!0),i=K>0?i.splitText(K):i,u<l&&i.splitText(u-K));
        if(e){
            var B=c;
            K>0&&(B=c.splitText(K),a.setStart(c,K));
            u<l&&(c=B.splitText(u-K),a.setEnd(c,0));
            f.push(B)
            }
            return i
        }
        function c(){
        e&&a.up().collapse(!0);
        for(var d=0,b=f.length;d<b;d++){
            var K=f[d];
            K.parentNode&&K.parentNode.removeChild(K)
            }
        }
        function l(c,
    u){
    for(var p=c.firstChild,n;p;){
        n=(new Z(i)).selectNode(p);
        h=n.compareBoundaryPoints(qa,a);
        h>=0&&j<=0&&(j=n.compareBoundaryPoints(ra,a));
        j>=0&&o<=0&&(o=n.compareBoundaryPoints(na,a));
        o>=0&&m<=0&&(m=n.compareBoundaryPoints(sa,a));
        if(m>=0)return!1;
        n=p.nextSibling;
        if(h>0)if(p.nodeType==1)if(j>=0&&o<=0)d&&u.appendChild(p.cloneNode(!0)),e&&f.push(p);
            else{
            var k;
            d&&(k=p.cloneNode(!1),u.appendChild(k));
            if(l(p,k)===!1)return!1
                }else if(p.nodeType==3&&(p=p==g.startContainer?b(p,g.startOffset,p.nodeValue.length):
            p==g.endContainer?b(p,0,g.endOffset):b(p,0,p.nodeValue.length),d))try{
            u.appendChild(p)
            }catch(r){}
            p=n
        }
    }
    var i=a.doc,f=[],g=a.cloneRange().down(),h=-1,j=-1,o=-1,m=-1,p=a.commonAncestor(),n=i.createDocumentFragment();
if(p.nodeType==3)return p=b(p,a.startOffset,a.endOffset),d&&n.appendChild(p),c(),d?n:a;
l(p,n);
e&&a.up().collapse(!0);
for(var p=0,k=f.length;p<k;p++){
    var r=f[p];
    r.parentNode&&r.parentNode.removeChild(r)
    }
    return d?n:a
}
function ta(a,d){
    for(var e=d;e;){
        var b=i(e);
        if(b.name=="marquee"||b.name==
            "select")return;
        e=e.parentNode
        }
        try{
        a.moveToElementText(d)
        }catch(c){}
}
function kb(a,d){
    var e=a.parentElement().ownerDocument,b=a.duplicate();
    b.collapse(d);
    var c=b.parentElement(),l=c.childNodes;
    if(l.length===0)return{
        node:c.parentNode,
        offset:i(c).index()
        };
        
    var B=e,f=0,g=-1,h=a.duplicate();
    ta(h,c);
    for(var j=0,o=l.length;j<o;j++){
        var m=l[j],g=h.compareEndPoints("StartToStart",b);
        if(g===0)return{
            node:m.parentNode,
            offset:j
        };
        
        if(m.nodeType==1){
            var p=a.duplicate(),n,k=i(m),r=m;
            k.isControl()&&(n=e.createElement("span"),
                k.after(n),r=n,f+=k.text().replace(/\r\n|\n|\r/g,"").length);
            ta(p,r);
            h.setEndPoint("StartToEnd",p);
            g>0?f+=p.text.replace(/\r\n|\n|\r/g,"").length:f=0;
            n&&i(n).remove()
            }else m.nodeType==3&&(h.moveStart("character",m.nodeValue.length),f+=m.nodeValue.length);
        g<0&&(B=m)
        }
        if(g<0&&B.nodeType==1)return{
        node:c,
        offset:i(c.lastChild).index()+1
        };
        
    if(g>0)for(;B.nextSibling&&B.nodeType==1;)B=B.nextSibling;
    h=a.duplicate();
    ta(h,c);
    h.setEndPoint("StartToEnd",b);
    f-=h.text.replace(/\r\n|\n|\r/g,"").length;
    if(g>0&&B.nodeType==
        3)for(e=B.previousSibling;e&&e.nodeType==3;)f-=e.nodeValue.length,e=e.previousSibling;
    return{
        node:B,
        offset:f
    }
}
function lb(a,d){
    var e=a.ownerDocument||a,b=e.body.createTextRange();
    if(e==a)return b.collapse(!0),b;
    if(a.nodeType==1&&a.childNodes.length>0){
        var c=a.childNodes,l;
        d===0?(l=c[0],c=!0):(l=c[d-1],c=!1);
        if(!l)return b;
        if(i(l).name==="head")return d===1&&(c=!0),d===2&&(c=!1),b.collapse(c),b;
        if(l.nodeType==1){
            var B=i(l),f;
            B.isControl()&&(f=e.createElement("span"),c?B.before(f):B.after(f),l=f);
            ta(b,
                l);
            b.collapse(c);
            f&&i(f).remove();
            return b
            }
            a=l;
        d=c?0:l.nodeValue.length
        }
        e=e.createElement("span");
    i(a).before(e);
    ta(b,e);
    b.moveStart("character",d);
    i(e).remove();
    return b
    }
    function mb(a){
    function d(a){
        if(i(a.node).name=="tr")a.node=a.node.cells[a.offset],a.offset=0
            }
            var e;
    if(C){
        if(a.item)return e=ga(a.item(0)),e=new Z(e),e.selectNode(a.item(0)),e;
        e=a.parentElement().ownerDocument;
        var b=kb(a,!0),a=kb(a,!1);
        d(b);
        d(a);
        e=new Z(e);
        e.setStart(b.node,b.offset);
        e.setEnd(a.node,a.offset);
        return e
        }
        b=a.startContainer;
    e=b.ownerDocument||b;
    e=new Z(e);
    e.setStart(b,a.startOffset);
    e.setEnd(a.endContainer,a.endOffset);
    return e
    }
    function Z(a){
    this.init(a)
    }
    function Pa(a){
    if(!a.nodeName)return a.constructor===Z?a:mb(a);
    return new Z(a)
    }
    function ba(a,d,e){
    try{
        a.execCommand(d,!1,e)
        }catch(b){}
}
function nb(a,d){
    var e="";
    try{
        e=a.queryCommandValue(d)
        }catch(b){}
    typeof e!=="string"&&(e="");
    return e
    }
    function Qa(a){
    var d=ha(a);
    return a.selection||d.getSelection()
    }
    function ob(a){
    var d={},e,b;
    h(a,function(a,c){
        e=a.split(",");
        for(var i=
            0,f=e.length;i<f;i++)b=e[i],d[b]=c
        });
    return d
    }
    function Ra(a,d){
    return pb(a,d,"*")||pb(a,d)
    }
    function pb(a,d,e){
    e=e||a.name;
    if(a.type!==1)return!1;
    d=ob(d);
    if(!d[e])return!1;
    for(var e=d[e].split(","),d=0,b=e.length;d<b;d++){
        var c=e[d];
        if(c==="*")return!0;
        var l=/^(\.?)([^=]+)(?:=([^=]*))?$/.exec(c),i=l[1]?"css":"attr",c=l[2],l=l[3]||"";
        if(l===""&&a[i](c)!=="")return!0;
        if(l!==""&&a[i](c)===l)return!0
            }
            return!1
    }
    function Sa(a,d){
    a.type==1&&(qb(a,d,"*"),qb(a,d))
    }
    function qb(a,d,e){
    e=e||a.name;
    if(a.type===
        1&&(d=ob(d),d[e])){
        for(var e=d[e].split(","),d=!1,b=0,c=e.length;b<c;b++){
            var l=e[b];
            if(l==="*"){
                d=!0;
                break
            }
            var i=/^(\.?)([^=]+)(?:=([^=]*))?$/.exec(l),l=i[2];
            i[1]?(l=q(l),a[0].style[l]&&(a[0].style[l]="")):a.removeAttr(l)
            }
            d&&a.remove(!0)
        }
    }
function Ta(a){
    for(;a.first();)a=a.first();
    return a
    }
    function oa(a){
    if(a.type!=1||a.isSingle())return!1;
    return a.html().replace(/<[^>]+>/g,"")===""
    }
    function Nb(a,d,e){
    h(d,function(d,e){
        d!=="style"&&a.attr(d,e)
        });
    h(e,function(d,e){
        a.css(d,e)
        })
    }
    function ua(a){
    this.init(a)
    }
function rb(a){
    a.nodeName&&(a=ga(a),a=Pa(a).selectNodeContents(a.body).collapse(!1));
    return new ua(a)
    }
    function Ua(a){
    var d=a.moveEl,e=a.moveFn,b=a.clickEl||d,u=a.beforeDrag,l=[document];
    (a.iframeFix===c||a.iframeFix)&&i("iframe").each(function(){
        if(!/^https?:\/\//.test(M(this.src||"","absolute"))){
            var a;
            try{
                a=Va(this)
                }catch(d){}
            if(a){
                var e=i(this).pos();
                i(a).data("pos-x",e.x);
                i(a).data("pos-y",e.y);
                l.push(a)
                }
            }
    });
b.mousedown(function(a){
    function c(a){
        a.preventDefault();
        var d=i(ga(a.target)),l=ca((d.data("pos-x")||
            0)+a.pageX-k),a=ca((d.data("pos-y")||0)+a.pageY-r);
        e.call(b,j,m,p,n,l,a)
        }
        function f(a){
        a.preventDefault()
        }
        function g(a){
        a.preventDefault();
        i(l).unbind("mousemove",c).unbind("mouseup",g).unbind("selectstart",f);
        h.releaseCapture&&h.releaseCapture()
        }
        a.stopPropagation();
    var h=b.get(),j=o(d.css("left")),m=o(d.css("top")),p=d.width(),n=d.height(),k=a.pageX,r=a.pageY;
    u&&u();
    i(l).mousemove(c).mouseup(g).bind("selectstart",f);
    h.setCapture&&h.setCapture()
    })
}
function da(a){
    this.init(a)
    }
    function Wa(a){
    return new da(a)
    }
function Va(a){
    a=i(a)[0];
    return a.contentDocument||a.contentWindow.document
    }
    function Ob(a,d,e,b){
    var c=[Xa===""?"<html>":'<html dir="'+Xa+'">','<head><meta charset="utf-8" /><title></title>',"<style>","html {margin:0;padding:0;}","body {margin:0;padding:5px;}",'body, td {font:12px/1.5 "sans serif",tahoma,verdana,helvetica;}',"body, p, div {word-wrap: break-word;}","p {margin:5px 0;}","table {border-collapse:collapse;}","img {border:0;}","noscript {display:none;}","table.ke-zeroborder td {border:1px dotted #AAA;}",
    "img.ke-flash {","\tborder:1px solid #AAA;","\tbackground-image:url("+a+"common/flash.gif);","\tbackground-position:center center;","\tbackground-repeat:no-repeat;","\twidth:100px;","\theight:100px;","}","img.ke-rm {","\tborder:1px solid #AAA;","\tbackground-image:url("+a+"common/rm.gif);","\tbackground-position:center center;","\tbackground-repeat:no-repeat;","\twidth:100px;","\theight:100px;","}","img.ke-media {","\tborder:1px solid #AAA;","\tbackground-image:url("+a+"common/media.gif);","\tbackground-position:center center;",
    "\tbackground-repeat:no-repeat;","\twidth:100px;","\theight:100px;","}","img.ke-anchor {","\tborder:1px dashed #666;","\twidth:16px;","\theight:16px;","}",".ke-script, .ke-noscript, .ke-display-none {","\tdisplay:none;","\tfont-size:0;","\twidth:0;","\theight:0;","}",".ke-pagebreak {","\tborder:1px dotted #AAA;","\tfont-size:0;","\theight:2px;","}","</style>"];
    g(e)||(e=[e]);
    h(e,function(a,d){
        d&&c.push('<link href="'+d+'" rel="stylesheet" />')
        });
    b&&c.push("<style>"+b+"</style>");
    c.push("</head><body "+
        (d?'class="'+d+'"':"")+"></body></html>");
    return c.join("\n")
    }
    function va(a,d){
    if(a.hasVal()){
        if(d===c){
            var e=a.val();
            return e=e.replace(/(<(?:p|p\s[^>]*)>) *(<\/p>)/ig,"")
            }
            return a.val(d)
        }
        return a.html(d)
    }
    function wa(a){
    this.init(a)
    }
    function sb(a){
    return new wa(a)
    }
    function tb(a,d){
    var e=this.get(a);
    e&&!e.hasClass("ke-disabled")&&d(e)
    }
    function Ea(a){
    this.init(a)
    }
    function ub(a){
    return new Ea(a)
    }
    function xa(a){
    this.init(a)
    }
    function Ya(a){
    return new xa(a)
    }
    function ya(a){
    this.init(a)
    }
    function vb(a){
    return new ya(a)
    }
function Za(a){
    this.init(a)
    }
    function za(a){
    this.init(a)
    }
    function wb(a){
    return new za(a)
    }
    function $a(a,d){
    var e=document.getElementsByTagName("head")[0]||(aa?document.body:document.documentElement),b=document.createElement("script");
    e.appendChild(b);
    b.src=a;
    b.charset="utf-8";
    b.onload=b.onreadystatechange=function(){
        if(!this.readyState||this.readyState==="loaded")d&&d(),b.onload=b.onreadystatechange=null,e.removeChild(b)
            }
        }
function xb(a){
    var d=a.indexOf("?");
    return d>0?a.substr(0,d):a
    }
    function ab(a){
    for(var d=
        document.getElementsByTagName("head")[0]||(aa?document.body:document.documentElement),e=document.createElement("link"),b=xb(M(a,"absolute")),c=i('link[rel="stylesheet"]',d),l=0,f=c.length;l<f;l++)if(xb(M(c[l].href,"absolute"))===b)return;d.appendChild(e);
    e.href=a;
    e.rel="stylesheet"
    }
    function yb(a,d){
    if(a===c)return ia;
    if(!d)return ia[a];
    ia[a]=d
    }
    function zb(a){
    var d,e="core";
    if(d=/^(\w+)\.(\w+)$/.exec(a))e=d[1],a=d[2];
    return{
        ns:e,
        key:a
    }
}
function Ab(a,d){
    d=d===c?i.options.langType:d;
    if(typeof a==="string"){
        if(!$[d])return"no language";
        var e=a.length-1;
        if(a.substr(e)===".")return $[d][a.substr(0,e)];
        e=zb(a);
        return $[d][e.ns][e.key]
        }
        h(a,function(a,e){
        var b=zb(a);
        $[d]||($[d]={});
        $[d][b.ns]||($[d][b.ns]={});
        $[d][b.ns][b.key]=e
        })
    }
    function Fa(a,d){
    if(!a.collapsed){
        var a=a.cloneRange().up(),e=a.startContainer,b=a.startOffset;
        if(ja||a.isControl())if((e=i(e.childNodes[b]))&&e.name=="img"&&d(e))return e
            }
        }
function Pb(){
    var a=this;
    i(a.edit.doc).contextmenu(function(d){
        a.menu&&a.hideMenu();
        if(a.useContextmenu){
            if(a._contextmenus.length!==0){
                var e=
                0,b=[];
                for(h(a._contextmenus,function(){
                    if(this.title=="-")b.push(this);
                    else if(this.cond&&this.cond()&&(b.push(this),this.width&&this.width>e))e=this.width
                        });b.length>0&&b[0].title=="-";)b.shift();
                for(;b.length>0&&b[b.length-1].title=="-";)b.pop();
                var c=null;
                h(b,function(a){
                    this.title=="-"&&c.title=="-"&&delete b[a];
                    c=this
                    });
                if(b.length>0){
                    d.preventDefault();
                    var l=i(a.edit.iframe).pos(),f=Ya({
                        x:l.x+d.clientX,
                        y:l.y+d.clientY,
                        width:e,
                        css:{
                            visibility:"hidden"
                        },
                        shadowMode:a.shadowMode
                        });
                    h(b,function(){
                        this.title&&
                        f.addItem(this)
                        });
                    var l=X(f.doc),g=f.div.height();
                    d.clientY+g>=l.clientHeight-100&&f.pos(f.x,o(f.y)-g);
                    f.div.css("visibility","visible");
                    a.menu=f
                    }
                }
        }else d.preventDefault()
        })
}
function Qb(){
    function a(a){
        for(a=i(a.commonAncestor());a;){
            if(a.type==1&&!a.isStyle())break;
            a=a.parent()
            }
            return a.name
        }
        var d=this,e=d.edit.doc,b=d.newlineTag;
    if(!(C&&b!=="br")&&(!pa||!(O<3&&b!=="p"))&&!(Na&&O<9)){
        var c=z("h1,h2,h3,h4,h5,h6,pre,li"),l=z("p,h1,h2,h3,h4,h5,h6,pre,li,blockquote");
        i(e).keydown(function(i){
            if(!(i.which!=
                13||i.shiftKey||i.ctrlKey||i.altKey)){
                d.cmd.selection();
                var f=a(d.cmd.range);
                f=="marquee"||f=="select"||(b==="br"&&!c[f]?(i.preventDefault(),d.insertHtml("<br />"+(C&&O<9?"":"\u200b"))):l[f]||ba(e,"formatblock","<p>"))
                }
            });
    i(e).keyup(function(c){
        if(!(c.which!=13||c.shiftKey||c.ctrlKey||c.altKey)&&b!="br")if(pa){
            var c=d.cmd.commonAncestor("p"),u=d.cmd.commonAncestor("a");
            u&&u.text()==""&&(u.remove(!0),d.cmd.range.selectNodeContents(c[0]).collapse(!0),d.cmd.select())
            }else if(d.cmd.selection(),c=a(d.cmd.range),
            !(c=="marquee"||c=="select"))if(l[c]||ba(e,"formatblock","<p>"),c=d.cmd.commonAncestor("div")){
            for(var u=i("<p></p>"),f=c[0].firstChild;f;){
                var g=f.nextSibling;
                u.append(f);
                f=g
                }
                c.before(u);
            c.remove();
            d.cmd.range.selectNodeContents(u[0]);
            d.cmd.select()
            }
        })
}
}
function Rb(){
    var a=this,d=a.edit.doc;
    i(d).keydown(function(e){
        if(e.which==9)if(e.preventDefault(),a.afterTab)a.afterTab.call(a,e);
            else{
            var e=a.cmd,b=e.range;
            b.shrink();
            b.collapsed&&b.startContainer.nodeType==1&&(b.insertNode(i("@&nbsp;",d)[0]),e.select());
            a.insertHtml("&nbsp;&nbsp;&nbsp;&nbsp;")
            }
        })
}
function Sb(){
    var a=this;
    i(a.edit.textarea[0],a.edit.win).focus(function(d){
        a.afterFocus&&a.afterFocus.call(a,d)
        }).blur(function(d){
        a.afterBlur&&a.afterBlur.call(a,d)
        })
    }
    function ka(a){
    return n(a.replace(/<span [^>]*id="?__kindeditor_bookmark_\w+_\d+__"?[^>]*><\/span>/ig,""))
    }
    function bb(a){
    return a.replace(/<div[^>]+class="?__kindeditor_paste__"?[^>]*>[\s\S]*?<\/div>/ig,"")
    }
    function Bb(a,d){
    if(a.length===0)a.push(d);
    else{
        var e=a[a.length-1];
        ka(d.html)!==
        ka(e.html)&&a.push(d)
        }
    }
function Cb(a,d){
    var e=this.edit,b=e.doc.body,c,l;
    if(a.length===0)return this;
    e.designMode?(c=this.cmd.range,l=c.createBookmark(!0),l.html=b.innerHTML):l={
        html:b.innerHTML
        };
        
    Bb(d,l);
    var f=a.pop();
    ka(l.html)===ka(f.html)&&a.length>0&&(f=a.pop());
    e.designMode?(e.html(f.html),f.start&&(c.moveToBookmark(f),this.select())):i(b).html(ka(f.html));
    return this
    }
    function Aa(a){
    function d(a,d){
        Aa.prototype[a]===c&&(e[a]=d);
        e.options[a]=d
        }
        var e=this;
    e.options={};
    
    h(a,function(e){
        d(e,a[e])
        });
    h(i.options,function(a,b){
        e[a]===c&&d(a,b)
        });
    var b=i(e.srcElement||"<textarea/>");
    if(!e.width)e.width=b[0].style.width||b.width();
    if(!e.height)e.height=b[0].style.height||b.height();
    d("width",s(e.width,e.minWidth));
    d("height",s(e.height,e.minHeight));
    d("width",j(e.width));
    d("height",j(e.height));
    if(Tb&&(!Ub||O<534))e.designMode=!1;
    e.srcElement=b;
    e.initContent="";
    e.plugin={};
    
    e.isCreated=!1;
    e.isLoading=!1;
    e._handlers={};
    
    e._contextmenus=[];
    e._undoStack=[];
    e._redoStack=[];
    e._calledPlugins={};
    
    e._firstAddBookmark=
    !0;
    e.menu=e.contextmenu=null;
    e.dialogs=[]
    }
    function Db(a,d){
    function e(a){
        h(ia,function(d,e){
            e.call(a,KindEditor)
            });
        return a.create()
        }
        d=d||{};
    
    d.basePath=s(d.basePath,i.basePath);
    d.themesPath=s(d.themesPath,d.basePath+"themes/");
    d.langPath=s(d.langPath,d.basePath+"lang/");
    d.pluginsPath=s(d.pluginsPath,d.basePath+"plugins/");
    if(s(d.loadStyleMode,i.options.loadStyleMode)){
        var b=s(d.themeType,i.options.themeType);
        ab(d.themesPath+"default/default.css");
        ab(d.themesPath+b+"/"+b+".css")
        }
        if((b=i(a))&&b.length!==
        0){
        if(b.length>1)return b.each(function(){
            Db(this,d)
            }),_instances[0];
        d.srcElement=b[0];
        var c=new Aa(d);
        _instances.push(c);
        if($[c.langType])return e(c);
        $a(c.langPath+c.langType+".js?ver="+encodeURIComponent(i.DEBUG?Ga:Ha),function(){
            e(c)
            });
        return c
        }
    }
function Eb(a,d){
    i(a).each(function(a,b){
        i.each(_instances,function(a,e){
            if(e&&e.srcElement[0]==b)return d.call(e,a,e),!1
                })
        })
    }
    if(!b.KindEditor){
    if(!b.console)b.console={};
        
    if(!console.log)console.log=function(){};
        
    var Ha="4.1.6 (2013-03-24)",I=navigator.userAgent.toLowerCase(),
    C=I.indexOf("msie")>-1&&I.indexOf("opera")==-1,pa=I.indexOf("gecko")>-1&&I.indexOf("khtml")==-1,ja=I.indexOf("applewebkit")>-1,Na=I.indexOf("opera")>-1,Tb=I.indexOf("mobile")>-1,Ub=/ipad|iphone|ipod/.test(I),aa=document.compatMode!="CSS1Compat",O=(I=/(?:msie|firefox|webkit|opera)[\/:\s](\d+)/.exec(I))?I[1]:"0",Ga=(new Date).getTime(),ca=Math.round,i={
        DEBUG:!1,
        VERSION:Ha,
        IE:C,
        GECKO:pa,
        WEBKIT:ja,
        OPERA:Na,
        V:O,
        TIME:Ga,
        each:h,
        isArray:g,
        isFunction:k,
        inArray:f,
        inString:m,
        trim:n,
        addUnit:j,
        removeUnit:o,
        escape:p,
        unescape:t,
        toCamel:q,
        toHex:r,
        toMap:z,
        toArray:D,
        undef:s,
        invalidUrl:function(a){
            return!a||/[<>"]/.test(a)}
        ,addParam:function(a,d){return a.indexOf("?")>=0?a+"&"+d:a+"?"+d}
        ,extend:A
        ,json:w},gb=z("a,abbr,acronym,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,img,input,ins,kbd,label,map,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),hb=z("address,applet,blockquote,body,center,dd,dir,div,dl,dt,fieldset,form,frameset,h1,h2,h3,h4,h5,h6,head,hr,html,iframe,ins,isindex,li,map,menu,meta,noframes,noscript,object,ol,p,pre,script,style,table,tbody,td,tfoot,th,thead,title,tr,ul"),
    fb=z("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),Fb=z("b,basefont,big,del,em,font,i,s,small,span,strike,strong,sub,sup,u"),Vb=z("img,table,input,textarea,button"),Ja=z("pre,style,script"),Ia=z("html,head,body,td,tr,table,ol,ul,li");
    z("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
    var Jb=z("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),Gb=z("input,button,textarea,select");
    i.basePath=function(){
        for(var a=
            document.getElementsByTagName("script"),d,e=0,b=a.length;e<b;e++)if(d=a[e].src||"",/kindeditor[\w\-\.]*\.js/.test(d))return d.substring(0,d.lastIndexOf("/")+1);return""
        }();
    i.options={
        designMode:!0,
        fullscreenMode:!1,
        filterMode:!0,
        wellFormatMode:!0,
        shadowMode:!0,
        loadStyleMode:!0,
        basePath:i.basePath,
        themesPath:i.basePath+"themes/",
        langPath:i.basePath+"lang/",
        pluginsPath:i.basePath+"plugins/",
        themeType:"default",
        langType:"zh_CN",
        urlType:"",
        newlineTag:"p",
        resizeType:2,
        syncType:"form",
        pasteType:2,
        dialogAlignType:"page",
        useContextmenu:!0,
        fullscreenShortcut:!1,
        bodyClass:"ke-content",
        indentChar:"\t",
        cssPath:"",
        cssData:"",
        minWidth:650,
        minHeight:100,
        minChangeSize:50,
        zIndex:811213,
        items:["source","|","undo","redo","|","preview","print","template","code","cut","copy","paste","plainpaste","wordpaste","|","justifyleft","justifycenter","justifyright","justifyfull","insertorderedlist","insertunorderedlist","indent","outdent","subscript","superscript","clearhtml","quickformat","selectall","|","fullscreen","/","formatblock",
        "fontname","fontsize","|","forecolor","hilitecolor","bold","italic","underline","strikethrough","lineheight","removeformat","|","image","multiimage","flash","media","insertfile","table","hr","emoticons","baidumap","pagebreak","anchor","link","unlink","|","about"],
        noDisableItems:["source","fullscreen"],
        colorTable:[["#E53333","#E56600","#FF9900","#64451D","#DFC5A4","#FFE500"],["#009900","#006600","#99BB00","#B8D100","#60D978","#00D5FF"],["#337FE5","#003399","#4C33E5","#9933E5","#CC33E5","#EE33EE"],
        ["#FFFFFF","#CCCCCC","#999999","#666666","#333333","#000000"]],
        fontSizeTable:["9px","10px","12px","14px","16px","18px","24px","32px"],
        htmlTags:{
            font:["id","class","color","size","face",".background-color"],
            span:["id","class",".color",".background-color",".font-size",".font-family",".background",".font-weight",".font-style",".text-decoration",".vertical-align",".line-height"],
            div:["id","class","align",".border",".margin",".padding",".text-align",".color",".background-color",".font-size",".font-family",
            ".font-weight",".background",".font-style",".text-decoration",".vertical-align",".margin-left"],
            table:["id","class","border","cellspacing","cellpadding","width","height","align","bordercolor",".padding",".margin",".border","bgcolor",".text-align",".color",".background-color",".font-size",".font-family",".font-weight",".font-style",".text-decoration",".background",".width",".height",".border-collapse"],
            "td,th":["id","class","align","valign","width","height","colspan","rowspan","bgcolor",".text-align",
            ".color",".background-color",".font-size",".font-family",".font-weight",".font-style",".text-decoration",".vertical-align",".background",".border"],
            a:["id","class","href","target","name"],
            embed:["id","class","src","width","height","type","loop","autostart","quality",".width",".height","align","allowscriptaccess"],
            img:["id","class","src","width","height","border","alt","title","align",".width",".height",".border"],
            "p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6":["id","class","align",".text-align",".color",
            ".background-color",".font-size",".font-family",".background",".font-weight",".font-style",".text-decoration",".vertical-align",".text-indent",".margin-left"],
            pre:["id","class"],
            hr:["id","class",".page-break-after"],
            "br,tbody,tr,strong,b,sub,sup,em,i,u,strike,s,del":["id","class"],
            iframe:["id","class","src","frameborder","width","height",".width",".height"]
            },
        layout:'<div class="container"><div class="toolbar"></div><div class="edit"></div><div class="statusbar"></div></div>'
    };
    
    var db=!1,Hb=z("8,9,13,32,46,48..57,59,61,65..90,106,109..111,188,190..192,219..222"),
    I=z("33..40"),cb={};
    
    h(Hb,function(a,d){
        cb[a]=d
        });
    h(I,function(a,d){
        cb[a]=d
        });
    var Wb="altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,data,detail,eventPhase,fromElement,handler,keyCode,metaKey,newValue,offsetX,offsetY,originalTarget,pageX,pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which".split(",");
    A(E,{
        init:function(a,d){
            var e=this,b=a.ownerDocument||a.document||a;
            e.event=d;
            h(Wb,
                function(a,b){
                    e[b]=d[b]
                    });
            if(!e.target)e.target=e.srcElement||b;
            if(e.target.nodeType===3)e.target=e.target.parentNode;
            if(!e.relatedTarget&&e.fromElement)e.relatedTarget=e.fromElement===e.target?e.toElement:e.fromElement;
            if(e.pageX==null&&e.clientX!=null){
                var i=b.documentElement,b=b.body;
                e.pageX=e.clientX+(i&&i.scrollLeft||b&&b.scrollLeft||0)-(i&&i.clientLeft||b&&b.clientLeft||0);
                e.pageY=e.clientY+(i&&i.scrollTop||b&&b.scrollTop||0)-(i&&i.clientTop||b&&b.clientTop||0)
                }
                if(!e.which&&(e.charCode||e.charCode===
                0?e.charCode:e.keyCode))e.which=e.charCode||e.keyCode;
            if(!e.metaKey&&e.ctrlKey)e.metaKey=e.ctrlKey;
            if(!e.which&&e.button!==c)e.which=e.button&1?1:e.button&2?3:e.button&4?2:0;
            switch(e.which){
                case 186:
                    e.which=59;
                    break;
                case 187:case 107:case 43:
                    e.which=61;
                    break;
                case 189:case 45:
                    e.which=109;
                    break;
                case 42:
                    e.which=106;
                    break;
                case 47:
                    e.which=111;
                    break;
                case 78:
                    e.which=110
                    }
                    e.which>=96&&e.which<=105&&(e.which-=48)
            },
        preventDefault:function(){
            var a=this.event;
            a.preventDefault&&a.preventDefault();
            a.returnValue=
            !1
            },
        stopPropagation:function(){
            var a=this.event;
            a.stopPropagation&&a.stopPropagation();
            a.cancelBubble=!0
            },
        stop:function(){
            this.preventDefault();
            this.stopPropagation()
            }
        });
var la="kindeditor_"+Ga,eb=0,L={};

C&&b.attachEvent("onunload",function(){
    h(L,function(a,d){
        d.el&&N(d.el)
        })
    });
i.ctrl=V;
i.ready=function(a){
    function d(){
        i||(i=!0,a(KindEditor))
        }
        function e(){
        if(!i){
            try{
                document.documentElement.doScroll("left")
                }catch(a){
                setTimeout(e,100);
                return
            }
            d()
            }
        }
    function c(){
    document.readyState==="complete"&&d()
    }
var i=!1;
if(document.addEventListener)F(document,"DOMContentLoaded",d);
else if(document.attachEvent){
    F(document,"readystatechange",c);
    var l=!1;
    try{
        l=b.frameElement==null
        }catch(f){}
    document.documentElement.doScroll&&l&&e()
    }
    F(b,"load",d)
};

i.formatUrl=M;
i.formatHtml=J;
i.getCssList=Q;
i.getAttrList=G;
i.mediaType=T;
i.mediaAttrs=fa;
i.mediaEmbed=Ka;
i.mediaImg=ib;
i.clearMsWord=W;
i.tmpl=function(a,d){
    var e=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g,
        " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");
    return d?e(d):e
    };
    
I=document.createElement("div");
I.setAttribute("className","t");
var Kb=I.className!=="t";
i.query=function(a,d){
    var e=Da(a,d);
    return e.length>0?e[0]:null
    };
    
i.queryAll=Da;
A(R,{
    init:function(a){
        for(var a=g(a)?a:[a],d=0,e=0,b=a.length;e<b;e++)a[e]&&(this[e]=a[e].constructor===R?a[e][0]:a[e],
            d++);
        this.length=d;
        this.doc=ga(this[0]);
        this.name=Ma(this[0]);
        this.type=this.length>0?this[0].nodeType:null;
        this.win=ha(this[0])
        },
    each:function(a){
        for(var d=0;d<this.length;d++)if(a.call(this[d],d,this[d])===!1)break;return this
        },
    bind:function(a,d){
        this.each(function(){
            F(this,a,d)
            });
        return this
        },
    unbind:function(a,d){
        this.each(function(){
            N(this,a,d)
            });
        return this
        },
    fire:function(a){
        if(this.length<1)return this;
        ea(this[0],a);
        return this
        },
    hasAttr:function(a){
        if(this.length<1)return!1;
        return!!Ca(this[0],
            a)
        },
    attr:function(a,d){
        var e=this;
        if(a===c)return G(e.outer());
        if(typeof a==="object")return h(a,function(a,d){
            e.attr(a,d)
            }),e;
        if(d===c)return d=e.length<1?null:Ca(e[0],a),d===null?"":d;
        e.each(function(){
            La(this,a,d)
            });
        return e
        },
    removeAttr:function(a){
        this.each(function(){
            var d=a;
            C&&O<8&&d.toLowerCase()=="class"&&(d="className");
            La(this,d,"");
            this.removeAttribute(d)
            });
        return this
        },
    get:function(a){
        if(this.length<1)return null;
        return this[a||0]
        },
    eq:function(a){
        if(this.length<1)return null;
        return this[a]?
        new R(this[a]):null
        },
    hasClass:function(a){
        if(this.length<1)return!1;
        return m(a,this[0].className," ")
        },
    addClass:function(a){
        this.each(function(){
            if(!m(a,this.className," "))this.className=n(this.className+" "+a)
                });
        return this
        },
    removeClass:function(a){
        this.each(function(){
            if(m(a,this.className," "))this.className=n(this.className.replace(RegExp("(^|\\s)"+a+"(\\s|$)")," "))
                });
        return this
        },
    html:function(a){
        if(a===c){
            if(this.length<1||this.type!=1)return"";
            return J(this[0].innerHTML)
            }
            this.each(function(){
            Lb(this,
                a)
            });
        return this
        },
    text:function(){
        if(this.length<1)return"";
        return C?this[0].innerText:this[0].textContent
        },
    hasVal:function(){
        if(this.length<1)return!1;
        return!!Gb[Ma(this[0])]
        },
    val:function(a){
        if(a===c){
            if(this.length<1)return"";
            return this.hasVal()?this[0].value:this.attr("value")
            }else return this.each(function(){
            Gb[Ma(this)]?this.value=a:La(this,"value",a)
            }),this
        },
    css:function(a,d){
        var e=this;
        if(a===c)return Q(e.attr("style"));
        if(typeof a==="object")return h(a,function(a,d){
            e.css(a,d)
            }),e;
        if(d===
            c){
            if(e.length<1)return"";
            return e[0].style[q(a)]||Mb(e[0],a)||""
            }
            e.each(function(){
            this.style[q(a)]=d
            });
        return e
        },
    width:function(a){
        if(a===c){
            if(this.length<1)return 0;
            return this[0].offsetWidth
            }
            return this.css("width",j(a))
        },
    height:function(a){
        if(a===c){
            if(this.length<1)return 0;
            return this[0].offsetHeight
            }
            return this.css("height",j(a))
        },
    opacity:function(a){
        this.each(function(){
            this.style.opacity===c?this.style.filter=a==1?"":"alpha(opacity="+a*100+")":this.style.opacity=a==1?"":a
            });
        return this
        },
    data:function(a,d){
        a="kindeditor_data_"+a;
        if(d===c){
            if(this.length<1)return null;
            return this[0][a]
            }
            this.each(function(){
            this[a]=d
            });
        return this
        },
    pos:function(){
        var a=this[0],d=0,e=0;
        if(a)if(a.getBoundingClientRect)a=a.getBoundingClientRect(),e=ma(this.doc),d=a.left+e.x,e=a.top+e.y;else for(;a;)d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;
        return{
            x:ca(d),
            y:ca(e)
            }
        },
clone:function(a){
    if(this.length<1)return new R([]);
    return new R(this[0].cloneNode(a))
    },
append:function(a){
    this.each(function(){
        this.appendChild&&
        this.appendChild(i(a)[0])
        });
    return this
    },
appendTo:function(a){
    this.each(function(){
        i(a)[0].appendChild(this)
        });
    return this
    },
before:function(a){
    this.each(function(){
        this.parentNode.insertBefore(i(a)[0],this)
        });
    return this
    },
after:function(a){
    this.each(function(){
        this.nextSibling?this.parentNode.insertBefore(i(a)[0],this.nextSibling):this.parentNode.appendChild(i(a)[0])
        });
    return this
    },
replaceWith:function(a){
    var d=[];
    this.each(function(e,b){
        N(b);
        var c=i(a)[0];
        b.parentNode.replaceChild(c,b);
        d.push(c)
        });
    return i(d)
    },
empty:function(){
    this.each(function(a,d){
        for(var e=d.firstChild;e;){
            if(!d.parentNode)break;
            var b=e.nextSibling;
            e.parentNode.removeChild(e);
            e=b
            }
        });
return this
},
remove:function(a){
    var d=this;
    d.each(function(e,b){
        if(b.parentNode){
            N(b);
            if(a)for(var c=b.firstChild;c;){
                var i=c.nextSibling;
                b.parentNode.insertBefore(c,b);
                c=i
                }
                b.parentNode.removeChild(b);
            delete d[e]
        }
    });
d.length=0;
return d
},
show:function(a){
    a===c&&(a=this._originDisplay||"");
    if(this.css("display")!="none")return this;
    return this.css("display",
        a)
    },
hide:function(){
    if(this.length<1)return this;
    this._originDisplay=this[0].style.display;
    return this.css("display","none")
    },
outer:function(){
    if(this.length<1)return"";
    var a=this.doc.createElement("div");
    a.appendChild(this[0].cloneNode(!0));
    return J(a.innerHTML)
    },
isSingle:function(){
    return!!fb[this.name]
    },
isInline:function(){
    return!!gb[this.name]
    },
isBlock:function(){
    return!!hb[this.name]
    },
isStyle:function(){
    return!!Fb[this.name]
    },
isControl:function(){
    return!!Vb[this.name]
    },
contains:function(a){
    if(this.length<
        1)return!1;
    return Ba(this[0],i(a)[0])
    },
parent:function(){
    if(this.length<1)return null;
    var a=this[0].parentNode;
    return a?new R(a):null
    },
children:function(){
    if(this.length<1)return new R([]);
    for(var a=[],d=this[0].firstChild;d;)(d.nodeType!=3||n(d.nodeValue)!=="")&&a.push(d),d=d.nextSibling;
    return new R(a)
    },
first:function(){
    var a=this.children();
    return a.length>0?a.eq(0):null
    },
last:function(){
    var a=this.children();
    return a.length>0?a.eq(a.length-1):null
    },
index:function(){
    if(this.length<1)return-1;
    for(var a=
        -1,d=this[0];d;)a++,d=d.previousSibling;
    return a
    },
prev:function(){
    if(this.length<1)return null;
    var a=this[0].previousSibling;
    return a?new R(a):null
    },
next:function(){
    if(this.length<1)return null;
    var a=this[0].nextSibling;
    return a?new R(a):null
    },
scan:function(a,d){
    function e(b){
        for(b=d?b.firstChild:b.lastChild;b;){
            var c=d?b.nextSibling:b.previousSibling;
            if(a(b)===!1)return!1;
            if(e(b)===!1)return!1;
            b=c
            }
        }
        if(!(this.length<1))return d=d===c?!0:d,e(this[0]),this
    }
});
h("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error,contextmenu".split(","),
    function(a,d){
        R.prototype[d]=function(a){
            return a?this.bind(d,a):this.fire(d)
            }
        });
I=i;
i=function(a,d){
    function e(a){
        a[0]||(a=[]);
        return new R(a)
        }
        if(!(a===c||a===null)){
        if(typeof a==="string"){
            d&&(d=i(d)[0]);
            var b=a.length;
            a.charAt(0)==="@"&&(a=a.substr(1));
            if(a.length!==b||/<.+>/.test(a)){
                var b=(d?d.ownerDocument||d:document).createElement("div"),f=[];
                b.innerHTML='<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />'+a;
                for(var l=0,h=b.childNodes.length;l<h;l++){
                    var j=b.childNodes[l];
                    j.id!="__kindeditor_temp_tag__"&&f.push(j)
                    }
                    return e(f)
                }
                return e(Da(a,d))
            }
            if(a&&a.constructor===R)return a;
        a.toArray&&(a=a.toArray());
        if(g(a))return e(a);
        return e(D(arguments))
        }
    };

h(I,function(a,d){
    i[a]=d
    });
i.NodeClass=R;
b.KindEditor=i;
var ra=0,qa=1,na=2,sa=3,Ib=0;
A(Z,{
    init:function(a){
        this.startContainer=a;
        this.startOffset=0;
        this.endContainer=a;
        this.endOffset=0;
        this.collapsed=!0;
        this.doc=a
        },
    commonAncestor:function(){
        function a(a){
            for(var d=[];a;)d.push(a),a=a.parentNode;
            return d
            }
            for(var d=a(this.startContainer),
            e=a(this.endContainer),b=0,c=d.length,i=e.length,f,g;++b;)if(f=d[c-b],g=e[i-b],!f||!g||f!==g)break;return d[c-b+1]
        },
    setStart:function(a,d){
        var e=this.doc;
        this.startContainer=a;
        this.startOffset=d;
        if(this.endContainer===e)this.endContainer=a,this.endOffset=d;
        return jb(this)
        },
    setEnd:function(a,d){
        var e=this.doc;
        this.endContainer=a;
        this.endOffset=d;
        if(this.startContainer===e)this.startContainer=a,this.startOffset=d;
        return jb(this)
        },
    setStartBefore:function(a){
        return this.setStart(a.parentNode||this.doc,
            i(a).index())
        },
    setStartAfter:function(a){
        return this.setStart(a.parentNode||this.doc,i(a).index()+1)
        },
    setEndBefore:function(a){
        return this.setEnd(a.parentNode||this.doc,i(a).index())
        },
    setEndAfter:function(a){
        return this.setEnd(a.parentNode||this.doc,i(a).index()+1)
        },
    selectNode:function(a){
        return this.setStartBefore(a).setEndAfter(a)
        },
    selectNodeContents:function(a){
        var d=i(a);
        if(d.type==3||d.isSingle())return this.selectNode(a);
        d=d.children();
        if(d.length>0)return this.setStartBefore(d[0]).setEndAfter(d[d.length-
            1]);
        return this.setStart(a,0).setEnd(a,0)
        },
    collapse:function(a){
        if(a)return this.setEnd(this.startContainer,this.startOffset);
        return this.setStart(this.endContainer,this.endOffset)
        },
    compareBoundaryPoints:function(a,d){
        var e=this.get(),b=d.get();
        if(C){
            var c={};
            
            c[ra]="StartToStart";
            c[qa]="EndToStart";
            c[na]="EndToEnd";
            c[sa]="StartToEnd";
            e=e.compareEndPoints(c[a],b);
            if(e!==0)return e;
            var l,f,g,h;
            if(a===ra||a===sa)l=this.startContainer,g=this.startOffset;
            if(a===qa||a===na)l=this.endContainer,g=this.endOffset;
            if(a===ra||a===qa)f=d.startContainer,h=d.startOffset;
            if(a===na||a===sa)f=d.endContainer,h=d.endOffset;
            if(l===f)return l=g-h,l>0?1:l<0?-1:0;
            for(e=f;e&&e.parentNode!==l;)e=e.parentNode;
            if(e)return i(e).index()>=g?-1:1;
            for(e=l;e&&e.parentNode!==f;)e=e.parentNode;
            if(e)return i(e).index()>=h?1:-1;
            if((e=i(f).next())&&e.contains(l))return 1;
            if((e=i(l).next())&&e.contains(f))return-1
                }else return e.compareBoundaryPoints(a,b)
            },
    cloneRange:function(){
        return(new Z(this.doc)).setStart(this.startContainer,this.startOffset).setEnd(this.endContainer,
            this.endOffset)
        },
    toString:function(){
        var a=this.get();
        return(C?a.text:a.toString()).replace(/\r\n|\n|\r/g,"")
        },
    cloneContents:function(){
        return Oa(this,!0,!1)
        },
    deleteContents:function(){
        return Oa(this,!1,!0)
        },
    extractContents:function(){
        return Oa(this,!0,!0)
        },
    insertNode:function(a){
        var d=this.startContainer,e=this.startOffset,b=this.endContainer,c=this.endOffset,i,f,g,h=1;
        if(a.nodeName.toLowerCase()==="#document-fragment")i=a.firstChild,f=a.lastChild,h=a.childNodes.length;
        d.nodeType==1?(g=d.childNodes[e])?
        (d.insertBefore(a,g),d===b&&(c+=h)):d.appendChild(a):d.nodeType==3&&(e===0?(d.parentNode.insertBefore(a,d),d.parentNode===b&&(c+=h)):e>=d.nodeValue.length?d.nextSibling?d.parentNode.insertBefore(a,d.nextSibling):d.parentNode.appendChild(a):(g=e>0?d.splitText(e):d,d.parentNode.insertBefore(a,g),d===b&&(b=g,c-=e)));
        i?this.setStartBefore(i).setEndAfter(f):this.selectNode(a);
        if(this.compareBoundaryPoints(na,this.cloneRange().setEnd(b,c))>=1)return this;
        return this.setEnd(b,c)
        },
    surroundContents:function(a){
        a.appendChild(this.extractContents());
        return this.insertNode(a).selectNode(a)
        },
    isControl:function(){
        var a=this.startContainer,d=this.startOffset,e=this.endContainer,b=this.endOffset;
        return a.nodeType==1&&a===e&&d+1===b&&i(a.childNodes[d]).isControl()
        },
    get:function(a){
        var d=this.doc;
        if(!C){
            d=d.createRange();
            try{
                d.setStart(this.startContainer,this.startOffset),d.setEnd(this.endContainer,this.endOffset)
                }catch(e){}
            return d
            }
            if(a&&this.isControl())return d=d.body.createControlRange(),d.addElement(this.startContainer.childNodes[this.startOffset]),
            d;
        a=this.cloneRange().down();
        d=d.body.createTextRange();
        d.setEndPoint("StartToStart",lb(a.startContainer,a.startOffset));
        d.setEndPoint("EndToStart",lb(a.endContainer,a.endOffset));
        return d
        },
    html:function(){
        return i(this.cloneContents()).outer()
        },
    down:function(){
        function a(a,b,c){
            if(a.nodeType==1&&(a=i(a).children(),a.length!==0)){
                var l,f,g,h;
                b>0&&(l=a.eq(b-1));
                b<a.length&&(f=a.eq(b));
                if(l&&l.type==3)g=l[0],h=g.nodeValue.length;
                f&&f.type==3&&(g=f[0],h=0);
                g&&(c?d.setStart(g,h):d.setEnd(g,h))
                }
            }
        var d=
    this;
    a(d.startContainer,d.startOffset,!0);
    a(d.endContainer,d.endOffset,!1);
    return d
    },
up:function(){
    function a(a,b,c){
        a.nodeType==3&&(b===0?c?d.setStartBefore(a):d.setEndBefore(a):b==a.nodeValue.length&&(c?d.setStartAfter(a):d.setEndAfter(a)))
        }
        var d=this;
    a(d.startContainer,d.startOffset,!0);
    a(d.endContainer,d.endOffset,!1);
    return d
    },
enlarge:function(a){
    function d(d,b,c){
        d=i(d);
        if(!(d.type==3||Ia[d.name]||!a&&d.isBlock()))if(b===0){
            for(;!d.prev();){
                b=d.parent();
                if(!b||Ia[b.name]||!a&&b.isBlock())break;
                d=b
                }
                c?e.setStartBefore(d[0]):e.setEndBefore(d[0])
            }else if(b==d.children().length){
            for(;!d.next();){
                b=d.parent();
                if(!b||Ia[b.name]||!a&&b.isBlock())break;
                d=b
                }
                c?e.setStartAfter(d[0]):e.setEndAfter(d[0])
            }
        }
        var e=this;
e.up();
    d(e.startContainer,e.startOffset,!0);
    d(e.endContainer,e.endOffset,!1);
    return e
    },
shrink:function(){
    for(var a,d=this.collapsed;this.startContainer.nodeType==1&&(a=this.startContainer.childNodes[this.startOffset])&&a.nodeType==1&&!i(a).isSingle();)this.setStart(a,0);
    if(d)return this.collapse(d);
    for(;this.endContainer.nodeType==1&&this.endOffset>0&&(a=this.endContainer.childNodes[this.endOffset-1])&&a.nodeType==1&&!i(a).isSingle();)this.setEnd(a,a.childNodes.length);
    return this
    },
createBookmark:function(a){
    var d,e=i('<span style="display:none;"></span>',this.doc)[0];
    e.id="__kindeditor_bookmark_start_"+Ib++ +"__";
    if(!this.collapsed)d=e.cloneNode(!0),d.id="__kindeditor_bookmark_end_"+Ib++ +"__";
    d&&this.cloneRange().collapse(!1).insertNode(d).setEndBefore(d);
    this.insertNode(e).setStartAfter(e);
    return{
        start:a?"#"+e.id:e,
        end:d?a?"#"+d.id:d:null
        }
    },
moveToBookmark:function(a){
    var d=this.doc,e=i(a.start,d),a=a.end?i(a.end,d):null;
    if(!e||e.length<1)return this;
    this.setStartBefore(e[0]);
    e.remove();
    a&&a.length>0?(this.setEndBefore(a[0]),a.remove()):this.collapse(!0);
    return this
    },
dump:function(){
    console.log("--------------------");
    console.log(this.startContainer.nodeType==3?this.startContainer.nodeValue:this.startContainer,this.startOffset);
    console.log(this.endContainer.nodeType==3?this.endContainer.nodeValue:
        this.endContainer,this.endOffset)
    }
});
i.RangeClass=Z;
i.range=Pa;
i.START_TO_START=ra;
i.START_TO_END=qa;
i.END_TO_END=na;
i.END_TO_START=sa;
A(ua,{
    init:function(a){
        var d=a.doc;
        this.doc=d;
        this.win=ha(d);
        this.sel=Qa(d);
        this.range=a
        },
    selection:function(a){
        var d=this.doc,e;
        e=Qa(d);
        var b;
        try{
            b=e.rangeCount>0?e.getRangeAt(0):e.createRange()
            }catch(c){}
        e=C&&(!b||!b.item&&b.parentElement().ownerDocument!==d)?null:b;
        this.sel=Qa(d);
        if(e)return this.range=Pa(e),i(this.range.startContainer).name=="html"&&this.range.selectNodeContents(d.body).collapse(!1),
            this;
        a&&this.range.selectNodeContents(d.body).collapse(!1);
        return this
        },
    select:function(a){
        var a=s(a,!0),d=this.sel,b=this.range.cloneRange().shrink(),c=b.startContainer,f=b.startOffset,l=ga(c),g=this.win,h,j=!1;
        if(a&&c.nodeType==1&&b.collapsed){
            if(C){
                d=i("<span>&nbsp;</span>",l);
                b.insertNode(d[0]);
                h=l.body.createTextRange();
                try{
                    h.moveToElementText(d[0])
                    }catch(m){}
                h.collapse(!1);
                h.select();
                d.remove();
                g.focus();
                return this
                }
                if(ja&&(a=c.childNodes,i(c).isInline()||f>0&&i(a[f-1]).isInline()||a[f]&&i(a[f]).isInline()))b.insertNode(l.createTextNode("\u200b")),
                j=!0
                }
                if(C)try{
            h=b.get(!0),h.select()
            }catch(o){}else j&&b.collapse(!1),h=b.get(!0),d.removeAllRanges(),d.addRange(h),l!==document&&(b=i(h.endContainer).pos(),g.scrollTo(b.x,b.y));
        g.focus();
        return this
        },
    wrap:function(a){
        var d=this.range,b;
        b=i(a,this.doc);
        if(d.collapsed)return d.shrink(),d.insertNode(b[0]).selectNodeContents(b[0]),this;
        if(b.isBlock()){
            for(var c=a=b.clone(!0);c.first();)c=c.first();
            c.append(d.extractContents());
            d.insertNode(a[0]).selectNode(a[0]);
            return this
            }
            d.enlarge();
        var f=d.createBookmark(),
        a=d.commonAncestor(),l=!1;
        i(a).scan(function(a){
            if(!l&&a==f.start)l=!0;
            else if(l){
                if(a==f.end)return!1;
                var d=i(a),c;
                    a:{
                    for(c=d;c&&c.name!="body";){
                        if(Ja[c.name]||c.name=="div"&&c.hasClass("ke-script")){
                            c=!0;
                            break a
                        }
                        c=c.parent()
                        }
                        c=!1
                    }
                    if(!c&&d.type==3&&n(a.nodeValue).length>0){
                    for(var g;(g=d.parent())&&g.isStyle()&&g.children().length==1;)d=g;
                    g=b;
                    g=g.clone(!0);
                    if(d.type==3)Ta(g).append(d.clone(!1)),d.replaceWith(g);
                    else{
                        for(var a=d,h;(h=d.first())&&h.children().length==1;)d=h;
                        h=d.first();
                        for(d=d.doc.createDocumentFragment();h;)d.appendChild(h[0]),
                            h=h.next();
                        h=a.clone(!0);
                        c=Ta(h);
                        for(var j=h,m=!1;g;){
                            for(;j;)j.name===g.name&&(Nb(j,g.attr(),g.css()),m=!0),j=j.first();
                            m||c.append(g.clone(!1));
                            m=!1;
                            g=g.first()
                            }
                            g=h;
                        d.firstChild&&Ta(g).append(d);
                        a.replaceWith(g)
                        }
                    }
            }
        });
d.moveToBookmark(f);
return this
},
split:function(a,d){
    for(var b=this.range,c=b.doc,f=b.cloneRange().collapse(a),l=f.startContainer,g=f.startOffset,h=l.nodeType==3?l.parentNode:l,j=!1,m;h&&h.parentNode;){
        m=i(h);
        if(d){
            if(!m.isStyle())break;
            if(!Ra(m,d))break
        }else if(Ia[m.name])break;
        j=
        !0;
        h=h.parentNode
        }
        if(j)c=c.createElement("span"),b.cloneRange().collapse(!a).insertNode(c),a?f.setStartBefore(h.firstChild).setEnd(l,g):f.setStart(l,g).setEndAfter(h.lastChild),l=f.extractContents(),g=l.firstChild,j=l.lastChild,a?(f.insertNode(l),b.setStartAfter(j).setEndBefore(c)):(h.appendChild(l),b.setStartBefore(c).setEndBefore(g)),f=c.parentNode,f==b.endContainer&&(h=i(c).prev(),l=i(c).next(),h&&l&&h.type==3&&l.type==3?b.setEnd(h[0],h[0].nodeValue.length):a||b.setEnd(b.endContainer,b.endOffset-
        1)),f.removeChild(c);
    return this
    },
remove:function(a){
    var d=this.doc,b=this.range;
    b.enlarge();
    if(b.startOffset===0){
        for(var c=i(b.startContainer),f;(f=c.parent())&&f.isStyle()&&f.children().length==1;)c=f;
        b.setStart(c[0],0);
        c=i(b.startContainer);
        c.isBlock()&&Sa(c,a);
        (c=c.parent())&&c.isBlock()&&Sa(c,a)
        }
        if(b.collapsed){
        this.split(!0,a);
        d=b.startContainer;
        c=b.startOffset;
        if(c>0&&(f=i(d.childNodes[c-1]))&&oa(f))f.remove(),b.setStart(d,c-1);
        (c=i(d.childNodes[c]))&&oa(c)&&c.remove();
        oa(d)&&(b.startBefore(d),
            d.remove());
        b.collapse(!0);
        return this
        }
        this.split(!0,a);
    this.split(!1,a);
    var l=d.createElement("span"),g=d.createElement("span");
    b.cloneRange().collapse(!1).insertNode(g);
    b.cloneRange().collapse(!0).insertNode(l);
    var j=[],m=!1;
    i(b.commonAncestor()).scan(function(a){
        if(!m&&a==l)m=!0;
        else{
            if(a==g)return!1;
            m&&j.push(a)
            }
        });
i(l).remove();
i(g).remove();
d=b.startContainer;
c=b.startOffset;
f=b.endContainer;
var o=b.endOffset;
if(c>0){
    var p=i(d.childNodes[c-1]);
    p&&oa(p)&&(p.remove(),b.setStart(d,c-1),d==f&&b.setEnd(f,
        o-1));
    if((c=i(d.childNodes[c]))&&oa(c))c.remove(),d==f&&b.setEnd(f,o-1)
        }(d=i(f.childNodes[b.endOffset]))&&oa(d)&&d.remove();
d=b.createBookmark(!0);
h(j,function(d,b){
    Sa(i(b),a)
    });
b.moveToBookmark(d);
return this
},
commonNode:function(a){
    function d(d){
        for(var b=d;d;){
            if(Ra(i(d),a))return i(d);
            d=d.parentNode
            }
            for(;b&&(b=b.lastChild);)if(Ra(i(b),a))return i(b);return null
        }
        var b=this.range,c=b.endContainer,b=b.endOffset,f=c.nodeType==3||b===0?c:c.childNodes[b-1],l=d(f);
    if(l)return l;
    if(f.nodeType==1||c.nodeType==
        3&&b===0)if(c=i(f).prev())return d(c);
    return null
    },
commonAncestor:function(a){
    function d(d){
        for(;d;){
            if(d.nodeType==1&&d.tagName.toLowerCase()===a)return d;
            d=d.parentNode
            }
            return null
        }
        var b=this.range,c=b.startContainer,f=b.startOffset,l=b.endContainer,b=b.endOffset,l=l.nodeType==3||b===0?l:l.childNodes[b-1],c=d(c.nodeType==3||f===0?c:c.childNodes[f-1]),f=d(l);
    if(c&&f&&c===f)return i(c);
    return null
    },
state:function(a){
    var d=this.doc,b=!1;
    try{
        b=d.queryCommandState(a)
        }catch(c){}
    return b
    },
val:function(a){
    var d=
    this.doc,a=a.toLowerCase(),b="";
    if(a==="fontfamily"||a==="fontname")return b=nb(d,"fontname"),b=b.replace(/['"]/g,""),b.toLowerCase();
    if(a==="formatblock"){
        b=nb(d,a);
        if(b===""&&(a=this.commonNode({
            "h1,h2,h3,h4,h5,h6,p,div,pre,address":"*"
        })))b=a.name;
        b==="Normal"&&(b="p");
        return b.toLowerCase()
        }
        if(a==="fontsize")return(a=this.commonNode({
        "*":".font-size"
    }))&&(b=a.css("font-size")),b.toLowerCase();
    if(a==="forecolor")return(a=this.commonNode({
        "*":".color"
    }))&&(b=a.css("color")),b=r(b),b===""&&(b="default"),
        b.toLowerCase();
    if(a==="hilitecolor")return(a=this.commonNode({
        "*":".background-color"
    }))&&(b=a.css("background-color")),b=r(b),b===""&&(b="default"),b.toLowerCase();
    return b
    },
toggle:function(a,d){
    this.commonNode(d)?this.remove(d):this.wrap(a);
    return this.select()
    },
bold:function(){
    return this.toggle("<strong></strong>",{
        span:".font-weight=bold",
        strong:"*",
        b:"*"
    })
    },
italic:function(){
    return this.toggle("<em></em>",{
        span:".font-style=italic",
        em:"*",
        i:"*"
    })
    },
underline:function(){
    return this.toggle("<u></u>",

    {
        span:".text-decoration=underline",
        u:"*"
    })
    },
strikethrough:function(){
    return this.toggle("<s></s>",{
        span:".text-decoration=line-through",
        s:"*"
    })
    },
forecolor:function(a){
    return this.toggle('<span style="color:'+a+';"></span>',{
        span:".color="+a,
        font:"color"
    })
    },
hilitecolor:function(a){
    return this.toggle('<span style="background-color:'+a+';"></span>',{
        span:".background-color="+a
        })
    },
fontsize:function(a){
    return this.toggle('<span style="font-size:'+a+';"></span>',{
        span:".font-size="+a,
        font:"size"
    })
    },
fontname:function(a){
    return this.fontfamily(a)
    },
fontfamily:function(a){
    return this.toggle('<span style="font-family:'+a+';"></span>',{
        span:".font-family="+a,
        font:"face"
    })
    },
removeformat:function(){
    var a={
        "*":".font-weight,.font-style,.text-decoration,.color,.background-color,.font-size,.font-family,.text-indent"
    };
    
    h(Fb,function(d){
        a[d]="*"
        });
    this.remove(a);
    return this.select()
    },
inserthtml:function(a,d){
    function b(a,d){
        var d='<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />'+d,e=a.get();
        e.item?e.item(0).outerHTML=d:
        e.pasteHTML(d);
        var c=a.doc.getElementById("__kindeditor_temp_tag__");
        c.parentNode.removeChild(c);
        e=mb(e);
        a.setEnd(e.endContainer,e.endOffset);
        a.collapse(!1);
        f.select(!1)
        }
        function c(a,d){
        var b=a.doc,e=b.createDocumentFragment();
        i("@"+d,b).each(function(){
            e.appendChild(this)
            });
        a.deleteContents();
        a.insertNode(e);
        a.collapse(!1);
        f.select(!1)
        }
        var f=this,l=f.range;
    if(a==="")return f;
    if(C&&d){
        try{
            b(l,a)
            }catch(g){
            c(l,a)
            }
            return f
        }
        c(l,a);
    return f
    },
hr:function(){
    return this.inserthtml("<hr />")
    },
print:function(){
    this.win.print();
    return this
    },
insertimage:function(a,d,b,c,f,i){
    d=s(d,"");
    s(f,0);
    a='<img src="'+p(a)+'" data-ke-src="'+p(a)+'" ';
    b&&(a+='width="'+p(b)+'" ');
    c&&(a+='height="'+p(c)+'" ');
    d&&(a+='title="'+p(d)+'" ');
    i&&(a+='align="'+p(i)+'" ');
    a+='alt="'+p(d)+'" ';
    a+="/>";
    return this.inserthtml(a)
    },
createlink:function(a,d){
    var b=this.doc,c=this.range;
    this.select();
    var f=this.commonNode({
        a:"*"
    });
    f&&!c.isControl()&&(c.selectNode(f.get()),this.select());
    f='<a href="'+p(a)+'" data-ke-src="'+p(a)+'" ';
    d&&(f+=' target="'+
        p(d)+'"');
    if(c.collapsed)return f+=">"+p(a)+"</a>",this.inserthtml(f);
    if(c.isControl()){
        var l=i(c.startContainer.childNodes[c.startOffset]);
        f+="></a>";
        l.after(i(f,b));
        l.next().append(l);
        c.selectNode(l[0]);
        return this.select()
        }
        ba(b,"createlink","__kindeditor_temp_url__");
    i('a[href="__kindeditor_temp_url__"]',b).each(function(){
        i(this).attr("href",a).attr("data-ke-src",a);
        d?i(this).attr("target",d):i(this).removeAttr("target")
        });
    return this
    },
unlink:function(){
    var a=this.doc,d=this.range;
    this.select();
    if(d.collapsed){
        var b=this.commonNode({
            a:"*"
        });
        b&&(d.selectNode(b.get()),this.select());
        ba(a,"unlink",null);
        ja&&i(d.startContainer).name==="img"&&(a=i(d.startContainer).parent(),a.name==="a"&&a.remove(!0))
        }else ba(a,"unlink",null);
    return this
    }
});
h("formatblock,selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,indent,outdent,subscript,superscript".split(","),function(a,d){
    ua.prototype[d]=function(a){
        this.select();
        ba(this.doc,d,a);
        (!C||f(d,"formatblock,selectall,insertorderedlist,insertunorderedlist".split(","))>=
            0)&&this.selection();
        return this
        }
    });
h("cut,copy,paste".split(","),function(a,d){
    ua.prototype[d]=function(){
        if(!this.doc.queryCommandSupported(d))throw"not supported";
        this.select();
        ba(this.doc,d,null);
        return this
        }
    });
i.CmdClass=ua;
i.cmd=rb;
A(da,{
    init:function(a){
        var d=this;
        d.name=a.name||"";
        d.doc=a.doc||document;
        d.win=ha(d.doc);
        d.x=j(a.x);
        d.y=j(a.y);
        d.z=a.z;
        d.width=j(a.width);
        d.height=j(a.height);
        d.div=i('<div style="display:block;"></div>');
        d.options=a;
        d._alignEl=a.alignEl;
        d.width&&d.div.css("width",
            d.width);
        d.height&&d.div.css("height",d.height);
        d.z&&d.div.css({
            position:"absolute",
            left:d.x,
            top:d.y,
            "z-index":d.z
            });
        d.z&&(d.x===c||d.y===c)&&d.autoPos(d.width,d.height);
        a.cls&&d.div.addClass(a.cls);
        a.shadowMode&&d.div.addClass("ke-shadow");
        a.css&&d.div.css(a.css);
        a.src?i(a.src).replaceWith(d.div):i(d.doc.body).append(d.div);
        a.html&&d.div.html(a.html);
        if(a.autoScroll)if(C&&O<7||aa){
            var b=ma();
            i(d.win).bind("scroll",function(){
                var a=ma(),c=a.x-b.x,a=a.y-b.y;
                d.pos(o(d.x)+c,o(d.y)+a,!1)
                })
            }else d.div.css("position",
            "fixed")
        },
    pos:function(a,d,b){
        b=s(b,!0);
        if(a!==null&&(a=a<0?0:j(a),this.div.css("left",a),b))this.x=a;
        if(d!==null&&(d=d<0?0:j(d),this.div.css("top",d),b))this.y=d;
        return this
        },
    autoPos:function(a,d){
        var b=o(a)||0,c=o(d)||0,f=ma();
        if(this._alignEl){
            var l=i(this._alignEl),g=l.pos(),b=ca(l[0].clientWidth/2-b/2),c=ca(l[0].clientHeight/2-c/2);
            x=b<0?g.x:g.x+b;
            y=c<0?g.y:g.y+c
            }else g=X(this.doc),x=ca(f.x+(g.clientWidth-b)/2),y=ca(f.y+(g.clientHeight-c)/2);
        C&&O<7||aa||(x-=f.x,y-=f.y);
        return this.pos(x,y)
        },
    remove:function(){
        var a=this;
        (C&&O<7||aa)&&i(a.win).unbind("scroll");
        a.div.remove();
        h(a,function(d){
            a[d]=null
            });
        return this
        },
    show:function(){
        this.div.show();
        return this
        },
    hide:function(){
        this.div.hide();
        return this
        },
    draggable:function(a){
        var d=this,a=a||{};
        
        a.moveEl=d.div;
        a.moveFn=function(a,b,c,f,i,g){
            if((a+=i)<0)a=0;
            if((b+=g)<0)b=0;
            d.pos(a,b)
            };
            
        Ua(a);
        return d
        }
    });
i.WidgetClass=da;
i.widget=Wa;
var Xa="";
if(I=document.getElementsByTagName("html"))Xa=I[0].dir;
A(wa,da,{
    init:function(a){
        function d(){
            var d=
            Va(b.iframe);
            d.open();
            if(h)d.domain=document.domain;
            d.write(Ob(c,f,l,g));
            d.close();
            b.win=b.iframe[0].contentWindow;
            b.doc=d;
            var j=rb(d);
            b.afterChange(function(){
                j.selection()
                });
            ja&&i(d).click(function(a){
                i(a.target).name==="img"&&(j.selection(!0),j.range.selectNode(a.target),j.select())
                });
            if(C)b._mousedownHandler=function(){
                var a=j.range.cloneRange();
                a.shrink();
                a.isControl()&&b.blur()
                },i(document).mousedown(b._mousedownHandler),i(d).keydown(function(a){
                if(a.which==8){
                    j.selection();
                    var d=j.range;
                    d.isControl()&&
                    (d.collapse(!0),i(d.startContainer.childNodes[d.startOffset]).remove(),a.preventDefault())
                    }
                });
        b.cmd=j;
        b.html(va(b.srcElement));
        C?(d.body.disabled=!0,d.body.contentEditable=!0,d.body.removeAttribute("disabled")):d.designMode="on";
        a.afterCreate&&a.afterCreate.call(b)
        }
        var b=this;
    wa.parent.init.call(b,a);
    b.srcElement=i(a.srcElement);
    b.div.addClass("ke-edit");
    b.designMode=s(a.designMode,!0);
    b.beforeGetHtml=a.beforeGetHtml;
    b.beforeSetHtml=a.beforeSetHtml;
    b.afterSetHtml=a.afterSetHtml;
    var c=s(a.themesPath,
        ""),f=a.bodyClass,l=a.cssPath,g=a.cssData,h=location.host.replace(/:\d+/,"")!==document.domain,j="document.open();"+(h?'document.domain="'+document.domain+'";':"")+"document.close();",j=C?' src="javascript:void(function(){'+encodeURIComponent(j)+'}())"':"";
    b.iframe=i('<iframe class="ke-edit-iframe" hidefocus="true" frameborder="0"'+j+"></iframe>").css("width","100%");
    b.textarea=i('<textarea class="ke-edit-textarea" hidefocus="true"></textarea>').css("width","100%");
    b.width&&b.setWidth(b.width);
    b.height&&
    b.setHeight(b.height);
    b.designMode?b.textarea.hide():b.iframe.hide();
    h&&b.iframe.bind("load",function(){
        b.iframe.unbind("load");
        C?d():setTimeout(d,0)
        });
    b.div.append(b.iframe);
    b.div.append(b.textarea);
    b.srcElement.hide();
    !h&&d()
    },
setWidth:function(a){
    this.div.css("width",j(a));
    return this
    },
setHeight:function(a){
    a=j(a);
    this.div.css("height",a);
    this.iframe.css("height",a);
    if(C&&O<8||aa)a=j(o(a)-2);
    this.textarea.css("height",a);
    return this
    },
remove:function(){
    var a=this.doc;
    i(a.body).unbind();
    i(a).unbind();
    i(this.win).unbind();
    this._mousedownHandler&&i(document).unbind("mousedown",this._mousedownHandler);
    va(this.srcElement,this.html());
    this.srcElement.show();
    a.write("");
    this.iframe.unbind();
    this.textarea.unbind();
    wa.parent.remove.call(this)
    },
html:function(a,d){
    var b=this.doc;
    if(this.designMode){
        b=b.body;
        if(a===c)return a=d?"<!doctype html><html>"+b.parentNode.innerHTML+"</html>":b.innerHTML,this.beforeGetHtml&&(a=this.beforeGetHtml(a)),pa&&a=="<br />"&&(a=""),a;
        this.beforeSetHtml&&(a=this.beforeSetHtml(a));
        C&&O>=9&&(a=a.replace(/(<.*?checked=")checked(".*>)/ig,"$1$2"));
        i(b).html(a);
        this.afterSetHtml&&this.afterSetHtml();
        return this
        }
        if(a===c)return this.textarea.val();
    this.textarea.val(a);
    return this
    },
design:function(a){
    if(a===c?!this.designMode:a){
        if(!this.designMode)a=this.html(),this.designMode=!0,this.html(a),this.textarea.hide(),this.iframe.show()
            }else if(this.designMode)a=this.html(),this.designMode=!1,this.html(a),this.iframe.hide(),this.textarea.show();
    return this.focus()
    },
focus:function(){
    this.designMode?
    this.win.focus():this.textarea[0].focus();
    return this
    },
blur:function(){
    if(C){
        var a=i('<input type="text" style="float:left;width:0;height:0;padding:0;margin:0;border:0;" value="" />',this.div);
        this.div.append(a);
        a[0].focus();
        a.remove()
        }else this.designMode?this.win.blur():this.textarea[0].blur();
    return this
    },
afterChange:function(a){
    function d(d){
        setTimeout(function(){
            a(d)
            },1)
        }
        var b=this.doc,c=b.body;
    i(b).keyup(function(d){
        !d.ctrlKey&&!d.altKey&&cb[d.which]&&a(d)
        });
    i(b).mouseup(a).contextmenu(a);
    i(this.win).blur(a);
    i(c).bind("paste",d);
    i(c).bind("cut",d);
    return this
    }
});
i.EditClass=wa;
i.edit=sb;
i.iframeDoc=Va;
A(Ea,da,{
    init:function(a){
        function d(a){
            a=i(a);
            if(a.hasClass("ke-outline"))return a;
            if(a.hasClass("ke-toolbar-icon"))return a.parent()
                }
                function b(a,c){
            var e=d(a.target);
            if(e&&!e.hasClass("ke-disabled")&&!e.hasClass("ke-selected"))e[c]("ke-on")
                }
                var c=this;
        Ea.parent.init.call(c,a);
        c.disableMode=s(a.disableMode,!1);
        c.noDisableItemMap=z(s(a.noDisableItems,[]));
        c._itemMap={};
        
        c.div.addClass("ke-toolbar").bind("contextmenu,mousedown,mousemove",
            function(a){
                a.preventDefault()
                }).attr("unselectable","on");
        c.div.mouseover(function(a){
            b(a,"addClass")
            }).mouseout(function(a){
            b(a,"removeClass")
            }).click(function(a){
            var b=d(a.target);
            b&&!b.hasClass("ke-disabled")&&c.options.click.call(this,a,b.attr("data-name"))
            })
        },
    get:function(a){
        if(this._itemMap[a])return this._itemMap[a];
        return this._itemMap[a]=i("span.ke-icon-"+a,this.div).parent()
        },
    select:function(a){
        tb.call(this,a,function(a){
            a.addClass("ke-selected")
            });
        return self
        },
    unselect:function(a){
        tb.call(this,
            a,function(a){
                a.removeClass("ke-selected").removeClass("ke-on")
                });
        return self
        },
    enable:function(a){
        if(a=a.get?a:this.get(a))a.removeClass("ke-disabled"),a.opacity(1);
        return this
        },
    disable:function(a){
        if(a=a.get?a:this.get(a))a.removeClass("ke-selected").addClass("ke-disabled"),a.opacity(0.5);
        return this
        },
    disableAll:function(a,d){
        var b=this,f=b.noDisableItemMap;
        d&&(f=z(d));
        (a===c?!b.disableMode:a)?(i("span.ke-outline",b.div).each(function(){
            var a=i(this),d=a[0].getAttribute("data-name",2);
            f[d]||b.disable(a)
            }),
        b.disableMode=!0):(i("span.ke-outline",b.div).each(function(){
            var a=i(this),d=a[0].getAttribute("data-name",2);
            f[d]||b.enable(a)
            }),b.disableMode=!1);
        return b
        }
    });
i.ToolbarClass=Ea;
i.toolbar=ub;
A(xa,da,{
    init:function(a){
        a.z=a.z||811213;
        xa.parent.init.call(this,a);
        this.centerLineMode=s(a.centerLineMode,!0);
        this.div.addClass("ke-menu").bind("click,mousedown",function(a){
            a.stopPropagation()
            }).attr("unselectable","on")
        },
    addItem:function(a){
        if(a.title==="-")this.div.append(i('<div class="ke-menu-separator"></div>'));
        else{
            var d=i('<div class="ke-menu-item" unselectable="on"></div>'),b=i('<div class="ke-inline-block ke-menu-item-left"></div>'),c=i('<div class="ke-inline-block ke-menu-item-right"></div>'),f=j(a.height),l=s(a.iconClass,"");
            this.div.append(d);
            f&&(d.css("height",f),c.css("line-height",f));
            var g;
            this.centerLineMode&&(g=i('<div class="ke-inline-block ke-menu-item-center"></div>'),f&&g.css("height",f));
            d.mouseover(function(){
                i(this).addClass("ke-menu-item-on");
                g&&g.addClass("ke-menu-item-center-on")
                }).mouseout(function(){
                i(this).removeClass("ke-menu-item-on");
                g&&g.removeClass("ke-menu-item-center-on")
                }).click(function(d){
                a.click.call(i(this));
                d.stopPropagation()
                }).append(b);
            g&&d.append(g);
            d.append(c);
            a.checked&&(l="ke-icon-checked");
            l!==""&&b.html('<span class="ke-inline-block ke-toolbar-icon ke-toolbar-icon-url '+l+'"></span>');
            c.html(a.title);
            return this
            }
        },
remove:function(){
    this.options.beforeRemove&&this.options.beforeRemove.call(this);
    i(".ke-menu-item",this.div[0]).unbind();
    xa.parent.remove.call(this);
    return this
    }
});
i.MenuClass=xa;
i.menu=Ya;
A(ya,da,

{
    init:function(a){
        a.z=a.z||811213;
        ya.parent.init.call(this,a);
        var d=a.colors||[["#E53333","#E56600","#FF9900","#64451D","#DFC5A4","#FFE500"],["#009900","#006600","#99BB00","#B8D100","#60D978","#00D5FF"],["#337FE5","#003399","#4C33E5","#9933E5","#CC33E5","#EE33EE"],["#FFFFFF","#CCCCCC","#999999","#666666","#333333","#000000"]];
        this.selectedColor=(a.selectedColor||"").toLowerCase();
        this._cells=[];
        this.div.addClass("ke-colorpicker").bind("click,mousedown",function(a){
            a.stopPropagation()
            }).attr("unselectable",
            "on");
        a=this.doc.createElement("table");
        this.div.append(a);
        a.className="ke-colorpicker-table";
        a.cellPadding=0;
        a.cellSpacing=0;
        a.border=0;
        var b=a.insertRow(0),c=b.insertCell(0);
        c.colSpan=d[0].length;
        this._addAttr(c,"","ke-colorpicker-cell-top");
        for(var f=0;f<d.length;f++)for(var b=a.insertRow(f+1),i=0;i<d[f].length;i++)c=b.insertCell(i),this._addAttr(c,d[f][i],"ke-colorpicker-cell")
            },
    _addAttr:function(a,d,b){
        var c=this,a=i(a).addClass(b);
        c.selectedColor===d.toLowerCase()&&a.addClass("ke-colorpicker-cell-selected");
        a.attr("title",d||c.options.noColor);
        a.mouseover(function(){
            i(this).addClass("ke-colorpicker-cell-on")
            });
        a.mouseout(function(){
            i(this).removeClass("ke-colorpicker-cell-on")
            });
        a.click(function(a){
            a.stop();
            c.options.click.call(i(this),d)
            });
        d?a.append(i('<div class="ke-colorpicker-cell-color" unselectable="on"></div>').css("background-color",d)):a.html(c.options.noColor);
        i(a).attr("unselectable","on");
        c._cells.push(a)
        },
    remove:function(){
        h(this._cells,function(){
            this.unbind()
            });
        ya.parent.remove.call(this);
        return this
        }
    });
i.ColorPickerClass=ya;
i.colorpicker=vb;
A(Za,{
    init:function(a){
        var d=i(a.button),b=a.fieldName||"file",c=a.url||"",f=d.val(),g=a.extraParams||{},h=d[0].className||"",j=a.target||"kindeditor_upload_iframe_"+(new Date).getTime();
        a.afterError=a.afterError||function(a){
            alert(a)
            };
            
        var m=[],o;
        for(o in g)m.push('<input type="hidden" name="'+o+'" value="'+g[o]+'" />');b=['<div class="ke-inline-block '+h+'">',a.target?"":'<iframe name="'+j+'" style="display:none;"></iframe>',a.form?'<div class="ke-upload-area">':
        '<form class="ke-upload-area ke-form" method="post" enctype="multipart/form-data" target="'+j+'" action="'+c+'">','<span class="ke-button-common">',m.join(""),'<input type="button" class="ke-button-common ke-button" value="'+f+'" />',"</span>",'<input type="file" class="ke-upload-file" name="'+b+'" tabindex="-1" />',a.form?"</div>":"</form>","</div>"].join("");
        b=i(b,d.doc);
        d.hide();
        d.before(b);
        this.div=b;
        this.button=d;
        this.iframe=a.target?i('iframe[name="'+j+'"]'):i("iframe",b);
        this.form=a.form?i(a.form):
        i("form",b);
        d=a.width||i(".ke-button-common",b).width();
        this.fileBox=i(".ke-upload-file",b).width(d);
        this.options=a
        },
    submit:function(){
        var a=this,b=a.iframe;
        b.bind("load",function(){
            b.unbind();
            var c=document.createElement("form");
            a.fileBox.before(c);
            i(c).append(a.fileBox);
            c.reset();
            i(c).remove(!0);
            var c=i.iframeDoc(b),f=c.getElementsByTagName("pre")[0],g="",l,g=f?f.innerHTML:c.body.innerHTML,g=t(g);
            b[0].src="javascript:false";
            try{
                l=i.json(g)
                }catch(h){
                a.options.afterError.call(a,"<!doctype html><html>"+
                    c.body.parentNode.innerHTML+"</html>")
                }
                l&&a.options.afterUpload.call(a,l)
            });
        a.form[0].submit();
        return a
        },
    remove:function(){
        this.fileBox&&this.fileBox.unbind();
        this.iframe.remove();
        this.div.remove();
        this.button.show();
        return this
        }
    });
i.UploadButtonClass=Za;
i.uploadbutton=function(a){
    return new Za(a)
    };
    
A(za,da,{
    init:function(a){
        var b=s(a.shadowMode,!0);
        a.z=a.z||811213;
        a.shadowMode=!1;
        a.autoScroll=s(a.autoScroll,!0);
        za.parent.init.call(this,a);
        var c=a.title,f=i(a.body,this.doc),g=a.previewBtn,l=a.yesBtn,
        j=a.noBtn,m=a.closeBtn,p=s(a.showMask,!0);
        this.div.addClass("ke-dialog").bind("click,mousedown",function(a){
            a.stopPropagation()
            });
        var n=i('<div class="ke-dialog-content"></div>').appendTo(this.div);
        C&&O<7?this.iframeMask=i('<iframe src="about:blank" class="ke-dialog-shadow"></iframe>').appendTo(this.div):b&&i('<div class="ke-dialog-shadow"></div>').appendTo(this.div);
        b=i('<div class="ke-dialog-header"></div>');
        n.append(b);
        b.html(c);
        this.closeIcon=i('<span class="ke-dialog-icon-close" title="'+m.name+
            '"></span>').click(m.click);
        b.append(this.closeIcon);
        this.draggable({
            clickEl:b,
            beforeDrag:a.beforeDrag
            });
        a=i('<div class="ke-dialog-body"></div>');
        n.append(a);
        a.append(f);
        var k=i('<div class="ke-dialog-footer"></div>');
        (g||l||j)&&n.append(k);
        h([{
            btn:g,
            name:"preview"
        },{
            btn:l,
            name:"yes"
        },{
            btn:j,
            name:"no"
        }],function(){
            if(this.btn){
                var a=this.btn,a=a||{},b=a.name||"",d=i('<span class="ke-button-common ke-button-outer" title="'+b+'"></span>'),b=i('<input class="ke-button-common ke-button" type="button" value="'+
                    b+'" />');
                a.click&&b.click(a.click);
                d.append(b);
                d.addClass("ke-dialog-"+this.name);
                k.append(d)
                }
            });
    this.height&&a.height(o(this.height)-b.height()-k.height());
    this.div.width(this.div.width());
    this.div.height(this.div.height());
    this.mask=null;
    if(p)f=X(this.doc),this.mask=Wa({
        x:0,
        y:0,
        z:this.z-1,
        cls:"ke-dialog-mask",
        width:Math.max(f.scrollWidth,f.clientWidth),
        height:Math.max(f.scrollHeight,f.clientHeight)
        });
    this.autoPos(this.div.width(),this.div.height());
    this.footerDiv=k;
    this.bodyDiv=a;
    this.headerDiv=
    b;
    this.isLoading=!1
    },
setMaskIndex:function(a){
    this.mask.div.css("z-index",a)
    },
showLoading:function(a){
    var a=s(a,""),b=this.bodyDiv;
    this.loading=i('<div class="ke-dialog-loading"><div class="ke-inline-block ke-dialog-loading-content" style="margin-top:'+Math.round(b.height()/3)+'px;">'+a+"</div></div>").width(b.width()).height(b.height()).css("top",this.headerDiv.height()+"px");
    b.css("visibility","hidden").after(this.loading);
    this.isLoading=!0;
    return this
    },
hideLoading:function(){
    this.loading&&this.loading.remove();
    this.bodyDiv.css("visibility","visible");
    this.isLoading=!1;
    return this
    },
remove:function(){
    this.options.beforeRemove&&this.options.beforeRemove.call(this);
    this.mask&&this.mask.remove();
    this.iframeMask&&this.iframeMask.remove();
    this.closeIcon.unbind();
    i("input",this.div).unbind();
    i("button",this.div).unbind();
    this.footerDiv.unbind();
    this.bodyDiv.unbind();
    this.headerDiv.unbind();
    i("iframe",this.div).each(function(){
        i(this).remove()
        });
    za.parent.remove.call(this);
    return this
    }
});
i.DialogClass=za;
i.dialog=
wb;
i.tabs=function(a){
    var b=Wa(a),c=b.remove,f=a.afterSelect,a=b.div,g=[];
    a.addClass("ke-tabs").bind("contextmenu,mousedown,mousemove",function(a){
        a.preventDefault()
        });
    var l=i('<ul class="ke-tabs-ul ke-clearfix"></ul>');
    a.append(l);
    b.add=function(a){
        var b=i('<li class="ke-tabs-li">'+a.title+"</li>");
        b.data("tab",a);
        g.push(b);
        l.append(b)
        };
        
    b.selectedIndex=0;
    b.select=function(a){
        b.selectedIndex=a;
        h(g,function(c,e){
            e.unbind();
            c===a?(e.addClass("ke-tabs-li-selected"),i(e.data("tab").panel).show("")):(e.removeClass("ke-tabs-li-selected").removeClass("ke-tabs-li-on").mouseover(function(){
                i(this).addClass("ke-tabs-li-on")
                }).mouseout(function(){
                i(this).removeClass("ke-tabs-li-on")
                }).click(function(){
                b.select(c)
                }),
            i(e.data("tab").panel).hide())
            });
        f&&f.call(b,a)
        };
        
    b.remove=function(){
        h(g,function(){
            this.remove()
            });
        l.remove();
        c.call(b)
        };
        
    return b
    };
    
i.loadScript=$a;
i.loadStyle=ab;
i.ajax=function(a,d,c,f,i){
    var c=c||"GET",i=i||"json",g=b.XMLHttpRequest?new b.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");
    g.open(c,a,!0);
    g.onreadystatechange=function(){
        if(g.readyState==4&&g.status==200&&d){
            var a=n(g.responseText);
            i=="json"&&(a=w(a));
            d(a)
            }
        };
    
if(c=="POST"){
    var j=[];
    h(f,function(a,b){
        j.push(encodeURIComponent(a)+
            "="+encodeURIComponent(b))
        });
    try{
        g.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
        }catch(m){}
    g.send(j.join("&"))
    }else g.send(null)
    };
    
var ia={},$={};

Aa.prototype={
    lang:function(a){
        return Ab(a,this.langType)
        },
    loadPlugin:function(a,b){
        var c=this;
        if(ia[a]){
            if(c._calledPlugins[a])return b&&b.call(c),c;
            ia[a].call(c,KindEditor);
            b&&b.call(c);
            c._calledPlugins[a]=!0;
            return c
            }
            if(c.isLoading)return c;
        c.isLoading=!0;
        $a(c.pluginsPath+a+"/"+a+".js?ver="+encodeURIComponent(i.DEBUG?Ga:Ha),function(){
            c.isLoading=
            !1;
            ia[a]&&c.loadPlugin(a,b)
            });
        return c
        },
    handler:function(a,b){
        var c=this;
        c._handlers[a]||(c._handlers[a]=[]);
        if(k(b))return c._handlers[a].push(b),c;
        h(c._handlers[a],function(){
            b=this.call(c,b)
            });
        return b
        },
    clickToolbar:function(a,b){
        var e=this,f="clickToolbar"+a;
        if(b===c){
            if(e._handlers[f])return e.handler(f);
            e.loadPlugin(a,function(){
                e.handler(f)
                });
            return e
            }
            return e.handler(f,b)
        },
    updateState:function(){
        var a=this;
        h("justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,subscript,superscript,bold,italic,underline,strikethrough".split(","),
            function(b,c){
                a.cmd.state(c)?a.toolbar.select(c):a.toolbar.unselect(c)
                });
        return a
        },
    addContextmenu:function(a){
        this._contextmenus.push(a);
        return this
        },
    afterCreate:function(a){
        return this.handler("afterCreate",a)
        },
    beforeRemove:function(a){
        return this.handler("beforeRemove",a)
        },
    beforeGetHtml:function(a){
        return this.handler("beforeGetHtml",a)
        },
    beforeSetHtml:function(a){
        return this.handler("beforeSetHtml",a)
        },
    afterSetHtml:function(a){
        return this.handler("afterSetHtml",a)
        },
    create:function(){
        function a(){
            c.isCreated&&
            c.resize(X().clientWidth,X().clientHeight,!1)
            }
            function d(){
            n.height()===0?setTimeout(d,100):c.resize(g,l,!1)
            }
            var c=this,f=c.fullscreenMode;
        if(c.isCreated)return c;
        if(c.srcElement.data("kindeditor"))return c;
        c.srcElement.data("kindeditor","true");
        f?X().style.overflow="hidden":X().style.overflow="";
        var g=f?X().clientWidth+"px":c.width,l=f?X().clientHeight+"px":c.height;
        if(C&&O<8||aa)l=j(o(l)+2);
        var h=c.container=i(c.layout);
        f?i(document.body).append(h):c.srcElement.before(h);
        var m=i(".toolbar",h),p=
        i(".edit",h),n=c.statusbar=i(".statusbar",h);
        h.removeClass("container").addClass("ke-container ke-container-"+c.themeType).css("width",g);
        if(f){
            h.css({
                position:"absolute",
                left:0,
                top:0,
                "z-index":811211
            });
            if(!pa)c._scrollPos=ma();
            b.scrollTo(0,0);
            i(document.body).css({
                height:"1px",
                overflow:"hidden"
            });
            i(document.body.parentNode).css("overflow","hidden");
            c._fullscreenExecuted=!0
            }else c._fullscreenExecuted&&(i(document.body).css({
            height:"",
            overflow:""
        }),i(document.body.parentNode).css("overflow","")),c._scrollPos&&
            b.scrollTo(c._scrollPos.x,c._scrollPos.y);
        var k=[];
        i.each(c.items,function(a,b){
            b=="|"?k.push('<span class="ke-inline-block ke-separator"></span>'):b=="/"?k.push('<div class="ke-hr"></div>'):(k.push('<span class="ke-outline" data-name="'+b+'" title="'+c.lang(b)+'" unselectable="on">'),k.push('<span class="ke-toolbar-icon ke-toolbar-icon-url ke-icon-'+b+'" unselectable="on"></span></span>'))
            });
        var m=c.toolbar=ub({
            src:m,
            html:k.join(""),
            noDisableItems:c.noDisableItems,
            click:function(a,b){
                a.stop();
                if(c.menu){
                    var d=
                    c.menu.name;
                    c.hideMenu();
                    if(d===b)return
                }
                c.clickToolbar(b)
                }
            }),r=o(l)-m.div.height(),t=c.edit=sb({
        height:r>0&&o(l)>c.minHeight?r:c.minHeight,
        src:p,
        srcElement:c.srcElement,
        designMode:c.designMode,
        themesPath:c.themesPath,
        bodyClass:c.bodyClass,
        cssPath:c.cssPath,
        cssData:c.cssData,
        beforeGetHtml:function(a){
            a=c.beforeGetHtml(a);
            return J(a,c.filterMode?c.htmlTags:null,c.urlType,c.wellFormatMode,c.indentChar)
            },
        beforeSetHtml:function(a){
            a=J(a,c.filterMode?c.htmlTags:null,"",!1);
            return c.beforeSetHtml(a)
            },
        afterSetHtml:function(){
            c.edit=
            t=this;
            c.afterSetHtml()
            },
        afterCreate:function(){
            c.edit=t=this;
            c.cmd=t.cmd;
            c._docMousedownFn=function(){
                c.menu&&c.hideMenu()
                };
                
            i(t.doc,document).mousedown(c._docMousedownFn);
            Pb.call(c);
            Qb.call(c);
            Rb.call(c);
            Sb.call(c);
            t.afterChange(function(){
                t.designMode&&(c.updateState(),c.addBookmark(),c.options.afterChange&&c.options.afterChange.call(c))
                });
            t.textarea.keyup(function(a){
                !a.ctrlKey&&!a.altKey&&Hb[a.which]&&c.options.afterChange&&c.options.afterChange.call(c)
                });
            c.readonlyMode&&c.readonly();
            c.isCreated=
            !0;
            if(c.initContent==="")c.initContent=c.html();
            c.afterCreate();
            c.options.afterCreate&&c.options.afterCreate.call(c)
            }
        });
n.removeClass("statusbar").addClass("ke-statusbar").append('<span class="ke-inline-block ke-statusbar-center-icon"></span>').append('<span class="ke-inline-block ke-statusbar-right-icon"></span>');
i(b).unbind("resize",a);
d();
f?(i(b).bind("resize",a),m.select("fullscreen"),n.first().css("visibility","hidden"),n.last().css("visibility","hidden")):(pa&&i(b).bind("scroll",function(){
    c._scrollPos=
    ma()
    }),c.resizeType>0?Ua({
    moveEl:h,
    clickEl:n,
    moveFn:function(a,b,d,f,i,g){
        f+=g;
        c.resize(null,f)
        }
    }):n.first().css("visibility","hidden"),c.resizeType===2?Ua({
    moveEl:h,
    clickEl:n.last(),
    moveFn:function(a,b,d,f,i,g){
        d+=i;
        f+=g;
        c.resize(d,f)
        }
    }):n.last().css("visibility","hidden"));
return c
},
remove:function(){
    var a=this;
    if(!a.isCreated)return a;
    a.beforeRemove();
    a.srcElement.data("kindeditor","");
    a.menu&&a.hideMenu();
    h(a.dialogs,function(){
        a.hideDialog()
        });
    i(document).unbind("mousedown",a._docMousedownFn);
    a.toolbar.remove();
    a.edit.remove();
    a.statusbar.last().unbind();
    a.statusbar.unbind();
    a.container.remove();
    a.container=a.toolbar=a.edit=a.menu=null;
    a.dialogs=[];
    a.isCreated=!1;
    return a
    },
resize:function(a,b,c){
    c=s(c,!0);
    if(a&&(/%/.test(a)||(a=o(a),a=a<this.minWidth?this.minWidth:a),this.container.css("width",j(a)),c))this.width=j(a);
    if(b&&(b=o(b),editHeight=o(b)-this.toolbar.div.height()-this.statusbar.height(),editHeight=editHeight<this.minHeight?this.minHeight:editHeight,this.edit.setHeight(editHeight),
        c))this.height=j(b);
    return this
    },
select:function(){
    this.isCreated&&this.cmd.select();
    return this
    },
html:function(a){
    if(a===c)return this.isCreated?this.edit.html():va(this.srcElement);
    this.isCreated?this.edit.html(a):va(this.srcElement,a);
    this.isCreated&&this.cmd.selection();
    return this
    },
fullHtml:function(){
    return this.isCreated?this.edit.html(c,!0):""
    },
text:function(a){
    return a===c?n(this.html().replace(/<(?!img|embed).*?>/ig,"").replace(/&nbsp;/ig," ")):this.html(p(a))
    },
isEmpty:function(){
    return n(this.text().replace(/\r\n|\n|\r/,
        ""))===""
    },
isDirty:function(){
    return n(this.initContent.replace(/\r\n|\n|\r|t/g,""))!==n(this.html().replace(/\r\n|\n|\r|t/g,""))
    },
selectedHtml:function(){
    return this.isCreated?this.cmd.range.html():""
    },
count:function(a){
    a=(a||"html").toLowerCase();
    if(a==="html")return ka(bb(this.html())).length;
    if(a==="text")return this.text().replace(/<(?:img|embed).*?>/ig,"K").replace(/\r\n|\n|\r/g,"").length;
    return 0
    },
exec:function(a){
    var a=a.toLowerCase(),b=this.cmd,c=f(a,"selectall,copy,paste,print".split(","))<
    0;
    c&&this.addBookmark(!1);
    b[a].apply(b,D(arguments,1));
    c&&(this.updateState(),this.addBookmark(!1),this.options.afterChange&&this.options.afterChange.call(this));
    return this
    },
insertHtml:function(a,b){
    if(!this.isCreated)return this;
    a=this.beforeSetHtml(a);
    this.exec("inserthtml",a,b);
    return this
    },
appendHtml:function(a){
    this.html(this.html()+a);
    if(this.isCreated)a=this.cmd,a.range.selectNodeContents(a.doc.body).collapse(!1),a.select();
    return this
    },
sync:function(){
    va(this.srcElement,this.html());
    return this
    },
focus:function(){
    this.isCreated?this.edit.focus():this.srcElement[0].focus();
    return this
    },
blur:function(){
    this.isCreated?this.edit.blur():this.srcElement[0].blur();
    return this
    },
addBookmark:function(a){
    var a=s(a,!0),b=this.edit,c=b.doc.body,f=bb(c.innerHTML);
    if(a&&this._undoStack.length>0&&Math.abs(f.length-ka(this._undoStack[this._undoStack.length-1].html).length)<this.minChangeSize)return this;
    b.designMode&&!this._firstAddBookmark?(b=this.cmd.range,a=b.createBookmark(!0),a.html=bb(c.innerHTML),b.moveToBookmark(a)):
    a={
        html:f
    };
    
    this._firstAddBookmark=!1;
    Bb(this._undoStack,a);
    return this
    },
undo:function(){
    return Cb.call(this,this._undoStack,this._redoStack)
    },
redo:function(){
    return Cb.call(this,this._redoStack,this._undoStack)
    },
fullscreen:function(a){
    this.fullscreenMode=a===c?!this.fullscreenMode:a;
    return this.remove().create()
    },
readonly:function(a){
    var a=s(a,!0),b=this,c=b.edit,f=c.doc;
    b.designMode?b.toolbar.disableAll(a,[]):h(b.noDisableItems,function(){
        b.toolbar[a?"disable":"enable"](this)
        });
    C?f.body.contentEditable=
    !a:f.designMode=a?"off":"on";
    c.textarea[0].disabled=a
    },
createMenu:function(a){
    var b=this.toolbar.get(a.name),e=b.pos();
    a.x=e.x;
    a.y=e.y+b.height();
    a.z=this.options.zIndex;
    a.shadowMode=s(a.shadowMode,this.shadowMode);
    a.selectedColor!==c?(a.cls="ke-colorpicker-"+this.themeType,a.noColor=this.lang("noColor"),this.menu=vb(a)):(a.cls="ke-menu-"+this.themeType,a.centerLineMode=!1,this.menu=Ya(a));
    return this.menu
    },
hideMenu:function(){
    this.menu.remove();
    this.menu=null;
    return this
    },
hideContextmenu:function(){
    this.contextmenu.remove();
    this.contextmenu=null;
    return this
    },
createDialog:function(a){
    var b=this;
    a.z=b.options.zIndex;
    a.shadowMode=s(a.shadowMode,b.shadowMode);
    a.closeBtn=s(a.closeBtn,{
        name:b.lang("close"),
        click:function(){
            b.hideDialog();
            C&&b.cmd&&b.cmd.select()
            }
        });
a.noBtn=s(a.noBtn,{
    name:b.lang(a.yesBtn?"no":"close"),
    click:function(){
        b.hideDialog();
        C&&b.cmd&&b.cmd.select()
        }
    });
if(b.dialogAlignType!="page")a.alignEl=b.container;
a.cls="ke-dialog-"+b.themeType;
if(b.dialogs.length>0){
    var c=b.dialogs[b.dialogs.length-1];
    b.dialogs[0].setMaskIndex(c.z+
        2);
    a.z=c.z+3;
    a.showMask=!1
    }
    a=wb(a);
b.dialogs.push(a);
return a
},
hideDialog:function(){
    this.dialogs.length>0&&this.dialogs.pop().remove();
    this.dialogs.length>0&&this.dialogs[0].setMaskIndex(this.dialogs[this.dialogs.length-1].z-1);
    return this
    },
errorDialog:function(a){
    var b=this.createDialog({
        width:750,
        title:this.lang("uploadError"),
        body:'<div style="padding:10px 20px;"><iframe frameborder="0" style="width:708px;height:400px;"></iframe></div>'
    }),b=i("iframe",b.div),c=i.iframeDoc(b);
    c.open();
    c.write(a);
    c.close();
    i(c.body).css("background-color","#FFF");
    b[0].contentWindow.focus();
    return this
    }
};

_instances=[];
i.remove=function(a){
    Eb(a,function(a){
        this.remove();
        _instances.splice(a,1)
        })
    };
    
i.sync=function(a){
    Eb(a,function(){
        this.sync()
        })
    };
    
C&&O<7&&ba(document,"BackgroundImageCache",!0);
i.EditorClass=Aa;
i.editor=function(a){
    return new Aa(a)
    };
    
i.create=Db;
i.instances=_instances;
i.plugin=yb;
i.lang=Ab;
yb("core",function(a){
    var d=this,e={
        undo:"Z",
        redo:"Y",
        bold:"B",
        italic:"I",
        underline:"U",
        print:"P",
        selectall:"A"
    };
    d.afterSetHtml(function(){
        d.options.afterChange&&d.options.afterChange.call(d)
        });
    d.afterCreate(function(){
        if(d.syncType=="form"){
            for(var c=a(d.srcElement),e=!1;c=c.parent();)if(c.name=="form"){
                e=!0;
                break
            }
            if(e){
                c.bind("submit",function(){
                    d.sync();
                    a(b).bind("unload",function(){
                        d.edit.textarea.remove()
                        })
                    });
                var f=a('[type="reset"]',c);
                f.click(function(){
                    d.html(d.initContent);
                    d.cmd.selection()
                    });
                d.beforeRemove(function(){
                    c.unbind();
                    f.unbind()
                    })
                }
            }
    });
d.clickToolbar("source",function(){
    d.edit.designMode?
    (d.toolbar.disableAll(!0),d.edit.design(!1),d.toolbar.select("source")):(d.toolbar.disableAll(!1),d.edit.design(!0),d.toolbar.unselect("source"));
    d.designMode=d.edit.designMode
    });
d.afterCreate(function(){
    d.designMode||d.toolbar.disableAll(!0).select("source")
    });
d.clickToolbar("fullscreen",function(){
    d.fullscreen()
    });
if(d.fullscreenShortcut){
    var i=!1;
    d.afterCreate(function(){
        a(d.edit.doc,d.edit.textarea).keyup(function(a){
            a.which==27&&setTimeout(function(){
                d.fullscreen()
                },0)
            });
        if(i){
            if(C&&!d.designMode)return;
            d.focus()
            }
            i||(i=!0)
        })
    }
    h("undo,redo".split(","),function(a,b){
    e[b]&&d.afterCreate(function(){
        V(this.edit.doc,e[b],function(){
            d.clickToolbar(b)
            })
        });
    d.clickToolbar(b,function(){
        d[b]()
        })
    });
d.clickToolbar("formatblock",function(){
    var a=d.lang("formatblock.formatBlock"),b={
        h1:28,
        h2:24,
        h3:18,
        H4:14,
        p:12
    },c=d.cmd.val("formatblock"),e=d.createMenu({
        name:"formatblock",
        width:d.langType=="en"?200:150
        });
    h(a,function(a,f){
        var i="font-size:"+b[a]+"px;";
        a.charAt(0)==="h"&&(i+="font-weight:bold;");
        e.addItem({
            title:'<span style="'+
            i+'" unselectable="on">'+f+"</span>",
            height:b[a]+12,
            checked:c===a||c===f,
            click:function(){
                d.select().exec("formatblock","<"+a+">").hideMenu()
                }
            })
    })
});
d.clickToolbar("fontname",function(){
    var a=d.cmd.val("fontname"),b=d.createMenu({
        name:"fontname",
        width:150
    });
    h(d.lang("fontname.fontName"),function(c,e){
        b.addItem({
            title:'<span style="font-family: '+c+';" unselectable="on">'+e+"</span>",
            checked:a===c.toLowerCase()||a===e.toLowerCase(),
            click:function(){
                d.exec("fontname",c).hideMenu()
                }
            })
    })
});
d.clickToolbar("fontsize",
    function(){
        var a=d.cmd.val("fontsize"),b=d.createMenu({
            name:"fontsize",
            width:150
        });
        h(d.fontSizeTable,function(c,e){
            b.addItem({
                title:'<span style="font-size:'+e+';" unselectable="on">'+e+"</span>",
                height:o(e)+12,
                checked:a===e,
                click:function(){
                    d.exec("fontsize",e).hideMenu()
                    }
                })
        })
    });
h("forecolor,hilitecolor".split(","),function(a,b){
    d.clickToolbar(b,function(){
        d.createMenu({
            name:b,
            selectedColor:d.cmd.val(b)||"default",
            colors:d.colorTable,
            click:function(a){
                d.exec(b,a).hideMenu()
                }
            })
    })
});
h("cut,copy,paste".split(","),
    function(a,b){
        d.clickToolbar(b,function(){
            d.focus();
            try{
                d.exec(b,null)
                }catch(a){
                alert(d.lang(b+"Error"))
                }
            })
    });
d.clickToolbar("about",function(){
    var a='<div style="margin:20px;"><div>KindEditor '+Ha+'</div><div>Copyright &copy; <a href="http://www.kindsoft.net/" target="_blank">kindsoft.net</a> All rights reserved.</div></div>';
    d.createDialog({
        name:"about",
        width:350,
        title:d.lang("about"),
        body:a
    })
    });
d.plugin.getSelectedLink=function(){
    return d.cmd.commonAncestor("a")
    };
    
d.plugin.getSelectedImage=function(){
    return Fa(d.edit.cmd.range,
        function(a){
            return!/^ke-\w+$/i.test(a[0].className)
            })
    };
    
d.plugin.getSelectedFlash=function(){
    return Fa(d.edit.cmd.range,function(a){
        return a[0].className=="ke-flash"
        })
    };
    
d.plugin.getSelectedMedia=function(){
    return Fa(d.edit.cmd.range,function(a){
        return a[0].className=="ke-media"||a[0].className=="ke-rm"
        })
    };
    
d.plugin.getSelectedAnchor=function(){
    return Fa(d.edit.cmd.range,function(a){
        return a[0].className=="ke-anchor"
        })
    };
    
h("link,image,flash,media,anchor".split(","),function(a,b){
    var e=b.charAt(0).toUpperCase()+
    b.substr(1);
    h("edit,delete".split(","),function(a,f){
        d.addContextmenu({
            title:d.lang(f+e),
            click:function(){
                d.loadPlugin(b,function(){
                    d.plugin[b][f]();
                    d.hideMenu()
                    })
                },
            cond:d.plugin["getSelected"+e],
            width:150,
            iconClass:f=="edit"?"ke-icon-"+b:c
            })
        });
    d.addContextmenu({
        title:"-"
    })
    });
d.plugin.getSelectedTable=function(){
    return d.cmd.commonAncestor("table")
    };
    
d.plugin.getSelectedRow=function(){
    return d.cmd.commonAncestor("tr")
    };
    
d.plugin.getSelectedCell=function(){
    return d.cmd.commonAncestor("td")
    };
    
h("prop,cellprop,colinsertleft,colinsertright,rowinsertabove,rowinsertbelow,rowmerge,colmerge,rowsplit,colsplit,coldelete,rowdelete,insert,delete".split(","),
    function(a,b){
        var c=f(b,["prop","delete"])<0?d.plugin.getSelectedCell:d.plugin.getSelectedTable;
        d.addContextmenu({
            title:d.lang("table"+b),
            click:function(){
                d.loadPlugin("table",function(){
                    d.plugin.table[b]();
                    d.hideMenu()
                    })
                },
            cond:c,
            width:170,
            iconClass:"ke-icon-table"+b
            })
        });
d.addContextmenu({
    title:"-"
});
h("selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,indent,outdent,subscript,superscript,hr,print,bold,italic,underline,strikethrough,removeformat,unlink".split(","),
    function(a,b){
        e[b]&&d.afterCreate(function(){
            V(this.edit.doc,e[b],function(){
                d.cmd.selection();
                d.clickToolbar(b)
                })
            });
        d.clickToolbar(b,function(){
            d.focus().exec(b,null)
            })
        });
d.afterCreate(function(){
    function b(){
        e.range.moveToBookmark(f);
        e.select();
        ja&&(a("div."+g,i).each(function(){
            a(this).after("<br />").remove(!0)
            }),a("span.Apple-style-span",i).remove(!0),a("span.Apple-tab-span",i).remove(!0),a("span[style]",i).each(function(){
            a(this).css("white-space")=="nowrap"&&a(this).remove(!0)
            }),a("meta",i).remove());
        var c=i[0].innerHTML;
        i.remove();
        c!==""&&(ja&&(c=c.replace(/(<br>)\1/ig,"$1")),d.pasteType===2&&(c=c.replace(/(<(?:p|p\s[^>]*)>) *(<\/p>)/ig,""),/schemas-microsoft-com|worddocument|mso-\w+/i.test(c)?c=W(c,d.filterMode?d.htmlTags:a.options.htmlTags):(c=J(c,d.filterMode?d.htmlTags:null),c=d.beforeSetHtml(c))),d.pasteType===1&&(c=c.replace(/&nbsp;/ig," "),c=c.replace(/\n\s*\n/g,"\n"),c=c.replace(/<br[^>]*>/ig,"\n"),c=c.replace(/<\/p><p[^>]*>/ig,"\n"),c=c.replace(/<[^>]+>/g,""),c=c.replace(/ {2}/g," &nbsp;"),
            d.newlineTag=="p"?/\n/.test(c)&&(c=c.replace(/^/,"<p>").replace(/$/,"<br /></p>").replace(/\n/g,"<br /></p><p>")):c=c.replace(/\n/g,"<br />$&")),d.insertHtml(c,!0))
        }
        var c=d.edit.doc,e,f,i,g="__kindeditor_paste__",h=!1;
    a(c.body).bind("paste",function(j){
        if(d.pasteType===0)j.stop();
        else if(!h){
            h=!0;
            a("div."+g,c).remove();
            e=d.cmd.selection();
            f=e.range.createBookmark();
            i=a('<div class="'+g+'"></div>',c).css({
                position:"absolute",
                width:"1px",
                height:"1px",
                overflow:"hidden",
                left:"-1981px",
                top:a(f.start).pos().y+
                "px",
                "white-space":"nowrap"
            });
            a(c.body).append(i);
            if(C){
                var m=e.range.get(!0);
                m.moveToElementText(i[0]);
                m.select();
                m.execCommand("paste");
                j.preventDefault()
                }else e.range.selectNodeContents(i[0]),e.select();
            setTimeout(function(){
                b();
                h=!1
                },0)
            }
        })
});
d.beforeGetHtml(function(a){
    C&&O<=8&&(a=a.replace(/<div\s+[^>]*data-ke-input-tag="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig,function(a,b){
        return unescape(b)
        }));
    return a.replace(/(<(?:noscript|noscript\s[^>]*)>)([\s\S]*?)(<\/noscript>)/ig,function(a,b,d,c){
        return b+
        t(d).replace(/\s+/g," ")+c
        }).replace(/<img[^>]*class="?ke-(flash|rm|media)"?[^>]*>/ig,function(a){
        var a=G(a),b=Q(a.style||""),d=fa(a["data-ke-tag"]);
        d.width=s(a.width,o(s(b.width,"")));
        d.height=s(a.height,o(s(b.height,"")));
        return Ka(d)
        }).replace(/<img[^>]*class="?ke-anchor"?[^>]*>/ig,function(a){
        a=G(a);
        return'<a name="'+unescape(a["data-ke-name"])+'"></a>'
        }).replace(/<div\s+[^>]*data-ke-script-attr="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig,function(a,b,d){
        return"<script"+unescape(b)+">"+unescape(d)+"<\/script>"
        }).replace(/<div\s+[^>]*data-ke-noscript-attr="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig,
        function(a,b,d){
            return"<noscript"+unescape(b)+">"+unescape(d)+"</noscript>"
            }).replace(/(<[^>]*)data-ke-src="([^"]*)"([^>]*>)/ig,function(a,b,d){
        a=a.replace(/(\s+(?:href|src)=")[^"]*(")/i,function(a,b,c){
            return b+t(d)+c
            });
        return a=a.replace(/\s+data-ke-src="[^"]*"/i,"")
        }).replace(/(<[^>]+\s)data-ke-(on\w+="[^"]*"[^>]*>)/ig,function(a,b,d){
        return b+d
        })
    });
d.beforeSetHtml(function(a){
    C&&O<=8&&(a=a.replace(/<input[^>]*>|<(select|button)[^>]*>[\s\S]*?<\/\1>/ig,function(a){
        var b=G(a);
        if(Q(b.style||"").display==
            "none")return'<div class="ke-display-none" data-ke-input-tag="'+escape(a)+'"></div>';
        return a
        }));
    return a.replace(/<embed[^>]*type="([^"]+)"[^>]*>(?:<\/embed>)?/ig,function(a){
        a=G(a);
        a.src=s(a.src,"");
        a.width=s(a.width,0);
        a.height=s(a.height,0);
        return ib(d.themesPath+"common/blank.gif",a)
        }).replace(/<a[^>]*name="([^"]+)"[^>]*>(?:<\/a>)?/ig,function(a){
        var b=G(a);
        if(b.href!==c)return a;
        return'<img class="ke-anchor" src="'+d.themesPath+'common/anchor.gif" data-ke-name="'+escape(b.name)+'" />'
        }).replace(/<script([^>]*)>([\s\S]*?)<\/script>/ig,
        function(a,b,d){
            return'<div class="ke-script" data-ke-script-attr="'+escape(b)+'">'+escape(d)+"</div>"
            }).replace(/<noscript([^>]*)>([\s\S]*?)<\/noscript>/ig,function(a,b,d){
        return'<div class="ke-noscript" data-ke-noscript-attr="'+escape(b)+'">'+escape(d)+"</div>"
        }).replace(/(<[^>]*)(href|src)="([^"]*)"([^>]*>)/ig,function(a,b,d,c,e){
        if(a.match(/\sdata-ke-src="[^"]*"/i))return a;
        return a=b+d+'="'+c+'" data-ke-src="'+p(c)+'"'+e
        }).replace(/(<[^>]+\s)(on\w+="[^"]*"[^>]*>)/ig,function(a,b,d){
        return b+
        "data-ke-"+d
        }).replace(/<table[^>]*\s+border="0"[^>]*>/ig,function(a){
        if(a.indexOf("ke-zeroborder")>=0)return a;
        return S(a,"ke-zeroborder")
        })
    })
})
}
})(window);
KindEditor.lang({
    source:"HTML\u4ee3\u7801",
    preview:"\u9884\u89c8",
    undo:"\u540e\u9000(Ctrl+Z)",
    redo:"\u524d\u8fdb(Ctrl+Y)",
    cut:"\u526a\u5207(Ctrl+X)",
    copy:"\u590d\u5236(Ctrl+C)",
    paste:"\u7c98\u8d34(Ctrl+V)",
    plainpaste:"\u7c98\u8d34\u4e3a\u65e0\u683c\u5f0f\u6587\u672c",
    wordpaste:"\u4eceWord\u7c98\u8d34",
    selectall:"\u5168\u9009(Ctrl+A)",
    justifyleft:"\u5de6\u5bf9\u9f50",
    justifycenter:"\u5c45\u4e2d",
    justifyright:"\u53f3\u5bf9\u9f50",
    justifyfull:"\u4e24\u7aef\u5bf9\u9f50",
    insertorderedlist:"\u7f16\u53f7",
    insertunorderedlist:"\u9879\u76ee\u7b26\u53f7",
    indent:"\u589e\u52a0\u7f29\u8fdb",
    outdent:"\u51cf\u5c11\u7f29\u8fdb",
    subscript:"\u4e0b\u6807",
    superscript:"\u4e0a\u6807",
    formatblock:"\u6bb5\u843d",
    fontname:"\u5b57\u4f53",
    fontsize:"\u6587\u5b57\u5927\u5c0f",
    forecolor:"\u6587\u5b57\u989c\u8272",
    hilitecolor:"\u6587\u5b57\u80cc\u666f",
    bold:"\u7c97\u4f53(Ctrl+B)",
    italic:"\u659c\u4f53(Ctrl+I)",
    underline:"\u4e0b\u5212\u7ebf(Ctrl+U)",
    strikethrough:"\u5220\u9664\u7ebf",
    removeformat:"\u5220\u9664\u683c\u5f0f",
    image:"\u56fe\u7247",
    multiimage:"\u6279\u91cf\u56fe\u7247\u4e0a\u4f20",
    flash:"Flash",
    media:"\u89c6\u97f3\u9891",
    table:"\u8868\u683c",
    tablecell:"\u5355\u5143\u683c",
    hr:"\u63d2\u5165\u6a2a\u7ebf",
    emoticons:"\u63d2\u5165\u8868\u60c5",
    link:"\u8d85\u7ea7\u94fe\u63a5",
    unlink:"\u53d6\u6d88\u8d85\u7ea7\u94fe\u63a5",
    fullscreen:"\u5168\u5c4f\u663e\u793a",
    about:"\u5173\u4e8e",
    print:"\u6253\u5370(Ctrl+P)",
    filemanager:"\u6587\u4ef6\u7a7a\u95f4",
    code:"\u63d2\u5165\u7a0b\u5e8f\u4ee3\u7801",
    map:"Google\u5730\u56fe",
    baidumap:"\u767e\u5ea6\u5730\u56fe",
    lineheight:"\u884c\u8ddd",
    clearhtml:"\u6e05\u7406HTML\u4ee3\u7801",
    pagebreak:"\u63d2\u5165\u5206\u9875\u7b26",
    quickformat:"\u4e00\u952e\u6392\u7248",
    insertfile:"\u63d2\u5165\u6587\u4ef6",
    template:"\u63d2\u5165\u6a21\u677f",
    anchor:"\u951a\u70b9",
    yes:"\u786e\u5b9a",
    no:"\u53d6\u6d88",
    close:"\u5173\u95ed",
    editImage:"\u56fe\u7247\u5c5e\u6027",
    deleteImage:"\u5220\u9664\u56fe\u7247",
    editFlash:"Flash\u5c5e\u6027",
    deleteFlash:"\u5220\u9664Flash",
    editMedia:"\u89c6\u97f3\u9891\u5c5e\u6027",
    deleteMedia:"\u5220\u9664\u89c6\u97f3\u9891",
    editLink:"\u8d85\u7ea7\u94fe\u63a5\u5c5e\u6027",
    deleteLink:"\u53d6\u6d88\u8d85\u7ea7\u94fe\u63a5",
    editAnchor:"\u951a\u70b9\u5c5e\u6027",
    deleteAnchor:"\u5220\u9664\u951a\u70b9",
    tableprop:"\u8868\u683c\u5c5e\u6027",
    tablecellprop:"\u5355\u5143\u683c\u5c5e\u6027",
    tableinsert:"\u63d2\u5165\u8868\u683c",
    tabledelete:"\u5220\u9664\u8868\u683c",
    tablecolinsertleft:"\u5de6\u4fa7\u63d2\u5165\u5217",
    tablecolinsertright:"\u53f3\u4fa7\u63d2\u5165\u5217",
    tablerowinsertabove:"\u4e0a\u65b9\u63d2\u5165\u884c",
    tablerowinsertbelow:"\u4e0b\u65b9\u63d2\u5165\u884c",
    tablerowmerge:"\u5411\u4e0b\u5408\u5e76\u5355\u5143\u683c",
    tablecolmerge:"\u5411\u53f3\u5408\u5e76\u5355\u5143\u683c",
    tablerowsplit:"\u62c6\u5206\u884c",
    tablecolsplit:"\u62c6\u5206\u5217",
    tablecoldelete:"\u5220\u9664\u5217",
    tablerowdelete:"\u5220\u9664\u884c",
    noColor:"\u65e0\u989c\u8272",
    pleaseSelectFile:"\u8bf7\u9009\u62e9\u6587\u4ef6\u3002",
    invalidImg:"\u8bf7\u8f93\u5165\u6709\u6548\u7684URL\u5730\u5740\u3002\n\u53ea\u5141\u8bb8jpg,gif,bmp,png\u683c\u5f0f\u3002",
    invalidMedia:"\u8bf7\u8f93\u5165\u6709\u6548\u7684URL\u5730\u5740\u3002\n\u53ea\u5141\u8bb8swf,flv,mp3,wav,wma,wmv,mid,avi,mpg,asf,rm,rmvb\u683c\u5f0f\u3002",
    invalidWidth:"\u5bbd\u5ea6\u5fc5\u987b\u4e3a\u6570\u5b57\u3002",
    invalidHeight:"\u9ad8\u5ea6\u5fc5\u987b\u4e3a\u6570\u5b57\u3002",
    invalidBorder:"\u8fb9\u6846\u5fc5\u987b\u4e3a\u6570\u5b57\u3002",
    invalidUrl:"\u8bf7\u8f93\u5165\u6709\u6548\u7684URL\u5730\u5740\u3002",
    invalidRows:"\u884c\u6570\u4e3a\u5fc5\u9009\u9879\uff0c\u53ea\u5141\u8bb8\u8f93\u5165\u5927\u4e8e0\u7684\u6570\u5b57\u3002",
    invalidCols:"\u5217\u6570\u4e3a\u5fc5\u9009\u9879\uff0c\u53ea\u5141\u8bb8\u8f93\u5165\u5927\u4e8e0\u7684\u6570\u5b57\u3002",
    invalidPadding:"\u8fb9\u8ddd\u5fc5\u987b\u4e3a\u6570\u5b57\u3002",
    invalidSpacing:"\u95f4\u8ddd\u5fc5\u987b\u4e3a\u6570\u5b57\u3002",
    invalidJson:"\u670d\u52a1\u5668\u53d1\u751f\u6545\u969c\u3002",
    uploadSuccess:"\u4e0a\u4f20\u6210\u529f\u3002",
    cutError:"\u60a8\u7684\u6d4f\u89c8\u5668\u5b89\u5168\u8bbe\u7f6e\u4e0d\u5141\u8bb8\u4f7f\u7528\u526a\u5207\u64cd\u4f5c\uff0c\u8bf7\u4f7f\u7528\u5feb\u6377\u952e(Ctrl+X)\u6765\u5b8c\u6210\u3002",
    copyError:"\u60a8\u7684\u6d4f\u89c8\u5668\u5b89\u5168\u8bbe\u7f6e\u4e0d\u5141\u8bb8\u4f7f\u7528\u590d\u5236\u64cd\u4f5c\uff0c\u8bf7\u4f7f\u7528\u5feb\u6377\u952e(Ctrl+C)\u6765\u5b8c\u6210\u3002",
    pasteError:"\u60a8\u7684\u6d4f\u89c8\u5668\u5b89\u5168\u8bbe\u7f6e\u4e0d\u5141\u8bb8\u4f7f\u7528\u7c98\u8d34\u64cd\u4f5c\uff0c\u8bf7\u4f7f\u7528\u5feb\u6377\u952e(Ctrl+V)\u6765\u5b8c\u6210\u3002",
    ajaxLoading:"\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019 ...",
    uploadLoading:"\u4e0a\u4f20\u4e2d\uff0c\u8bf7\u7a0d\u5019 ...",
    uploadError:"\u4e0a\u4f20\u9519\u8bef",
    "plainpaste.comment":"\u8bf7\u4f7f\u7528\u5feb\u6377\u952e(Ctrl+V)\u628a\u5185\u5bb9\u7c98\u8d34\u5230\u4e0b\u9762\u7684\u65b9\u6846\u91cc\u3002",
    "wordpaste.comment":"\u8bf7\u4f7f\u7528\u5feb\u6377\u952e(Ctrl+V)\u628a\u5185\u5bb9\u7c98\u8d34\u5230\u4e0b\u9762\u7684\u65b9\u6846\u91cc\u3002",
    "code.pleaseInput":"\u8bf7\u8f93\u5165\u7a0b\u5e8f\u4ee3\u7801\u3002",
    "link.url":"URL",
    "link.linkType":"\u6253\u5f00\u7c7b\u578b",
    "link.newWindow":"\u65b0\u7a97\u53e3",
    "link.selfWindow":"\u5f53\u524d\u7a97\u53e3",
    "flash.url":"URL",
    "flash.width":"\u5bbd\u5ea6",
    "flash.height":"\u9ad8\u5ea6",
    "flash.upload":"\u4e0a\u4f20",
    "flash.viewServer":"\u6587\u4ef6\u7a7a\u95f4",
    "media.url":"URL",
    "media.width":"\u5bbd\u5ea6",
    "media.height":"\u9ad8\u5ea6",
    "media.autostart":"\u81ea\u52a8\u64ad\u653e",
    "media.upload":"\u4e0a\u4f20",
    "media.viewServer":"\u6587\u4ef6\u7a7a\u95f4",
    "image.remoteImage":"\u7f51\u7edc\u56fe\u7247",
    "image.localImage":"\u672c\u5730\u4e0a\u4f20",
    "image.remoteUrl":"\u56fe\u7247\u5730\u5740",
    "image.localUrl":"\u4e0a\u4f20\u6587\u4ef6",
    "image.size":"\u56fe\u7247\u5927\u5c0f",
    "image.width":"\u5bbd",
    "image.height":"\u9ad8",
    "image.resetSize":"\u91cd\u7f6e\u5927\u5c0f",
    "image.align":"\u5bf9\u9f50\u65b9\u5f0f",
    "image.defaultAlign":"\u9ed8\u8ba4\u65b9\u5f0f",
    "image.leftAlign":"\u5de6\u5bf9\u9f50",
    "image.rightAlign":"\u53f3\u5bf9\u9f50",
    "image.imgTitle":"\u56fe\u7247\u8bf4\u660e",
    "image.upload":"\u6d4f\u89c8...",
    "image.viewServer":"\u56fe\u7247\u7a7a\u95f4",
    "multiimage.uploadDesc":"\u5141\u8bb8\u7528\u6237\u540c\u65f6\u4e0a\u4f20<%=uploadLimit%>\u5f20\u56fe\u7247\uff0c\u5355\u5f20\u56fe\u7247\u5bb9\u91cf\u4e0d\u8d85\u8fc7<%=sizeLimit%>",
    "multiimage.startUpload":"\u5f00\u59cb\u4e0a\u4f20",
    "multiimage.clearAll":"\u5168\u90e8\u6e05\u7a7a",
    "multiimage.insertAll":"\u5168\u90e8\u63d2\u5165",
    "multiimage.queueLimitExceeded":"\u6587\u4ef6\u6570\u91cf\u8d85\u8fc7\u9650\u5236\u3002",
    "multiimage.fileExceedsSizeLimit":"\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7\u9650\u5236\u3002",
    "multiimage.zeroByteFile":"\u65e0\u6cd5\u4e0a\u4f20\u7a7a\u6587\u4ef6\u3002",
    "multiimage.invalidFiletype":"\u6587\u4ef6\u7c7b\u578b\u4e0d\u6b63\u786e\u3002",
    "multiimage.unknownError":"\u53d1\u751f\u5f02\u5e38\uff0c\u65e0\u6cd5\u4e0a\u4f20\u3002",
    "multiimage.pending":"\u7b49\u5f85\u4e0a\u4f20",
    "multiimage.uploadError":"\u4e0a\u4f20\u5931\u8d25",
    "filemanager.emptyFolder":"\u7a7a\u6587\u4ef6\u5939",
    "filemanager.moveup":"\u79fb\u5230\u4e0a\u4e00\u7ea7\u6587\u4ef6\u5939",
    "filemanager.viewType":"\u663e\u793a\u65b9\u5f0f\uff1a",
    "filemanager.viewImage":"\u7f29\u7565\u56fe",
    "filemanager.listImage":"\u8be6\u7ec6\u4fe1\u606f",
    "filemanager.orderType":"\u6392\u5e8f\u65b9\u5f0f\uff1a",
    "filemanager.fileName":"\u540d\u79f0",
    "filemanager.fileSize":"\u5927\u5c0f",
    "filemanager.fileType":"\u7c7b\u578b",
    "insertfile.url":"URL",
    "insertfile.title":"\u6587\u4ef6\u8bf4\u660e",
    "insertfile.upload":"\u4e0a\u4f20",
    "insertfile.viewServer":"\u6587\u4ef6\u7a7a\u95f4",
    "table.cells":"\u5355\u5143\u683c\u6570",
    "table.rows":"\u884c\u6570",
    "table.cols":"\u5217\u6570",
    "table.size":"\u5927\u5c0f",
    "table.width":"\u5bbd\u5ea6",
    "table.height":"\u9ad8\u5ea6",
    "table.percent":"%",
    "table.px":"px",
    "table.space":"\u8fb9\u8ddd\u95f4\u8ddd",
    "table.padding":"\u8fb9\u8ddd",
    "table.spacing":"\u95f4\u8ddd",
    "table.align":"\u5bf9\u9f50\u65b9\u5f0f",
    "table.textAlign":"\u6c34\u5e73\u5bf9\u9f50",
    "table.verticalAlign":"\u5782\u76f4\u5bf9\u9f50",
    "table.alignDefault":"\u9ed8\u8ba4",
    "table.alignLeft":"\u5de6\u5bf9\u9f50",
    "table.alignCenter":"\u5c45\u4e2d",
    "table.alignRight":"\u53f3\u5bf9\u9f50",
    "table.alignTop":"\u9876\u90e8",
    "table.alignMiddle":"\u4e2d\u90e8",
    "table.alignBottom":"\u5e95\u90e8",
    "table.alignBaseline":"\u57fa\u7ebf",
    "table.border":"\u8fb9\u6846",
    "table.borderWidth":"\u8fb9\u6846",
    "table.borderColor":"\u989c\u8272",
    "table.backgroundColor":"\u80cc\u666f\u989c\u8272",
    "map.address":"\u5730\u5740: ",
    "map.search":"\u641c\u7d22",
    "baidumap.address":"\u5730\u5740: ",
    "baidumap.search":"\u641c\u7d22",
    "baidumap.insertDynamicMap":"\u63d2\u5165\u52a8\u6001\u5730\u56fe",
    "anchor.name":"\u951a\u70b9\u540d\u79f0",
    "formatblock.formatBlock":{
        h1:"\u6807\u9898 1",
        h2:"\u6807\u9898 2",
        h3:"\u6807\u9898 3",
        h4:"\u6807\u9898 4",
        p:"\u6b63 \u6587"
    },
    "fontname.fontName":{
        SimSun:"\u5b8b\u4f53",
        NSimSun:"\u65b0\u5b8b\u4f53",
        FangSong_GB2312:"\u4eff\u5b8b_GB2312",
        KaiTi_GB2312:"\u6977\u4f53_GB2312",
        SimHei:"\u9ed1\u4f53",
        "Microsoft YaHei":"\u5fae\u8f6f\u96c5\u9ed1",
        Arial:"Arial",
        "Arial Black":"Arial Black",
        "Times New Roman":"Times New Roman",
        "Courier New":"Courier New",
        Tahoma:"Tahoma",
        Verdana:"Verdana"
    },
    "lineheight.lineHeight":[{
        1:"\u5355\u500d\u884c\u8ddd"
    },{
        "1.5":"1.5\u500d\u884c\u8ddd"
    },{
        2:"2\u500d\u884c\u8ddd"
    },{
        "2.5":"2.5\u500d\u884c\u8ddd"
    },{
        3:"3\u500d\u884c\u8ddd"
    }],
    "template.selectTemplate":"\u53ef\u9009\u6a21\u677f",
    "template.replaceContent":"\u66ff\u6362\u5f53\u524d\u5185\u5bb9",
    "template.fileList":{
        "1.html":"\u56fe\u7247\u548c\u6587\u5b57",
        "2.html":"\u8868\u683c",
        "3.html":"\u9879\u76ee\u7f16\u53f7"
    }
},"zh_CN");
KindEditor.plugin("anchor",function(b){
    var c=this,g=c.lang("anchor.");
    c.plugin.anchor={
        edit:function(){
            var k=['<div style="padding:20px;"><div class="ke-dialog-row">','<label for="keName">'+g.name+"</label>",'<input class="ke-input-text" type="text" id="keName" name="name" value="" style="width:100px;" /></div></div>'].join(""),k=c.createDialog({
                name:"anchor",
                width:300,
                title:c.lang("anchor"),
                body:k,
                yesBtn:{
                    name:c.lang("yes"),
                    click:function(){
                        c.insertHtml('<a name="'+f.val()+'">').hideDialog().focus()
                        }
                    }
            }).div,
    f=b('input[name="name"]',k);
    (k=c.plugin.getSelectedAnchor())&&f.val(unescape(k.attr("data-ke-name")));
    f[0].focus();
    f[0].select()
    },
"delete":function(){
    c.plugin.getSelectedAnchor().remove()
    }
};

c.clickToolbar("anchor",c.plugin.anchor.edit)
});
KindEditor.plugin("baidumap",function(b){
    var c=this,g=c.lang("baidumap."),k=b.undef(c.mapWidth,558),f=b.undef(c.mapHeight,360);
    c.clickToolbar("baidumap",function(){
        function h(){
            t=r[0].contentWindow;
            q=b.iframeDoc(r)
            }
            var n=['<div style="padding:10px 20px;"><div class="ke-header"><div class="ke-left">',g.address+' <input id="kindeditor_plugin_map_address" name="address" class="ke-input-text" value="" style="width:200px;" /> ','<span class="ke-button-common ke-button-outer">','<input type="button" name="searchBtn" class="ke-button-common ke-button" value="'+
        g.search+'" />','</span></div><div class="ke-right">','<input type="checkbox" id="keInsertDynamicMap" name="insertDynamicMap" value="1" /> <label for="keInsertDynamicMap">'+g.insertDynamicMap+"</label>",'</div><div class="ke-clearfix"></div></div>','<div class="ke-map" style="width:'+k+"px;height:"+f+'px;"></div>',"</div>"].join(""),n=c.createDialog({
            name:"baidumap",
            width:k+42,
            title:c.lang("baidumap"),
            body:n,
            yesBtn:{
                name:c.lang("yes"),
                click:function(){
                    var b=t.map,g=b.getCenter(),g=g.lng+","+g.lat,
                    b=b.getZoom(),b=[p[0].checked?c.pluginsPath+"baidumap/index.html":"http://api.map.baidu.com/staticimage","?center="+encodeURIComponent(g),"&zoom="+encodeURIComponent(b),"&width="+k,"&height="+f,"&markers="+encodeURIComponent(g),"&markerStyles="+encodeURIComponent("l,A")].join("");
                    p[0].checked?c.insertHtml('<iframe src="'+b+'" frameborder="0" style="width:'+(k+2)+"px;height:"+(f+2)+'px;"></iframe>'):c.exec("insertimage",b);
                    c.hideDialog().focus()
                    }
                },
        beforeRemove:function(){
            o.remove();
            q&&q.write("");
            r.remove()
            }
        }),m=n.div,j=b('[name="address"]',m),o=b('[name="searchBtn"]',m),p=b('[name="insertDynamicMap"]',n.div),t,q,r=b('<iframe class="ke-textarea" frameborder="0" src="'+c.pluginsPath+'baidumap/map.html" style="width:'+k+"px;height:"+f+'px;"></iframe>');
    r.bind("load",function(){
        r.unbind("load");
        b.IE?h():setTimeout(h,0)
        });
    b(".ke-map",m).replaceWith(r);
    o.click(function(){
        t.search(j.val())
        })
    })
});
KindEditor.plugin("clearhtml",function(b){
    var c=this;
    c.clickToolbar("clearhtml",function(){
        c.focus();
        var g=c.html(),g=g.replace(/(<script[^>]*>)([\s\S]*?)(<\/script>)/ig,""),g=g.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/ig,""),g=b.formatHtml(g,{
            a:["href","target"],
            embed:["src","width","height","type","loop","autostart","quality",".width",".height","align","allowscriptaccess"],
            img:["src","width","height","border","alt","title",".width",".height"],
            table:["border"],
            "td,th":["rowspan","colspan"],
            "div,hr,br,tbody,tr,p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6":[]
        });
        c.html(g);
        c.cmd.selection(!0);
        c.addBookmark()
        })
    });
KindEditor.plugin("code",function(b){
    var c=this;
    c.clickToolbar("code",function(){
        var g=c.lang("code."),k=c.createDialog({
            name:"code",
            width:450,
            title:c.lang("code"),
            body:'<div style="padding:10px 20px;"><div class="ke-dialog-row"><select class="ke-code-type"><option value="js">JavaScript</option><option value="html">HTML</option><option value="css">CSS</option><option value="php">PHP</option><option value="pl">Perl</option><option value="py">Python</option><option value="rb">Ruby</option><option value="java">Java</option><option value="vb">ASP/VB</option><option value="cpp">C/C++</option><option value="cs">C#</option><option value="xml">XML</option><option value="bsh">Shell</option><option value="">Other</option></select></div><textarea class="ke-textarea" style="width:408px;height:260px;"></textarea></div>',
            yesBtn:{
                name:c.lang("yes"),
                click:function(){
                    var h=b(".ke-code-type",k.div).val(),n=f.val(),h='<pre class="prettyprint'+(h===""?"":" lang-"+h)+'">\n'+b.escape(n)+"</pre> ";
                    b.trim(n)===""?(alert(g.pleaseInput),f[0].focus()):c.insertHtml(h).hideDialog().focus()
                    }
                }
        }),f=b("textarea",k.div);
    f[0].focus()
    })
});
KindEditor.plugin("emoticons",function(b){
    var c=this,g=c.emoticonsPath||c.pluginsPath+"emoticons/images/",k=c.allowPreviewEmoticons===void 0?!0:c.allowPreviewEmoticons,f=1;
    c.clickToolbar("emoticons",function(){
        function h(f,h,j){
            w?f.mouseover(function(){
                h>D?(w.css("left",0),w.css("right","")):(w.css("left",""),w.css("right",0));
                H.attr("src",g+j+".gif");
                b(this).addClass("ke-on")
                }):f.mouseover(function(){
                b(this).addClass("ke-on")
                });
            f.mouseout(function(){
                b(this).removeClass("ke-on")
                });
            f.click(function(b){
                c.insertHtml('<img src="'+
                    g+j+'.gif" border="0" alt="" />').hideMenu().focus();
                b.stop()
                })
            }
            function n(c,f){
            var j=document.createElement("table");
            f.append(j);
            w&&(b(j).mouseover(function(){
                w.show("block")
                }),b(j).mouseout(function(){
                w.hide()
                }),A.push(b(j)));
            j.className="ke-table";
            j.cellPadding=0;
            j.cellSpacing=0;
            j.border=0;
            for(var m=(c-1)*r+q,o=0;o<p;o++)for(var n=j.insertRow(o),k=0;k<t;k++){
                var s=b(n.insertCell(k));
                s.addClass("ke-cell");
                h(s,k,m);
                var v=b('<span class="ke-img"></span>').css("background-position","-"+24*m+"px 0px").css("background-image",
                    "url("+g+"static.gif)");
                s.append(v);
                A.push(s);
                m++
            }
            return j
            }
            function m(){
            b.each(A,function(){
                this.unbind()
                })
            }
            function j(b,c){
            b.click(function(b){
                m();
                v.parentNode.removeChild(v);
                E.remove();
                v=n(c,s);
                o(c);
                f=c;
                b.stop()
                })
            }
            function o(c){
            E=b('<div class="ke-page"></div>');
            s.append(E);
            for(var f=1;f<=z;f++){
                if(c!==f){
                    var g=b('<a href="javascript:;">['+f+"]</a>");
                    j(g,f);
                    E.append(g);
                    A.push(g)
                    }else E.append(b("@["+f+"]"));
                E.append(b("@&nbsp;"))
                }
            }
            var p=5,t=9,q=0,r=p*t,z=Math.ceil(135/r),D=Math.floor(t/2),s=b('<div class="ke-plugin-emoticons"></div>'),
        A=[];
        c.createMenu({
            name:"emoticons",
            beforeRemove:function(){
                m()
                }
            }).div.append(s);
    var w,H;
    k&&(w=b('<div class="ke-preview"></div>').css("right",0),H=b('<img class="ke-preview-img" src="'+g+q+'.gif" />'),s.append(w),w.append(H));
    var v=n(f,s),E;
    o(f)
    })
});
KindEditor.plugin("filemanager",function(b){
    function c(b,c){
        c.is_dir?b.attr("title",c.filename):b.attr("title",c.filename+" ("+Math.ceil(c.filesize/1024)+"KB, "+c.datetime+")")
        }
        var g=this,k=b.undef(g.fileManagerJson,g.basePath+"php/file_manager_json.php"),f=g.pluginsPath+"filemanager/images/",h=g.lang("filemanager.");
    g.plugin.filemanagerDialog=function(n){
        function m(c,f,h){
            c="path="+c+"&order="+f+"&dir="+z;
            A.showLoading(g.lang("ajaxLoading"));
            b.ajax(b.addParam(k,c+"&"+(new Date).getTime()),function(b){
                A.hideLoading();
                h(b)
                })
            }
            function j(c,f,g,h){
            var j=b.formatUrl(f.current_url+g.filename,"absolute"),o=encodeURIComponent(f.current_dir_path+g.filename+"/");
            g.is_dir?c.click(function(){
                m(o,E.val(),h)
                }):g.is_photo?c.click(function(){
                s.call(this,j,g.filename)
                }):c.click(function(){
                s.call(this,j,g.filename)
                });
            U.push(c)
            }
            function o(c,f){
            function g(){
                v.val()=="VIEW"?m(c.current_dir_path,E.val(),t):m(c.current_dir_path,E.val(),p)
                }
                b.each(U,function(){
                this.unbind()
                });
            H.unbind();
            v.unbind();
            E.unbind();
            c.current_dir_path&&H.click(function(){
                m(c.moveup_dir_path,
                    E.val(),f)
                });
            v.change(g);
            E.change(g);
            w.html("")
            }
            function p(c){
            o(c,p);
            var g=document.createElement("table");
            g.className="ke-table";
            g.cellPadding=0;
            g.cellSpacing=0;
            g.border=0;
            w.append(g);
            for(var m=c.file_list,n=0,k=m.length;n<k;n++){
                var r=m[n],t=b(g.insertRow(n));
                t.mouseover(function(){
                    b(this).addClass("ke-on")
                    }).mouseout(function(){
                    b(this).removeClass("ke-on")
                    });
                var q=b('<img src="'+(f+(r.is_dir?"folder-16.gif":"file-16.gif"))+'" width="16" height="16" alt="'+r.filename+'" align="absmiddle" />'),q=
                b(t[0].insertCell(0)).addClass("ke-cell ke-name").append(q).append(document.createTextNode(" "+r.filename));
                !r.is_dir||r.has_file?(t.css("cursor","pointer"),q.attr("title",r.filename),j(q,c,r,p)):q.attr("title",h.emptyFolder);
                b(t[0].insertCell(1)).addClass("ke-cell ke-size").html(r.is_dir?"-":Math.ceil(r.filesize/1024)+"KB");
                b(t[0].insertCell(2)).addClass("ke-cell ke-datetime").html(r.datetime)
                }
            }
            function t(g){
        o(g,t);
        for(var m=g.file_list,p=0,n=m.length;p<n;p++){
            var k=m[p],r=b('<div class="ke-inline-block ke-item"></div>');
            w.append(r);
            var q=b('<div class="ke-inline-block ke-photo"></div>').mouseover(function(){
                b(this).addClass("ke-on")
                }).mouseout(function(){
                b(this).removeClass("ke-on")
                });
            r.append(q);
            var s=g.current_url+k.filename,s=b('<img src="'+(k.is_dir?f+"folder-64.gif":k.is_photo?s:f+"file-64.gif")+'" width="80" height="80" alt="'+k.filename+'" />');
            !k.is_dir||k.has_file?(q.css("cursor","pointer"),c(q,k),j(q,g,k,t)):q.attr("title",h.emptyFolder);
            q.append(s);
            r.append('<div class="ke-name" title="'+k.filename+'">'+
                k.filename+"</div>")
            }
        }
        var q=b.undef(n.width,650),r=b.undef(n.height,510),z=b.undef(n.dirName,""),D=b.undef(n.viewType,"VIEW").toUpperCase(),s=n.clickFn,n=['<div style="padding:10px 20px;"><div class="ke-plugin-filemanager-header"><div class="ke-left">','<img class="ke-inline-block" name="moveupImg" src="'+f+'go-up.gif" width="16" height="16" border="0" alt="" /> ','<a class="ke-inline-block" name="moveupLink" href="javascript:;">'+h.moveup+"</a>",'</div><div class="ke-right">',h.viewType+' <select class="ke-inline-block" name="viewType">',
    '<option value="VIEW">'+h.viewImage+"</option>",'<option value="LIST">'+h.listImage+"</option>","</select> ",h.orderType+' <select class="ke-inline-block" name="orderType">','<option value="NAME">'+h.fileName+"</option>",'<option value="SIZE">'+h.fileSize+"</option>",'<option value="TYPE">'+h.fileType+"</option>",'</select></div><div class="ke-clearfix"></div></div><div class="ke-plugin-filemanager-body"></div></div>'].join(""),A=g.createDialog({
        name:"filemanager",
        width:q,
        height:r,
        title:g.lang("filemanager"),
        body:n
    }),q=A.div,w=b(".ke-plugin-filemanager-body",q);
    b('[name="moveupImg"]',q);
    var H=b('[name="moveupLink"]',q);
    b('[name="viewServer"]',q);
    var v=b('[name="viewType"]',q),E=b('[name="orderType"]',q),U=[];
    v.val(D);
    m("",E.val(),D=="VIEW"?t:p);
    return A
    }
});
KindEditor.plugin("flash",function(b){
    var c=this,g=c.lang("flash."),k=b.undef(c.allowFlashUpload,!0),f=b.undef(c.allowFileManager,!1),h=b.undef(c.formatUploadUrl,!0),n=b.undef(c.extraFileUploadParams,{}),m=b.undef(c.filePostName,"imgFile"),j=b.undef(c.uploadJson,c.basePath+"php/upload_json.php");
    c.plugin.flash={
        edit:function(){
            var o=['<div style="padding:20px;"><div class="ke-dialog-row">','<label for="keUrl" style="width:60px;">'+g.url+"</label>",'<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:160px;" /> &nbsp;',
            '<input type="button" class="ke-upload-button" value="'+g.upload+'" /> &nbsp;','<span class="ke-button-common ke-button-outer">','<input type="button" class="ke-button-common ke-button" name="viewServer" value="'+g.viewServer+'" />','</span></div><div class="ke-dialog-row">','<label for="keWidth" style="width:60px;">'+g.width+"</label>",'<input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="550" maxlength="4" /> </div><div class="ke-dialog-row">','<label for="keHeight" style="width:60px;">'+
            g.height+"</label>",'<input type="text" id="keHeight" class="ke-input-text ke-input-number" name="height" value="400" maxlength="4" /> </div></div>'].join(""),p=c.createDialog({
                name:"flash",
                width:450,
                title:c.lang("flash"),
                body:o,
                yesBtn:{
                    name:c.lang("yes"),
                    click:function(){
                        var f=b.trim(q.val()),g=r.val(),h=z.val();
                        f=="http://"||b.invalidUrl(f)?(alert(c.lang("invalidUrl")),q[0].focus()):/^\d*$/.test(g)?/^\d*$/.test(h)?(f=b.mediaImg(c.themesPath+"common/blank.gif",{
                            src:f,
                            type:b.mediaType(".swf"),
                            width:g,
                            height:h,
                            quality:"high"
                        }),c.insertHtml(f).hideDialog().focus()):(alert(c.lang("invalidHeight")),z[0].focus()):(alert(c.lang("invalidWidth")),r[0].focus())
                        }
                    }
            }),t=p.div,q=b('[name="url"]',t),o=b('[name="viewServer"]',t),r=b('[name="width"]',t),z=b('[name="height"]',t);
    q.val("http://");
    if(k){
        var D=b.uploadbutton({
            button:b(".ke-upload-button",t)[0],
            fieldName:m,
            extraParams:n,
            url:b.addParam(j,"dir=flash"),
            afterUpload:function(f){
                p.hideLoading();
                if(f.error===0){
                    var g=f.url;
                    h&&(g=b.formatUrl(g,"absolute"));
                    q.val(g);
                    c.afterUpload&&c.afterUpload.call(c,g,f,"flash");
                    alert(c.lang("uploadSuccess"))
                    }else alert(f.message)
                    },
            afterError:function(b){
                p.hideLoading();
                c.errorDialog(b)
                }
            });
    D.fileBox.change(function(){
        p.showLoading(c.lang("uploadLoading"));
        D.submit()
        })
    }else b(".ke-upload-button",t).hide();
    f?o.click(function(){
    c.loadPlugin("filemanager",function(){
        c.plugin.filemanagerDialog({
            viewType:"LIST",
            dirName:"flash",
            clickFn:function(f){
                c.dialogs.length>1&&(b('[name="url"]',t).val(f),c.afterSelectFile&&c.afterSelectFile.call(c,
                    f),c.hideDialog())
                }
            })
    })
}):o.hide();
    if(o=c.plugin.getSelectedFlash()){
    var s=b.mediaAttrs(o.attr("data-ke-tag"));
    q.val(s.src);
    r.val(b.removeUnit(o.css("width"))||s.width||0);
    z.val(b.removeUnit(o.css("height"))||s.height||0)
    }
    q[0].focus();
    q[0].select()
    },
"delete":function(){
    c.plugin.getSelectedFlash().remove()
    }
};

c.clickToolbar("flash",c.plugin.flash.edit)
});
KindEditor.plugin("image",function(b){
    var c=this,g=b.undef(c.allowImageUpload,!0),k=b.undef(c.allowImageRemote,!0),f=b.undef(c.formatUploadUrl,!0),h=b.undef(c.allowFileManager,!1),n=b.undef(c.uploadJson,c.basePath+"php/upload_json.php"),m=b.undef(c.imageTabIndex,0),j=c.pluginsPath+"image/images/",o=b.undef(c.extraFileUploadParams,{}),p=b.undef(c.filePostName,"imgFile"),t=b.undef(c.fillDescAfterUploadImage,!1),q=c.lang("image.");
    c.plugin.imageDialog=function(g){
        function m(b,c){
            Q.val(b);
            G.val(c);
            T=
            b;
            fa=c
            }
            b.undef(g.imageWidth,"");
        b.undef(g.imageHeight,"");
        b.undef(g.imageTitle,"");
        b.undef(g.imageAlign,"");
        var k=b.undef(g.showRemote,!0),s=b.undef(g.showLocal,!0),A=b.undef(g.tabIndex,0),w=g.clickFn,H="kindeditor_upload_iframe_"+(new Date).getTime(),v=[],E;
        for(E in o)v.push('<input type="hidden" name="'+E+'" value="'+o[E]+'" />');var v=['<div style="padding:20px;"><div class="tabs"></div><div class="tab1" style="display:none;"><div class="ke-dialog-row">','<label for="remoteUrl" style="width:60px;">'+
        q.remoteUrl+"</label>",'<input type="text" id="remoteUrl" class="ke-input-text" name="url" value="" style="width:200px;" /> &nbsp;<span class="ke-button-common ke-button-outer">','<input type="button" class="ke-button-common ke-button" name="viewServer" value="'+q.viewServer+'" />','</span></div><div class="ke-dialog-row">','<label for="remoteWidth" style="width:60px;">'+q.size+"</label>",q.width+' <input type="text" id="remoteWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> ',
        q.height+' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> ','<img class="ke-refresh-btn" src="'+j+'refresh.png" width="16" height="16" alt="" style="cursor:pointer;" title="'+q.resetSize+'" />','</div><div class="ke-dialog-row">','<label style="width:60px;">'+q.align+"</label>",'<input type="radio" name="align" class="ke-inline-block" value="" checked="checked" /> <img name="defaultImg" src="'+j+'align_top.gif" width="23" height="25" alt="" />',' <input type="radio" name="align" class="ke-inline-block" value="left" /> <img name="leftImg" src="'+
        j+'align_left.gif" width="23" height="25" alt="" />',' <input type="radio" name="align" class="ke-inline-block" value="right" /> <img name="rightImg" src="'+j+'align_right.gif" width="23" height="25" alt="" />','</div><div class="ke-dialog-row">','<label for="remoteTitle" style="width:60px;">'+q.imgTitle+"</label>",'<input type="text" id="remoteTitle" class="ke-input-text" name="title" value="" style="width:200px;" /></div></div><div class="tab2" style="display:none;">','<iframe name="'+H+'" style="display:none;"></iframe>',
        '<form class="ke-upload-area ke-form" method="post" enctype="multipart/form-data" target="'+H+'" action="'+b.addParam(n,"dir=image")+'">','<div class="ke-dialog-row">',v.join(""),'<label style="width:60px;">'+q.localUrl+"</label>",'<input type="text" name="localUrl" class="ke-input-text" tabindex="-1" style="width:200px;" readonly="true" /> &nbsp;','<input type="button" class="ke-upload-button" value="'+q.upload+'" />',"</div></form></div></div>"].join(""),U=c.createDialog({
            name:"image",
            width:s||
            h?450:400,
            height:s&&k?300:250,
            title:c.lang("image"),
            body:v,
            yesBtn:{
                name:c.lang("yes"),
                click:function(){
                    if(!U.isLoading)if(s&&k&&J&&J.selectedIndex===1||!k)W.fileBox.val()==""?alert(c.lang("pleaseSelectFile")):(U.showLoading(c.lang("uploadLoading")),W.submit(),ea.val(""));
                        else{
                        var f=b.trim(N.val()),g=Q.val(),h=G.val(),j=Y.val(),m="";
                        M.each(function(){
                            if(this.checked)return m=this.value,!1
                                });
                        f=="http://"||b.invalidUrl(f)?(alert(c.lang("invalidUrl")),N[0].focus()):/^\d*$/.test(g)?/^\d*$/.test(h)?w.call(c,
                            f,j,g,h,0,m):(alert(c.lang("invalidHeight")),G[0].focus()):(alert(c.lang("invalidWidth")),Q[0].focus())
                        }
                    }
                },
        beforeRemove:function(){
            V.unbind();
            Q.unbind();
            G.unbind();
            S.unbind()
            }
        }),F=U.div,N=b('[name="url"]',F),ea=b('[name="localUrl"]',F),V=b('[name="viewServer"]',F),Q=b('.tab1 [name="width"]',F),G=b('.tab1 [name="height"]',F),S=b(".ke-refresh-btn",F),Y=b('.tab1 [name="title"]',F),M=b('.tab1 [name="align"]',F),J;
    k&&s?(J=b.tabs({
    src:b(".tabs",F),
    afterSelect:function(){}
}),J.add({
    title:q.remoteImage,
    panel:b(".tab1",
        F)
    }),J.add({
    title:q.localImage,
    panel:b(".tab2",F)
    }),J.select(A)):k?b(".tab1",F).show():s&&b(".tab2",F).show();
var W=b.uploadbutton({
    button:b(".ke-upload-button",F)[0],
    fieldName:p,
    form:b(".ke-form",F),
    target:H,
    width:60,
    afterUpload:function(g){
        U.hideLoading();
        if(g.error===0){
            var h=g.url;
            f&&(h=b.formatUrl(h,"absolute"));
            c.afterUpload&&c.afterUpload.call(c,h,g,"image");
            t?(b(".ke-dialog-row #remoteUrl",F).val(h),b(".ke-tabs-li",F)[0].click(),b(".ke-refresh-btn",F).click()):w.call(c,h,g.title,g.width,g.height,
                g.border,g.align)
            }else alert(g.message)
            },
    afterError:function(b){
        U.hideLoading();
        c.errorDialog(b)
        }
    });
W.fileBox.change(function(){
    ea.val(W.fileBox.val())
    });
h?V.click(function(){
    c.loadPlugin("filemanager",function(){
        c.plugin.filemanagerDialog({
            viewType:"VIEW",
            dirName:"image",
            clickFn:function(f){
                c.dialogs.length>1&&(b('[name="url"]',F).val(f),c.afterSelectFile&&c.afterSelectFile.call(c,f),c.hideDialog())
                }
            })
    })
}):V.hide();
var T=0,fa=0;
S.click(function(){
    var c=b('<img src="'+N.val()+'" />',document).css({
        position:"absolute",
        visibility:"hidden",
        top:0,
        left:"-1000px"
    });
    c.bind("load",function(){
        m(c.width(),c.height());
        c.remove()
        });
    b(document.body).append(c)
    });
Q.change(function(){
    T>0&&G.val(Math.round(fa/T*parseInt(this.value,10)))
    });
G.change(function(){
    fa>0&&Q.val(Math.round(T/fa*parseInt(this.value,10)))
    });
N.val(g.imageUrl);
m(g.imageWidth,g.imageHeight);
Y.val(g.imageTitle);
M.each(function(){
    if(this.value===g.imageAlign)return this.checked=!0,!1
        });
k&&A===0&&(N[0].focus(),N[0].select());
return U
};

c.plugin.image={
    edit:function(){
        var b=
        c.plugin.getSelectedImage();
        c.plugin.imageDialog({
            imageUrl:b?b.attr("data-ke-src"):"http://",
            imageWidth:b?b.width():"",
            imageHeight:b?b.height():"",
            imageTitle:b?b.attr("title"):"",
            imageAlign:b?b.attr("align"):"",
            showRemote:k,
            showLocal:g,
            tabIndex:b?0:m,
            clickFn:function(b,f,g,h,j,m){
                c.exec("insertimage",b,f,g,h,j,m);
                setTimeout(function(){
                    c.hideDialog().focus()
                    },0)
                }
            })
    },
"delete":function(){
    var b=c.plugin.getSelectedImage();
    b.parent().name=="a"&&(b=b.parent());
    b.remove()
    }
};

c.clickToolbar("image",c.plugin.image.edit)
});
KindEditor.plugin("insertfile",function(b){
    var c=this,g=b.undef(c.allowFileUpload,!0),k=b.undef(c.allowFileManager,!1),f=b.undef(c.formatUploadUrl,!0),h=b.undef(c.uploadJson,c.basePath+"php/upload_json.php"),n=b.undef(c.extraFileUploadParams,{}),m=b.undef(c.filePostName,"imgFile"),j=c.lang("insertfile.");
    c.plugin.fileDialog=function(o){
        var p=b.undef(o.fileUrl,"http://"),t=b.undef(o.fileTitle,""),q=o.clickFn,o=['<div style="padding:20px;"><div class="ke-dialog-row">','<label for="keUrl" style="width:60px;">'+
        j.url+"</label>",'<input type="text" id="keUrl" name="url" class="ke-input-text" style="width:160px;" /> &nbsp;','<input type="button" class="ke-upload-button" value="'+j.upload+'" /> &nbsp;','<span class="ke-button-common ke-button-outer">','<input type="button" class="ke-button-common ke-button" name="viewServer" value="'+j.viewServer+'" />','</span></div><div class="ke-dialog-row">','<label for="keTitle" style="width:60px;">'+j.title+"</label>",'<input type="text" id="keTitle" class="ke-input-text" name="title" value="" style="width:160px;" /></div></div></form></div>'].join(""),
        r=c.createDialog({
            name:"insertfile",
            width:450,
            title:c.lang("insertfile"),
            body:o,
            yesBtn:{
                name:c.lang("yes"),
                click:function(){
                    var f=b.trim(D.val()),g=s.val();
                    f=="http://"||b.invalidUrl(f)?(alert(c.lang("invalidUrl")),D[0].focus()):(b.trim(g)===""&&(g=f),q.call(c,f,g))
                    }
                }
        }),z=r.div,D=b('[name="url"]',z),o=b('[name="viewServer"]',z),s=b('[name="title"]',z);
    if(g){
    var A=b.uploadbutton({
        button:b(".ke-upload-button",z)[0],
        fieldName:m,
        url:b.addParam(h,"dir=file"),
        extraParams:n,
        afterUpload:function(g){
            r.hideLoading();
            if(g.error===0){
                var h=g.url;
                f&&(h=b.formatUrl(h,"absolute"));
                D.val(h);
                c.afterUpload&&c.afterUpload.call(c,h,g,"insertfile");
                alert(c.lang("uploadSuccess"))
                }else alert(g.message)
                },
        afterError:function(b){
            r.hideLoading();
            c.errorDialog(b)
            }
        });
A.fileBox.change(function(){
    r.showLoading(c.lang("uploadLoading"));
    A.submit()
    })
}else b(".ke-upload-button",z).hide();
    k?o.click(function(){
    c.loadPlugin("filemanager",function(){
        c.plugin.filemanagerDialog({
            viewType:"LIST",
            dirName:"file",
            clickFn:function(f){
                c.dialogs.length>
                1&&(b('[name="url"]',z).val(f),c.afterSelectFile&&c.afterSelectFile.call(c,f),c.hideDialog())
                }
            })
    })
}):o.hide();
D.val(p);
s.val(t);
D[0].focus();
D[0].select()
};

c.clickToolbar("insertfile",function(){
    c.plugin.fileDialog({
        clickFn:function(b,f){
            c.insertHtml('<a class="ke-insertfile" href="'+b+'" data-ke-src="'+b+'" target="_blank">'+f+"</a>").hideDialog().focus()
            }
        })
})
});
KindEditor.plugin("lineheight",function(b){
    var c=this,g=c.lang("lineheight.");
    c.clickToolbar("lineheight",function(){
        var k="",f=c.cmd.commonNode({
            "*":".line-height"
        });
        f&&(k=f.css("line-height"));
        var h=c.createMenu({
            name:"lineheight",
            width:150
        });
        b.each(g.lineHeight,function(f,g){
            b.each(g,function(b,f){
                h.addItem({
                    title:f,
                    checked:k===b,
                    click:function(){
                        c.cmd.toggle('<span style="line-height:'+b+';"></span>',{
                            span:".line-height="+b
                            });
                        c.updateState();
                        c.addBookmark();
                        c.hideMenu()
                        }
                    })
            })
        })
    })
});
KindEditor.plugin("link",function(b){
    var c=this;
    c.plugin.link={
        edit:function(){
            var g=c.lang("link."),k='<div style="padding:20px;"><div class="ke-dialog-row"><label for="keUrl" style="width:60px;">'+g.url+'</label><input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:260px;" /></div><div class="ke-dialog-row""><label for="keType" style="width:60px;">'+g.linkType+'</label><select id="keType" name="type"></select></div></div>',k=c.createDialog({
                name:"link",
                width:450,
                title:c.lang("link"),
                body:k,
                yesBtn:{
                    name:c.lang("yes"),
                    click:function(){
                        var g=b.trim(f.val());
                        g=="http://"||b.invalidUrl(g)?(alert(c.lang("invalidUrl")),f[0].focus()):c.exec("createlink",g,h.val()).hideDialog().focus()
                        }
                    }
            }).div,f=b('input[name="url"]',k),h=b('select[name="type"]',k);
    f.val("http://");
    h[0].options[0]=new Option(g.newWindow,"_blank");
    h[0].options[1]=new Option(g.selfWindow,"");
    c.cmd.selection();
    if(g=c.plugin.getSelectedLink())c.cmd.range.selectNode(g[0]),c.cmd.select(),f.val(g.attr("data-ke-src")),h.val(g.attr("target"));
    f[0].focus();
    f[0].select()
    },
"delete":function(){
    c.exec("unlink",null)
    }
};

c.clickToolbar("link",c.plugin.link.edit)
});
KindEditor.plugin("map",function(b){
    var c=this,g=c.lang("map.");
    c.clickToolbar("map",function(){
        function k(){
            m=o[0].contentWindow;
            j=b.iframeDoc(o)
            }
            var f=['<div style="padding:10px 20px;"><div class="ke-dialog-row">',g.address+' <input id="kindeditor_plugin_map_address" name="address" class="ke-input-text" value="" style="width:200px;" /> ','<span class="ke-button-common ke-button-outer">','<input type="button" name="searchBtn" class="ke-button-common ke-button" value="'+g.search+'" />','</span></div><div class="ke-map" style="width:558px;height:360px;"></div></div>'].join(""),
        f=c.createDialog({
            name:"map",
            width:600,
            title:c.lang("map"),
            body:f,
            yesBtn:{
                name:c.lang("yes"),
                click:function(){
                    var b=m.map,f=b.getCenter().lat()+","+b.getCenter().lng(),g=b.getZoom(),b=b.getMapTypeId(),h="http://maps.googleapis.com/maps/api/staticmap";
                    h+="?center="+encodeURIComponent(f);
                    h+="&zoom="+encodeURIComponent(g);
                    h+="&size=558x360";
                    h+="&maptype="+encodeURIComponent(b);
                    h+="&markers="+encodeURIComponent(f);
                    h+="&language="+c.langType;
                    h+="&sensor=false";
                    c.exec("insertimage",h).hideDialog().focus()
                    }
                },
        beforeRemove:function(){
            n.remove();
            j&&j.write("");
            o.remove()
            }
        }).div,h=b('[name="address"]',f),n=b('[name="searchBtn"]',f),m,j;
    ['<!doctype html><html><head>\n<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />\n<style>\n\thtml { height: 100% }\n\tbody { height: 100%; margin: 0; padding: 0; background-color: #FFF }\n\t#map_canvas { height: 100% }\n</style>','<script src="http://maps.googleapis.com/maps/api/js?sensor=false&language='+c.langType+'"><\/script>','<script>\nvar map, geocoder;\nfunction initialize() {\n\tvar latlng = new google.maps.LatLng(31.230393, 121.473704);\n\tvar options = {\n\t\tzoom: 11,\n\t\tcenter: latlng,\n\t\tdisableDefaultUI: true,\n\t\tpanControl: true,\n\t\tzoomControl: true,\n\t\tmapTypeControl: true,\n\t\tscaleControl: true,\n\t\tstreetViewControl: false,\n\t\toverviewMapControl: true,\n\t\tmapTypeId: google.maps.MapTypeId.ROADMAP\n\t};\n\tmap = new google.maps.Map(document.getElementById("map_canvas"), options);\n\tgeocoder = new google.maps.Geocoder();\n\tgeocoder.geocode({latLng: latlng}, function(results, status) {\n\t\tif (status == google.maps.GeocoderStatus.OK) {\n\t\t\tif (results[3]) {\n\t\t\t\tparent.document.getElementById("kindeditor_plugin_map_address").value = results[3].formatted_address;\n\t\t\t}\n\t\t}\n\t});\n}\nfunction search(address) {\n\tif (!map) return;\n\tgeocoder.geocode({address : address}, function(results, status) {\n\t\tif (status == google.maps.GeocoderStatus.OK) {\n\t\t\tmap.setZoom(11);\n\t\t\tmap.setCenter(results[0].geometry.location);\n\t\t\tvar marker = new google.maps.Marker({\n\t\t\t\tmap: map,\n\t\t\t\tposition: results[0].geometry.location\n\t\t\t});\n\t\t} else {\n\t\t\talert("Invalid address: " + address);\n\t\t}\n\t});\n}\n<\/script>\n</head>\n<body onload="initialize();">\n<div id="map_canvas" style="width:100%; height:100%"></div>\n</body></html>'].join("\n");
    var o=b('<iframe class="ke-textarea" frameborder="0" src="'+c.pluginsPath+'map/map.html" style="width:558px;height:360px;"></iframe>');
    o.bind("load",function(){
        o.unbind("load");
        b.IE?k():setTimeout(k,0)
        });
    b(".ke-map",f).replaceWith(o);
    n.click(function(){
        m.search(h.val())
        })
    })
});
KindEditor.plugin("media",function(b){
    var c=this,g=c.lang("media."),k=b.undef(c.allowMediaUpload,!0),f=b.undef(c.allowFileManager,!1),h=b.undef(c.formatUploadUrl,!0),n=b.undef(c.extraFileUploadParams,{}),m=b.undef(c.filePostName,"imgFile"),j=b.undef(c.uploadJson,c.basePath+"php/upload_json.php");
    c.plugin.media={
        edit:function(){
            var o=['<div style="padding:20px;"><div class="ke-dialog-row">','<label for="keUrl" style="width:60px;">'+g.url+"</label>",'<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:160px;" /> &nbsp;',
            '<input type="button" class="ke-upload-button" value="'+g.upload+'" /> &nbsp;','<span class="ke-button-common ke-button-outer">','<input type="button" class="ke-button-common ke-button" name="viewServer" value="'+g.viewServer+'" />','</span></div><div class="ke-dialog-row">','<label for="keWidth" style="width:60px;">'+g.width+"</label>",'<input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="550" maxlength="4" /></div><div class="ke-dialog-row">','<label for="keHeight" style="width:60px;">'+
            g.height+"</label>",'<input type="text" id="keHeight" class="ke-input-text ke-input-number" name="height" value="400" maxlength="4" /></div><div class="ke-dialog-row">','<label for="keAutostart">'+g.autostart+"</label>",'<input type="checkbox" id="keAutostart" name="autostart" value="" /> </div></div>'].join(""),p=c.createDialog({
                name:"media",
                width:450,
                height:230,
                title:c.lang("media"),
                body:o,
                yesBtn:{
                    name:c.lang("yes"),
                    click:function(){
                        var f=b.trim(q.val()),g=r.val(),h=z.val();
                        f=="http://"||b.invalidUrl(f)?
                        (alert(c.lang("invalidUrl")),q[0].focus()):/^\d*$/.test(g)?/^\d*$/.test(h)?(f=b.mediaImg(c.themesPath+"common/blank.gif",{
                            src:f,
                            type:b.mediaType(f),
                            width:g,
                            height:h,
                            autostart:D[0].checked?"true":"false",
                            loop:"true"
                        }),c.insertHtml(f).hideDialog().focus()):(alert(c.lang("invalidHeight")),z[0].focus()):(alert(c.lang("invalidWidth")),r[0].focus())
                        }
                    }
            }),t=p.div,q=b('[name="url"]',t),o=b('[name="viewServer"]',t),r=b('[name="width"]',t),z=b('[name="height"]',t),D=b('[name="autostart"]',t);
    q.val("http://");
    if(k){
        var s=b.uploadbutton({
            button:b(".ke-upload-button",t)[0],
            fieldName:m,
            extraParams:n,
            url:b.addParam(j,"dir=media"),
            afterUpload:function(f){
                p.hideLoading();
                if(f.error===0){
                    var g=f.url;
                    h&&(g=b.formatUrl(g,"absolute"));
                    q.val(g);
                    c.afterUpload&&c.afterUpload.call(c,g,f,"media");
                    alert(c.lang("uploadSuccess"))
                    }else alert(f.message)
                    },
            afterError:function(b){
                p.hideLoading();
                c.errorDialog(b)
                }
            });
    s.fileBox.change(function(){
        p.showLoading(c.lang("uploadLoading"));
        s.submit()
        })
    }else b(".ke-upload-button",t).hide();
    f?o.click(function(){
        c.loadPlugin("filemanager",function(){
            c.plugin.filemanagerDialog({
                viewType:"LIST",
                dirName:"media",
                clickFn:function(f){
                    c.dialogs.length>1&&(b('[name="url"]',t).val(f),c.afterSelectFile&&c.afterSelectFile.call(c,f),c.hideDialog())
                    }
                })
        })
    }):o.hide();
    if(o=c.plugin.getSelectedMedia()){
    var A=b.mediaAttrs(o.attr("data-ke-tag"));
    q.val(A.src);
    r.val(b.removeUnit(o.css("width"))||A.width||0);
    z.val(b.removeUnit(o.css("height"))||A.height||0);
    D[0].checked=A.autostart==="true"
    }
    q[0].focus();
    q[0].select()
    },
"delete":function(){
    c.plugin.getSelectedMedia().remove()
    }
};

c.clickToolbar("media",c.plugin.media.edit)
});
(function(b){
    function c(b){
        this.init(b)
        }
        b.extend(c,{
        init:function(c){
            function k(c,f){
                b(".ke-status > div",c).hide();
                b(".ke-message",c).addClass("ke-error").show().html(b.escape(f))
                }
                var f=this;
            c.afterError=c.afterError||function(b){
                alert(b)
                };
                
            f.options=c;
            f.progressbars={};
            
            f.div=b(c.container).html(['<div class="ke-swfupload"><div class="ke-swfupload-top"><div class="ke-inline-block ke-swfupload-button"><input type="button" value="Browse" /></div>','<div class="ke-inline-block ke-swfupload-desc">'+c.uploadDesc+
                "</div>",'<span class="ke-button-common ke-button-outer ke-swfupload-startupload">','<input type="button" class="ke-button-common ke-button" value="'+c.startButtonValue+'" />','</span></div><div class="ke-swfupload-body"></div></div>'].join(""));
            f.bodyDiv=b(".ke-swfupload-body",f.div);
            var h={
                debug:!1,
                upload_url:c.uploadUrl,
                flash_url:c.flashUrl,
                file_post_name:c.filePostName,
                button_placeholder:b(".ke-swfupload-button > input",f.div)[0],
                button_image_url:c.buttonImageUrl,
                button_width:c.buttonWidth,
                button_height:c.buttonHeight,
                button_cursor:SWFUpload.CURSOR.HAND,
                file_types:c.fileTypes,
                file_types_description:c.fileTypesDesc,
                file_upload_limit:c.fileUploadLimit,
                file_size_limit:c.fileSizeLimit,
                post_params:c.postParams,
                file_queued_handler:function(b){
                    b.url=f.options.fileIconUrl;
                    f.appendFile(b)
                    },
                file_queue_error_handler:function(f,h){
                    var j="";
                    switch(h){
                        case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
                            j=c.queueLimitExceeded;
                            break;
                        case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                            j=c.fileExceedsSizeLimit;
                            break;
                        case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
                            j=
                            c.zeroByteFile;
                            break;
                        case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
                            j=c.invalidFiletype;
                            break;
                        default:
                            j=c.unknownError
                            }
                            b.DEBUG&&alert(j)
                    },
                upload_start_handler:function(c){
                    c=b('div[data-id="'+c.id+'"]',this.bodyDiv);
                    b(".ke-status > div",c).hide();
                    b(".ke-progressbar",c).show()
                    },
                upload_progress_handler:function(b,c,g){
                    c=Math.round(c*100/g);
                    b=f.progressbars[b.id];
                    b.bar.css("width",Math.round(c*80/100)+"px");
                    b.percent.html(c+"%")
                    },
                upload_error_handler:function(c){
                    c&&c.filestatus==SWFUpload.FILE_STATUS.ERROR&&
                    (c=b('div[data-id="'+c.id+'"]',f.bodyDiv).eq(0),k(c,f.options.errorMessage))
                    },
                upload_success_handler:function(c,g){
                    var h=b('div[data-id="'+c.id+'"]',f.bodyDiv).eq(0),o={};
                    
                    try{
                        o=b.json(g)
                        }catch(p){
                        f.options.afterError.call(this,"<!doctype html><html>"+g+"</html>")
                        }
                        o.error!==0?k(h,b.DEBUG?o.message:f.options.errorMessage):(c.url=o.url,b(".ke-img",h).attr("src",c.url).attr("data-status",c.filestatus).data("data",o),b(".ke-status > div",h).hide())
                    }
                };
            
        f.swfu=new SWFUpload(h);
        b(".ke-swfupload-startupload input",
            f.div).click(function(){
            f.swfu.startUpload()
            })
        },
    getUrlList:function(){
        var c=[];
        b(".ke-img",self.bodyDiv).each(function(){
            var k=b(this);
            k.attr("data-status")==SWFUpload.FILE_STATUS.COMPLETE&&c.push(k.data("data"))
            });
        return c
        },
    removeFile:function(c){
        this.swfu.cancelUpload(c);
        c=b('div[data-id="'+c+'"]',this.bodyDiv);
        b(".ke-photo",c).unbind();
        b(".ke-delete",c).unbind();
        c.remove()
        },
    removeFiles:function(){
        var c=this;
        b(".ke-item",c.bodyDiv).each(function(){
            c.removeFile(b(this).attr("data-id"))
            })
        },
    appendFile:function(c){
        var k=
        this,f=b('<div class="ke-inline-block ke-item" data-id="'+c.id+'"></div>');
        k.bodyDiv.append(f);
        var h=b('<div class="ke-inline-block ke-photo"></div>').mouseover(function(){
            b(this).addClass("ke-on")
            }).mouseout(function(){
            b(this).removeClass("ke-on")
            });
        f.append(h);
        var n=b('<img src="'+c.url+'" class="ke-img" data-status="'+c.filestatus+'" width="80" height="80" alt="'+c.name+'" />');
        h.append(n);
        b('<span class="ke-delete"></span>').appendTo(h).click(function(){
            k.removeFile(c.id)
            });
        n=b('<div class="ke-status"></div>').appendTo(h);
        b('<div class="ke-progressbar"><div class="ke-progressbar-bar"><div class="ke-progressbar-bar-inner"></div></div><div class="ke-progressbar-percent">0%</div></div>').hide().appendTo(n);
        b('<div class="ke-message">'+k.options.pendingMessage+"</div>").appendTo(n);
        f.append('<div class="ke-name">'+c.name+"</div>");
        k.progressbars[c.id]={
            bar:b(".ke-progressbar-bar-inner",h),
            percent:b(".ke-progressbar-percent",h)
            }
        },
    remove:function(){
        this.removeFiles();
        this.swfu.destroy();
        this.div.html("")
        }
    });
b.swfupload=
function(b,k){
    return new c(b,k)
    }
})(KindEditor);
KindEditor.plugin("multiimage",function(b){
    var c=this;
    b.undef(c.formatUploadUrl,!0);
    var g=b.undef(c.uploadJson,c.basePath+"php/upload_json.php"),k=c.pluginsPath+"multiimage/images/",f=b.undef(c.imageSizeLimit,"1MB");
    b.undef(c.imageFileTypes,"*.jpg;*.gif;*.png");
    var h=b.undef(c.imageUploadLimit,20),n=b.undef(c.filePostName,"imgFile"),m=c.lang("multiimage.");
    c.plugin.multiImageDialog=function(j){
        var o=j.clickFn,j=b.tmpl(m.uploadDesc,{
            uploadLimit:h,
            sizeLimit:f
        }),p=c.createDialog({
            name:"multiimage",
            width:650,
            height:510,
            title:c.lang("multiimage"),
            body:'<div style="padding:20px;"><div class="swfupload"></div></div>',
            previewBtn:{
                name:m.insertAll,
                click:function(){
                    o.call(c,t.getUrlList())
                    }
                },
        yesBtn:{
            name:m.clearAll,
            click:function(){
                t.removeFiles()
                }
            },
        beforeRemove:function(){
            (!b.IE||b.V<=8)&&t.remove()
            }
        }),t=b.swfupload({
    container:b(".swfupload",p.div),
    buttonImageUrl:k+(c.langType=="zh_CN"?"select-files-zh_CN.png":"select-files-en.png"),
    buttonWidth:c.langType=="zh_CN"?72:88,
    buttonHeight:23,
    fileIconUrl:k+"image.png",
    uploadDesc:j,
    startButtonValue:m.startUpload,
    uploadUrl:b.addParam(g,"dir=image"),
    flashUrl:k+"swfupload.swf",
    filePostName:n,
    fileTypes:"*.jpg;*.jpeg;*.gif;*.png;*.bmp",
    fileTypesDesc:"Image Files",
    fileUploadLimit:h,
    fileSizeLimit:f,
    postParams:b.undef(c.extraFileUploadParams,{}),
    queueLimitExceeded:m.queueLimitExceeded,
    fileExceedsSizeLimit:m.fileExceedsSizeLimit,
    zeroByteFile:m.zeroByteFile,
    invalidFiletype:m.invalidFiletype,
    unknownError:m.unknownError,
    pendingMessage:m.pending,
    errorMessage:m.uploadError,
    afterError:function(b){
        c.errorDialog(b)
        }
    });
return p
};

c.clickToolbar("multiimage",function(){
    c.plugin.multiImageDialog({
        clickFn:function(f){
            f.length!==0&&(b.each(f,function(b,f){
                c.afterUpload&&c.afterUpload.call(c,f.url,f,"multiimage");
                c.exec("insertimage",f.url,f.title,f.width,f.height,f.border,f.align)
                }),setTimeout(function(){
                c.hideDialog().focus()
                },0))
            }
        })
})
});
(function(){
    if(!window.SWFUpload)window.SWFUpload=function(b){
        this.initSWFUpload(b)
        },SWFUpload.prototype.initSWFUpload=function(b){
        try{
            this.customSettings={},this.settings=b,this.eventQueue=[],this.movieName="SWFUpload_"+SWFUpload.movieCount++,this.movieElement=null,SWFUpload.instances[this.movieName]=this,this.initSettings(),this.loadFlash(),this.displayDebugInfo()
            }catch(c){
            throw delete SWFUpload.instances[this.movieName],c;
        }
    },SWFUpload.instances={},SWFUpload.movieCount=0,SWFUpload.version="2.2.0 2009-03-25",
    SWFUpload.QUEUE_ERROR={
        QUEUE_LIMIT_EXCEEDED:-100,
        FILE_EXCEEDS_SIZE_LIMIT:-110,
        ZERO_BYTE_FILE:-120,
        INVALID_FILETYPE:-130
    },SWFUpload.UPLOAD_ERROR={
        HTTP_ERROR:-200,
        MISSING_UPLOAD_URL:-210,
        IO_ERROR:-220,
        SECURITY_ERROR:-230,
        UPLOAD_LIMIT_EXCEEDED:-240,
        UPLOAD_FAILED:-250,
        SPECIFIED_FILE_ID_NOT_FOUND:-260,
        FILE_VALIDATION_FAILED:-270,
        FILE_CANCELLED:-280,
        UPLOAD_STOPPED:-290
    },SWFUpload.FILE_STATUS={
        QUEUED:-1,
        IN_PROGRESS:-2,
        ERROR:-3,
        COMPLETE:-4,
        CANCELLED:-5
    },SWFUpload.BUTTON_ACTION={
        SELECT_FILE:-100,
        SELECT_FILES:-110,
        START_UPLOAD:-120
    },SWFUpload.CURSOR={
        ARROW:-1,
        HAND:-2
    },SWFUpload.WINDOW_MODE={
        WINDOW:"window",
        TRANSPARENT:"transparent",
        OPAQUE:"opaque"
    },SWFUpload.completeURL=function(b){
        if(typeof b!=="string"||b.match(/^https?:\/\//i)||b.match(/^\//))return b;
        var c=window.location.pathname.lastIndexOf("/");
        path=c<=0?"/":window.location.pathname.substr(0,c)+"/";
        return path+b
        },SWFUpload.prototype.initSettings=function(){
        this.ensureDefault=function(b,c){
            this.settings[b]=this.settings[b]==void 0?c:this.settings[b]
            };
        this.ensureDefault("upload_url","");
        this.ensureDefault("preserve_relative_urls",!1);
        this.ensureDefault("file_post_name","Filedata");
        this.ensureDefault("post_params",{});
        this.ensureDefault("use_query_string",!1);
        this.ensureDefault("requeue_on_error",!1);
        this.ensureDefault("http_success",[]);
        this.ensureDefault("assume_success_timeout",0);
        this.ensureDefault("file_types","*.*");
        this.ensureDefault("file_types_description","All Files");
        this.ensureDefault("file_size_limit",0);
        this.ensureDefault("file_upload_limit",
            0);
        this.ensureDefault("file_queue_limit",0);
        this.ensureDefault("flash_url","swfupload.swf");
        this.ensureDefault("prevent_swf_caching",!0);
        this.ensureDefault("button_image_url","");
        this.ensureDefault("button_width",1);
        this.ensureDefault("button_height",1);
        this.ensureDefault("button_text","");
        this.ensureDefault("button_text_style","color: #000000; font-size: 16pt;");
        this.ensureDefault("button_text_top_padding",0);
        this.ensureDefault("button_text_left_padding",0);
        this.ensureDefault("button_action",SWFUpload.BUTTON_ACTION.SELECT_FILES);
        this.ensureDefault("button_disabled",!1);
        this.ensureDefault("button_placeholder_id","");
        this.ensureDefault("button_placeholder",null);
        this.ensureDefault("button_cursor",SWFUpload.CURSOR.ARROW);
        this.ensureDefault("button_window_mode",SWFUpload.WINDOW_MODE.WINDOW);
        this.ensureDefault("debug",!1);
        this.settings.debug_enabled=this.settings.debug;
        this.settings.return_upload_start_handler=this.returnUploadStart;
        this.ensureDefault("swfupload_loaded_handler",null);
        this.ensureDefault("file_dialog_start_handler",
            null);
        this.ensureDefault("file_queued_handler",null);
        this.ensureDefault("file_queue_error_handler",null);
        this.ensureDefault("file_dialog_complete_handler",null);
        this.ensureDefault("upload_start_handler",null);
        this.ensureDefault("upload_progress_handler",null);
        this.ensureDefault("upload_error_handler",null);
        this.ensureDefault("upload_success_handler",null);
        this.ensureDefault("upload_complete_handler",null);
        this.ensureDefault("debug_handler",this.debugMessage);
        this.ensureDefault("custom_settings",{});
        this.customSettings=this.settings.custom_settings;
        if(this.settings.prevent_swf_caching)this.settings.flash_url=this.settings.flash_url+(this.settings.flash_url.indexOf("?")<0?"?":"&")+"preventswfcaching="+(new Date).getTime();
        if(!this.settings.preserve_relative_urls)this.settings.upload_url=SWFUpload.completeURL(this.settings.upload_url),this.settings.button_image_url=SWFUpload.completeURL(this.settings.button_image_url);
        delete this.ensureDefault
        },SWFUpload.prototype.loadFlash=function(){
        var b,c;
        if(document.getElementById(this.movieName)!==null)throw"ID "+this.movieName+" is already in use. The Flash Object could not be added";
        b=document.getElementById(this.settings.button_placeholder_id)||this.settings.button_placeholder;
        if(b==void 0)throw"Could not find the placeholder element: "+this.settings.button_placeholder_id;
        c=document.createElement("div");
        c.innerHTML=this.getFlashHTML();
        b.parentNode.replaceChild(c.firstChild,b);
        window[this.movieName]==void 0&&(window[this.movieName]=this.getMovieElement())
        },
    SWFUpload.prototype.getFlashHTML=function(){
        var b="";
        KindEditor.IE&&KindEditor.V>8&&(b=' classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"');
        return['<object id="',this.movieName,'"'+b+' type="application/x-shockwave-flash" data="',this.settings.flash_url,'" width="',this.settings.button_width,'" height="',this.settings.button_height,'" class="swfupload"><param name="wmode" value="',this.settings.button_window_mode,'" /><param name="movie" value="',this.settings.flash_url,'" /><param name="quality" value="high" /><param name="menu" value="false" /><param name="allowScriptAccess" value="always" />',
        '<param name="flashvars" value="'+this.getFlashVars()+'" />',"</object>"].join("")
        },SWFUpload.prototype.getFlashVars=function(){
        var b=this.buildParamString(),c=this.settings.http_success.join(",");
        return["movieName=",encodeURIComponent(this.movieName),"&amp;uploadURL=",encodeURIComponent(this.settings.upload_url),"&amp;useQueryString=",encodeURIComponent(this.settings.use_query_string),"&amp;requeueOnError=",encodeURIComponent(this.settings.requeue_on_error),"&amp;httpSuccess=",encodeURIComponent(c),
        "&amp;assumeSuccessTimeout=",encodeURIComponent(this.settings.assume_success_timeout),"&amp;params=",encodeURIComponent(b),"&amp;filePostName=",encodeURIComponent(this.settings.file_post_name),"&amp;fileTypes=",encodeURIComponent(this.settings.file_types),"&amp;fileTypesDescription=",encodeURIComponent(this.settings.file_types_description),"&amp;fileSizeLimit=",encodeURIComponent(this.settings.file_size_limit),"&amp;fileUploadLimit=",encodeURIComponent(this.settings.file_upload_limit),"&amp;fileQueueLimit=",
        encodeURIComponent(this.settings.file_queue_limit),"&amp;debugEnabled=",encodeURIComponent(this.settings.debug_enabled),"&amp;buttonImageURL=",encodeURIComponent(this.settings.button_image_url),"&amp;buttonWidth=",encodeURIComponent(this.settings.button_width),"&amp;buttonHeight=",encodeURIComponent(this.settings.button_height),"&amp;buttonText=",encodeURIComponent(this.settings.button_text),"&amp;buttonTextTopPadding=",encodeURIComponent(this.settings.button_text_top_padding),"&amp;buttonTextLeftPadding=",
        encodeURIComponent(this.settings.button_text_left_padding),"&amp;buttonTextStyle=",encodeURIComponent(this.settings.button_text_style),"&amp;buttonAction=",encodeURIComponent(this.settings.button_action),"&amp;buttonDisabled=",encodeURIComponent(this.settings.button_disabled),"&amp;buttonCursor=",encodeURIComponent(this.settings.button_cursor)].join("")
        },SWFUpload.prototype.getMovieElement=function(){
        if(this.movieElement==void 0)this.movieElement=document.getElementById(this.movieName);
        if(this.movieElement===
            null)throw"Could not find Flash element";
        return this.movieElement
        },SWFUpload.prototype.buildParamString=function(){
        var b=this.settings.post_params,c=[];
        if(typeof b==="object")for(var g in b)b.hasOwnProperty(g)&&c.push(encodeURIComponent(g.toString())+"="+encodeURIComponent(b[g].toString()));return c.join("&amp;")
        },SWFUpload.prototype.destroy=function(){
        try{
            this.cancelUpload(null,!1);
            var b=null;
            if((b=this.getMovieElement())&&typeof b.CallFunction==="unknown"){
                for(var c in b)try{
                    typeof b[c]==="function"&&
                    (b[c]=null)
                    }catch(g){}
                    try{
                    b.parentNode.removeChild(b)
                    }catch(k){}
            }
            window[this.movieName]=null;
        SWFUpload.instances[this.movieName]=null;
        delete SWFUpload.instances[this.movieName];
        this.movieName=this.eventQueue=this.customSettings=this.settings=this.movieElement=null;
        return!0
        }catch(f){
        return!1
        }
    },SWFUpload.prototype.displayDebugInfo=function(){
    this.debug(["---SWFUpload Instance Info---\nVersion: ",SWFUpload.version,"\nMovie Name: ",this.movieName,"\nSettings:\n\tupload_url:               ",this.settings.upload_url,
        "\n\tflash_url:                ",this.settings.flash_url,"\n\tuse_query_string:         ",this.settings.use_query_string.toString(),"\n\trequeue_on_error:         ",this.settings.requeue_on_error.toString(),"\n\thttp_success:             ",this.settings.http_success.join(", "),"\n\tassume_success_timeout:   ",this.settings.assume_success_timeout,"\n\tfile_post_name:           ",this.settings.file_post_name,"\n\tpost_params:              ",this.settings.post_params.toString(),"\n\tfile_types:               ",
        this.settings.file_types,"\n\tfile_types_description:   ",this.settings.file_types_description,"\n\tfile_size_limit:          ",this.settings.file_size_limit,"\n\tfile_upload_limit:        ",this.settings.file_upload_limit,"\n\tfile_queue_limit:         ",this.settings.file_queue_limit,"\n\tdebug:                    ",this.settings.debug.toString(),"\n\tprevent_swf_caching:      ",this.settings.prevent_swf_caching.toString(),"\n\tbutton_placeholder_id:    ",this.settings.button_placeholder_id.toString(),
        "\n\tbutton_placeholder:       ",this.settings.button_placeholder?"Set":"Not Set","\n\tbutton_image_url:         ",this.settings.button_image_url.toString(),"\n\tbutton_width:             ",this.settings.button_width.toString(),"\n\tbutton_height:            ",this.settings.button_height.toString(),"\n\tbutton_text:              ",this.settings.button_text.toString(),"\n\tbutton_text_style:        ",this.settings.button_text_style.toString(),"\n\tbutton_text_top_padding:  ",this.settings.button_text_top_padding.toString(),
        "\n\tbutton_text_left_padding: ",this.settings.button_text_left_padding.toString(),"\n\tbutton_action:            ",this.settings.button_action.toString(),"\n\tbutton_disabled:          ",this.settings.button_disabled.toString(),"\n\tcustom_settings:          ",this.settings.custom_settings.toString(),"\nEvent Handlers:\n\tswfupload_loaded_handler assigned:  ",(typeof this.settings.swfupload_loaded_handler==="function").toString(),"\n\tfile_dialog_start_handler assigned: ",(typeof this.settings.file_dialog_start_handler===
            "function").toString(),"\n\tfile_queued_handler assigned:       ",(typeof this.settings.file_queued_handler==="function").toString(),"\n\tfile_queue_error_handler assigned:  ",(typeof this.settings.file_queue_error_handler==="function").toString(),"\n\tupload_start_handler assigned:      ",(typeof this.settings.upload_start_handler==="function").toString(),"\n\tupload_progress_handler assigned:   ",(typeof this.settings.upload_progress_handler==="function").toString(),"\n\tupload_error_handler assigned:      ",
        (typeof this.settings.upload_error_handler==="function").toString(),"\n\tupload_success_handler assigned:    ",(typeof this.settings.upload_success_handler==="function").toString(),"\n\tupload_complete_handler assigned:   ",(typeof this.settings.upload_complete_handler==="function").toString(),"\n\tdebug_handler assigned:             ",(typeof this.settings.debug_handler==="function").toString(),"\n"].join(""))
    },SWFUpload.prototype.addSetting=function(b,c,g){
    return c==void 0?this.settings[b]=g:this.settings[b]=
    c
    },SWFUpload.prototype.getSetting=function(b){
    if(this.settings[b]!=void 0)return this.settings[b];
    return""
    },SWFUpload.prototype.callFlash=function(b,c){
    var c=c||[],g=this.getMovieElement(),k,f;
    try{
        f=g.CallFunction('<invoke name="'+b+'" returntype="javascript">'+__flash__argumentsToXML(c,0)+"</invoke>"),k=eval(f)
        }catch(h){
        throw"Call to "+b+" failed";
    }
    k!=void 0&&typeof k.post==="object"&&(k=this.unescapeFilePostParams(k));
    return k
    },SWFUpload.prototype.selectFile=function(){
    this.callFlash("SelectFile")
    },
SWFUpload.prototype.selectFiles=function(){
    this.callFlash("SelectFiles")
    },SWFUpload.prototype.startUpload=function(b){
    this.callFlash("StartUpload",[b])
    },SWFUpload.prototype.cancelUpload=function(b,c){
    c!==!1&&(c=!0);
    this.callFlash("CancelUpload",[b,c])
    },SWFUpload.prototype.stopUpload=function(){
    this.callFlash("StopUpload")
    },SWFUpload.prototype.getStats=function(){
    return this.callFlash("GetStats")
    },SWFUpload.prototype.setStats=function(b){
    this.callFlash("SetStats",[b])
    },SWFUpload.prototype.getFile=
function(b){
    return typeof b==="number"?this.callFlash("GetFileByIndex",[b]):this.callFlash("GetFile",[b])
    },SWFUpload.prototype.addFileParam=function(b,c,g){
    return this.callFlash("AddFileParam",[b,c,g])
    },SWFUpload.prototype.removeFileParam=function(b,c){
    this.callFlash("RemoveFileParam",[b,c])
    },SWFUpload.prototype.setUploadURL=function(b){
    this.settings.upload_url=b.toString();
    this.callFlash("SetUploadURL",[b])
    },SWFUpload.prototype.setPostParams=function(b){
    this.settings.post_params=b;
    this.callFlash("SetPostParams",
        [b])
    },SWFUpload.prototype.addPostParam=function(b,c){
    this.settings.post_params[b]=c;
    this.callFlash("SetPostParams",[this.settings.post_params])
    },SWFUpload.prototype.removePostParam=function(b){
    delete this.settings.post_params[b];
    this.callFlash("SetPostParams",[this.settings.post_params])
    },SWFUpload.prototype.setFileTypes=function(b,c){
    this.settings.file_types=b;
    this.settings.file_types_description=c;
    this.callFlash("SetFileTypes",[b,c])
    },SWFUpload.prototype.setFileSizeLimit=function(b){
    this.settings.file_size_limit=
    b;
    this.callFlash("SetFileSizeLimit",[b])
    },SWFUpload.prototype.setFileUploadLimit=function(b){
    this.settings.file_upload_limit=b;
    this.callFlash("SetFileUploadLimit",[b])
    },SWFUpload.prototype.setFileQueueLimit=function(b){
    this.settings.file_queue_limit=b;
    this.callFlash("SetFileQueueLimit",[b])
    },SWFUpload.prototype.setFilePostName=function(b){
    this.settings.file_post_name=b;
    this.callFlash("SetFilePostName",[b])
    },SWFUpload.prototype.setUseQueryString=function(b){
    this.settings.use_query_string=b;
    this.callFlash("SetUseQueryString",
        [b])
    },SWFUpload.prototype.setRequeueOnError=function(b){
    this.settings.requeue_on_error=b;
    this.callFlash("SetRequeueOnError",[b])
    },SWFUpload.prototype.setHTTPSuccess=function(b){
    typeof b==="string"&&(b=b.replace(" ","").split(","));
    this.settings.http_success=b;
    this.callFlash("SetHTTPSuccess",[b])
    },SWFUpload.prototype.setAssumeSuccessTimeout=function(b){
    this.settings.assume_success_timeout=b;
    this.callFlash("SetAssumeSuccessTimeout",[b])
    },SWFUpload.prototype.setDebugEnabled=function(b){
    this.settings.debug_enabled=
    b;
    this.callFlash("SetDebugEnabled",[b])
    },SWFUpload.prototype.setButtonImageURL=function(b){
    b==void 0&&(b="");
    this.settings.button_image_url=b;
    this.callFlash("SetButtonImageURL",[b])
    },SWFUpload.prototype.setButtonDimensions=function(b,c){
    this.settings.button_width=b;
    this.settings.button_height=c;
    var g=this.getMovieElement();
    if(g!=void 0)g.style.width=b+"px",g.style.height=c+"px";
    this.callFlash("SetButtonDimensions",[b,c])
    },SWFUpload.prototype.setButtonText=function(b){
    this.settings.button_text=b;
    this.callFlash("SetButtonText",
        [b])
    },SWFUpload.prototype.setButtonTextPadding=function(b,c){
    this.settings.button_text_top_padding=c;
    this.settings.button_text_left_padding=b;
    this.callFlash("SetButtonTextPadding",[b,c])
    },SWFUpload.prototype.setButtonTextStyle=function(b){
    this.settings.button_text_style=b;
    this.callFlash("SetButtonTextStyle",[b])
    },SWFUpload.prototype.setButtonDisabled=function(b){
    this.settings.button_disabled=b;
    this.callFlash("SetButtonDisabled",[b])
    },SWFUpload.prototype.setButtonAction=function(b){
    this.settings.button_action=
    b;
    this.callFlash("SetButtonAction",[b])
    },SWFUpload.prototype.setButtonCursor=function(b){
    this.settings.button_cursor=b;
    this.callFlash("SetButtonCursor",[b])
    },SWFUpload.prototype.queueEvent=function(b,c){
    c==void 0?c=[]:c instanceof Array||(c=[c]);
    var g=this;
    if(typeof this.settings[b]==="function")this.eventQueue.push(function(){
        this.settings[b].apply(this,c)
        }),setTimeout(function(){
        g.executeNextEvent()
        },0);
    else if(this.settings[b]!==null)throw"Event handler "+b+" is unknown or is not a function";
},
SWFUpload.prototype.executeNextEvent=function(){
    var b=this.eventQueue?this.eventQueue.shift():null;
    typeof b==="function"&&b.apply(this)
    },SWFUpload.prototype.unescapeFilePostParams=function(b){
    var c=/[$]([0-9a-f]{4})/i,g={},k;
    if(b!=void 0){
        for(var f in b.post)if(b.post.hasOwnProperty(f)){
            k=f;
            for(var h;(h=c.exec(k))!==null;)k=k.replace(h[0],String.fromCharCode(parseInt("0x"+h[1],16)));
            g[k]=b.post[f]
            }
            b.post=g
        }
        return b
    },SWFUpload.prototype.testExternalInterface=function(){
    try{
        return this.callFlash("TestExternalInterface")
        }catch(b){
        return!1
        }
    },
SWFUpload.prototype.flashReady=function(){
    var b=this.getMovieElement();
    b?(this.cleanUp(b),this.queueEvent("swfupload_loaded_handler")):this.debug("Flash called back ready but the flash movie can't be found.")
    },SWFUpload.prototype.cleanUp=function(b){
    try{
        if(this.movieElement&&typeof b.CallFunction==="unknown"){
            this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
            for(var c in b)try{
                typeof b[c]==="function"&&(b[c]=null)
                }catch(g){}
                }
            }catch(k){}
window.__flash__removeCallback=
function(b,c){
    try{
        b&&(b[c]=null)
        }catch(g){}
}
},SWFUpload.prototype.fileDialogStart=function(){
    this.queueEvent("file_dialog_start_handler")
    },SWFUpload.prototype.fileQueued=function(b){
    b=this.unescapeFilePostParams(b);
    this.queueEvent("file_queued_handler",b)
    },SWFUpload.prototype.fileQueueError=function(b,c,g){
    b=this.unescapeFilePostParams(b);
    this.queueEvent("file_queue_error_handler",[b,c,g])
    },SWFUpload.prototype.fileDialogComplete=function(b,c,g){
    this.queueEvent("file_dialog_complete_handler",[b,c,
        g])
    },SWFUpload.prototype.uploadStart=function(b){
    b=this.unescapeFilePostParams(b);
    this.queueEvent("return_upload_start_handler",b)
    },SWFUpload.prototype.returnUploadStart=function(b){
    var c;
    if(typeof this.settings.upload_start_handler==="function")b=this.unescapeFilePostParams(b),c=this.settings.upload_start_handler.call(this,b);
    else if(this.settings.upload_start_handler!=void 0)throw"upload_start_handler must be a function";
    c===void 0&&(c=!0);
    this.callFlash("ReturnUploadStart",[!!c])
    },SWFUpload.prototype.uploadProgress=
function(b,c,g){
    b=this.unescapeFilePostParams(b);
    this.queueEvent("upload_progress_handler",[b,c,g])
    },SWFUpload.prototype.uploadError=function(b,c,g){
    b=this.unescapeFilePostParams(b);
    this.queueEvent("upload_error_handler",[b,c,g])
    },SWFUpload.prototype.uploadSuccess=function(b,c,g){
    b=this.unescapeFilePostParams(b);
    this.queueEvent("upload_success_handler",[b,c,g])
    },SWFUpload.prototype.uploadComplete=function(b){
    b=this.unescapeFilePostParams(b);
    this.queueEvent("upload_complete_handler",b)
    },SWFUpload.prototype.debug=
function(b){
    this.queueEvent("debug_handler",b)
    },SWFUpload.prototype.debugMessage=function(b){
    if(this.settings.debug){
        var c=[];
        if(typeof b==="object"&&typeof b.name==="string"&&typeof b.message==="string"){
            for(var g in b)b.hasOwnProperty(g)&&c.push(g+": "+b[g]);b=c.join("\n")||"";
            c=b.split("\n");
            b="EXCEPTION: "+c.join("\nEXCEPTION: ")
            }
            SWFUpload.Console.writeLine(b)
        }
    },SWFUpload.Console={},SWFUpload.Console.writeLine=function(b){
    var c,g;
    try{
        c=document.getElementById("SWFUpload_Console");
        if(!c)g=document.createElement("form"),
            document.getElementsByTagName("body")[0].appendChild(g),c=document.createElement("textarea"),c.id="SWFUpload_Console",c.style.fontFamily="monospace",c.setAttribute("wrap","off"),c.wrap="off",c.style.overflow="auto",c.style.width="700px",c.style.height="350px",c.style.margin="5px",g.appendChild(c);
        c.value+=b+"\n";
        c.scrollTop=c.scrollHeight-c.clientHeight
        }catch(k){
        alert("Exception: "+k.name+" Message: "+k.message)
        }
    }
})();
(function(){
    if(typeof SWFUpload==="function")SWFUpload.queue={},SWFUpload.prototype.initSettings=function(b){
        return function(){
            typeof b==="function"&&b.call(this);
            this.queueSettings={};
            
            this.queueSettings.queue_cancelled_flag=!1;
            this.queueSettings.queue_upload_count=0;
            this.queueSettings.user_upload_complete_handler=this.settings.upload_complete_handler;
            this.queueSettings.user_upload_start_handler=this.settings.upload_start_handler;
            this.settings.upload_complete_handler=SWFUpload.queue.uploadCompleteHandler;
            this.settings.upload_start_handler=SWFUpload.queue.uploadStartHandler;
            this.settings.queue_complete_handler=this.settings.queue_complete_handler||null
            }
        }(SWFUpload.prototype.initSettings),SWFUpload.prototype.startUpload=function(b){
        this.queueSettings.queue_cancelled_flag=!1;
        this.callFlash("StartUpload",[b])
        },SWFUpload.prototype.cancelQueue=function(){
        this.queueSettings.queue_cancelled_flag=!0;
        this.stopUpload();
        for(var b=this.getStats();b.files_queued>0;)this.cancelUpload(),b=this.getStats()
            },SWFUpload.queue.uploadStartHandler=
    function(b){
        var c;
        typeof this.queueSettings.user_upload_start_handler==="function"&&(c=this.queueSettings.user_upload_start_handler.call(this,b));
        c=c===!1?!1:!0;
        this.queueSettings.queue_cancelled_flag=!c;
        return c
        },SWFUpload.queue.uploadCompleteHandler=function(b){
        var c=this.queueSettings.user_upload_complete_handler;
        b.filestatus===SWFUpload.FILE_STATUS.COMPLETE&&this.queueSettings.queue_upload_count++;
        if(typeof c==="function"?c.call(this,b)!==!1:b.filestatus!==SWFUpload.FILE_STATUS.QUEUED)this.getStats().files_queued>
            0&&this.queueSettings.queue_cancelled_flag===!1?this.startUpload():(this.queueSettings.queue_cancelled_flag===!1?this.queueEvent("queue_complete_handler",[this.queueSettings.queue_upload_count]):this.queueSettings.queue_cancelled_flag=!1,this.queueSettings.queue_upload_count=0)
            }
        })();
KindEditor.plugin("pagebreak",function(b){
    var c=this,g=b.undef(c.pagebreakHtml,'<hr style="page-break-after: always;" class="ke-pagebreak" />');
    c.clickToolbar("pagebreak",function(){
        var k=c.cmd,f=k.range;
        c.focus();
        f.enlarge(!0);
        k.split(!0);
        var h=c.newlineTag=="br"||b.WEBKIT?"":'<p id="__kindeditor_tail_tag__"></p>';
        c.insertHtml(g+h);
        h!==""&&(h=b("#__kindeditor_tail_tag__",c.edit.doc),f.selectNodeContents(h[0]),h.removeAttr("id"),k.select())
        })
    });
KindEditor.plugin("plainpaste",function(b){
    var c=this;
    c.clickToolbar("plainpaste",function(){
        var g='<div style="padding:10px 20px;"><div style="margin-bottom:10px;">'+c.lang("plainpaste.").comment+'</div><textarea class="ke-textarea" style="width:408px;height:260px;"></textarea></div>',g=c.createDialog({
            name:"plainpaste",
            width:450,
            title:c.lang("plainpaste"),
            body:g,
            yesBtn:{
                name:c.lang("yes"),
                click:function(){
                    var f=k.val(),f=b.escape(f),f=f.replace(/ {2}/g," &nbsp;"),f=c.newlineTag=="p"?f.replace(/^/,
                        "<p>").replace(/$/,"</p>").replace(/\n/g,"</p><p>"):f.replace(/\n/g,"<br />$&");
                    c.insertHtml(f).hideDialog().focus()
                    }
                }
        }),k=b("textarea",g.div);
    k[0].focus()
    })
});
KindEditor.plugin("preview",function(b){
    var c=this;
    c.clickToolbar("preview",function(){
        c.lang("preview.");
        var g=c.createDialog({
            name:"preview",
            width:750,
            title:c.lang("preview"),
            body:'<div style="padding:10px 20px;"><iframe class="ke-textarea" frameborder="0" style="width:708px;height:400px;"></iframe></div>'
        }),g=b("iframe",g.div),k=b.iframeDoc(g);
        k.open();
        k.write(c.fullHtml());
        k.close();
        b(k.body).css("background-color","#FFF");
        g[0].contentWindow.focus()
        })
    });
KindEditor.plugin("quickformat",function(b){
    function c(b){
        for(b=b.first();b&&b.first();)b=b.first();
        return b
        }
        var g=this,k=b.toMap("blockquote,center,div,h1,h2,h3,h4,h5,h6,p");
    g.clickToolbar("quickformat",function(){
        g.focus();
        for(var f=g.edit.doc,h=g.cmd.range,n=b(f.body).first(),m,j=[],o=[],p=h.createBookmark(!0);n;){
            m=n.next();
            var t=c(n);
            if(!t||t.name!="img")if(k[n.name]?(n.html(n.html().replace(/^(\s|&nbsp;|\u3000)+/ig,"")),n.css("text-indent","2em")):o.push(n),!m||k[m.name]||k[n.name]&&!k[m.name])o.length>
                0&&j.push(o),o=[];
            n=m
            }
            b.each(j,function(c,g){
            var h=b('<p style="text-indent:2em;"></p>',f);
            g[0].before(h);
            b.each(g,function(b,c){
                h.append(c)
                })
            });
        h.moveToBookmark(p);
        g.addBookmark()
        })
    });
KindEditor.plugin("table",function(b){
    function c(b,c){
        c=c.toUpperCase();
        b.css("background-color",c);
        b.css("color",c==="#000000"?"#FFFFFF":"#000000");
        b.html(c)
        }
        function g(g,h){
        function o(){
            b.each(n,function(){
                this.remove()
                });
            n=[];
            b(document).unbind("click,mousedown",o);
            g.unbind("click,mousedown",o)
            }
            h.bind("click,mousedown",function(b){
            b.stopPropagation()
            });
        h.click(function(){
            o();
            var h=b(this),j=h.pos(),j=b.colorpicker({
                x:j.x,
                y:j.y+h.height(),
                z:811214,
                selectedColor:b(this).html(),
                colors:f.colorTable,
                noColor:f.lang("noColor"),
                shadowMode:f.shadowMode,
                click:function(b){
                    c(h,b);
                    o()
                    }
                });
        n.push(j);
            b(document).bind("click,mousedown",o);
            g.bind("click,mousedown",o)
            })
    }
    function k(b,c,f){
    for(var g=b=0,h=c.cells.length;g<h;g++){
        if(c.cells[g]==f)break;
        b+=c.cells[g].rowSpan-1
        }
        return f.cellIndex-b
    }
    var f=this,h=f.lang("table."),n=[];
    f.plugin.table={
    prop:function(m){
        var j=['<div style="padding:20px;"><div class="ke-dialog-row">','<label for="keRows" style="width:90px;">'+h.cells+"</label>",h.rows+' <input type="text" id="keRows" class="ke-input-text ke-input-number" name="rows" value="" maxlength="4" /> &nbsp; ',
        h.cols+' <input type="text" class="ke-input-text ke-input-number" name="cols" value="" maxlength="4" />','</div><div class="ke-dialog-row">','<label for="keWidth" style="width:90px;">'+h.size+"</label>",h.width+' <input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> &nbsp; ','<select name="widthType">','<option value="%">'+h.percent+"</option>",'<option value="px">'+h.px+"</option>","</select> &nbsp; ",h.height+' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> &nbsp; ',
        '<select name="heightType">','<option value="%">'+h.percent+"</option>",'<option value="px">'+h.px+"</option>",'</select></div><div class="ke-dialog-row">','<label for="kePadding" style="width:90px;">'+h.space+"</label>",h.padding+' <input type="text" id="kePadding" class="ke-input-text ke-input-number" name="padding" value="" maxlength="4" /> &nbsp; ',h.spacing+' <input type="text" class="ke-input-text ke-input-number" name="spacing" value="" maxlength="4" />','</div><div class="ke-dialog-row">',
        '<label for="keAlign" style="width:90px;">'+h.align+"</label>",'<select id="keAlign" name="align">','<option value="">'+h.alignDefault+"</option>",'<option value="left">'+h.alignLeft+"</option>",'<option value="center">'+h.alignCenter+"</option>",'<option value="right">'+h.alignRight+"</option>",'</select></div><div class="ke-dialog-row">','<label for="keBorder" style="width:90px;">'+h.border+"</label>",h.borderWidth+' <input type="text" id="keBorder" class="ke-input-text ke-input-number" name="border" value="" maxlength="4" /> &nbsp; ',
        h.borderColor+' <span class="ke-inline-block ke-input-color"></span>','</div><div class="ke-dialog-row">','<label for="keBgColor" style="width:90px;">'+h.backgroundColor+"</label>",'<span class="ke-inline-block ke-input-color"></span></div></div>'].join(""),j=f.createDialog({
            name:"table",
            width:500,
            title:f.lang("table"),
            body:j,
            beforeRemove:function(){
                H.unbind()
                },
            yesBtn:{
                name:f.lang("yes"),
                click:function(){
                    var c=o.val(),g=k.val(),h=n.val(),j=q.val(),m=r.val(),E=z.val(),G=D.val(),S=s.val(),Y=A.val(),
                    M=w.val(),J=b(H[0]).html()||"",W=b(H[1]).html()||"";
                    if(c==0||!/^\d+$/.test(c))alert(f.lang("invalidRows")),o[0].focus();
                    else if(g==0||!/^\d+$/.test(g))alert(f.lang("invalidRows")),k[0].focus();
                    else if(/^\d*$/.test(h))if(/^\d*$/.test(j))if(/^\d*$/.test(G))if(/^\d*$/.test(S))if(/^\d*$/.test(M))if(v)h!==""?v.width(h+m):v.css("width",""),v[0].width!==void 0&&v.removeAttr("width"),j!==""?v.height(j+E):v.css("height",""),v[0].height!==void 0&&v.removeAttr("height"),v.css("background-color",W),v[0].bgColor!==
                        void 0&&v.removeAttr("bgColor"),G!==""?v[0].cellPadding=G:v.removeAttr("cellPadding"),S!==""?v[0].cellSpacing=S:v.removeAttr("cellSpacing"),Y!==""?v[0].align=Y:v.removeAttr("align"),M!==""?v.attr("border",M):v.removeAttr("border"),M===""||M==="0"?v.addClass("ke-zeroborder"):v.removeClass("ke-zeroborder"),J!==""?v.attr("borderColor",J):v.removeAttr("borderColor"),f.hideDialog().focus();
                    else{
                        var T="";
                        h!==""&&(T+="width:"+h+m+";");
                        j!==""&&(T+="height:"+j+E+";");
                        W!==""&&(T+="background-color:"+W+";");
                        h="<table";
                        T!==""&&(h+=' style="'+T+'"');
                        G!==""&&(h+=' cellpadding="'+G+'"');
                        S!==""&&(h+=' cellspacing="'+S+'"');
                        Y!==""&&(h+=' align="'+Y+'"');
                        M!==""&&(h+=' border="'+M+'"');
                        if(M===""||M==="0")h+=' class="ke-zeroborder"';
                        J!==""&&(h+=' bordercolor="'+J+'"');
                        h+=">";
                        for(G=0;G<c;G++){
                            h+="<tr>";
                            for(S=0;S<g;S++)h+="<td>"+(b.IE?"&nbsp;":"<br />")+"</td>";
                            h+="</tr>"
                            }
                            h+="</table>";
                        b.IE||(h+="<br />");
                        f.insertHtml(h);
                        f.select().hideDialog().focus();
                        f.addBookmark()
                        }else alert(f.lang("invalidBorder")),w[0].focus();
                        else alert(f.lang("invalidSpacing")),s[0].focus();else alert(f.lang("invalidPadding")),D[0].focus();else alert(f.lang("invalidHeight")),q[0].focus();else alert(f.lang("invalidWidth")),n[0].focus()
                        }
                    }
        }).div,o=b('[name="rows"]',j).val(3),k=b('[name="cols"]',j).val(2),n=b('[name="width"]',j).val(100),q=b('[name="height"]',j),r=b('[name="widthType"]',j),z=b('[name="heightType"]',j),D=b('[name="padding"]',j).val(2),s=b('[name="spacing"]',j).val(0),A=b('[name="align"]',j),w=b('[name="border"]',j).val(1),
    H=b(".ke-input-color",j);
    g(j,H.eq(0));
    g(j,H.eq(1));
    c(H.eq(0),"#000000");
    c(H.eq(1),"");
    o[0].focus();
    o[0].select();
    var v;
    if(!m&&(v=f.plugin.getSelectedTable())){
        o.val(v[0].rows.length);
        k.val(v[0].rows.length>0?v[0].rows[0].cells.length:0);
        o.attr("disabled",!0);
        k.attr("disabled",!0);
        var E,m=v[0].style.width||v[0].width,j=v[0].style.height||v[0].height;
        m!==void 0&&(E=/^(\d+)((?:px|%)*)$/.exec(m))?(n.val(E[1]),r.val(E[2])):n.val("");
        if(j!==void 0&&(E=/^(\d+)((?:px|%)*)$/.exec(j)))q.val(E[1]),z.val(E[2]);
        D.val(v[0].cellPadding||"");
        s.val(v[0].cellSpacing||"");
        A.val(v[0].align||"");
        w.val(v[0].border===void 0?"":v[0].border);
        c(H.eq(0),b.toHex(v.attr("borderColor")||""));
        c(H.eq(1),b.toHex(v[0].style.backgroundColor||v[0].bgColor||""));
        n[0].focus();
        n[0].select()
        }
    },
cellprop:function(){
    var m=['<div style="padding:20px;"><div class="ke-dialog-row">','<label for="keWidth" style="width:90px;">'+h.size+"</label>",h.width+' <input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> &nbsp; ',
    '<select name="widthType">','<option value="%">'+h.percent+"</option>",'<option value="px">'+h.px+"</option>","</select> &nbsp; ",h.height+' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> &nbsp; ','<select name="heightType">','<option value="%">'+h.percent+"</option>",'<option value="px">'+h.px+"</option>",'</select></div><div class="ke-dialog-row">','<label for="keAlign" style="width:90px;">'+h.align+"</label>",h.textAlign+' <select id="keAlign" name="textAlign">',
    '<option value="">'+h.alignDefault+"</option>",'<option value="left">'+h.alignLeft+"</option>",'<option value="center">'+h.alignCenter+"</option>",'<option value="right">'+h.alignRight+"</option>","</select> ",h.verticalAlign+' <select name="verticalAlign">','<option value="">'+h.alignDefault+"</option>",'<option value="top">'+h.alignTop+"</option>",'<option value="middle">'+h.alignMiddle+"</option>",'<option value="bottom">'+h.alignBottom+"</option>",'<option value="baseline">'+h.alignBaseline+"</option>",
    '</select></div><div class="ke-dialog-row">','<label for="keBorder" style="width:90px;">'+h.border+"</label>",h.borderWidth+' <input type="text" id="keBorder" class="ke-input-text ke-input-number" name="border" value="" maxlength="4" /> &nbsp; ',h.borderColor+' <span class="ke-inline-block ke-input-color"></span>','</div><div class="ke-dialog-row">','<label for="keBgColor" style="width:90px;">'+h.backgroundColor+"</label>",'<span class="ke-inline-block ke-input-color"></span></div></div>'].join(""),
    m=f.createDialog({
        name:"table",
        width:500,
        title:f.lang("tablecell"),
        body:m,
        beforeRemove:function(){
            A.unbind()
            },
        yesBtn:{
            name:f.lang("yes"),
            click:function(){
                var c=j.val(),g=o.val(),h=k.val(),m=n.val();
                q.val();
                r.val();
                var H=z.val(),ea=D.val(),V=s.val(),Q=b(A[0]).html()||"",G=b(A[1]).html()||"";
                /^\d*$/.test(c)?/^\d*$/.test(g)?/^\d*$/.test(V)?(w.css({
                    width:c!==""?c+h:"",
                    height:g!==""?g+m:"",
                    "background-color":G,
                    "text-align":H,
                    "vertical-align":ea,
                    "border-width":V,
                    "border-style":V!==""?"solid":"",
                    "border-color":Q
                }),
                f.hideDialog().focus(),f.addBookmark()):(alert(f.lang("invalidBorder")),s[0].focus()):(alert(f.lang("invalidHeight")),o[0].focus()):(alert(f.lang("invalidWidth")),j[0].focus())
                }
            }
    }).div,j=b('[name="width"]',m).val(100),o=b('[name="height"]',m),k=b('[name="widthType"]',m),n=b('[name="heightType"]',m),q=b('[name="padding"]',m).val(2),r=b('[name="spacing"]',m).val(0),z=b('[name="textAlign"]',m),D=b('[name="verticalAlign"]',m),s=b('[name="border"]',m).val(1),A=b(".ke-input-color",m);
g(m,A.eq(0));
g(m,A.eq(1));
c(A.eq(0),"#000000");
c(A.eq(1),"");
j[0].focus();
j[0].select();
var w=f.plugin.getSelectedCell(),H=w[0].style.height||w[0].height||"";
(m=/^(\d+)((?:px|%)*)$/.exec(w[0].style.width||w[0].width||""))?(j.val(m[1]),k.val(m[2])):j.val("");
if(m=/^(\d+)((?:px|%)*)$/.exec(H))o.val(m[1]),n.val(m[2]);
z.val(w[0].style.textAlign||"");
D.val(w[0].style.verticalAlign||"");
(m=w[0].style.borderWidth||"")&&(m=parseInt(m));
s.val(m);
c(A.eq(0),b.toHex(w[0].style.borderColor||""));
c(A.eq(1),b.toHex(w[0].style.backgroundColor||
    ""));
j[0].focus();
j[0].select()
},
insert:function(){
    this.prop(!0)
    },
"delete":function(){
    var b=f.plugin.getSelectedTable();
    f.cmd.range.setStartBefore(b[0]).collapse(!0);
    f.cmd.select();
    b.remove();
    f.addBookmark()
    },
colinsert:function(c){
    var g=f.plugin.getSelectedTable()[0],h=f.plugin.getSelectedRow()[0],p=f.plugin.getSelectedCell()[0],c=p.cellIndex+c;
    c+=g.rows[0].cells.length-h.cells.length;
    for(var h=0,n=g.rows.length;h<n;h++){
        var q=g.rows[h],c=q.insertCell(c);
        c.innerHTML=b.IE?"":"<br />";
        c=k(g,q,c)
        }
        f.cmd.range.selectNodeContents(p).collapse(!0);
    f.cmd.select();
    f.addBookmark()
    },
colinsertleft:function(){
    this.colinsert(0)
    },
colinsertright:function(){
    this.colinsert(1)
    },
rowinsert:function(c){
    var g=f.plugin.getSelectedTable()[0],h=f.plugin.getSelectedRow()[0],k=f.plugin.getSelectedCell()[0],n=h.rowIndex;
    c===1&&(n=h.rowIndex+(k.rowSpan-1)+c);
    for(var q=g.insertRow(n),r=0,z=h.cells.length;r<z;r++){
        h.cells[r].rowSpan>1&&(z-=h.cells[r].rowSpan-1);
        var D=q.insertCell(r);
        if(c===1&&h.cells[r].colSpan>1)D.colSpan=h.cells[r].colSpan;
        D.innerHTML=b.IE?"":"<br />"
        }
        for(h=
        n;h>=0;h--)if(c=g.rows[h].cells,c.length>r){
        for(g=k.cellIndex;g>=0;g--)c[g].rowSpan>1&&(c[g].rowSpan+=1);
        break
    }
    f.cmd.range.selectNodeContents(k).collapse(!0);
    f.cmd.select();
    f.addBookmark()
    },
rowinsertabove:function(){
    this.rowinsert(0)
    },
rowinsertbelow:function(){
    this.rowinsert(1)
    },
rowmerge:function(){
    var b=f.plugin.getSelectedTable()[0],c=f.plugin.getSelectedRow()[0],g=f.plugin.getSelectedCell()[0],h=c.rowIndex+g.rowSpan,n=b.rows[h];
    b.rows.length<=h||(b=k(b,c,g),n.cells.length<=b||(c=n.cells[b],g.colSpan===
        c.colSpan&&(g.rowSpan+=c.rowSpan,n.deleteCell(b),f.cmd.range.selectNodeContents(g).collapse(!0),f.cmd.select(),f.addBookmark())))
    },
colmerge:function(){
    f.plugin.getSelectedTable();
    var b=f.plugin.getSelectedRow()[0],c=f.plugin.getSelectedCell()[0],g=c.cellIndex+1;
    if(!(b.cells.length<=g)){
        var h=b.cells[g];
        c.rowSpan===h.rowSpan&&(c.colSpan+=h.colSpan,b.deleteCell(g),f.cmd.range.selectNodeContents(c).collapse(!0),f.cmd.select(),f.addBookmark())
        }
    },
rowsplit:function(){
    var c=f.plugin.getSelectedTable()[0],
    g=f.plugin.getSelectedRow()[0],h=f.plugin.getSelectedCell()[0],n=g.rowIndex;
    if(h.rowSpan!==1){
        for(var t=k(c,g,h),g=1,q=h.rowSpan;g<q;g++){
            var r=c.rows[n+g],t=r.insertCell(t);
            if(h.colSpan>1)t.colSpan=h.colSpan;
            t.innerHTML=b.IE?"":"<br />";
            t=k(c,r,t)
            }
            b(h).removeAttr("rowSpan");
        f.cmd.range.selectNodeContents(h).collapse(!0);
        f.cmd.select();
        f.addBookmark()
        }
    },
colsplit:function(){
    f.plugin.getSelectedTable();
    var c=f.plugin.getSelectedRow()[0],g=f.plugin.getSelectedCell()[0],h=g.cellIndex;
    if(g.colSpan!==1){
        for(var k=
            1,n=g.colSpan;k<n;k++){
            var q=c.insertCell(h+k);
            if(g.rowSpan>1)q.rowSpan=g.rowSpan;
            q.innerHTML=b.IE?"":"<br />"
            }
            b(g).removeAttr("colSpan");
        f.cmd.range.selectNodeContents(g).collapse(!0);
        f.cmd.select();
        f.addBookmark()
        }
    },
coldelete:function(){
    for(var c=f.plugin.getSelectedTable()[0],g=f.plugin.getSelectedRow()[0],h=f.plugin.getSelectedCell()[0].cellIndex,k=0,n=c.rows.length;k<n;k++){
        var q=c.rows[k],r=q.cells[h];
        r.colSpan>1?(r.colSpan-=1,r.colSpan===1&&b(r).removeAttr("colSpan")):q.deleteCell(h);
        r.rowSpan>
        1&&(k+=r.rowSpan-1)
        }
        g.cells.length===0?(f.cmd.range.setStartBefore(c).collapse(!0),f.cmd.select(),b(c).remove()):f.cmd.selection(!0);
    f.addBookmark()
    },
rowdelete:function(){
    for(var c=f.plugin.getSelectedTable()[0],g=f.plugin.getSelectedRow()[0],h=f.plugin.getSelectedCell()[0],g=g.rowIndex,h=h.rowSpan-1;h>=0;h--)c.deleteRow(g+h);
    c.rows.length===0?(f.cmd.range.setStartBefore(c).collapse(!0),f.cmd.select(),b(c).remove()):f.cmd.selection(!0);
    f.addBookmark()
    }
};

f.clickToolbar("table",f.plugin.table.prop)
});
KindEditor.plugin("template",function(b){
    function c(c){
        return k+c+"?ver="+encodeURIComponent(b.DEBUG?b.TIME:b.VERSION)
        }
        var g=this;
    g.lang("template.");
    var k=g.pluginsPath+"template/html/";
    g.clickToolbar("template",function(){
        var f=g.lang("template."),h=['<div style="padding:10px 20px;">','<div class="ke-header">','<div class="ke-left">',f.selectTemplate+" <select>"];
        b.each(f.fileList,function(b,c){
            h.push('<option value="'+b+'">'+c+"</option>")
            });
        html=[h.join(""),'</select></div><div class="ke-right">',
        '<input type="checkbox" id="keReplaceFlag" name="replaceFlag" value="1" /> <label for="keReplaceFlag">'+f.replaceContent+"</label>",'</div><div class="ke-clearfix"></div></div><iframe class="ke-textarea" frameborder="0" style="width:458px;height:260px;background-color:#FFF;"></iframe></div>'].join("");
        var f=g.createDialog({
            name:"template",
            width:500,
            title:g.lang("template"),
            body:html,
            yesBtn:{
                name:g.lang("yes"),
                click:function(){
                    var c=b.iframeDoc(j);
                    g[m[0].checked?"html":"insertHtml"](c.body.innerHTML).hideDialog().focus()
                    }
                }
        }),
    k=b("select",f.div),m=b('[name="replaceFlag"]',f.div),j=b("iframe",f.div);
    m[0].checked=!0;
    j.attr("src",c(k.val()));
    k.change(function(){
        j.attr("src",c(this.value))
        })
    })
});
KindEditor.plugin("wordpaste",function(b){
    var c=this;
    c.clickToolbar("wordpaste",function(){
        var g='<div style="padding:10px 20px;"><div style="margin-bottom:10px;">'+c.lang("wordpaste.").comment+'</div><iframe class="ke-textarea" frameborder="0" style="width:408px;height:260px;"></iframe></div>',g=c.createDialog({
            name:"wordpaste",
            width:450,
            title:c.lang("wordpaste"),
            body:g,
            yesBtn:{
                name:c.lang("yes"),
                click:function(){
                    var f=k.body.innerHTML,f=b.clearMsWord(f,c.filterMode?c.htmlTags:b.options.htmlTags);
                    c.insertHtml(f).hideDialog().focus()
                    }
                }
        }).div,g=b("iframe",g),k=b.iframeDoc(g);
    if(!b.IE)k.designMode="on";
    k.open();
    k.write("<!doctype html><html><head><title>WordPaste</title></head>");
    k.write('<body style="background-color:#FFF;font-size:12px;margin:2px;">');
    b.IE||k.write("<br />");
    k.write("</body></html>");
    k.close();
    if(b.IE)k.body.contentEditable="true";
    g[0].contentWindow.focus()
    })
});
