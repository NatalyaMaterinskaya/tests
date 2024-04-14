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
    </ul>`);return n}(t);let o=null,s=null,u=1;n.innerHTML=e[u-1];const i=document.querySelector(".button-list");i.addEventListener("click",function(t){let{target:i}=t;if(i.classList.contains("btn")){if(u<=20&&(console.log("1"),o+=Number(i.textContent)),u>20&&(console.log("2"),s+=Number(i.textContent)),u<e.length)n.innerHTML=e[u],u+=1;else{let t=`<p class="result"> Результат №I = ${o} </p>
  <p class="result"> Результат №II = ${s} </p>`;n.innerHTML=t}}});
//# sourceMappingURL=task-10.2d15e4e6.js.map
