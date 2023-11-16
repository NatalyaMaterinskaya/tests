var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},s=t.parcelRequiree8da;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in n){var s=n[t];delete n[t];var r={id:t,exports:{}};return e[t]=r,s.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},t.parcelRequiree8da=s);var r=s("fMoMY");function a(t){for(let e=1;e<=t.length;e+=1)t[e-1].id=e}const l=document.querySelector(".feedback-form");document.querySelector(".container"),document.querySelector(".tests"),document.querySelector(".answer-container");const i=document.querySelector(".container"),u=document.querySelector(".title"),o=document.querySelector(".left-wrapper"),c=document.querySelector(".right-wrapper");a(r.fifthTestItemsLeftCharacteristics),a(r.fifthTestItemsRightCharacteristics);const d=function(t){let e=t.map(({id:t,question:e})=>`<li class="test-item">
    <p class="test-item-text"> ${t}. ${e} </p>
  </li>`);return e}(r.fifthTestItemsLeftCharacteristics),b=function(t){let e=t.map(({question:t,state:e})=>`<ul class="button-list">
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
  </li>`);return e}(r.fifthTestItemsRightCharacteristics);let p=0,f=0,m=0,g=1,y=null;const h=[1,2,7,8,13,14,19,20,25,26],$=[3,4,9,10,15,16,21,22,27,28],v=[5,6,11,12,17,18,23,24,29,30];alert("Інструкція: Вам необхідно співвіднести свій стан із рядом ознак за багатоступінчастою шкалою. Шкала складається з індексів (3 2 1 0 1 2 3) і розташована між тридцятьма парами слів протилежного значення, які відображають рухливість, швидкість і темп перебігу функцій (активність), силу, здоров’я, стомленість (самопочуття), а також характеристики емоційного стану (настрій). Ви маєте вибрати і позначити цифру, яка найточніше відображає Ваш стан у момент обстеження. !!!При цьому потрібно враховувати, що полюси шкал (негативний і позитивний) постійно змінюються!!!");const L=t=>{let{target:e}=t;if(e.classList.contains("btn")){if(g<=d.length)switch(e.dataset.state){case"true":h.includes(g)&&(p+=4+Number(e.textContent)),$.includes(g)&&(f+=4+Number(e.textContent)),v.includes(g)&&(m+=4+Number(e.textContent));break;case"false":h.includes(g)&&(p+=4-Number(e.textContent)),$.includes(g)&&(f+=4-Number(e.textContent)),v.includes(g)&&(m+=4-Number(e.textContent));break;default:console.log("Полюс питання відсутній!")}if(g<d.length){o.innerHTML=d[g],c.innerHTML=b[g];let t=c.firstElementChild;t.addEventListener("click",L),g+=1}else{let t=function(){let t=new Date,e=["січня","лтого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"].find((e,n)=>n===t.getMonth()),n={currentHours:t.getHours().toString().padStart(2,"0"),currentMinutes:t.getMinutes().toString().padStart(2,"0"),currentDays:t.getDate().toString().padStart(2,"0"),currentMonth:e,currentYear:t.getFullYear()};return n}();i.classList.remove("column-wrapper");let e=`<p class="user"> Тест пройшов</p>
    <p class="user">${y}</p>
    <p class="result"> Результат №1 = ${p/=10} </p>
    <p class="result"> Результат №2 = ${f/=10} </p>
    <p class="result"> Результат №3 = ${m/=10} </p>`;i.innerHTML=e;let n=`<div class="date">
        <span class="time">${t.currentHours}:${t.currentMinutes}</span>
         <spanclass="time">${t.currentDays} ${t.currentMonth} ${t.currentYear} року</span>
    </div>`;i.insertAdjacentHTML("beforeend",n)}}};l.addEventListener("input",t=>{y=t.target.value}),l.addEventListener("submit",t=>{t.preventDefault();let{elements:{name:e}}=t.currentTarget;if(""===e.value.trim())alert("Введіть прізвище, ім'я, по батькові, будь ласка.");else{t.currentTarget.reset(),l.style.display="none",u.style.display="flex",o.innerHTML=d[g-1],c.insertAdjacentHTML("afterbegin",b[g-1]);let e=c.firstElementChild;e.addEventListener("click",L)}});
//# sourceMappingURL=task-05.18108792.js.map
