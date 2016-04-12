
/** @license
 JSON Formatter | MIT License
 Copyright 2012 Callum Locke
 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do
 so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */

/*jshint eqeqeq:true, forin:true, strict:true */
/*global chrome, console */

var JsonFormatEntrance=(function(){var p,m,v,e,c,g=JsonFormatDealer,w=+(new Date()),u,r,k,o;var f=function(B){switch(B[0]){case"NOT JSON":m.style.display="";p.innerHTML='<span class="x-json-tips">JSON不合法，请检查：</span>';k=+(new Date());break;case"FORMATTING":r=+(new Date());clearTimeout(c);var z=document.getElementById("optionBar");if(z){z.parentNode.removeChild(z)}z=document.createElement("div");z.id="optionBar";var A=document.createElement("button"),y=document.createElement("button");A.id="buttonFormatted";A.innerText="格式化";A.classList.add("selected");y.id="buttonCollapseAll";y.innerText="折叠所有";var x=false;A.addEventListener("click",function(){if(x){x=false;m.style.display="none";p.style.display="";$(this).text("元数据")}else{x=true;m.style.display="";p.style.display="none";$(this).text("格式化")}$(this).parent().find("button").removeClass("selected");$(this).addClass("selected")},false);y.addEventListener("click",function(){if(x){A.click()}if(!x){if(y.innerText=="折叠所有"){y.innerText="展开所有";h(document.getElementsByClassName("objProp"))}else{y.innerText="折叠所有";j(document.getElementsByClassName("objProp"))}$(this).parent().find("button").removeClass("selected");$(this).addClass("selected")}},false);z.appendChild(A);z.appendChild(y);document.addEventListener("click",l,false);$(p.parentNode).prepend(z);break;case"FORMATTED":e.style.display="";p.innerHTML=B[1];o=+(new Date());break;default:throw new Error("Message not understood: "+B[0])}};var s=0;function h(x){var A,z,y,B;for(z=x.length-1;z>=0;z--){A=x[z];A.classList.add("collapsed");if(!A.id){A.id="kvov"+(++s);y=A.firstElementChild;while(y&&!y.classList.contains("blockInner")){y=y.nextElementSibling}if(!y){continue}B=y.children.length;var C=B+(B===1?" item":" items");v.insertAdjacentHTML("beforeend","\n#kvov"+s+'.collapsed:after{color: #aaa; content:" // '+C+'"}')}}}function j(x){for(var y=x.length-1;y>=0;y--){x[y].classList.remove("collapsed")}}var d=navigator.platform.indexOf("Mac")!==-1,i;if(d){i=function(x){return x.metaKey}}else{i=function(x){return x.ctrlKey}}function l(B){if(B.which===1){var A=B.target;if(A.className==="e"){B.preventDefault();var z=A.parentNode,E=p,y=document.body.offsetHeight,C=document.body.scrollTop,x;if(z.classList.contains("collapsed")){if(i(B)){j(z.parentNode.children)}else{j([z])}}else{if(i(B)){h(z.parentNode.children)}else{h([z])}}E.style.marginBottom=0;if(document.body.offsetHeight<window.innerHeight){return}if(document.body.scrollTop===C){return}var D=C-document.body.scrollTop+8;E.style.marginBottom=D+"px";document.body.scrollTop=C;return}}}var b=function(x){f(x)};var t=function(){};var q=function(x){p=document.getElementById("jfContent");if(!p){p=document.createElement("div");p.id="jfContent";document.body.appendChild(p)}p.style.display="";m=document.getElementById("jfContent_pre");if(!m){m=document.createElement("pre");m.id="jfContent_pre";document.body.appendChild(m)}m.innerHTML=JSON.stringify(JSON.parse(x),null,4);m.style.display="none";v=document.getElementById("jfStyleEl");if(!v){v=document.createElement("style");document.head.appendChild(v)}e=document.getElementById("formattingMsg");if(!e){e=document.createElement("pre");e.id="formattingMsg";e.innerHTML='<svg id="spinner" width="16" height="16" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M 150,0 a 150,150 0 0,1 106.066,256.066 l -35.355,-35.355 a -100,-100 0 0,0 -70.711,-170.711 z" fill="#3d7fe6"></path></svg> 格式化中...';document.body.appendChild(e)}g.postMessage({type:"SENDING TEXT",text:x,length:x.length});a(JSON.parse(x))};var a=function(x){$("#optionBar").prepend('<a href="javascript:void(0);" id="btnDownload" target="_blank">下载JSON数据</a>')};var n=function(){try{p.innerHTML="";m.innerHTML=""}catch(x){}};return{format:q,clear:n,postMessage:b,disconnect:t}})();