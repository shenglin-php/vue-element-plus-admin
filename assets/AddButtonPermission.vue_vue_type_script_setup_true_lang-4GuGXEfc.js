var V=(u,c,e)=>new Promise((n,m)=>{var d=o=>{try{a(e.next(o))}catch(t){m(t)}},p=o=>{try{a(e.throw(o))}catch(t){m(t)}},a=o=>o.done?n(o.value):Promise.resolve(o.value).then(d,p);a((e=e.apply(u,c)).next())});import{F as C}from"./Form-s2cgujtG.js";import"./index-whV-azTw.js";/* empty css                  */import{u as h}from"./useForm-y9pQ-ceu.js";import{u as k}from"./useValidator-dlVwjdHo.js";import{a3 as x}from"./element-plus-G-zvxjZl.js";import{l as y,aL as F,aK as M,J as B,ah as R,m as D,W as N,R as i,O as f,u as v,q as P,V as _}from"./vue-chunks-OJdMbo6i.js";const S=y({__name:"AddButtonPermission",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:F(["confirm"],["update:modelValue"]),setup(u,{emit:c}){const e=M(u,"modelValue"),{required:n}=k(),m=B([{field:"label",label:"label",component:"Input",colProps:{span:24}},{field:"value",label:"value",component:"Input",colProps:{span:24}}]),{formRegister:d,formMethods:p}=h(),{getFormData:a,getElFormExpose:o}=p,t=c,g=B({label:[n()],value:[n()]}),b=()=>V(this,null,function*(){const l=yield o();if(!l)return;if(yield l==null?void 0:l.validate().catch(r=>{})){const r=yield a();t("confirm",r),e.value=!1}});return(l,s)=>{const r=R("BaseButton");return D(),N(v(x),{modelValue:e.value,"onUpdate:modelValue":s[1]||(s[1]=w=>e.value=w),title:"新增按钮权限"},{default:i(()=>[f(v(C),{rules:g,onRegister:v(d),schema:m},null,8,["rules","onRegister","schema"])]),footer:i(()=>[P("div",null,[f(r,{onClick:s[0]||(s[0]=()=>e.value=!1)},{default:i(()=>[_("取消")]),_:1}),f(r,{type:"primary",onClick:b},{default:i(()=>[_("确认")]),_:1})])]),_:1},8,["modelValue"])}}});export{S as _};
