import{j as e,u as r}from"./index-7dbaec6b.js";import{L as s,r as i}from"./react-vendor-a517d8ab.js";import{b as a,B as t,H as d,a as l,F as o}from"./Footer-7d18b476.js";import{u as n}from"./redux-vendor-77a94849.js";const m="Q_",c="R_",x="S_",j="T_",h="U_",p="V_",f="Zb",u="_d",N="ad",g="bd",y=({error:r,placeholder:s,register:i,text:a,type:t,errorText:d,fieldName:l})=>{var o;return e.jsxs("div",{className:f,children:[e.jsxs("label",{className:u,children:[a," ",e.jsx("span",{children:"*"})]}),e.jsx("input",{className:N,type:t,placeholder:`${s}`,...i(l,{required:d})}),r&&e.jsx("div",{className:g,children:null==(o=r[l])?void 0:o.message})]})},v="hd",b="id",w="jd",P=({error:r,register:s,text:i,errorText:a,fieldName:t,htmlFor:d,id:l})=>{var o;return e.jsxs("div",{className:v,children:[e.jsx("input",{id:l,type:"checkbox",...s(t,{required:a})}),e.jsxs("label",{className:b,htmlFor:d,children:[i," ","terms"===t&&e.jsx("span",{children:"*"})]}),r&&e.jsx("div",{className:w,children:null==(o=r[t])?void 0:o.message})]})},T=()=>{const i=n(),{register:t,handleSubmit:d,formState:{errors:l},reset:o}=a();return e.jsxs("form",{onSubmit:d((async e=>{i(r(e)),o()})),className:m,children:[e.jsxs("div",{className:c,children:[e.jsx("h2",{children:"Sign Up"}),e.jsxs(s,{className:x,to:"/sign-up",children:[e.jsx("p",{children:"Existing user?"})," Sign In"]})]}),e.jsxs("section",{className:j,children:[e.jsx(y,{text:"Display Name",type:"text",placeholder:"Name",fieldName:"name",register:t,errorText:"Name is required field",error:l}),e.jsx(y,{text:"Display Email",type:"email",placeholder:"E-mail",fieldName:"email",register:t,errorText:"E-mail is required field",error:l}),e.jsx(y,{text:"Display Password",type:"password",placeholder:"Password",fieldName:"password",register:t,errorText:"Password is required field",error:l}),e.jsx(y,{text:"Confirm Password",type:"password",placeholder:"Conforim Password",fieldName:"confirmPassword",register:t,errorText:"Confirm Password is required field",error:l})]}),e.jsxs("section",{className:h,children:[e.jsx(P,{text:"Send me Notification",register:t,fieldName:"updateNotification",id:"update-notification",htmlFor:"update-notification"}),e.jsx(P,{text:"I agree to the Terms of Use and Privacy Policy",fieldName:"terms",register:t,error:l,errorText:"You must term policity accept",id:"terms",htmlFor:"terms"})]}),e.jsx("div",{className:p,children:e.jsx("button",{children:"Create my Account"})})]})},F="Db",S="Eb",_=()=>e.jsxs("div",{className:F,children:[e.jsxs("section",{className:S,children:[e.jsx("h5",{children:"Get started faster"}),e.jsx("p",{children:"Connect via one these site"})]}),e.jsx(t,{})]}),q=()=>e.jsxs("div",{style:{display:"flex",margin:"1rem 0rem"},children:[e.jsx(T,{}),e.jsx(_,{})]}),C=()=>e.jsxs(i.Fragment,{children:[e.jsx(d,{}),e.jsxs("main",{children:[e.jsx(l,{}),e.jsx(q,{}),e.jsx(l,{})]}),e.jsx(o,{})]});export{C as default};
//# sourceMappingURL=Regestration-6948bac3.js.map
