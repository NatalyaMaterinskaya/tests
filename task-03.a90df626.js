var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},n=e.parcelRequiree8da;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in s){var n=s[e];delete s[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},e.parcelRequiree8da=n);var l=n("fMoMY"),a=n("h6ark"),r=n("gtiYd");const o=document.querySelector(".answer-btn-container"),i=function(e){let t=e.map(({id:e,num:t,question:s})=>`<li class="test-item" data-id=${e} data-num=${t}>
    <p class="test-item-text">${e}.${t}. ${s} </p>
  </li>`);return t}(l.thirdTestItems);let u=null,c=null,d=null,b=null,m=null,p=null,f=[],h=null,g=null,C=null,x=null,N=null,w=null,v=47;a.testsEl.innerHTML=i[v-1];const E=(function(){let e=[];for(let t=0;t<=10;t+=1)e.push(`<li class="btn-item">
        <button class="answer-btn" data-answer="${t}" type="button">${t}</button>
        </li>`);return e})().join("");function $(e){let{target:t}=e;if(!t.classList.contains("answer-btn"))return;let s=Number((u/h).toFixed(2)),n=Number((c/g).toFixed(2)),l=Number((d/C).toFixed(2)),o=Number((b/x).toFixed(2)),i=Number((m/N).toFixed(2)),f=Number((p/w).toFixed(2));console.log(typeof f);let v=((s+n+l+o+i+f)/6).toFixed(2),E=(0,r.getCurremtDate)(),$=`<p class="result"> Результат №1 = ${s} </p>
  <p class="result"> Результат №2 = ${n} </p>
  <p class="result"> Результат №3 = ${l} </p>
  <p class="result"> Результат №4 = ${o} </p>
  <p class="result"> Результат №5 = ${i} </p>
  <p class="result"> Результат №6 = ${f} </p>
  <b class="result"> Основний результат = ${v}</b>
  <div class="date">
      <span class="time">${E.currentHours}:${E.currentMinutes}</span>
       <spanclass="time">${E.currentDays} ${E.currentMonth} ${E.currentYear} року</span>
  </div>`;a.mainContainer.innerHTML=$}function y(e){let{target:t}=e;if("reason"===t.name&&(!0===t.checked&&(f.push(t.value),console.log(f)),!1===t.checked)){let e=f.indexOf(t.value);f.splice(e,1),console.log(f)}}function L(e){let{target:t}=e;"other"===t.name&&console.log(t.value)}o.insertAdjacentHTML("afterbegin",E),o.addEventListener("click",function e(t){let{target:s}=t;if(s.classList.contains("answer-btn")){if(1===Number(a.testsEl.firstChild.dataset.id)&&(u+=Number(s.dataset.answer),h=Number(a.testsEl.firstChild.dataset.num),console.log(v),console.log("firstCaseCounter "+u)),2===Number(a.testsEl.firstChild.dataset.id)&&(c+=Number(s.dataset.answer),g=Number(a.testsEl.firstChild.dataset.num),console.log(v),console.log("secondCaseCounter "+c)),3===Number(a.testsEl.firstChild.dataset.id)&&(d+=Number(s.dataset.answer),C=Number(a.testsEl.firstChild.dataset.num),console.log(v),console.log("thirdCaseCounter "+d)),4===Number(a.testsEl.firstChild.dataset.id)&&(b+=Number(s.dataset.answer),x=Number(a.testsEl.firstChild.dataset.num),console.log(v),console.log("fourtgaseCounter "+b)),5===Number(a.testsEl.firstChild.dataset.id)&&(m+=Number(s.dataset.answer),N=Number(a.testsEl.firstChild.dataset.num),console.log(v),console.log("fifthCaseCounter "+m)),6===Number(a.testsEl.firstChild.dataset.id)&&(p+=Number(s.dataset.answer),w=Number(a.testsEl.firstChild.dataset.num),console.log(v),console.log("sixthCaseCounter "+p)),v<i.length)a.testsEl.innerHTML=i[v],v+=1;else{o.removeEventListener("click",e);let t=[`<form class ="form-question">
  <p>Познач, чим обумовлена твоя готовність захищати Україну (обери два найбільш значущі для тебе твердження):</p>
  <label>
    <input class ="answer-box" type="checkbox" name="reason" value="Я – патріот"  />
  Я – патріот.
  </label>
  <label>
    <input class ="answer-box" type="checkbox" name="reason" value="Захищати незалежність, територіальну цілісність і суверенітет України – це мій громадянський обов’язок." />
Захищати незалежність, територіальну цілісність і суверенітет України – це мій громадянський обов’язок.
  </label>
  <label>
    <input class ="answer-box" type="checkbox" name="reason" value="Захищаю Український народ, свою національну культуру, мову, історію, традиції." />
    Захищаю Український народ, свою національну культуру, мову, історію, традиції. 
  </label>
    <label>
    <input class ="answer-box" type="checkbox" name="reason" value="Захищаю свій дім, рідних та близьких." />
    Захищаю свій дім, рідних та близьких.
  </label>
    <label>
    <input class ="answer-box" type="checkbox" name="reason" value="Прагну помститися за своїх побратимів, рідних та близьких." />
    Прагну помститися за своїх побратимів, рідних та близьких.
  </label>
    <label>
    <input class ="answer-box" type="checkbox" name="reason" value="Високий рівень грошового забезпечення." />
    Високий рівень грошового забезпечення. 
  </label>
    <label>
    <input class ="answer-box" type="text" name="other" placeholder='Інше'/>
  </label>
  <button class ="answer-btn" type="submit">Підтвердити</button>
</form>`];a.mainContainer.innerHTML=t,(0,a.mainContainer).addEventListener("change",y),(0,a.mainContainer).addEventListener("input",L),(0,a.mainContainer).addEventListener("submit",$)}}});
//# sourceMappingURL=task-03.a90df626.js.map
