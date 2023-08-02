var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},n=e.parcelRequiree8da;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in s){var n=s[e];delete s[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},e.parcelRequiree8da=n);var r=n("fMoMY"),a=n("h6ark"),l=n("gtiYd");const i=document.querySelector(".answer-btn-container"),u=function(e){let t=e.map(({id:e,num:t,question:s})=>`<li class="test-item" data-id=${e} data-num=${t}>
    <p class="test-item-text">${e}.${t}. ${s} </p>
  </li>`);return t}(r.thirdTestItems);let d=null,o=null,c=null,m=null,p=null,f=null,b=[],N="",h=null,E=null,$=null,C=null,v=null,w=null,g=1;alert("ШАНОВНИЙ ВІЙСЬКОВОСЛУЖБОВЦЮ! Твоє завдання: оцінити твердження за 10-ти бальною шкалою, де 0 – найнижча оцінка (рівень), 10 – найвища оцінка (рівень). Питання стосуються оцінки твого власного стану і сприйняття дійсності. Пам’ятай, що твої відповіді не є поганими чи хорошими. Будь-яка відповідь – правильна. Опитування анонімне, прізвище вказувати не обов’язково."),a.testsEl.innerHTML=u[g-1];const x=(function(){let e=[];for(let t=0;t<=10;t+=1)e.push(`<li class="btn-item">
        <button class="answer-btn" data-answer="${t}" type="button">${t}</button>
        </li>`);return e})().join("");function L(e){e.preventDefault();let t=Number((d/h).toFixed(2)),s=Number((o/E).toFixed(2)),n=Number((c/$).toFixed(2)),r=Number((m/C).toFixed(2)),i=Number((p/v).toFixed(2)),u=Number((f/w).toFixed(2));console.log(typeof u);let g=((t+s+n+r+i+u)/6).toFixed(2),x=(0,l.getCurremtDate)(),L=`<p class="result"> Результат №1 = ${t} </p>
  <p class="result"> Результат №2 = ${s} </p>
  <p class="result"> Результат №3 = ${n} </p>
  <p class="result"> Результат №4 = ${r} </p>
  <p class="result"> Результат №5 = ${i} </p>
  <p class="result"> Результат №6 = ${u} </p>
  <p class="result"> Результат №7:</p>
      <p class="result">${b.join("")}</p>
      <p class="result">${N}</p>
  <b class="result"> Основний результат = ${g}</b>
  <div class="date">
      <span class="time">${x.currentHours}:${x.currentMinutes}</span>
       <spanclass="time">${x.currentDays} ${x.currentMonth} ${x.currentYear} року</span>
  </div>`;a.mainContainer.innerHTML=L}function M(e){let{target:t}=e;if("reason"===t.name&&(!0===t.checked&&b.push(t.value),!1===t.checked)){let e=b.indexOf(t.value);b.splice(e,1)}}function F(e){let{target:t}=e;"other"===t.name&&(N=t.value)}i.insertAdjacentHTML("afterbegin",x),i.addEventListener("click",function e(t){let{target:s}=t;s.classList.contains("answer-btn")&&(1===Number(a.testsEl.firstChild.dataset.id)&&(d+=Number(s.dataset.answer),h=Number(a.testsEl.firstChild.dataset.num)),2===Number(a.testsEl.firstChild.dataset.id)&&(o+=Number(s.dataset.answer),E=Number(a.testsEl.firstChild.dataset.num)),3===Number(a.testsEl.firstChild.dataset.id)&&(c+=Number(s.dataset.answer),$=Number(a.testsEl.firstChild.dataset.num)),4===Number(a.testsEl.firstChild.dataset.id)&&(m+=Number(s.dataset.answer),C=Number(a.testsEl.firstChild.dataset.num)),5===Number(a.testsEl.firstChild.dataset.id)&&(p+=Number(s.dataset.answer),v=Number(a.testsEl.firstChild.dataset.num)),6===Number(a.testsEl.firstChild.dataset.id)&&(f+=Number(s.dataset.answer),w=Number(a.testsEl.firstChild.dataset.num)),g<u.length?(a.testsEl.innerHTML=u[g],g+=1):(i.removeEventListener("click",e),a.mainContainer.innerHTML=r.markupForSevenBlock,(0,a.mainContainer).addEventListener("change",M),(0,a.mainContainer).addEventListener("input",F),(0,a.mainContainer).addEventListener("submit",L)))});
//# sourceMappingURL=task-03.0e1e00b6.js.map
