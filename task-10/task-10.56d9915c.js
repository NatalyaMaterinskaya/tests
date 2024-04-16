const t=[{question:"Відданість Україні, патріотизм"},{question:"Рівень поваги підлеглих до командира (начальника)"},{question:"Рівень довіри підлеглих до командира (начальника)"},{question:"Чесність і порядність"},{question:"Справедливість"},{question:"Вимогливість "},{question:"Надійність, обов’язковість "},{question:"Самовладання, стійкість"},{question:"Бере на себе відповідальність"},{question:"Рішучість"},{question:"Сміливість"},{question:"Старанність і добросовісність"},{question:"Принциповість, вміння відстоювати власну думку"},{question:"Знання техніки й озброєння"},{question:"Вміння управляти підлеглими "},{question:"Знання своїх підлеглих"},{question:"Зразковість і приклад у поведінці, дисциплінованість"},{question:"Уважне ставлення до потреб підлеглих, турбота про них"},{question:"Прагнення досягти результату, наполегливість. Втілення рішень у реальність"},{question:"Вміння спілкуватися, товариськість"},{question:"Інтелект, ерудованість"},{question:"Рівень фізичного стану"},{question:"Володіння емоціями і волею"},{question:"Рівень культури й етики "},{question:"Вміння вести за собою"},{question:"Вміння визначати мету"},{question:"Прагнення вдосконалювати процеси, діяти нешаблонно"},{question:"Впровадження нових підходів, прагнення змін на краще"},{question:"Вміння слухати і чути"},{question:"Вміння згуртовувати людей"},{question:"Забезпечення відпочинку людей"},{question:"Ініціативність, активність"},{question:"Доступність і щирість"},{question:"Дотримання моральних цінностей"},{question:"Розвиток і навчання підлеглих"},{question:"Показує приклад дій"},{question:"Опирається на довіру до людей "},{question:"Заохочує і мотивує підлеглих "},{question:"Надає допомогу "},{question:"Дотримання даного слова й обіцянок"}];document.querySelector(".feedback-form");const e=document.querySelector(".container");document.querySelector(".tests"),document.querySelector(".answer-container"),function(t){for(let e=1;e<=t.length;e+=1)t[e-1].id=e}(t);const n=function(t){let e=t.map(({id:t,question:e})=>`<p class="test-item-text">${t}. ${e} </p>
      <ul class="button-list">
      <li class="button-item">
        <button class="btn" type="button">0</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button">1</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button">2</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button">3</button>
      </li>
            <li class="button-item">
        <button class="btn" type="button">4</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button">5</button>
      </li>
    </ul>`);return e}(t);let s=null,u=null,o=null,i=1;alert("Інструкція: Шановний експерте! Вам потрібно оцінити запропоновані твердження за 5-бальною шкалою, де 0 – найнижча оцінка (рівень), 5 – найвища оцінка (рівень). Питання стосуються оцінювання рівня авторитету визначеного командира (начальника). Опитування анонімне."),e.innerHTML=n[i-1];const l=e.lastElementChild;l.addEventListener("click",function t(l){let{target:r}=l;if(r.classList.contains("btn")){if(i<=20&&(s+=Number(r.textContent)),i>20&&(u+=Number(r.textContent)),i<n.length){e.innerHTML=n[i],i+=1;let s=e.lastElementChild;s.addEventListener("click",t)}else{o=((s/20+u/20)/2).toFixed(2);let t=function(){let t=new Date,e=["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"].find((e,n)=>n===t.getMonth()),n={currentHours:t.getHours().toString().padStart(2,"0"),currentMinutes:t.getMinutes().toString().padStart(2,"0"),currentDays:t.getDate().toString().padStart(2,"0"),currentMonth:e,currentYear:t.getFullYear()};return n}(),n=`<p class="result"> Результат №I = ${(s/20).toFixed(2)} </p>
                    <p class="result"> Результат №II = ${(u/20).toFixed(2)} </p>
                      <b class="result"> Основний результат = ${o}</b>
                      <div class="date">
                        <span class="time">${t.currentHours}:${t.currentMinutes}</span>
                        <span class="time">${t.currentDays} ${t.currentMonth} ${t.currentYear} року</span>
                        </div>
                    `;e.innerHTML=n}}});
//# sourceMappingURL=task-10.56d9915c.js.map
