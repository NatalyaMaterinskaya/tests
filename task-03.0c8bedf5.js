const e=document.querySelector(".feedback-form");document.querySelector(".container");const i=document.querySelector(".tests");function t(e){let i=e.map(({id:e,question:i})=>`<li class="test-item">
    <p class="test-item-text"> ${e}. ${i} </p>
  </li>`);return i}document.querySelector(".answer-container"),btnEl=document.querySelector(".answer-btn-container");const n=t([{id:1.1,question:"Рівень задоволеності цінностями (віра, любов, повага, довіра тощо) та їх вплив на цілі життєдіяльності, служби та засоби їх досягнення."},{id:1.2,question:"Дотримання моральних принципів і норм в умовах службової, навчальної (навчально-бойової), бойової діяльності."},{id:1.3,question:"Сформованість моральних якостей і національних переконань (гідність, патріотизм, відданість, доброта, обов’язковість тощо)."},{id:1.4,question:"Ступінь згуртованості, сумісності і злагодженості вашого підрозділу."},{id:1.5,question:"Задоволеність наявністю традицій, побратимства між різними категоріями військовослужбовців."},{id:1.6,question:"Рівень довіри до керівництва країни."},{id:1.7,question:"Рівень довіри до Міністерства оборони України."},{id:1.8,question:"Рівень довіри до Генерального штабу Збройних Сил України."},{id:1.9,question:"Рівень довіри до командування виду Збройних Сил України."},{id:1.1,question:"Рівень довіри до командування оперативного (повітряного) командування."},{id:1.11,question:"Рівень довіри до командування твоєї військової частини."},{id:1.12,question:"Рівень довіри і поваги до командира підрозділу."}]);t([{id:2.1,question:"Ступінь прояву позитивних емоцій (інтерес, радість, довіра, любов, віра, ентузіазм тощо)."},{id:2.2,question:"Ступінь прояву нейтральних емоцій (байдужість, провина, сором, тривожність тощо)."},{id:2.3,question:"Ступінь прояву негативних емоцій (горе, зневага, злість, печаль, страх, паніка тощо)."},{id:2.4,question:"Ступінь відповідальності за прийняті рішення та результат своєї діяльності."},{id:2.5,question:"Сформованість вольових якостей (витримка, наполегливість, рішучість тощо)."},{id:2.6,question:"Рівень психологічної стійкості до впливу негативних чинників бойової (екстремальної) обстановки."},{id:2.7,question:"Оцінка свого вміння управляти діями, із яких складається виконання ваших професійних функцій та обов’язків."}]),t([{id:3.2,question:"Розуміння сенсу і мети службової (навчальної, навчально-бойової), бойової діяльності."},{id:3.3,question:"Рівень справедливості рішень безпосереднього командира."},{id:3.4,question:"Задоволеність станом військової дисципліни і правопорядку."},{id:3.5,question:"Рівень згуртованості, сумісності і злагодженості особового складу твого підрозділу."},{id:3.6,question:"Наявність традицій, рівень братерства між військовослужбовцями."}]),t([{id:4.1,question:"Самопочуття (комфортність) перебування у військовій частині (підрозділі)."},{id:4.2,question:"Власне фізичне самопочуття за останній місяць."},{id:4.3,question:"Власне психологічне самопочуття за останній місяць."},{id:4.4,question:"Задоволеність рівнем організації бойової підготовки у військовій частині (підрозділі)."},{id:4.5,question:"Задоволеність рівнем організації психологічної підготовки у військовій частині (підрозділі)."},{id:4.6,question:"Задоволеність рівнем організації національно-патріотичної підготовки у військовій частині (підрозділі)."},{id:4.7,question:"Здатність і можливість керувати своїми діями та станом у ситуаціях, а також здійснювати вплив на своїх співслужбовців (підлеглих)."},{id:4.8,question:"Рівень адекватного реагування тобою на обстановку, що різко змінюється."}]),t([{id:5.1,question:"Рівень твоїх знань і уявлень про особливості службової (навчальної, навчально-бойової), бойової діяльності та вимог до неї."},{id:5.2,question:"Рівень твоїх фахових знань, навичок та вмінь, необхідних для вирішення службових (навчальних, навчально-бойових), бойових проблем у межах визначених цілей і завдань."},{id:5.3,question:"Рівень твоєї фахової підготовленості виконувати службові (функціональні) обов’язки в бойових (екстремальних) умовах в межах військово-облікової спеціальності."},{id:5.4,question:"Оцінка рівня передачі бойового досвіду військовослужбовцями твого підрозділу."}]),t([{id:6.1,question:"Задоволеність укомплектованістю особовим складом."},{id:6.2,question:"Задоволеність станом озброєння і бойової техніки."},{id:6.3,question:"Рівень впливу тривалості виконання службових (навчальних, навчально-бойових) завдань і ведення бойових дій на психологічний стан військовослужбовців."},{id:6.4,question:"Рівень впливу випадків загибелі (поранення) військовослужбовців (бойових втрат), аварій, катастроф на твою подальшу повсякденну життєдіяльність."},{id:6.5,question:"Рівень забезпечення речовим майном (своєчасність видачі, наявність необхідних речей)."},{id:6.6,question:"Задоволеність харчуванням (кількість та якість їжі)."},{id:6.7,question:"Рівень медичного забезпечення виконання завдання за призначенням."},{id:6.8,question:"Задоволеність грошовим забезпеченням (своєчасністю виплат)."},{id:6.9,question:"Задоволеність побутовими умовами проживання. "},{id:6.1,question:"Задоволеність наданням відпусток, відпочинку і дозвілля."},{id:6.11,question:"Рівень авторитету, лідерства і професійної компетентності безпосереднього командира (начальника)."},{id:6.12,question:"Здатність командування (командирів, начальників) до негайного реагування на обстановку, що різко змінюється та ухвалення оптимальних рішень."},{id:6.13,question:"Підготовленість підрозділу до виконання завдань за призначенням."},{id:6.14,question:"Рівень впливу погодно-кліматичних умов на виконання завдань за призначенням."},{id:6.15,question:"Рівень психологічної готовності твоїх співслужбовців (підлеглих) до виконання службового (навчального, навчально-бойового), бойового завдання."},{id:6.16,question:"Рівень стійкості військовослужбовців до негативного інформаційно-психологічного впливу."},{id:6.17,question:"Своєчасність та актуальність інформації, яку надають командири (начальники)."},{id:6.18,question:"Задоволеність військовослужбовців рівнем соціального захисту."},{id:6.19,question:"Задоволеність прийнятими військово-політичними рішеннями керівництва держави щодо національної безпеки."}]);let o=null;e.addEventListener("input",e=>{o=e.target.value}),e.addEventListener("submit",t=>{t.preventDefault();let{elements:{name:s}}=t.currentTarget;if(""===s.value.trim())alert("Введіть прізвище, ім'я, по батькові, будь ласка.");else{console.log(o),t.currentTarget.reset(),e.style.display="none",i.innerHTML=n[0];let s=(function(){let e=[];for(let i=0;i<=10;i+=1)e.push(`<li class="btn-item">
        <button class="answer-btn" data-answer="${i}" type="button">${i}</button>
        </li>`);return e})().join("");console.log(s),btnEl.insertAdjacentHTML("afterbegin",s)}});
//# sourceMappingURL=task-03.0c8bedf5.js.map
