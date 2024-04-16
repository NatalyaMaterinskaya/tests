const t=[{question:"Відданість Україні, патріотизм"},{question:"Рівень поваги підлеглих до командира (начальника)"},{question:"Рівень довіри підлеглих до командира (начальника)"},{question:"Чесність і порядність"},{question:"Справедливість"},{question:"Вимогливість "},{question:"Надійність, обов’язковість "},{question:"Самовладання, стійкість"},{question:"Бере на себе відповідальність"},{question:"Рішучість"},{question:"Сміливість"},{question:"Старанність і добросовісність"},{question:"Принциповість, вміння відстоювати власну думку"},{question:"Знання техніки й озброєння"},{question:"Вміння управляти підлеглими "},{question:"Знання своїх підлеглих"},{question:"Зразковість і приклад у поведінці, дисциплінованість"},{question:"Уважне ставлення до потреб підлеглих, турбота про них"},{question:"Прагнення досягти результату, наполегливість. Втілення рішень у реальність"},{question:"Вміння спілкуватися, товариськість"},{question:"Інтелект, ерудованість"},{question:"Рівень фізичного стану"},{question:"Володіння емоціями і волею"},{question:"Рівень культури й етики "},{question:"Вміння вести за собою"},{question:"Вміння визначати мету"},{question:"Прагнення вдосконалювати процеси, діяти нешаблонно"},{question:"Впровадження нових підходів, прагнення змін на краще"},{question:"Вміння слухати і чути"},{question:"Вміння згуртовувати людей"},{question:"Забезпечення відпочинку людей"},{question:"Ініціативність, активність"},{question:"Доступність і щирість"},{question:"Дотримання моральних цінностей"},{question:"Розвиток і навчання підлеглих"},{question:"Показує приклад дій"},{question:"Опирається на довіру до людей "},{question:"Заохочує і мотивує підлеглих "},{question:"Надає допомогу "},{question:"Дотримання даного слова й обіцянок"}];document.querySelector(".feedback-form");const n=document.querySelector(".container");document.querySelector(".tests"),document.querySelector(".answer-container"),function(t){for(let n=1;n<=t.length;n+=1)t[n-1].id=n}(t);const e=function(t){let n=t.map(({id:t,question:n})=>`<p class="test-item-text">${t}. ${n} </p>
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
    </ul>`);return n}(t);let s=null,u=null,o=null,i=1;alert("Інструкція: Шановний експерте! Вам потрібно оцінити запропоновані твердження за 5-бальною шкалою, де 0 – найнижча оцінка (рівень), 5 – найвища оцінка (рівень). Питання стосуються оцінювання рівня авторитету визначеного командира (начальника). Опитування анонімне."),n.innerHTML=e[i-1];const l=n.lastElementChild;l.addEventListener("click",function t(l){let{target:r}=l;if(r.classList.contains("btn")){if(i<=20&&(s+=Number(r.textContent)),i>20&&(u+=Number(r.textContent)),i<e.length){n.innerHTML=e[i],i+=1;let s=n.lastElementChild;s.addEventListener("click",t)}else{o=(s/20+u/20)/2;let t=function(){let t=new Date,n=["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"].find((n,e)=>e===t.getMonth()),e={currentHours:t.getHours().toString().padStart(2,"0"),currentMinutes:t.getMinutes().toString().padStart(2,"0"),currentDays:t.getDate().toString().padStart(2,"0"),currentMonth:n,currentYear:t.getFullYear()};return e}(),e=`<p class="result"> Результат №I = ${s/20} </p>
                    <p class="result"> Результат №II = ${u/20} </p>
                      <b class="result"> Основний результат = ${o}</b>
                      <div class="date">
                        <span class="time">${t.currentHours}:${t.currentMinutes}</span>
                        <span class="time">${t.currentDays} ${t.currentMonth} ${t.currentYear} року</span>
                        </div>
                    `;n.innerHTML=e}}});
//# sourceMappingURL=task-10.b4bc75e8.js.map
