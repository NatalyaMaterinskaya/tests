var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},n=e.parcelRequiree8da;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in s){var n=s[e];delete s[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},e.parcelRequiree8da=n);var r=n("fMoMY"),a=n("h6ark"),l=n("gtiYd");!function(e){for(let t=1;t<=e.length;t+=1)e[t-1].id=t}(r.fourthTestItems);const i=function(e,t=1){let s=e.map(({id:e,question:s,firstAnswer:n,secondAnswer:r,thirdAnswer:a})=>`<li class="test-item">
    <p class="test-item-text"> ${e}. ${s} </p>
    <div class="answer-wrapper">
      <p class="test-item-answer"> ${t}. ${n} </p>
      <p class="test-item-answer"> ${t+1}. ${r} </p>
      <p class="test-item-answer"> ${t+2}. ${a} </p>
    </div>
  </li>`);return s}(r.fourthTestItems);let o=0,d=0,u=0,p=0,c=1,f=null;(0,a.formEl).addEventListener("input",e=>{f=e.target.value}),(0,a.formEl).addEventListener("submit",e=>{e.preventDefault();let{elements:{name:t}}=e.currentTarget;""===t.value.trim()?alert("Введіть прізвище, ім'я, по батькові, будь ласка."):(console.log(f),e.currentTarget.reset(),a.formEl.style.display="none",a.testsEl.innerHTML=i[c-1],a.btnEl.style.display="flex")}),(0,a.btnEl).addEventListener("click",e=>{let{target:t}=e;if(t.classList.contains("answer-btn")){if("1"===t.dataset.answer&&(p+=Number(t.dataset.answer),o+=1),"2"===t.dataset.answer&&(p+=Number(t.dataset.answer),d+=1),"3"===t.dataset.answer&&(p+=Number(t.dataset.answer),u+=1),c<i.length)a.testsEl.innerHTML=i[c],c+=1;else{let e=(0,l.getCurremtDate)(),t=`<p class="user"> Тест пройшов/пройшла</p>
    <p class="user">${f}</p>
    <p class="result"> Результат №1 = ${o} </p>
    <p class="result"> Результат №2 = ${d} </p>
    <p class="result"> Результат №3 = ${u} </p>
    <b class="result"> Основний результат = ${p}</b>`;if(a.mainContainer.innerHTML=t,o<7&&u>=7){let e=` <p class="result"> Випадок №1</p>`;(0,a.mainContainer).insertAdjacentHTML("beforeend",e)}if(u<7&&o>=7){let e=` <p class="result"> Випадок №2</p>`;(0,a.mainContainer).insertAdjacentHTML("beforeend",e)}let s=`<div class="date">
        <span class="time">${e.currentHours}:${e.currentMinutes}</span>
         <spanclass="time">${e.currentDays} ${e.currentMonth} ${e.currentYear} року</span>
    </div>`;(0,a.mainContainer).insertAdjacentHTML("beforeend",s)}}});
//# sourceMappingURL=task-04.8ffac687.js.map
