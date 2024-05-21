const e=[{question:"Як Ви вважаєте, чи може життя втратити цінність для людини в певній ситуації?"},{question:"Життя іноді гірше смерті."},{question:"У минулому в мене була спроба піти з життя."},{question:"Мене багато хто любить, розуміє та цінує."},{question:"Можна виправдати безнадійно хворих, що обрали добровільну смерть."},{question:"Я не думаю, що сам можу опинитися в безнадійному становищі."},{question:"Сенс життя не завжди буває ясний, його можна іноді втратити або не знайти."},{question:"Як Ви вважаєте, опинившись у ситуації, коли Вас зрадили близькі та рідні, Ви зможете жити далі?"},{question:"Я іноді думаю про свою добровільну смерть."},{question:"У будь-якій ситуації я буду боротися за своє життя, чого б мені це не коштувало."},{question:"Завжди і скрізь намагаюся бути абсолютно чесною людиною."},{question:"У мене, в принципі, немає недоліків."},{question:"Можливо, далі я жити не зможу."},{question:"Дивно, що деякі люди, опинившись у безвихідному становищі, не хочуть покінчити з життям."},{question:"Почуття приреченості в підсумку призводить до добровільного позбавлення себе життя."},{question:"Якщо буде потрібно, то можна виправдати позбавлення себе життя."},{question:"Мені не подобається грати зі смертю наодинці"},{question:"Часто перше враження про людину є визначальним."},{question:"Я пробував різні способи позбавлення себе життя."},{question:"У критичний момент я завжди можу впоратися з собою."},{question:"У школі я завжди відрізнявся (відрізнялася) тільки гарною поведінкою."},{question:"Можу обманювати оточуючих, щоб погіршити своє становище."},{question:"Навколо мене досить багато нечесних людей."},{question:"Одного разу я обирав декілька способів покінчити з життям."},{question:"Досить часто мене намагаються обдурити або ввести в оману."},{question:"Я б не хотів моментальної смерті після важких переживань."},{question:"Я продовжив би жити далі, якби трапилася світова ядерна війна."},{question:"Людина вільна чинити зі своїм життям так, як їй хочеться, навіть якщо вона обирає смерть."},{question:"Якщо людина не вміє подати себе у вигідному ракурсі перед керівництвом, то вона багато чого втрачає."},{question:"Нікому й ніколи не писав передсмертну записку."},{question:"Одного разу намагався накласти на себе руки."},{question:"Ніколи не буває безвихідних ситуацій."},{question:"Пробував покінчити з життям таким чином, щоб не відчувати сильного болю."},{question:"Треба вміти приховувати свої думки від інших, навіть якщо вони до мене байдужі."},{question:"Душа людини напевно відчуває полегшення, якщо сама залишає цей світ."},{question:"Можу виправдати будь-який свій вчинок."},{question:"Якщо я щось роблю, а мені починають заважати, то я все одно буду робити те, що задумав."},{question:"Щоб людині позбутися від невиліковної хвороби та перестати мучитися, вона, напевно, повинна сама припинити свої страждання та піти з цього життя добровільно."},{question:"Буває, сумніваюся в психічному здоров’ї деяких моїх знайомих."},{question:"Одного разу наважувався покінчити з життям."},{question:"Мене турбує відсутність відчуття щастя."},{question:"Я ніколи не йду на порушення закону, навіть у дрібницях."},{question:"Іноді мені хочеться заснути й не прокинутися."},{question:"Одного разу мені було дуже соромно через те, що хотілося піти з життя."},{question:"Навіть у найважчій ситуації я буду боротися за своє життя, чого б мені це не коштувало."}],t=document.querySelector(".feedback-form"),n=document.querySelector(".container"),s=document.querySelector(".tests"),u=document.querySelector(".answer-container");!function(e){for(let t=1;t<=e.length;t+=1)e[t-1].id=t}(e);const i=function(e){let t=e.map(({id:e,question:t})=>`<li class="test-item">
    <p class="test-item-text"> ${e}. ${t} </p>
  </li>`);return t}(e);let o=0,r=0,a=1,l=null,q=null,c=null;const d=[11,12,18,21,23,25,29,34,39],p=[42],g=[1,2,3,5,7,9,13,14,15,16,19,22,24,28,31,33,35,36,37,38,40,41,43,44],m=[4,6,8,10,17,20,26,27,30,32,45];alert("Інструкція: Вам будуть запропоновані твердження, які стосуються Вашого здоров’я та характеру. Якщо Ви згодні з твердженням, натисніть “Так”, якщо ні – натисніть “Ні”. Над відповідями намагайтеся довго не замислюватися, правильних або неправильних відповідей немає."),t.addEventListener("input",e=>{l=e.target.value}),t.addEventListener("submit",e=>{e.preventDefault();let{elements:{name:n}}=e.currentTarget;""===n.value.trim()?alert("Введіть прізвище, ім'я, по батькові, будь ласка."):(console.log(l),e.currentTarget.reset(),t.style.display="none",s.innerHTML=i[a-1],u.style.display="flex")}),u.addEventListener("click",e=>{let{target:t}=e;if(t.classList.contains("answer-btn")){if("yes"===e.target.dataset.answer&&(d.includes(a)&&(o+=1),g.includes(a)&&(r+=1)),"no"===e.target.dataset.answer&&(p.includes(a)&&(o+=1),m.includes(a)&&(r+=1)),a<i.length)s.innerHTML=i[a],a+=1;else{let e=function(){let e=new Date,t=["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"].find((t,n)=>n===e.getMonth()),n={currentHours:e.getHours().toString().padStart(2,"0"),currentMinutes:e.getMinutes().toString().padStart(2,"0"),currentDays:e.getDate().toString().padStart(2,"0"),currentMonth:t,currentYear:e.getFullYear()};return n}();o=(o/10).toFixed(2),r=(r/35).toFixed(2),q=o<.6?"+":"-",.01<=r&&r<=.23?c=5:.24<=r&&r<=.38?c=4:.39<=r&&r<=.59?c=3:.6<=r&&r<=.74?c=2:.75<=r&&r<=1&&(c=1);let t=`<p class="user"> Тест пройшов/пройшла</p>
     <p class="user">${l}</p>
     <p class="result"> Результат №1 = ${o} </p>
     <b class="result"> ${q} </b>
     <p class="result"> Результат №2 = ${r} </p>
     <b class="result"> ${c}</b>
    <div class="date">
        <span class="time">${e.currentHours}:${e.currentMinutes}</span>
         <spanclass="time">${e.currentDays} ${e.currentMonth} ${e.currentYear} року</span>
    </div>`;n.innerHTML=t}}});
//# sourceMappingURL=task-11.4f2f4ebd.js.map
