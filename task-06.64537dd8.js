var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},n=t.parcelRequiree8da;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in a){var n=a[t];delete a[t];var l={id:t,exports:{}};return e[t]=l,n.call(l.exports,l,l.exports),l.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},t.parcelRequiree8da=n);var l=n("fMoMY"),s=n("h6ark"),r=n("gtiYd");const i=document.querySelector(".container"),u=document.querySelector(".title-wrapper"),o=document.querySelector(".test-wrapper"),c=function(t){let e=t.map(({id:t,question:e,state:a})=>`<li class="test-item">
      <p class="test-item-text">${t}. ${e} </p>
    </li>
    <ul class="button-list">
      <li class="button-item">
        <button class="btn" type="button" data-value=4 data-state=${a}>1</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-value=3 data-state=${a}>2</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button"data-value=2 data-state=${a}>3</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button"data-value=1 data-state=${a}>4</button>
      </li>
    </ul>`);return e}(l.sixthTestItemsRightCharacteristics);let d=0,p=0,b=1,f=null;alert("Інструкція: . Прочитайте уважно кожне з наведених тверджень і виберіть відповідну цифру праворуч залежно від того, як Ви почуваєтеся останнім часом. Над твердженнями довго не замислюйтесь, оскільки правильних або неправильних відповідей немає. Варіанти відповіді: 1 –ніколи або інколи; 2 – іноді; 3 – часто; 4 – майже завжди або постійно. Час заповнення – 20 хв.");const m=t=>{let{target:e}=t;if(e.classList.contains("btn")){if(b<=c.length)switch(e.dataset.state){case"true":d+=Number(e.textContent);break;case"false":p+=Number(e.dataset.value);break;default:console.log("Щось пішло не так...")}if(b<c.length){o.innerHTML=c[b];let t=o.lastElementChild;t.addEventListener("click",m),b+=1}else{let t=(0,r.getCurrentDate)();i.classList.remove("main-wrapper");let e=`<p class="user"> Тест пройшов</p>
    <p class="user">${f}</p>
    <p class="result"> Результат = ${d+p/80*100} </p>`;i.innerHTML=e;let a=`<div class="date">
        <span class="time">${t.currentHours}:${t.currentMinutes}</span>
         <spanclass="time">${t.currentDays} ${t.currentMonth} ${t.currentYear} року</span>
    </div>`;i.insertAdjacentHTML("beforeend",a)}}};(0,s.formEl).addEventListener("input",t=>{f=t.target.value}),(0,s.formEl).addEventListener("submit",t=>{t.preventDefault();let{elements:{name:e}}=t.currentTarget;if(""===e.value.trim())alert("Введіть прізвище, ім'я, по батькові, будь ласка.");else{t.currentTarget.reset(),s.formEl.style.display="none",u.style.display="flex",o.innerHTML=c[b-1];let e=o.lastElementChild;console.dir(c.length),e.addEventListener("click",m)}});
//# sourceMappingURL=task-06.64537dd8.js.map
