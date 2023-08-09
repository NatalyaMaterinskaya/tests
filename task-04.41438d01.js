var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequiree8da;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,s.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequiree8da=s);var r=s("fMoMY"),a=s("h6ark"),l=s("gtiYd");!function(e){for(let t=1;t<=e.length;t+=1)e[t-1].id=t}(r.fourthTestItems);const i=function(e){let t=e.map(({id:e,question:t})=>`<li class="test-item">
    <p class="test-item-text"> ${e}. ${t} </p>
  </li>`);return t}(r.fourthTestItems),o=function(e){let t=e.map(({firstAnswer:e,secondAnswer:t,thirdAnswer:n})=>{let s=[e,t,n],r=[];for(let e=1;e<=3;e+=1)r.push(`<li class="btn-item">
        <button class="answer-btn" data-answer="${e}" type="button">${e}. ${s[e-1]}</button>
        </li>`);return r.join("")});return t}(r.fourthTestItems);let u=0,d=0,c=0,p=0,f=1,m=null;(0,a.formEl).addEventListener("input",e=>{m=e.target.value}),(0,a.formEl).addEventListener("submit",e=>{e.preventDefault();let{elements:{name:t}}=e.currentTarget;""===t.value.trim()?alert("Введіть прізвище, ім'я, по батькові, будь ласка."):(console.log(m),e.currentTarget.reset(),a.formEl.style.display="none",a.testsEl.innerHTML=i[f-1],a.btnEl.style.display="flex",a.btnEl.innerHTML=o[f-1])}),(0,a.btnEl).addEventListener("click",e=>{let{target:t}=e;if(t.classList.contains("answer-btn")){if("1"===t.dataset.answer&&(p+=Number(t.dataset.answer),u+=1),"2"===t.dataset.answer&&(p+=Number(t.dataset.answer),d+=1),"3"===t.dataset.answer&&(p+=Number(t.dataset.answer),c+=1),f<i.length)a.testsEl.innerHTML=i[f],a.btnEl.innerHTML=o[f],f+=1;else{let e=(0,l.getCurremtDate)(),t=`<p class="user"> Тест пройшов/пройшла</p>
    <p class="user">${m}</p>
    <p class="result"> Результат №1 = ${u} </p>
    <p class="result"> Результат №2 = ${d} </p>
    <p class="result"> Результат №3 = ${c} </p>
    <b class="result"> Основний результат = ${p}</b>`;if(a.mainContainer.innerHTML=t,u<7&&c>=7){let e=` <p class="result"> Випадок №1</p>`;(0,a.mainContainer).insertAdjacentHTML("beforeend",e)}if(c<7&&u>=7){let e=` <p class="result"> Випадок №2</p>`;(0,a.mainContainer).insertAdjacentHTML("beforeend",e)}let n=`<div class="date">
        <span class="time">${e.currentHours}:${e.currentMinutes}</span>
         <spanclass="time">${e.currentDays} ${e.currentMonth} ${e.currentYear} року</span>
    </div>`;(0,a.mainContainer).insertAdjacentHTML("beforeend",n)}}});
//# sourceMappingURL=task-04.41438d01.js.map
