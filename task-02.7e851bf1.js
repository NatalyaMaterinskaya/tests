var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},n=e.parcelRequiree8da;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in s){var n=s[e];delete s[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},e.parcelRequiree8da=n);var l=n("fMoMY"),r=n("h6ark"),a=n("gtiYd");!function(e){for(let t=1;t<=e.length;t+=1)e[t-1].id=t}(l.secondTestItems);const i=function(e){let t=e.map(({id:e,question:t})=>`<li class="test-item">
    <p class="test-item-text"> ${e}. ${t} </p>
  </li>`);return t}(l.secondTestItems);let u=0,c=0,d=0,o=0,p=0,f=0,m=0,g=1,$=null;const v=[1,10,19,31,51,69,78,92,101,116,128,138,148],b=[4,6,7,8,11,12,15,16,17,18,20,21,28,29,30,36,37,39,40,41,47,57,60,63,65,67,68,70,73,80,82,83,84,86,89,94,95,96,98,102,103,108,109,110,111,112,113,115,117,118,119,120,122,123,124,125,127,129,131,135,136,137,139,143,146,149,153,154,155,156,157,158,161,162],E=[2,3,5,23,25,32,38,44,45,52,53,54,55,58,62,66,75,87,105,132,134,140],y=[9,24,27,43,46,61,64,81,88,90,99,104,106,114,121,126,133,142,151,152],T=[26,34,35,48,49,74,85,107,130,144,147,159],w=[14,22,33,42,50,56,59,71,72,77,79,91,93,141,145,150,164,165],L=[13,76,97,100,160,163],M=[166,167,168,169,170,172,173,174,175,176,177,179,180,181,183,184,185,186,187,188,190],h=[171,178,182,189],x=[6,9,14,15,22,36,39,42,47,50,56,59,71,72,91,93,117,127,141,145,151,152,164,191,192,193,194,195,196,197,198,199,200],D=[13,100,163],H=[4,8,10,28,29,39,41,47,70,84,115,119,124,136,137,149,154,155],q=[32,105];alert("Інструкція:  „Зараз досліджуватимуться деякі Ваші особистісні особливості. Опитувальник містить 200 тверджень (питань) про життя, роботу, відносини у сім'ї, інтереси і схильності. Ваше завдання полягає у тому, щоб визначити своє відношення до кожного ствердження, тобто погодитися або не погодитися з ним. Якщо Ви погоджуєтеся з ствердженням, то під відповідним питанням натискаєте кнопку „Так”. Якщо Ви не згодні – натискаєте „Ні”. Правильних або неправильних відповідей тут бути не може, тому довго не замислюйтеся над питанням – давайте відповідь, виходячи з того, що більше відповідає Вашому характеру або уявленню про самого себе”."),(0,r.formEl).addEventListener("input",e=>{$=e.target.value}),(0,r.formEl).addEventListener("submit",e=>{e.preventDefault();let{elements:{name:t}}=e.currentTarget;""===t.value.trim()?alert("Введіть прізвище, ім'я, по батькові, будь ласка."):(console.log($),e.currentTarget.reset(),r.formEl.style.display="none",r.testsEl.innerHTML=i[g-1],r.btnEl.style.display="flex")}),(0,r.btnEl).addEventListener("click",e=>{let{target:t}=e;if(t.classList.contains("answer-btn")){if("yes"===e.target.dataset.answer&&(b.includes(g)&&(c+=1),y.includes(g)&&(d+=1),w.includes(g)&&(o+=1),M.includes(g)&&(p+=1),x.includes(g)&&(f+=1),H.includes(g)&&(m+=1)),"no"===e.target.dataset.answer&&(v.includes(g)&&(u+=1),E.includes(g)&&(c+=1),T.includes(g)&&(d+=1),L.includes(g)&&(o+=1),h.includes(g)&&(p+=1),D.includes(g)&&(f+=1),q.includes(g)&&(m+=1)),g<i.length)r.testsEl.innerHTML=i[g],g+=1;else{let e=c+d+o,t=(0,a.getCurremtDate)(),s=`<p class="user"> Тест пройшов/пройшла</p>
    <p class="user">${$}</p>
    <b class="result"> Результат №1 = ${u} </b>
    <p class="result"> Результат №2 = ${c} </p>
    <p class="result"> Результат №3 = ${d} </p>
    <p class="result"> Результат №4 = ${o} </p>
    <p class="result"> Результат №5 = ${p} </p>
    <p class="result"> Результат №6 = ${f} </p>
    <p class="result"> Результат №7 = ${m} </p>
    <b class="result"> Основний результат = ${e}</b>
    <div class="date">
        <span class="time">${t.currentHours}:${t.currentMinutes}</span>
         <spanclass="time">${t.currentDays} ${t.currentMonth} ${t.currentYear} року</span>
    </div>`;r.mainContainer.innerHTML=s}}});
//# sourceMappingURL=task-02.7e851bf1.js.map
