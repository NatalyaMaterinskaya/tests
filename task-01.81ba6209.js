var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequiree8da;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,r.call(s.exports,s,s.exports),s.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequiree8da=r);var s=r("fMoMY");const a=document.querySelector(".feedback-form"),l=document.querySelector(".container"),i=document.querySelector(".tests"),u=document.querySelector(".answer-container");!function(e){for(let t=1;t<=e.length;t+=1)e[t-1].id=t}(s.firstTestItems);const o=function(e){let t=e.map(({id:e,question:t})=>`<li class="test-item">
    <p class="test-item-text"> ${e}. ${t} </p>
  </li>`);return t}(s.firstTestItems);let c=0,d=0,p=0,f=1,g=null;const m=[4,5,6,7,8,9,10,12,13,14,15,17,18,19,20,22,23,24,27,28,29,31,32,33,34,35,36,37,39,40,41,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,63,64,65,66,68,69,70,71,72,73,74,76,77],y=[1,2,3,11,16,21,25,26,30,38,42,62,67,75],v=[6,7,12,13,14,18,27,31,32,33,34,37,41,43,46,48,49,51,52,53,55,57,58,59,60,61,63,64,71,72,73,74],M=[1,2,9,11,21,25,26,30,38,42,67],$=[3,4,5,8,10,15,17,19,20,22,23,24,28,29,35,36,39,40,44,45,47,50,54,56,65,66,68,69,70,76,77],w=[16,62,75];alert("Інструкція: „Зараз Вам буде запропоновано відповісти тільки „Так” (+) або „Ні”  (-) на ряд питань. Питання стосуються безпосередньо Вашого самопочуття, поведінки або характеру. „Правильних” або „неправильних” відповідей тут бути не може, тому не намагайтеся довго їх обдумувати або радитися з товаришами – давайте відповідь виходячи з того, що більше відповідає Вашому стану або уявленню про самого себе. "),a.addEventListener("input",e=>{g=e.target.value}),a.addEventListener("submit",e=>{e.preventDefault();let{elements:{name:t}}=e.currentTarget;""===t.value.trim()?alert("Введіть прізвище, ім'я, по батькові, будь ласка."):(console.log(g),e.currentTarget.reset(),a.style.display="none",i.innerHTML=o[f-1],u.style.display="flex")}),u.addEventListener("click",e=>{let{target:t}=e;if(t.classList.contains("answer-btn")){if("yes"===e.target.dataset.answer&&(m.includes(f)&&(c+=1),v.includes(f)&&(d+=1),$.includes(f)&&(p+=1)),"no"===e.target.dataset.answer&&(y.includes(f)&&(c+=1),M.includes(f)&&(d+=1),w.includes(f)&&(p+=1)),f<o.length)i.innerHTML=o[f],f+=1;else{let e=function(){let e=new Date,t=["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"].find((t,n)=>n===e.getMonth()),n={currentHours:e.getHours().toString().padStart(2,"0"),currentMinutes:e.getMinutes().toString().padStart(2,"0"),currentDays:e.getDate().toString().padStart(2,"0"),currentMonth:t,currentYear:e.getFullYear()};return n}(),t=`<p class="user"> Тест пройшов/пройшла</p>
     <p class="user">${g}</p>
    <p class="result"> Результат №1 = ${c} </p>
    <p class="result"> Результат №2 = ${d} </p>
    <p class="result"> Результат №3 = ${p} </p>
    <div class="date">
        <span class="time">${e.currentHours}:${e.currentMinutes}</span>
         <spanclass="time">${e.currentDays} ${e.currentMonth} ${e.currentYear} року</span>
    </div>`;l.innerHTML=t}}});
//# sourceMappingURL=task-01.81ba6209.js.map
