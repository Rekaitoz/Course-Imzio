import{m as ee,n as b,f as y,q as N,o as w,p as J,j as e,r as A,i as h,L as U}from"./index-4247d441.js";import{I as v}from"./IconCheck-8b7f6527.js";import{T as se,a as j}from"./Table2-a8ed2a9c.js";import{C,a as T,L as K,B as $,p as R,b as I,c as B,u as ae,d as O,T as Z}from"./TableView-e48d093a.js";import{f as q}from"./format-83e8c724.js";import{T as _}from"./TextInput-4365724b.js";import"./get-floating-position-0a85a709.js";import"./dayjs.min-988a53ac.js";import"./IconChevronRight-47a5dcfe.js";var H=ee("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]]);async function le({data:s}){return(await b.post("/wali",s)).data}function Re({config:s}={}){return y(le,{...s,onSuccess:(...r)=>{N.invalidateQueries(["walis"]),w({message:r[0].message,color:"green",icon:v({})}),s!=null&&s.onSuccess&&s.onSuccess(...r)}})}async function re(){return(await b.get("/waliSantri")).data}function Ie({config:s}={}){return J({...s,queryKey:["walis"],queryFn:()=>re()})}async function ie({waliname:s,data:r}){return(await b.patch(`/wali/${s}`,r)).data}function Be({config:s}={}){return y(ie,{...s,onSuccess:(...r)=>{N.invalidateQueries(["walis"]),w({message:r[0].message,color:"green",icon:v({})}),s!=null&&s.onSuccess&&s.onSuccess(...r)}})}async function ne({id:s}){return(await b.delete(`/wali/${s}`)).data}function Oe({config:s}={}){return y(ne,{...s,onSuccess:(...r)=>{N.invalidateQueries(["walis"]),w({message:r[0].message,color:"green",icon:v({})}),s!=null&&s.onSuccess&&s.onSuccess(...r)}})}async function te({data:s}){return(await b.post("/santri",s)).data}function _e({config:s}={}){return y(te,{...s,onSuccess:(...r)=>{N.invalidateQueries(["santris"]),w({message:r[0].message,color:"green",icon:v({})}),s!=null&&s.onSuccess&&s.onSuccess(...r)}})}async function ce({id_santri:s,data:r}){return(await b.post(`/riwayatKelasSantri/${s}`,r)).data}function Le({config:s}={}){return y(ce,{...s,onSuccess:(...r)=>{N.invalidateQueries(["santris"]),w({message:r[0].message,color:"green",icon:v({})}),s!=null&&s.onSuccess&&s.onSuccess(...r)}})}async function de(){return(await b.get("/santri")).data}function Ue({config:s}={}){return J({...s,queryKey:["santris"],queryFn:()=>de()})}async function me({santriname:s,data:r}){return(await b.patch(`/santri/${s}`,r)).data}function He({config:s}={}){return y(me,{...s,onSuccess:(...r)=>{N.invalidateQueries(["santris"]),w({message:r[0].message,color:"green",icon:v({})}),s!=null&&s.onSuccess&&s.onSuccess(...r)}})}async function xe({id:s}){return(await b.delete(`/santri/${s}`)).data}function Fe({config:s}={}){return y(xe,{...s,onSuccess:(...r)=>{N.invalidateQueries(["santris"]),w({message:r[0].message,color:"green",icon:v({})}),s!=null&&s.onSuccess&&s.onSuccess(...r)}})}C.register(T,K,$,R,I,B);const oe={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom"},title:{display:!1,text:"Chart.js Bar Chart"}}},F=[1,2,3,4,5,6,7,8,9,10,11,12];function n(s,r){return Math.floor(Math.random()*(r-s+1))+s}const E=[{id:"id_penjualan",label:"Id Penjualan",sort:!0},{id:"no_faktur",label:"No Faktur",sort:!0},{id:"tanggal",label:"Tanggal",sort:!0},{id:"jumlah_ekor",label:"Jmlh Ekor",sort:!0},{id:"jumlah_berat",label:"Jmlh Berat",sort:!0},{id:"avbw",label:"AVBW",sort:!0},{id:"harga",label:"Harga",sort:!0},{id:"jumlah",label:"Jumlah",sort:!0},{id:"nama_pembeli",label:"Nama Pembeli",sort:!0}],ue=[{tahun:"2018",1:n(0,1e3),2:n(0,1e3),3:n(0,1e3),4:n(0,1e3),5:n(0,1e3),6:n(0,1e3),7:n(0,1e3),8:n(0,1e3),9:n(0,1e3),10:n(0,1e3),11:n(0,1e3),12:n(0,1e3)},{tahun:"2019",1:n(0,1e3),2:n(0,1e3),3:n(0,1e3),4:n(0,1e3),5:n(0,1e3),6:n(0,1e3),7:n(0,1e3),8:n(0,1e3),9:n(0,1e3),10:n(0,1e3),11:n(0,1e3),12:n(0,1e3)},{tahun:"2020",1:n(0,1e3),2:n(0,1e3),3:n(0,1e3),4:n(0,1e3),5:n(0,1e3),6:n(0,1e3),7:n(0,1e3),8:n(0,1e3),9:n(0,1e3),10:n(0,1e3),11:n(0,1e3),12:n(0,1e3)}],pe=()=>{const{data:s,isLoading:r}=ae({params:{checkYear:null}});console.log(s);const t=ue.map(d=>{const o=F.map(g=>d[g]),p=`rgba(${n(0,255)}, ${n(0,255)}, ${n(0,255)}, 0.8)`;return{label:d.tahun,data:o,backgroundColor:p}}),x={labels:F,datasets:t};return e.jsx("section",{className:"bg-white  rounded px-4 md:px-6 lg:px-10 py-8 border border-black border-opacity-20",children:e.jsxs("div",{className:"text-black text-opacity-70 font-semibold text-xl text-center",children:["Grafik Penjualan Ayam",e.jsx("section",{className:"mt-5 text-gray-700 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-gray-50",children:e.jsx("div",{className:"w-[900px] md:w-auto h-[280px]",children:e.jsx(O,{options:oe,data:x})})}),e.jsx(se,{header:E,items:s!=null&&s.data?s.data:[],loading:r,renderItem:d=>e.jsx("tr",{className:"",children:E.map(o=>o.id!=""?e.jsx("td",{className:"py-5 px-4 font-normal text-sm text-gray-700 border-2 border-gray-300 ",children:d[o.id]},o.id):e.jsx(e.Fragment,{}))},d.id)})]})})},Ee=pe;C.register(T,K,$,R,I,B);const he={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right"},title:{display:!1,text:"Chart.js Bar Chart"}}},Q=[1,2,3,4,5,6,7,8,9,10,11,12];function M(s,r){return Math.floor(Math.random()*(r-s+1))+s}const W=[{id:"tahun",label:"Tahun",sort:!0},{id:"1",label:"1"},{id:"2",label:"2"},{id:"3",label:"3"},{id:"4",label:"4"},{id:"5",label:"5"},{id:"6",label:"6"},{id:"7",label:"7"},{id:"8",label:"8"},{id:"9",label:"9"},{id:"10",label:"10"},{id:"11",label:"11"},{id:"12",label:"12"}],ge=({datas:s})=>{const r=s.map(x=>{const d=Q.map(p=>x[p]),o=`rgba(${M(0,255)}, ${M(0,255)}, ${M(0,255)}, 0.8)`;return{label:x.tahun,data:d,backgroundColor:o}}),t={labels:Q,datasets:r};return e.jsxs("section",{className:"bg-white mb-8 rounded-xl px-4 md:px-6 lg:px-10 py-8 border border-black border-opacity-20",children:[e.jsxs("div",{className:"text-black text-opacity-60 font-medium text-xl",children:["FEEDMILL Resume",e.jsx("section",{className:"mt-5 text-gray-700 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-gray-50",children:e.jsx("div",{className:"w-[900px] md:w-auto h-[280px]",children:e.jsx(O,{options:he,data:t})})})]}),e.jsx(Z,{header:W,items:s,renderItem:x=>e.jsx("tr",{className:"",children:W.map(d=>d.id!=""?d.id!="tahun"?e.jsx("td",{className:"py-5 px-4 font-normal text-sm text-gray-700 border-2 border-gray-300 ",children:q(x[d.id])},d.id):e.jsx("td",{className:"py-5 px-4 font-bold text-sm text-gray-700 border-2 border-gray-300 ",children:x[d.id]},d.id):e.jsx(e.Fragment,{}))},x.id)})]})},Qe=ge;C.register(T,K,$,R,I,B);const be={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right"},title:{display:!1,text:"Chart.js Bar Chart"}}},V=[1,2,3,4,5,6,7,8,9,10,11,12];function u(s,r){return Math.floor(Math.random()*(r-s+1))+s}const G=[{id:"tahun",label:"Tahun",sort:!0},{id:"1",label:"1"},{id:"2",label:"2"},{id:"3",label:"3"},{id:"4",label:"4"},{id:"5",label:"5"},{id:"6",label:"6"},{id:"7",label:"7"},{id:"8",label:"8"},{id:"9",label:"9"},{id:"10",label:"10"},{id:"11",label:"11"},{id:"12",label:"12"},{id:"abw",label:"ABW"},{id:"fcr",label:"FCR"},{id:"dpls",label:"Dpls"}],je=({docData:s,feedmillData:r,ovkData:t})=>{const[x,d]=A.useState(s.map(l=>({tahun:l.tahun,row:[...new Array(3).fill(1).map((i,a)=>({1:(s[a][1]*1+0*r[a][1]+t[a][1])/0,2:(s[a][2]*1+0*r[a][2]+t[a][2])/0,3:(s[a][3]*1+0*r[a][3]+t[a][3])/0,4:(s[a][4]*1+0*r[a][4]+t[a][4])/0,5:(s[a][5]*1+0*r[a][5]+t[a][5])/0,6:(s[a][6]*1+0*r[a][6]+t[a][6])/0,7:(s[a][7]*1+0*r[a][7]+t[a][7])/0,8:(s[a][8]*1+0*r[a][8]+t[a][8])/0,9:(s[a][9]*1+0*r[a][9]+t[a][9])/0,10:(s[a][10]*1+0*r[a][10]+t[a][10])/0,11:(s[a][11]*1+0*r[a][11]+t[a][11])/0,12:(s[a][12]*1+0*r[a][12]+t[a][12])/0,abw:0,fcr:0,dpls:0}))]})));A.useEffect(()=>{x&&d(x.map(l=>({tahun:l.tahun,row:l.row.map((i,a)=>({1:(s[a][1]*(1+i.dpls)+i.fcr*i.abw*r[a][1]+t[a][1])/i.abw,2:(s[a][2]*(1+i.dpls)+i.fcr*i.abw*r[a][2]+t[a][2])/i.abw,3:(s[a][3]*(1+i.dpls)+i.fcr*i.abw*r[a][3]+t[a][3])/i.abw,4:(s[a][4]*(1+i.dpls)+i.fcr*i.abw*r[a][4]+t[a][4])/i.abw,5:(s[a][5]*(1+i.dpls)+i.fcr*i.abw*r[a][5]+t[a][5])/i.abw,6:(s[a][6]*(1+i.dpls)+i.fcr*i.abw*r[a][6]+t[a][6])/i.abw,7:(s[a][7]*(1+i.dpls)+i.fcr*i.abw*r[a][7]+t[a][7])/i.abw,8:(s[a][8]*(1+i.dpls)+i.fcr*i.abw*r[a][8]+t[a][8])/i.abw,9:(s[a][9]*(1+i.dpls)+i.fcr*i.abw*r[a][9]+t[a][9])/i.abw,10:(s[a][10]*(1+i.dpls)+i.fcr*i.abw*r[a][10]+t[a][10])/i.abw,11:(s[a][11]*(1+i.dpls)+i.fcr*i.abw*r[a][11]+t[a][11])/i.abw,12:(s[a][12]*(1+i.dpls)+i.fcr*i.abw*r[a][12]+t[a][12])/i.abw,abw:i.abw,fcr:i.fcr,dpls:i.dpls}))})))},[s,r,t]),s.map(l=>({tahun:l.tahun,row:[...new Array(3).fill(1).map((i,a)=>({1:u(0,1e3),2:u(0,1e3),3:u(0,1e3),4:u(0,1e3),5:u(0,1e3),6:u(0,1e3),7:u(0,1e3),8:u(0,1e3),9:u(0,1e3),10:u(0,1e3),11:u(0,1e3),12:u(0,1e3),abw:u(0,1e3),fcr:u(0,1e3),dpls:u(0,1e3)}))]}));const[o,p]=A.useState(0),g=x.map(l=>{const i=V.map(m=>l.row[o][m]),a=`rgba(${u(0,255)}, ${u(0,255)}, ${u(0,255)}, 0.8)`;return{label:l.tahun,data:i,backgroundColor:a}}),f={labels:V,datasets:g},S=(l,i)=>{const a=s.filter(k=>k.tahun==i)[0],m=r.filter(k=>k.tahun==i)[0],c=t.filter(k=>k.tahun==i)[0];return{1:(a[1]*(1+l.dpls)+l.fcr*l.abw*m[1]+c[1])/l.abw,2:(a[2]*(1+l.dpls)+l.fcr*l.abw*m[2]+c[2])/l.abw,3:(a[3]*(1+l.dpls)+l.fcr*l.abw*m[3]+c[3])/l.abw,4:(a[4]*(1+l.dpls)+l.fcr*l.abw*m[4]+c[4])/l.abw,5:(a[5]*(1+l.dpls)+l.fcr*l.abw*m[5]+c[5])/l.abw,6:(a[6]*(1+l.dpls)+l.fcr*l.abw*m[6]+c[6])/l.abw,7:(a[7]*(1+l.dpls)+l.fcr*l.abw*m[7]+c[7])/l.abw,8:(a[8]*(1+l.dpls)+l.fcr*l.abw*m[8]+c[8])/l.abw,9:(a[9]*(1+l.dpls)+l.fcr*l.abw*m[9]+c[9])/l.abw,10:(a[10]*(1+l.dpls)+l.fcr*l.abw*m[10]+c[10])/l.abw,11:(a[11]*(1+l.dpls)+l.fcr*l.abw*m[11]+c[11])/l.abw,12:(a[12]*(1+l.dpls)+l.fcr*l.abw*m[12]+c[12])/l.abw,abw:l.abw,fcr:l.fcr,dpls:l.dpls}};return e.jsxs("section",{className:"bg-white mb-8 rounded-xl px-4 md:px-6 lg:px-10 py-8 border border-black border-opacity-20",children:[e.jsxs("div",{className:"text-black text-opacity-60 font-medium text-xl",children:["HPP Resume",e.jsxs("div",{className:"mt-3 space-x-3",children:[e.jsx(h,{className:`mt-2 md:mt-0 ${o==0?"bg-[#5f77a9] hover:bg-[#5f77a9]":"bg-[#394867] hover:bg-[#294567]"}`,onClick:()=>p(0),children:e.jsx("span",{className:"font-semibold text-xs",children:"1"})}),e.jsx(h,{className:`mt-2 md:mt-0 ${o==1?"bg-[#5f77a9] hover:bg-[#5f77a9]":"bg-[#394867] hover:bg-[#294567]"}`,onClick:()=>p(1),children:e.jsx("span",{className:"font-semibold text-xs",children:"2"})}),e.jsx(h,{className:`mt-2 md:mt-0 ${o==2?"bg-[#5f77a9] hover:bg-[#5f77a9]":"bg-[#394867] hover:bg-[#294567]"}`,onClick:()=>p(2),children:e.jsx("span",{className:"font-semibold text-xs",children:"3"})})]}),e.jsx("section",{className:"mt-5 text-gray-700 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-gray-50",children:e.jsx("div",{className:"w-[900px] md:w-auto h-[280px]",children:e.jsx(O,{options:be,data:f})})})]}),e.jsx(Z,{header:G,items:x,renderItem:(l,i)=>e.jsx(e.Fragment,{children:l.row.map((a,m)=>e.jsxs("tr",{className:`${o==m?"bg-gray-100":""}`,children:[m===0&&e.jsx("td",{rowSpan:l.row.length,className:"font-bold py-5 px-4 border-2 border-gray-300 bg-white",children:l.tahun}),G.map(c=>c.id!="tahun"?c.id==="abw"||c.id==="fcr"||c.id==="dpls"?e.jsx("td",{className:"py-5 px-4 font-normal min-w-[4rem] !whitespace-normal  text-sm text-gray-700 border-2 border-gray-300",children:e.jsx(_,{variant:"unstyled",value:a[c.id],onChange:k=>{const Y=k.currentTarget.value,z=x.map(P=>{if(P.tahun===l.tahun){const X=P.row.map((L,D)=>D===m?S({...L,[c.id]:Y},l.tahun):L);return{...P,row:X}}return P});d(z)},className:"border-y border-y-slate-200 -mx-4"})},`cell-${l.tahun}-${m}-${c.id}`):e.jsx("td",{className:"py-5 px-4 font-normal min-w-[4rem] !whitespace-normal  text-sm text-gray-700 border-2 border-gray-300",children:q(a[c.id])},`cell-${l.tahun}-${m}-${c.id}`):"")]},`row-${l.tahun}-${m}`))})})]})},We=je,fe=({setDataChange:s,dataChange:r,calculate:t,onSuccess:x,columns:d})=>{const[o,p]=A.useState(0),g=()=>{const f=r.map(S=>{if(S.tahun===t.tahun){const l={};return d.forEach(i=>{i.id!==""&&i.id!=="tahun"&&(l[i.id]=o)}),{...S,...l}}return S});s(f),p(0),x()};return e.jsxs(e.Fragment,{children:[e.jsx(_,{onChange:f=>p(f.currentTarget.value)}),e.jsxs("div",{className:"flex items-center justify-end gap-4 mt-4",children:[e.jsx(h,{type:"button",variant:"default",onClick:()=>x(),children:"Tutup"}),e.jsx(h,{onClick:g,className:"bg-blue-900 hover:bg-blue-800",children:"Ubah"})]})]})},Ve=fe,ke=({setDataChange:s,dataChange:r,columnId:t,onSuccess:x})=>{const[d,o]=A.useState(0),p=()=>{const g=r.map(f=>({...f,[t]:d}));s(g),o(0),x()};return e.jsxs(e.Fragment,{children:[e.jsx(_,{onChange:g=>o(g.currentTarget.value),autoFocus:!0}),e.jsxs("div",{className:"flex items-center justify-end gap-4 mt-4",children:[e.jsx(h,{type:"button",variant:"default",onClick:()=>x(),children:"Tutup"}),e.jsx(h,{onClick:p,className:"bg-blue-900 hover:bg-blue-800",children:"Ubah"})]})]})},Ge=ke,ye=()=>e.jsxs("main",{children:[e.jsx("nav",{className:"fixed z-10 top-0 items-center w-full  justify-between text-gray-500 text-xs font-bold border bg-white border-black border-opacity-20 ",children:e.jsxs("div",{className:"max-w-8xl h-16 mx-auto flex flex-row items-center justify-between px-5 sm:px-7 lg:px-11",children:[e.jsxs("div",{className:"space-y-1 ",children:[e.jsx("div",{className:"text-sky-900 text-[28px] font-bold",children:"IMZIO"}),e.jsx("div",{className:"text-black text-opacity-80 text-xs font-semibold tracking-[2.74px]",children:"Education"})]}),e.jsxs("div",{className:"flex gap-x-8",children:[e.jsx("a",{href:"/login",className:"text-black text-sm font-medium",children:"Masuk"}),e.jsx("a",{href:"/register",className:"text-black text-sm font-medium",children:"Daftar"})]})]})}),e.jsx("section",{className:"lg:h-screen max-w-7xl flex justify-between items-center  mx-auto px-5 sm:px-7 lg:px-11",children:e.jsxs("div",{className:"grid gap-y-8 mb-10 lg:my-0 mt-20 lg:grid-cols-2 gap-x-16",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-black text-center lg:text-start text-[64px] font-bold leading-tight",children:"Belajar Tanpa Batasan"}),e.jsx("div",{className:"  text-justify text-black text-xl font-normal leading-7 tracking-wider",children:"Mulailah, alihkan, atau tingkatkan karir Anda dengan lebih dari 5.800 kursus, Sertifikat Profesional, dan gelar dari universitas dan perusahaan kelas dunia."}),e.jsxs("div",{className:"flex space-x-6 justify-center lg:justify-start",children:[e.jsx(h,{component:U,to:"/login",className:"bg-sky-900 hover:bg-sky-800",type:"submit",radius:"md",children:"Masuk"}),e.jsx(h,{component:U,to:"/register",className:"bg-white border-2 border-sky-800 text-sky-800 hover:bg-sky-700 hover:text-white",type:"submit",radius:"md",children:"Daftar"})]})]}),e.jsx("div",{className:"flex justify-center lg:justify-end order-first lg:order-1",children:e.jsx("div",{className:"w-[410px] h-[410px] bg-sky-900 rounded-full flex justify-center items-center text-white font-semibold",children:"LOGO"})})]})}),e.jsxs("section",{className:"bg-neutral-100 space-y-8 py-14 px-5 sm:px-7 lg:px-11",children:[e.jsxs("div",{className:"text-center max-w-7xl mx-auto",children:[e.jsxs("span",{className:"text-black text-2xl font-bold",children:["Telah Dipercaya Oleh"," "]}),e.jsx("span",{className:"text-sky-900 text-2xl font-bold",children:"275+ Universitas dan Perusahaan Terkemuka"})]}),e.jsxs("div",{className:"flex flex-wrap max-w-7xl justify-center mx-auto gap-x-8 gap-y-8",children:[e.jsx("img",{className:"w-[168px] h-[34px]",src:"/Sponsor/image_1.png"}),e.jsx("img",{className:"w-[98px] h-[34px]",src:"/Sponsor/image_2.png"}),e.jsx("img",{className:"w-[130px] h-[45px]",src:"/Sponsor/image_3.png"}),e.jsx("img",{className:"w-[63px] h-[66px]",src:"/Sponsor/image_4.png"}),e.jsx("img",{className:"w-[85px] h-[34px]",src:"/Sponsor/image_5.png"}),e.jsx("img",{className:"w-[171px] h-[45px]",src:"/Sponsor/image_6.png"}),e.jsx("img",{className:"w-[139px] h-[30px]",src:"/Sponsor/image_7.png"})]})]}),e.jsx("section",{className:"bg-neutral-100 space-y-8 py-14 ",children:e.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16",children:[e.jsxs("ul",{className:"list-none font-medium space-y-2",children:[e.jsx("li",{className:"font-bold mb-3",children:"Pelajari Sesuatu yang baru"}),e.jsx("li",{children:"Belajar Bahasa"}),e.jsx("li",{children:"Pelajari Aktansi"}),e.jsx("li",{children:"Pelajari Pembuatan Kode"}),e.jsx("li",{children:"Pelajari Copywriting"}),e.jsx("li",{children:"Pelajari SDM"}),e.jsx("li",{children:"Pelajari Humas"}),e.jsx("li",{children:"M.S. Ilmu Data dari Boulder"}),e.jsx("li",{children:"Illinois iMBA"}),e.jsx("li",{children:"M.S. Ilmu Komputer Illionis"}),e.jsx("li",{children:"M.S. Ilmu Data Terapan dari UMIch"})]}),e.jsxs("ul",{className:"list-none font-medium space-y-2",children:[e.jsx("li",{className:"font-bold mb-3",children:"Artikel Unggulan"}),e.jsx("li",{children:"Panduan Lengkap untuk Menjadi Analisis Data"}),e.jsx("li",{children:"Tingkatkan Karier Anda dengan Sertifikasi keamanan siber"}),e.jsx("li",{children:"Dapatkan Sertifikasi Analisis Data Anda"}),e.jsx("li",{children:"Cara Masukke Bidang Analisis Data"}),e.jsx("li",{children:"Mulailah Karier Data Anda dengan Sertifikasi SQL"}),e.jsx("li",{children:"Pelajari Cara mendapatkan Sertifikat PMP"}),e.jsx("li",{children:"Mulai Karier Anda dengan Sertifikasi CAPM"}),e.jsx("li",{children:"Memahami Peran dan Tanggung Jawab Seorang Scrum Master"}),e.jsx("li",{children:"Buka Potensi Anda dengan Sertifikasi PMI"}),e.jsx("li",{children:"Yang Harus Anda Ketahui tentang Sertifikasi CompTIA A++"})]}),e.jsxs("ul",{className:"list-none font-medium space-y-2",children:[e.jsx("li",{className:"font-bold mb-3",children:"IMZIO"}),e.jsx("li",{children:"Tentang"}),e.jsx("li",{children:"Apa yang kita tawarkan"}),e.jsx("li",{children:"Kepemimpinan"}),e.jsx("li",{children:"Karier"}),e.jsx("li",{children:"Katalog"}),e.jsx("li",{children:"Coursera Plus"}),e.jsx("li",{children:"Sertifikat Profesional"}),e.jsx("li",{children:"Sertifikat MasterTrack"}),e.jsx("li",{children:"Gelar"}),e.jsx("li",{children:"Untuk Perusahaan"}),e.jsx("li",{children:"Untuk Pemerintahan"}),e.jsx("li",{children:"Untuk Kampus"}),e.jsx("li",{children:"Menjadi Mitra"})]})]})})]}),Je=ye,Ne=()=>e.jsxs("main",{children:[e.jsx("section",{className:"lg:h-screen max-w-7xl flex justify-between items-center mx-auto px-5 sm:px-7 lg:px-11",children:e.jsxs("div",{className:"grid gap-y-8 mb-10 lg:my-0 mt-20 lg:grid-cols-2 gap-x-16",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-black text-center lg:text-start text-[64px] font-bold leading-tight",children:"Belajar Tanpa Batasan"}),e.jsx("div",{className:"  text-justify text-black text-xl font-normal leading-7 tracking-wider",children:"Mulailah, alihkan, atau tingkatkan karir Anda dengan lebih dari 5.800 kursus, Sertifikat Profesional, dan gelar dari universitas dan perusahaan kelas dunia."}),e.jsx("div",{className:"flex pt-2 space-x-6 justify-center lg:justify-start",children:e.jsx(h,{className:"bg-sky-900 hover:bg-sky-800",type:"submit",radius:"md",size:"md",children:"Mulai Sekarang"})})]}),e.jsx("div",{className:"flex justify-center lg:justify-end order-first lg:order-1",children:e.jsx("div",{className:"w-[410px] h-[410px] bg-sky-900 rounded-full flex justify-center items-center text-white font-semibold",children:"LOGO"})})]})}),e.jsxs("section",{className:"bg-neutral-100 space-y-8 py-14 px-5 sm:px-7 lg:px-11",children:[e.jsxs("div",{className:"text-center max-w-7xl mx-auto",children:[e.jsxs("span",{className:"text-black text-2xl font-bold",children:["Telah Dipercaya Oleh"," "]}),e.jsx("span",{className:"text-sky-900 text-2xl font-bold",children:"275+ Universitas dan Perusahaan Terkemuka"})]}),e.jsxs("div",{className:"flex flex-wrap max-w-7xl justify-center mx-auto gap-x-8 gap-y-8",children:[e.jsx("img",{className:"w-[168px] h-[34px]",src:"/Sponsor/image_1.png"}),e.jsx("img",{className:"w-[98px] h-[34px]",src:"/Sponsor/image_2.png"}),e.jsx("img",{className:"w-[130px] h-[45px]",src:"/Sponsor/image_3.png"}),e.jsx("img",{className:"w-[63px] h-[66px]",src:"/Sponsor/image_4.png"}),e.jsx("img",{className:"w-[85px] h-[34px]",src:"/Sponsor/image_5.png"}),e.jsx("img",{className:"w-[171px] h-[45px]",src:"/Sponsor/image_6.png"}),e.jsx("img",{className:"w-[139px] h-[30px]",src:"/Sponsor/image_7.png"})]})]}),e.jsxs("section",{className:"py-14 px-5 sm:px-7 lg:px-11 max-w-8xl mx-auto space-y-2",children:[e.jsx("div",{className:"text-black text-[26px] font-normal  ",children:"Kelas Pilihan (Online + Offline)"}),e.jsx("div",{className:"text-black text-sm font-normal",children:"Explore our newest programs, focused on delivering in-demand skills."}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-5 gap-x-5",children:new Array(4).fill(0).map(()=>e.jsxs("div",{className:"border border-black p-4 border-opacity-20 space-y-2 bg-white hover:px-5 hover:bg-blue-50 hover:cursor-pointer transition-all duration-150 ease-in-out",children:[e.jsx("img",{className:"w-full h-[122px]",src:"https://blog.boot.dev/img/800/bestwaytolearngolang.webp",alt:""}),e.jsxs("div",{className:"space-y-2 mb-4 ",children:[e.jsx("div",{className:" text-black text-sm font-bold ",children:"Backend Master Class [Golang + Postgres + Kubernetes + gRPC]"}),e.jsx("div",{className:" text-black text-opacity-60 text-[10px] font-normal",children:"TECH SCHOOL"}),e.jsx("div",{className:" text-black text-base font-bold",children:"Rp 729.000"}),e.jsx("div",{className:"w-[62px] h-[17px]  bg-sky-200 rounded-[5px]",children:e.jsx("div",{className:"w-[34px] h-2.5 text-black text-[10px] font-normal mx-auto",children:"Terlaris"})})]})]}))}),e.jsx("div",{className:"flex justify-center text-black text-[15px] font-normal  pt-6 ",children:e.jsxs("span",{className:"flex gap-x-1 hover:text-gray-600 hover:cursor-pointer items-center",children:["Lihat Lainnya ",e.jsx(H,{width:15})]})})]}),e.jsxs("section",{className:"py-14 px-5 sm:px-7 lg:px-11 max-w-8xl mx-auto space-y-2",children:[e.jsx("div",{className:"text-black text-[26px] font-normal  ",children:"Kelas Pilihan Full Online"}),e.jsx("div",{className:"text-black text-sm font-normal",children:"Explore our newest programs, focused on delivering in-demand skills."}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-5 gap-x-5 gap-y-5",children:new Array(4).fill(0).map(()=>e.jsxs("div",{className:"border border-black p-4 border-opacity-20 space-y-2 bg-white hover:px-5 hover:bg-blue-50 hover:cursor-pointer transition-all duration-150 ease-in-out",children:[e.jsx("img",{className:"w-full h-[122px]",src:"https://blog.boot.dev/img/800/bestwaytolearngolang.webp",alt:""}),e.jsxs("div",{className:"space-y-2 mb-4 ",children:[e.jsx("div",{className:" text-black text-sm font-bold ",children:"Backend Master Class [Golang + Postgres + Kubernetes + gRPC]"}),e.jsx("div",{className:" text-black text-opacity-60 text-[10px] font-normal",children:"TECH SCHOOL"}),e.jsx("div",{className:" text-black text-base font-bold",children:"Rp 729.000"}),e.jsx("div",{className:"w-[62px] h-[17px]  bg-sky-200 rounded-[5px]",children:e.jsx("div",{className:"w-[34px] h-2.5 text-black text-[10px] font-normal mx-auto",children:"Terlaris"})})]})]}))}),e.jsx("div",{className:"flex justify-center text-black text-[15px] font-normal  pt-6 ",children:e.jsxs("span",{className:"flex gap-x-1 hover:text-gray-600 hover:cursor-pointer items-center",children:["Lihat Lainnya ",e.jsx(H,{width:15})]})})]}),e.jsxs("section",{className:"py-14 px-5 sm:px-7 lg:px-11 max-w-8xl mx-auto text-center space-y-2",children:[e.jsx("div",{className:"text-black text-[32px] font-bold",children:"Dari Komunitas IMZIO"}),e.jsx("div",{className:"text-black text-sm font-normal",children:"124+ million people have already joined IMZIO"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-7 gap-x-14 gap-y-10",children:new Array(3).fill(0).map(s=>e.jsxs("div",{className:"border border-black px-4 pt-8 pb-14 border-opacity-20 space-y-2 ",children:[e.jsx("img",{className:"w-[250px] h-[250px] mx-auto rounded-full object-cover",src:"https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?5315ffb",alt:""}),e.jsxs("div",{className:"space-y-4 mb-4 px-8 pt-5",children:[e.jsx("div",{className:" text-black text-2xl font-bold leading-3",children:"La Diva"}),e.jsx("div",{className:"border-b border-b-black w-fit mx-auto border-opacity-40",children:e.jsx("span",{className:"px-5 text-black text-xs font-normal",children:"Desainer"})}),e.jsx("div",{className:"text-center text-black text-xs font-normal",children:"“Even more important than knowledege is confidence, which I have gained through my learning journey. No matter what you are looking to learn, or gain confidence in IMZIO hase something for you”"})]})]}))})]}),e.jsx("section",{className:"bg-neutral-100 space-y-8 py-14 ",children:e.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16",children:[e.jsxs("ul",{className:"list-none font-medium space-y-2",children:[e.jsx("li",{className:"font-bold mb-3",children:"Pelajari Sesuatu yang baru"}),e.jsx("li",{children:"Belajar Bahasa"}),e.jsx("li",{children:"Pelajari Aktansi"}),e.jsx("li",{children:"Pelajari Pembuatan Kode"}),e.jsx("li",{children:"Pelajari Copywriting"}),e.jsx("li",{children:"Pelajari SDM"}),e.jsx("li",{children:"Pelajari Humas"}),e.jsx("li",{children:"M.S. Ilmu Data dari Boulder"}),e.jsx("li",{children:"Illinois iMBA"}),e.jsx("li",{children:"M.S. Ilmu Komputer Illionis"}),e.jsx("li",{children:"M.S. Ilmu Data Terapan dari UMIch"})]}),e.jsxs("ul",{className:"list-none font-medium space-y-2",children:[e.jsx("li",{className:"font-bold mb-3",children:"Artikel Unggulan"}),e.jsx("li",{children:"Panduan Lengkap untuk Menjadi Analisis Data"}),e.jsx("li",{children:"Tingkatkan Karier Anda dengan Sertifikasi keamanan siber"}),e.jsx("li",{children:"Dapatkan Sertifikasi Analisis Data Anda"}),e.jsx("li",{children:"Cara Masukke Bidang Analisis Data"}),e.jsx("li",{children:"Mulailah Karier Data Anda dengan Sertifikasi SQL"}),e.jsx("li",{children:"Pelajari Cara mendapatkan Sertifikat PMP"}),e.jsx("li",{children:"Mulai Karier Anda dengan Sertifikasi CAPM"}),e.jsx("li",{children:"Memahami Peran dan Tanggung Jawab Seorang Scrum Master"}),e.jsx("li",{children:"Buka Potensi Anda dengan Sertifikasi PMI"}),e.jsx("li",{children:"Yang Harus Anda Ketahui tentang Sertifikasi CompTIA A++"})]}),e.jsxs("ul",{className:"list-none font-medium space-y-2",children:[e.jsx("li",{className:"font-bold mb-3",children:"IMZIO"}),e.jsx("li",{children:"Tentang"}),e.jsx("li",{children:"Apa yang kita tawarkan"}),e.jsx("li",{children:"Kepemimpinan"}),e.jsx("li",{children:"Karier"}),e.jsx("li",{children:"Katalog"}),e.jsx("li",{children:"Coursera Plus"}),e.jsx("li",{children:"Sertifikat Profesional"}),e.jsx("li",{children:"Sertifikat MasterTrack"}),e.jsx("li",{children:"Gelar"}),e.jsx("li",{children:"Untuk Perusahaan"}),e.jsx("li",{children:"Untuk Pemerintahan"}),e.jsx("li",{children:"Untuk Kampus"}),e.jsx("li",{children:"Menjadi Mitra"})]})]})})]}),Ze=Ne,we=()=>e.jsxs("main",{children:[e.jsx("section",{className:"bg-[#f2f2f2]",children:e.jsx("section",{className:"lg:h-screen max-w-7xl flex justify-between items-center mx-auto px-5 sm:px-7 lg:px-11 ",children:e.jsxs("div",{className:"grid gap-y-8 mb-10 lg:my-0 mt-20 lg:grid-cols-2 gap-x-16",children:[e.jsxs("div",{className:"space-y-4 bg-[#f2f2f2]",children:[e.jsx("div",{className:"text-black text-center lg:text-start text-[64px] font-bold leading-tight",children:"Mengajarlah bersama kami"}),e.jsx("div",{className:"  text-justify text-black text-xl font-normal leading-7 ",children:"Jadilah instruktur dan ubah hidup — termasuk hidup Anda sendiri"}),e.jsx("div",{className:"flex pt-2 space-x-6 justify-center lg:justify-start",children:e.jsx(h,{className:"bg-sky-900 hover:bg-sky-800",type:"submit",radius:"md",size:"md",children:"Mulai Sekarang"})})]}),e.jsx("div",{className:"flex justify-center lg:justify-end order-first lg:order-1",children:e.jsx("div",{className:"w-[410px] h-[410px] bg-sky-900 rounded-full flex justify-center items-center text-white font-semibold",children:e.jsx("img",{src:"/dana.png",alt:"",className:"mt-36 lg:mt-0 h-[578px]"})})})]})})}),e.jsxs("section",{className:"mx-auto max-w-7xl py-14",children:[e.jsx("div",{className:"text-black text-4xl font-bold text-center",children:"Cara memulai"}),e.jsxs(j,{defaultValue:"gallery",className:"max-w-4xl mx-auto mt-8",children:[e.jsxs(j.List,{grow:!0,className:"font-semibold",children:[e.jsx(j.Tab,{value:"gallery",children:"Rencanakan kurikulum Anda"}),e.jsx(j.Tab,{value:"messages",children:"Rekam video Anda"}),e.jsx(j.Tab,{value:"settings",children:"Luncurkan kursus Anda"})]}),e.jsx(j.Panel,{value:"gallery",pt:"xs",children:e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsxs("div",{className:"space-y-4 mt-8",children:[e.jsx("div",{className:" text-black text-lg font-normal",children:"Anda memulai dengan semangat dan pengetahuan. Kemudian pilihlah topik menjanjikan dengan bantu alat Wawasan Pasar kami. Cara Anda mengajar — apa yang Anda bawa saat mengajar — terserah Anda."}),e.jsx("div",{className:"text-black text-lg font-bold",children:"Cara kami membantu Anda"}),e.jsx("div",{className:" text-black text-lg font-normal",children:"Kami menawarkan banyak sumber daya untuk cara membuat kursus pertama. Selain itu, dasbor instruktur dan halaman kurikulum kami akan membantu Anda menyusun rencana."})]}),e.jsx("img",{src:"/human1.png",alt:"",className:"w-full"})]})}),e.jsx(j.Panel,{value:"messages",pt:"xs",children:e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsxs("div",{className:"space-y-4 mt-8",children:[e.jsxs("div",{className:" text-black text-lg font-normal",children:["Kumpulkan peringkat dan ulasan dengan mempromosikan kursus Anda melalui media sosial dan jaringan profesional Anda.",e.jsx("br",{}),"Kursus Anda akan dapat ditemukan di marketplace kami, tempat Anda mendapatkan penghasilan dari setiap pendaftaran berbayar."]}),e.jsx("div",{className:"text-black text-lg font-bold",children:"Cara kami membantu Anda"}),e.jsx("div",{className:" text-black text-lg font-normal",children:"Alat kupon kustom kami memungkinkan Anda menawarkan insentif pendaftaran sekaligus mendorong lalu lintas promosi global ke kursus. Ada lebih banyak lagi peluang untuk kursus yang dipilih untuk Udemy Business."})]}),e.jsx("img",{src:"/human2.png",alt:"",className:"w-full"})]})}),e.jsx(j.Panel,{value:"settings",pt:"xs",children:e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsxs("div",{className:"space-y-4 mt-8",children:[e.jsx("div",{className:" text-black text-lg font-normal",children:"Kumpulkan peringkat dan ulasan dengan mempromosikan kursus Anda melalui media sosial dan jaringan profesional Anda. Kursus Anda akan dapat ditemukan di marketplace kami, tempat Anda mendapatkan penghasilan dari setiap pendaftaran berbayar."}),e.jsx("div",{className:"text-black text-lg font-bold",children:"Cara kami membantu Anda"}),e.jsx("div",{className:" text-black text-lg font-normal",children:"Alat kupon kustom kami memungkinkan Anda menawarkan insentif pendaftaran sekaligus mendorong lalu lintas promosi global ke kursus. Ada lebih banyak lagi peluang untuk kursus yang dipilih untuk Udemy Business."})]}),e.jsx("img",{src:"/human3.png",alt:"",className:"w-full"})]})})]})]}),e.jsxs("section",{className:"bg-neutral-100 space-y-8 py-14 px-5 sm:px-7 lg:px-11",children:[e.jsxs("div",{className:"text-center max-w-7xl mx-auto",children:[e.jsxs("span",{className:"text-black text-2xl font-bold",children:["Telah Dipercaya Oleh"," "]}),e.jsx("span",{className:"text-sky-900 text-2xl font-bold",children:"275+ Universitas dan Perusahaan Terkemuka"})]}),e.jsxs("div",{className:"flex flex-wrap max-w-7xl justify-center mx-auto gap-x-8 gap-y-8",children:[e.jsx("img",{className:"w-[168px] h-[34px]",src:"/Sponsor/image_1.png"}),e.jsx("img",{className:"w-[98px] h-[34px]",src:"/Sponsor/image_2.png"}),e.jsx("img",{className:"w-[130px] h-[45px]",src:"/Sponsor/image_3.png"}),e.jsx("img",{className:"w-[63px] h-[66px]",src:"/Sponsor/image_4.png"}),e.jsx("img",{className:"w-[85px] h-[34px]",src:"/Sponsor/image_5.png"}),e.jsx("img",{className:"w-[171px] h-[45px]",src:"/Sponsor/image_6.png"}),e.jsx("img",{className:"w-[139px] h-[30px]",src:"/Sponsor/image_7.png"})]})]}),e.jsx("section",{className:"bg-neutral-100 space-y-8 py-14 ",children:e.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16",children:[e.jsxs("ul",{className:"list-none font-medium space-y-2",children:[e.jsx("li",{className:"font-bold mb-3",children:"Pelajari Sesuatu yang baru"}),e.jsx("li",{children:"Belajar Bahasa"}),e.jsx("li",{children:"Pelajari Aktansi"}),e.jsx("li",{children:"Pelajari Pembuatan Kode"}),e.jsx("li",{children:"Pelajari Copywriting"}),e.jsx("li",{children:"Pelajari SDM"}),e.jsx("li",{children:"Pelajari Humas"}),e.jsx("li",{children:"M.S. Ilmu Data dari Boulder"}),e.jsx("li",{children:"Illinois iMBA"}),e.jsx("li",{children:"M.S. Ilmu Komputer Illionis"}),e.jsx("li",{children:"M.S. Ilmu Data Terapan dari UMIch"})]}),e.jsxs("ul",{className:"list-none font-medium space-y-2",children:[e.jsx("li",{className:"font-bold mb-3",children:"Artikel Unggulan"}),e.jsx("li",{children:"Panduan Lengkap untuk Menjadi Analisis Data"}),e.jsx("li",{children:"Tingkatkan Karier Anda dengan Sertifikasi keamanan siber"}),e.jsx("li",{children:"Dapatkan Sertifikasi Analisis Data Anda"}),e.jsx("li",{children:"Cara Masukke Bidang Analisis Data"}),e.jsx("li",{children:"Mulailah Karier Data Anda dengan Sertifikasi SQL"}),e.jsx("li",{children:"Pelajari Cara mendapatkan Sertifikat PMP"}),e.jsx("li",{children:"Mulai Karier Anda dengan Sertifikasi CAPM"}),e.jsx("li",{children:"Memahami Peran dan Tanggung Jawab Seorang Scrum Master"}),e.jsx("li",{children:"Buka Potensi Anda dengan Sertifikasi PMI"}),e.jsx("li",{children:"Yang Harus Anda Ketahui tentang Sertifikasi CompTIA A++"})]}),e.jsxs("ul",{className:"list-none font-medium space-y-2",children:[e.jsx("li",{className:"font-bold mb-3",children:"IMZIO"}),e.jsx("li",{children:"Tentang"}),e.jsx("li",{children:"Apa yang kita tawarkan"}),e.jsx("li",{children:"Kepemimpinan"}),e.jsx("li",{children:"Karier"}),e.jsx("li",{children:"Katalog"}),e.jsx("li",{children:"Coursera Plus"}),e.jsx("li",{children:"Sertifikat Profesional"}),e.jsx("li",{children:"Sertifikat MasterTrack"}),e.jsx("li",{children:"Gelar"}),e.jsx("li",{children:"Untuk Perusahaan"}),e.jsx("li",{children:"Untuk Pemerintahan"}),e.jsx("li",{children:"Untuk Kampus"}),e.jsx("li",{children:"Menjadi Mitra"})]})]})})]}),qe=we;export{Ze as Dashboard,qe as Hire,Je as Home,Ge as OVKResumeAddCol,Ve as OVKResumeAddRow,Ee as TableDocResume,Qe as TableFeedmillResume,We as TableHPPResume,ce as createClassHistory,te as createSantri,le as createWali,xe as deleteSantri,ne as deleteWali,de as getSantris,re as getWalis,me as updateSantri,ie as updateWali,Le as useCreateClassHistory,_e as useCreateSantri,Re as useCreateWali,Fe as useDeleteSantri,Oe as useDeleteWali,Ue as useSantris,He as useUpdateSantri,Be as useUpdateWali,Ie as useWalis};
