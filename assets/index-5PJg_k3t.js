(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();var m=document.getElementById("form"),u=document.getElementById("image-divider");u.style.display="none";var s=document.getElementById("loader-anim");s.style.display="none";var a=document.getElementById("generationStatus");m.addEventListener("submit",l=>{l.preventDefault();var r=document.getElementById("prompt").value,i=document.getElementById("error");if(i.innerHTML="",console.log(r),r.length<1)i.innerHTML="Please enter a prompt to continue";else{r+=", districts, <lora:districts_v3:0.9>",console.log("prompt to send : "+r),u.style.display="block",s.style.display="block",a.innerHTML="Status : Initializing Stable Diffusion";var n=new Headers;n.append("Content-Type","application/json"),n.append("Authorization","Bearer YR63STN873KZZFMFTN9TUFBUG6LRG5GJI9719TBR"),n.append("Cookie","__cflb=02DiuEDmJ1gNRaog7BwEsZT4Y5Biosh1vxGqeePSzqRXi");var e=JSON.stringify({input:{api_name:"txt2img",prompt:r,width:800,height:800,samples:30,restore_faces:!0,negative_prompt:"(nude) (bad hands) (disfigured) (grain) (deformed) (poorly drawn) (mutilated) (lowres) (lowpoly) (blurry) (out-of-focus) (duplicate) (frame) (border) (watermark) (label) (signature) (text) (cropped) (artifacts)",seed:-1,override_settings:{sd_model_checkpoint:"model.safetensors [f7c2a4bb41]"},cfg_scale:6,sampler_index:"Euler a",num_inference_steps:20}}),t={method:"POST",headers:n,body:e,redirect:"follow"};a.innerHTML="Status : Generating Image",fetch("https://api.runpod.ai/v2/a04b71wmtj3dyj/runsync",t).then(o=>o.text()).then(o=>{s.style.display="none",a.innerHTML="Status : Generation complete.";var d=new Image,c=JSON.parse(o);console.log(c);var p=c.output.images[0];console.log(p),d.src="data:image/png;base64,"+p,document.getElementById("imgElem").append(d)}).catch(o=>console.log("error",o))}});
