var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},s=t.parcelRequiree8da;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in n){var s=n[t];delete n[t];var l={id:t,exports:{}};return e[t]=l,s.call(l.exports,l,l.exports),l.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},t.parcelRequiree8da=s);var l=s("fMoMY");function a(t){for(let e=1;e<=t.length;e+=1)t[e-1].id=e}var i=s("h6ark"),r=s("gtiYd");const u=document.querySelector(".container"),o=document.querySelector(".title"),c=document.querySelector(".left-wrapper"),d=document.querySelector(".right-wrapper");a(l.fifthTestItemsLeftCharacteristics),a(l.fifthTestItemsRightCharacteristics);const b=function(t){let e=t.map(({id:t,question:e})=>`<li class="test-item">
    <p class="test-item-text"> ${t}. ${e} </p>
  </li>`);return e}(l.fifthTestItemsLeftCharacteristics),p=function(t){let e=t.map(({question:t,state:e})=>`<ul class="button-list">
      <li class="button-item">
        <button class="btn" type="button" data-state=${!e}>3</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-state=${!e}>2</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-state=${!e}>1</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-state=${e}>0</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-state=${e}>1</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-state=${e}>2</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-state=${e}>3</button>
      </li>
    </ul>
      <li class="test-item">
    <p class="test-item-text"> ${t} </p>
  </li>`);return e}(l.fifthTestItemsRightCharacteristics);let f=0,m=0,h=0,y=1,$=null;const g=[1,2,7,8,13,14,19,20,25,26],v=[3,4,9,10,15,16,21,22,27,28],L=[5,6,11,12,17,18,23,24,29,30],T=t=>{let{target:e}=t;if(e.classList.contains("btn")){if(y<b.length){switch(e.dataset.state){case"true":g.includes(y)&&(f+=4+Number(e.textContent)),v.includes(y)&&(m+=4+Number(e.textContent)),L.includes(y)&&(h+=4+Number(e.textContent));break;case"false":g.includes(y)&&(f+=4-Number(e.textContent)),v.includes(y)&&(m+=4-Number(e.textContent)),L.includes(y)&&(h+=4-Number(e.textContent));break;default:console.log("Полюс питання відсутній!")}c.innerHTML=b[y],d.innerHTML=p[y],y+=1;let t=d.firstElementChild;t.addEventListener("click",T)}else{let t=(0,r.getCurrentDate)();u.classList.remove("column-wrapper");let e=`<p class="user"> Тест пройшов/пройшла</p>
    <p class="user">${$}</p>
    <p class="result"> Результат №1 = ${f/=10} </p>
    <p class="result"> Результат №2 = ${m/=10} </p>
    <p class="result"> Результат №3 = ${h/=10} </p>`;u.innerHTML=e;let n=`<div class="date">
        <span class="time">${t.currentHours}:${t.currentMinutes}</span>
         <spanclass="time">${t.currentDays} ${t.currentMonth} ${t.currentYear} року</span>
    </div>`;u.insertAdjacentHTML("beforeend",n)}}};(0,i.formEl).addEventListener("input",t=>{$=t.target.value}),(0,i.formEl).addEventListener("submit",t=>{t.preventDefault();let{elements:{name:e}}=t.currentTarget;if(""===e.value.trim())alert("Введіть прізвище, ім'я, по батькові, будь ласка.");else{t.currentTarget.reset(),i.formEl.style.display="none",o.style.display="flex",c.innerHTML=b[y-1],d.insertAdjacentHTML("afterbegin",p[y-1]);let e=d.firstElementChild;e.addEventListener("click",T)}});
//# sourceMappingURL=task-05.685755d3.js.map
