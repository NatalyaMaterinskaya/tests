const t=[{question:"Я часто невпевнений у своїх силах."},{question:" Нерідко мені здається безвихідним становище, з якого можна було б знайти вихід."},{question:"Я часто залишаю за собою останнє слово."},{question:"Мені важко змінювати свої звички."},{question:"Я часто червонію через дрібниці."},{question:"Неприємності мене часто засмучують, і я впадаю у розпач."},{question:"Нерідко в розмові я перериваю співрозмовника."},{question:"Мені важко переключитися з однієї справи на іншу."},{question:"Я часто прокидаюся вночі."},{question:"При великих неприємностях я беру провину на себе."},{question:"Мене легко роздратувати."},{question:"Я дуже обережний у зміні свого життя."},{question:"Я легко впадаю у розпач."},{question:"Нещастя і невдачі нічого мене не вчать."},{question:"Мені доводиться часто робити зауваження іншим."},{question:"У суперечці мене важко переконати."},{question:"Я переймаюся навіть через уявні неприємності."},{question:"Я часто відмовляюся від боротьби тому, що вважаю її марною."},{question:"Я хочу бути авторитетом для оточення."},{question:"Нерідко не полишають думки, яких слід було б позбутися."},{question:"Мене лякають труднощі, з якими зіткнуся в житті."},{question:"Нерідко почуваюся беззахисним."},{question:"У будь-якій справі я не задовольняюся малим, а хочу досягти максимального успіху."},{question:"Я легко зближуюся з людьми."},{question:"Я часто звертаю увагу на свої недоліки."},{question:"Інколи у мене буває пригнічений настрій."},{question:"Мені важко стримувати себе, коли я гніваюсь."},{question:"Я дуже хвилююсь, якщо в моєму житті несподівано щось змінюється."},{question:"Мене легко переконати."},{question:"Я відчуваю розгубленість, коли у мене виникають труднощі."},{question:"Мені більше подобається керувати, а не підкорятися."},{question:"Нерідко я виявляю упертість."},{question:"Мене хвилює стан мого здоров'я."},{question:"У скрутні хвилини я іноді поводжуся, як дитина."},{question:"У мене різка жестикуляція."},{question:"Я неохоче йду на ризик."},{question:"Я важко витримую очікування чогось."},{question:"Я думаю, що ніколи не зможу виправити своїх недоліків."},{question:"Я - мстивий."},{question:"Мене засмучують навіть незначні порушення моїх планів."}];document.querySelector(".feedback-form");const e=document.querySelector(".container"),n=document.querySelector(".tests");document.querySelector(".answer-container");const s=document.querySelector(".answer-btn-container");!function(t){for(let e=1;e<=t.length;e+=1)t[e-1].id=e}(t);const u=function(t){let e=t.map(({id:t,question:e})=>`<li class="test-item">
    <p class="test-item-text"> ${t}. ${e} </p>
  </li>`);return e}(t);let i=null,o=null,r=null,a=null,c=1;const l=[1,5,9,13,17,21,25,29,33,37],q=[2,6,10,14,18,22,26,30,34,38],d=[3,7,11,15,19,23,27,31,35,39],p=[4,8,12,16,20,24,28,32,36,40];alert("ШАНОВНИЙ ВІЙСЬКОВОСЛУЖБОВЦЮ!  Під кожним твердженням ставте оцінку за таким принципом: якщо твердження Вам підходить - то 2, якщо не зовсім підходить - 1, якщо зовсім не підходить — 0."),n.innerHTML=u[c-1];const m=(function(){let t=[];for(let e=0;e<=2;e+=1)t.push(`<li class="btn-item">
        <button class="answer-btn" data-answer="${e}" type="button">${e}</button>
        </li>`);return t})().join("");s.insertAdjacentHTML("afterbegin",m),s.addEventListener("click",function(t){let{target:s}=t;if(s.classList.contains("answer-btn")){if(l.includes(c)&&(i+=Number(s.dataset.answer)),q.includes(c)&&(o+=Number(s.dataset.answer)),d.includes(c)&&(r+=Number(s.dataset.answer)),p.includes(c)&&(a+=Number(s.dataset.answer)),c<u.length)n.innerHTML=u[c],c+=1;else{let t=function(){let t=new Date,e=["січня","лтого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"].find((e,n)=>n===t.getMonth()),n={currentHours:t.getHours().toString().padStart(2,"0"),currentMinutes:t.getMinutes().toString().padStart(2,"0"),currentDays:t.getDate().toString().padStart(2,"0"),currentMonth:e,currentYear:t.getFullYear()};return n}(),n=`<p class="result"> Результат №I = ${i} </p>
  <p class="result"> Результат №II = ${o} </p>
  <p class="result"> Результат №III = ${r} </p>
  <p class="result"> Результат №IV = ${a} </p>
  <b class="result"> Основний результат = ${i+o+r+a}</b>
  <div class="date">
      <span class="time">${t.currentHours}:${t.currentMinutes}</span>
      <span class="time">${t.currentDays} ${t.currentMonth} ${t.currentYear} року</span>
  </div>`;e.innerHTML=n}}});
//# sourceMappingURL=task-08.653ea1d0.js.map
