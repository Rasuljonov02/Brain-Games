(()=>{"use strict";const e=9,t=3,n=document.querySelector(".son"),o=document.querySelector("#board");let s=[],r=0,c=0,l=0,i=0,a=0,d=3;function u(e,u){if(!s[u])return m(),console.log(5),l=0,c=0,n.innerText=`${l}`,i=0,a=0,d=3,setTimeout(f,1e3);r++,e.classList.add("active"),r===t+i&&setTimeout(f,1e3),c++,c===t+i&&(l++,i++,c=0,n.innerText=`${l}`,console.log(l),i%2==0&&(a+=4,o.style.gridTemplateColumns=`repeat(${d}, 1fr)`,o.style.gridTemplateRows=`repeat(${d}, 1fr)`,d++))}function m(){o.innerHTML="";const e=[];for(let t=0;t<s.length;t++){const n=s[t],r=document.createElement("div");r.classList.add("cell"),n&&(r.classList.add("active"),r.innerText=n,e.push(r)),r.onclick=e=>u(e.target,t),o.append(r)}setTimeout((()=>{for(const t of e)t.classList.remove("active")}),1e3)}function f(){r=0,s=new Array(t+i).fill("👍");const n=new Array(e+a-(t+i)).fill("");s=[...s,...n].sort((()=>Math.random()-.5)),m()}f()})();