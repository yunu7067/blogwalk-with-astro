import{g as r,c as v,s as n,t as i,d,a as g,b as $,e as u,i as _,f as h,r as f}from"./chunks/web.66f2a5e7.js";const w=["px-4 py-2 inline-flex flex-row items-center justify-center gap-2 rounded-md","bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:bg-slate-700","text-gray-900 dark:text-gray-100"].join(" "),b=i('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"></path></svg>'),k=t=>(()=>{const s=r(b),l=s.firstChild,o=l.nextSibling;return v(e=>{const a=t.width||"1em",c=t.height||"1em",m=t.color||"currentColor";return a!==e._v$&&n(s,"width",e._v$=a),c!==e._v$2&&n(s,"height",e._v$2=c),m!==e._v$3&&n(o,"fill",e._v$3=m),e},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s})(),E=i('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"></path></svg>'),z=t=>(()=>{const s=r(E),l=s.firstChild,o=l.nextSibling;return v(e=>{const a=t.width||"1em",c=t.height||"1em",m=t.color||"currentColor";return a!==e._v$&&n(s,"width",e._v$=a),c!==e._v$2&&n(s,"height",e._v$2=c),m!==e._v$3&&n(o,"fill",e._v$3=m),e},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s})(),x=i('<button aria-label="dark mode toggle"></button>');function T({config:t}){const[s,l]=g(!1);$(()=>{console.log("create effect");const e=document.getElementsByClassName("giscus-frame")[0],a=window.localStorage.getItem("theme");console.log({theme:a}),a==="dark"?e&&(e.src=e.src.replace(/\&theme=.*\&reactionsEnabled/,`&theme=${t.comments.giscus.darkTheme}&reactionsEnabled`)):e&&(e.src=e.src.replace(/\&theme=.*\&reactionsEnabled/,`&theme=${t.comments.giscus.lightTheme}&reactionsEnabled`)),l(a==="dark"||!1)});const o=()=>{console.log("change Theme");const e=document.getElementsByClassName("giscus-frame")[0];s()?(document.getElementsByTagName("html")[0].classList.remove("dark"),e&&(e.src=e.src.replace(`theme=${t.comments.giscus.darkTheme}`,`theme=${t.comments.giscus.lightTheme}`))):(document.getElementsByTagName("html")[0].classList.add("dark"),e&&(e.src=e.src.replace(`theme=${t.comments.giscus.lightTheme}`,`theme=${t.comments.giscus.darkTheme}`))),window.localStorage.setItem("theme",s()?"light":"dark"),l(!s())};return(()=>{const e=r(x);return e.$$click=o,u(e,w),_(e,s?h(z,{}):h(k,{})),f(),e})()}d(["click"]);export{T as default};
