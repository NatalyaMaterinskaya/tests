var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequiree8da;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var r={id:t,exports:{}};return e[t]=r,a.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},t.parcelRequiree8da=a);var r=a("fMoMY");const s=document.querySelector(".feedback-form");document.querySelector(".container"),document.querySelector(".tests"),document.querySelector(".answer-container");const l=document.querySelector(".container"),u=document.querySelector(".title-wrapper"),i=document.querySelector(".test-wrapper"),o=function(t){let e=t.map(({id:t,question:e,state:n})=>`<li class="test-item">
      <p class="test-item-text">${t}. ${e} </p>
    </li>
    <ul class="button-list">
      <li class="button-item">
        <button class="btn" type="button" data-value=4 data-state=${n}>1</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-value=3 data-state=${n}>2</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button"data-value=2 data-state=${n}>3</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button"data-value=1 data-state=${n}>4</button>
      </li>
    </ul>`);return e}(r.sixthTestItemsRightCharacteristics);let c=0,d=0,p=1,b=null;alert("Інструкція: . Прочитайте уважно кожне з наведених тверджень і виберіть відповідну цифру праворуч залежно від того, як Ви почуваєтеся останнім часом. Над твердженнями довго не замислюйтесь, оскільки правильних або неправильних відповідей немає. Варіанти відповіді: 1 –ніколи або інколи; 2 – іноді; 3 – часто; 4 – майже завжди або постійно. Час заповнення – 20 хв.");const f=t=>{let{target:e}=t;if(e.classList.contains("btn")){if(p<=o.length)switch(e.dataset.state){case"true":c+=Number(e.textContent);break;case"false":d+=Number(e.dataset.value);break;default:console.log("Щось пішло не так...")}if(p<o.length){i.innerHTML=o[p];let t=i.lastElementChild;t.addEventListener("click",f),p+=1}else{let t=function(){let t=new Date,e=["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"].find((e,n)=>n===t.getMonth()),n={currentHours:t.getHours().toString().padStart(2,"0"),currentMinutes:t.getMinutes().toString().padStart(2,"0"),currentDays:t.getDate().toString().padStart(2,"0"),currentMonth:e,currentYear:t.getFullYear()};return n}();l.classList.remove("main-wrapper");let e=`<p class="user"> Тест пройшов</p>
    <p class="user">${b}</p>
    <p class="result"> Результат = ${c+d/80*100} </p>`;l.innerHTML=e;let n=`<div class="date">
        <span class="time">${t.currentHours}:${t.currentMinutes}</span>
         <spanclass="time">${t.currentDays} ${t.currentMonth} ${t.currentYear} року</span>
    </div>`;l.insertAdjacentHTML("beforeend",n)}}};s.addEventListener("input",t=>{b=t.target.value}),s.addEventListener("submit",t=>{t.preventDefault();let{elements:{name:e}}=t.currentTarget;if(""===e.value.trim())alert("Введіть прізвище, ім'я, по батькові, будь ласка.");else{t.currentTarget.reset(),s.style.display="none",u.style.display="flex",i.innerHTML=o[p-1];let e=i.lastElementChild;console.dir(o.length),e.addEventListener("click",f)}});
//# sourceMappingURL=task-06.9f53e5af.js.map
