let docModal=document.querySelector(".doc-modal"),docModalToggle=document.querySelector(".doc-modal__toggle"),docModalImg=document.querySelector(".doc-modal__img"),docLinks=document.querySelectorAll(".documents__button"),alts=document.querySelectorAll(".documents__text");docModal.classList.remove("doc-modal--nojs"),docLinks.forEach((o=>o.addEventListener("click",(function(o){o.preventDefault();let e=Array.from(docLinks).indexOf(this),d=docLinks[e].getAttribute("href"),t=alts[e].textContent;docModal.classList.remove("doc-modal--closed"),docModalImg.src=d,docModalImg.setAttribute("alt",t)})))),document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("click",(function(o){o.target.closest(".doc-modal__wrapper")&&docModal.classList.add("doc-modal--closed")})),document.addEventListener("keyup",(function(o){"Escape"===o.key&&docModal.classList.add("doc-modal--closed")}))}));