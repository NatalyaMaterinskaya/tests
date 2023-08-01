var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},l=e.parcelRequiree8da;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in s){var l=s[e];delete s[e];var n={id:e,exports:{}};return t[e]=n,l.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},e.parcelRequiree8da=l);var n=l("fMoMY"),r=l("h6ark"),a=l("gtiYd");const o=document.querySelector(".answer-btn-container"),i=function(e){let t=e.map(({id:e,num:t,question:s})=>`<li class="test-item" data-id=${e} data-num=${t}>
    <p class="test-item-text">${e}.${t}. ${s} </p>
  </li>`);return t}(n.thirdTestItems);let u=null,d=null,c=null,m=null,f=null,b=null,p=null,C=null,N=null,g=null,h=null,$=null,E=1;r.testsEl.innerHTML=i[E-1];const w=(function(){let e=[];for(let t=0;t<=10;t+=1)e.push(`<li class="btn-item">
        <button class="answer-btn" data-answer="${t}" type="button">${t}</button>
        </li>`);return e})().join("");o.insertAdjacentHTML("afterbegin",w),o.addEventListener("click",e=>{let{target:t}=e;if(t.classList.contains("answer-btn")){if(1===Number(r.testsEl.firstChild.dataset.id)&&(u+=Number(t.dataset.answer),p=Number(r.testsEl.firstChild.dataset.num),console.log(E),console.log("firstCaseCounter "+u)),2===Number(r.testsEl.firstChild.dataset.id)&&(d+=Number(t.dataset.answer),C=Number(r.testsEl.firstChild.dataset.num),console.log(E),console.log("secondCaseCounter "+d)),3===Number(r.testsEl.firstChild.dataset.id)&&(c+=Number(t.dataset.answer),N=Number(r.testsEl.firstChild.dataset.num),console.log(E),console.log("thirdCaseCounter "+c)),4===Number(r.testsEl.firstChild.dataset.id)&&(m+=Number(t.dataset.answer),g=Number(r.testsEl.firstChild.dataset.num),console.log(E),console.log("fourtgaseCounter "+m)),5===Number(r.testsEl.firstChild.dataset.id)&&(f+=Number(t.dataset.answer),h=Number(r.testsEl.firstChild.dataset.num),console.log(E),console.log("fifthCaseCounter "+f)),6===Number(r.testsEl.firstChild.dataset.id)&&(b+=Number(t.dataset.answer),$=Number(r.testsEl.firstChild.dataset.num),console.log(E),console.log("sixthCaseCounter "+b)),E<i.length)r.testsEl.innerHTML=i[E],E+=1;else{let e=Number((u/p).toFixed(2)),t=Number((d/C).toFixed(2)),s=Number((c/N).toFixed(2)),l=Number((m/g).toFixed(2)),n=Number((f/h).toFixed(2)),o=Number((b/$).toFixed(2));console.log(typeof o);let i=((e+t+s+l+n+o)/6).toFixed(2),E=(0,a.getCurremtDate)(),w=`<p class="result"> Результат №1 = ${e} </p>
    <p class="result"> Результат №2 = ${t} </p>
    <p class="result"> Результат №3 = ${s} </p>
    <p class="result"> Результат №4 = ${l} </p>
    <p class="result"> Результат №5 = ${n} </p>
    <p class="result"> Результат №6 = ${o} </p>
    <b class="result"> Основний результат = ${i}</b>
    <div class="date">
        <span class="time">${E.currentHours}:${E.currentMinutes}</span>
         <spanclass="time">${E.currentDays} ${E.currentMonth} ${E.currentYear} року</span>
    </div>`;r.mainContainer.innerHTML=w}}});
//# sourceMappingURL=task-03.590b23f0.js.map
