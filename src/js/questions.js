//questions for first test
const firstTestItems = [
  {
    question: "Зазвичай вранці я прокидаюся свіжим і відпочилим.",
  },
  {
    question: "Запори у мене бувають дуже рідко.",
  },
  {
    question:
      "Часом у мене бувають приступи сміху або плачу, з якими я ніяк не можу впоратися.",
  },
  {
    question: "Мені здається, що мене ніхто не розуміє.",
  },
  {
    question:
      "Буває, у мене з’являється бажання ламати або крушити все навколо.",
  },
  {
    question:
      "Бувало, що я цілими днями або навіть тижнями нічого не міг робити, тому що ніяк не міг примусити себе взятися до роботи.",
  },
  {
    question: "Голова у мене болить часто.",
  },
  {
    question: "Було б добре, якби майже всі закони відмінили.",
  },
  {
    question:
      "Стан мого здоров'я майже такий же, як у більшості моїх знайомих (не гірше).",
  },
  {
    question:
      "Зустрічаючи на вулиці своїх знайомих або шкільних друзів, з якими я давно не бачився, я вважаю за краще проходити мимо, якщо вони зі мною не заговорюють першими.",
  },
  {
    question: "Я людина товариська.",
  },
  {
    question: "Значну частину часу настрій у мене пригнічений.",
  },
  {
    question:
      "Тепер мені важко сподіватися на те, що я чого-небудь доб'юся у житті.",
  },
  {
    question: "У мене мало впевненості в собі.",
  },
  {
    question:
      "Я вважаю, що більшість людей здатна збрехати, щоб просунутися по службі.",
  },
  {
    question: "Я сварюся з членами моєї родини дуже рідко.",
  },
  {
    question:
      "Іноді я маю сильне бажання порушити правила пристойності або нашкодити.",
  },
  {
    question: "Я досить байдужий до того, що зі мною буде.",
  },
  {
    question:
      "Деякі люди до того полюбляють командувати, що мене так і тягне робити все наперекір, навіть якщо я знаю, що вони мають рацію.",
  },
  {
    question:
      "Я часто вважаю себе зобов'язаним відстоювати те, що вважаю справедливим.",
  },
  {
    question:
      "Моя мова зараз така ж, як завжди (ні швидше і ні повільніше, немає ні хрипоти, ні невиразності).",
  },
  {
    question: "Мене дуже зачіпає, коли мене критикують або лають.",
  },
  {
    question:
      "Іноді у мене буває таке відчуття, що я просто повинен нанести ушкодження собі або кому-небудь іншому.",
  },
  {
    question: "Іноді мене так і підмиває з ким-небудь затіяти бійку.",
  },
  {
    question: "Останні декілька років я відчуваю себе добре.",
  },
  {
    question: "Зараз моя вага постійна (я не худну і не повнію).",
  },
  {
    question: "Я легко можу заплакати.",
  },
  {
    question:
      "Я був би досить спокійний, якби у кого-небудь з моєї сім'ї були неприємності через порушення закону.",
  },
  {
    question: "З моїм розумом твориться щось недобре.",
  },
  {
    question:
      "Приступи запаморочення у мене бувають дуже рідко (або майже не бувають).",
  },
  {
    question:
      "Коли я намагаюся щось зробити, то часто помічаю, що у мене тремтять руки.",
  },
  {
    question: "Велику частину часу я відчуваю загальну слабкість.",
  },
  {
    question: "Іноді, коли я збентежений, я сильно потію, і мене це дратує.",
  },
  {
    question: "Думаю, що я людина приречена.",
  },
  {
    question:
      "Бували випадки, коли мені було важко утриматися від того, щоб що-небудь не поцупити у кого-небудь або де-небудь, наприклад, в магазині.",
  },
  {
    question: "Я зловживав спиртними напоями.",
  },
  {
    question: "Я часто турбуюся про що-небудь.",
  },
  {
    question: "Я рідко задихаюся, і у мене не буває сильного серцебиття.",
  },
  {
    question:
      "Мої батьки і інші члени моєї сім'ї прискіпуються до мене більше, ніж треба.",
  },
  {
    question: "Хтось управляє моїми думками.",
  },
  {
    question: "У школі я засвоював матеріал повільніше, ніж інші.",
  },
  {
    question: "Я цілком упевнений в собі.",
  },
  {
    question:
      "Коли я знаходжуся в компанії, мені важко знайти відповідну тему для розмови.",
  },
  {
    question:
      "Мені легко примусити інших людей боятися мене, і іноді я це роблю заради забави.",
  },
  {
    question:
      "Безглуздо засуджувати людину, що обдурила того, хто сам дозволяє себе обдурювати.",
  },
  {
    question: "Щасливіше всього я буваю, коли знаходжуся на самоті.",
  },
  {
    question:
      "Іноді без жодної причини у мене раптом наступають періоди надзвичайної веселості.",
  },
  {
    question: "Життя для мене майже завжди пов'язано з напругою.",
  },
  {
    question: "В школі мені було дуже важко виступати перед класом.",
  },
  {
    question:
      "Мені здається, що я знаходжу друзів з такою ж легкістю, як і інші.",
  },
  {
    question: "Мені неприємно, коли навкруги мене є люди.",
  },
  {
    question: "Мене легко заставити зніяковіти.",
  },
  {
    question:
      "Мені важко приступити до виконання нового завдання або почати нову справу.",
  },
  {
    question:
      "Якби люди не були налаштовані проти мене, я досяг би набагато більшого.",
  },
  {
    question: "Мені здається, що мене ніхто не розуміє.",
  },
  {
    question: "Я легко втрачаю терпіння у спілкуванні з людьми.",
  },
  {
    question: "Часто мені хочеться померти.",
  },
  {
    question:
      "Бувало, що я кидав почату справу, оскільки боявся, що я не справлюся з нею.",
  },
  {
    question: "Майже щодня трапляється що-небудь, що лякає мене.",
  },
  {
    question: "Навіть серед людей я зазвичай відчуваю себе самотнім.",
  },
  {
    question:
      "Часто, навіть тоді, коли для мене все складається добре, я відчуваю, що мені все байдуже.",
  },
  {
    question:
      "Зазвичай я спокійний, і мене нелегко вивести з душевної рівноваги.",
  },
  {
    question: "Часом мені здається, що я ні на що не здатний.",
  },
  {
    question: "Мене дуже турбують всілякі нещастя.",
  },
  {
    question:
      "Я думаю, що можна, не порушуючи закон, спробувати знайти в ньому лазівку.",
  },
  {
    question:
      "Є люди, які мені настільки неприємні, що я в глибині душі радію, коли вони одержують прочухан за що-небудь.",
  },
  {
    question: "Я охоче знайомлюся з новими людьми.",
  },
  {
    question:
      "Я вважаю за краще діяти згідно власним планам, а не слідувати вказівкам інших.",
  },
  {
    question: "Люблю, щоб оточуючі знали мою точку зору.",
  },
  {
    question: "Я людина нервова і легко збудлива.",
  },
  {
    question: "Все у мене виходить погано, не так як треба.",
  },
  {
    question: "Майбутнє здається мені безнадійним.",
  },
  {
    question:
      "Люди досить легко можуть змінити мою думку, навіть якщо до цього воно здавалася мені остаточною.",
  },
  {
    question: "Значну частину часу я відчуваю себе втомленим.",
  },
  {
    question: "Я прагну ухилятися від конфліктів і скрутних положень.",
  },
  {
    question:
      "Пригодницькі оповідання мені подобаються більше, аніж про любов.",
  },
  {
    question:
      "Безглуздо засуджувати людей, які прагнуть отримати від життя все, що зможуть.",
  },
];
//questions for first test

//questions for second test
const secondTestItems = [
  {
    question: "Буває, що я серджуся",
  },
  {
    question: "Зазвичай вранці я прокидаюся свіжим і відпочилим",
  },
  {
    question: "Зараз я приблизно так само працездатний, як і завжди",
  },
  {
    question: "Доля безумовно несправедлива до мене",
  },
  {
    question: "Запори у мене бувають дуже рідко",
  },
  {
    question: "Часом мені дуже хотілося покинути свій дім",
  },
  {
    question:
      "Часом у мене бувають напади сміху або плачу, з якими я ніяк не можу справитися",
  },
  {
    question: "Мені здається, що мене ніхто не розуміє",
  },
  {
    question:
      "Вважаю, що якщо хтось заподіяв мені зло, я повинен йому відповісти тим же",
  },
  {
    question:
      "Іноді мені в голову приходять такі нехороші думки, що краще про них нікому не розказувати",
  },
  {
    question: "Мені важко зосередитися на якому-небудь завданні або роботі",
  },
  {
    question: "У мене бувають дуже дивні і незвичайні переживання",
  },
  {
    question: "У мене були відсутні неприємності через мою поведінку",
  },
  {
    question: "В дитинстві я у свій час скоював дрібні крадіжки",
  },
  {
    question:
      "Буває, у мене з’являється бажання ламати або крушити все навколо",
  },
  {
    question:
      "Бувало, що я цілими днями або навіть тижнями нічого не міг робити, тому що ніяк не міг примусити себе взятися до роботи",
  },
  {
    question: "Сон у мене переривистий і неспокійний",
  },
  {
    question:
      "Моя сім'я відноситися з несхваленням до тієї роботи, яку я обрав",
  },
  {
    question: "Бували випадки, що я не виконував своїх обіцянок",
  },
  {
    question: "Голова у мене болить часто",
  },
  {
    question:
      "Раз на тиждень або частіше я без жодної видимої причини раптово відчуваю жар у всьому тілі",
  },
  {
    question: "Було б добре, якби майже всі закони відмінили",
  },
  {
    question:
      "Стан мого здоров’я майже такий же, як у більшості моїх знайомих (не гірше)",
  },
  {
    question:
      "Зустрічаючи на вулиці своїх знайомих або шкільних друзів, з якими я давно не бачився, я вважаю за краще проходити мимо, якщо вони зі мною не заговорюють першими",
  },
  {
    question: "Більшості людей, які мене знають, я подобаюся",
  },
  {
    question: "Я людина товариська",
  },
  {
    question: "Іноді я так наполягаю на своєму, що люди втрачають терпіння",
  },
  {
    question: "Значну частину часу настрій у мене пригнічений",
  },
  {
    question:
      "Тепер мені важко сподіватися на те, що я чого-небудь досягну у житті",
  },
  {
    question: "У мене мало впевненості в собі",
  },
  {
    question: "Іноді я кажу неправду",
  },
  {
    question: "Зазвичай я вважаю, що життя – гарна річ",
  },
  {
    question:
      "Я вважаю, що більшість людей здатна збрехати, щоб просунутися по службі",
  },
  {
    question:
      "Я охоче беру участь у зібраннях, зборах і інших суспільних заходах",
  },
  {
    question: "Я сварюся з членами моєї сім’ї дуже рідко",
  },
  {
    question:
      "Іноді у мене виникає сильне бажання порушити правила пристойності або кому-небудь нашкодити",
  },
  {
    question: "Найважча боротьба для мене - це боротьба з самим собою",
  },
  {
    question:
      "М’язові судоми або сіпання у мене бувають украй рідко (або майже не бувають)",
  },
  {
    question: "Я досить байдужий до того, що зі мною буде",
  },
  {
    question: "Іноді, коли я себе недобре відчуваю я буваю дратівливим",
  },
  {
    question:
      "Значну частину часу у мене таке відчуття, що я зробив щось не те або навіть щось погане",
  },
  {
    question:
      "Деякі люди до того полюбляють командувати, що мені так і кортить робити все наперекір, навіть якщо я знаю, що вони мають рацію",
  },
  {
    question:
      "Я часто вважаю себе зобов'язаним відстоювати те, що вважаю справедливим",
  },
  {
    question:
      "Моя мова зараз така ж як завжди (ні швидше і ні повільніше, немає ні хрипоти, ні невиразності)",
  },
  {
    question:
      "Я вважаю, що моє сімейне життя таке ж добре, як у більшості моїх знайомих",
  },
  {
    question: "Мене вкрай зачіпає, коли мене критикують або лають",
  },
  {
    question:
      "Іноді у мене буває таке відчуття, що я просто повинен нанести ушкодження собі або кому-небудь іншому",
  },
  {
    question:
      "Моя поведінка значною мірою визначається звичаями тих, хто мене оточує",
  },
  {
    question:
      "В дитинстві у мене була така компанія, де всі прагнули стояти один за одного",
  },
  {
    question: "Іноді мені так і кортить з ким-небудь затіяти бійку",
  },
  {
    question: "Бувало, що я казав про речі, в яких не розбираюся",
  },
  {
    question: "Зазвичай я засинаю спокійно і мене не турбують ніякі думки",
  },
  {
    question: "Останні декілька років я відчуваю себе добре",
  },
  {
    question: "У мене ніколи не було ні припадків, ні судом",
  },
  {
    question: "Зараз моя вага постійна (я не худну і не повнішаю)",
  },
  {
    question: "Я вважаю, що мене часто карали нізащо",
  },
  {
    question: "Я легко плачу",
  },
  {
    question: "Я мало втомлююся",
  },
  {
    question:
      "Я був би досить спокійний, якби у кого-небудь з моєї сім'ї були неприємності через порушення закону",
  },
  {
    question: "З моїм розумом творитися щось недобре",
  },
  {
    question:
      "Щоб приховати свою сором'язливість мені доводиться докладати великі зусилля.",
  },
  {
    question:
      "Напади запаморочення у мене бувають дуже рідко (або майже не бувають)",
  },
  {
    question: "Мене турбують сексуальні (статеві) питання",
  },
  {
    question:
      "Мені важко підтримувати розмову з людьми, з якими я тільки що познайомився",
  },
  {
    question:
      "Коли я намагаюся щось зробити, то часто помічаю, що у мене тремтять руки",
  },
  {
    question: "Руки у мене такі ж спритні і моторні, як і раніше",
  },
  {
    question: "Велику частину часу я відчуваю загальну слабкість",
  },
  {
    question:
      "Іноді, коли я збентежений я сильно вкриваюся потом і мене це дратує",
  },
  {
    question: "Буває, що я відкладаю на завтра те, що повинен зробити сьогодні",
  },
  {
    question: "Думаю, що я людина приречена",
  },
  {
    question:
      "Бували випадки, що мені було важке утриматися від того, щоб що-небудь не поцупити в кого-небудь або де-небудь, наприклад у магазині",
  },
  {
    question: "Я зловживав спиртними напоями",
  },
  {
    question: "Я часто про що-небудь турбуюся",
  },
  {
    question: "Мені б хотілося бути членом декількох кружків або зборів",
  },
  {
    question: "Я рідко задихаюся, і у мене не буває сильного серцебиття",
  },
  {
    question:
      "Все своє життя я суворо дотримуюсь принципів, заснованих на почутті обов’язку",
  },
  {
    question:
      "Траплялося, що я перешкоджав або поступав наперекір людям просто із принципу, а не тому, що справа була дійсно важливою",
  },
  {
    question:
      "Якщо мені не загрожує штраф і машин поблизу немає, я можу перейти вулицю там, де бажаю, а не там де потрібно",
  },
  {
    question: "Я завжди був незалежним і вільним від контролю з боку сім'ї",
  },
  {
    question:
      "У мене бували періоди такої сильної стурбованості, що я навіть не міг всидіти на місці",
  },
  {
    question: "Часто мої вчинки тлумачилися не вірно",
  },
  {
    question:
      "Мої батьки і (або) інші члени моєї сім’ї прискіпуються до мене більше, ніж треба",
  },
  {
    question: "Хтось керує моїми думками",
  },
  {
    question: "Люди байдужі до того, що з тобою трапиться",
  },
  {
    question:
      "Мені подобається бути в компанії, де всі жартують один над одним",
  },
  {
    question: "В школі я засвоював матеріал повільніше, аніж інші",
  },
  {
    question: "Я цілком впевнений у собі",
  },
  {
    question: "Нікому не довіряти – найбезпечніше",
  },
  {
    question:
      "Раз на тиждень або частіше я буваю дуже збудженим і схвильованим",
  },
  {
    question:
      "Коли я знаходжуся в компанії, мені важко знайти відповідну тему для розмови",
  },
  {
    question:
      "Мені легко примусити інших людей боятися мене, і іноді я це роблю ради забави",
  },
  {
    question: "У грі я вважаю за краще вигравати",
  },
  {
    question:
      "Безглуздо засуджувати людину, яка обдурила того, хто сам дозволяє себе обдурювати",
  },
  {
    question: "Хтось намагається впливати на мої думки",
  },
  {
    question: "Я щодня випиваю багато води",
  },
  {
    question: "Щасливіше всього я буваю наодинці",
  },
  {
    question:
      "Я обурююся кожного разу, коли дізнаюся, що злочинець з якої-небудь  причини залишився безкарним",
  },
  {
    question:
      "У моєму житті був один або декілька випадків, коли я відчував, що хтось за допомогою гіпнозу примушує мене скоювати ті або інші вчинки",
  },
  {
    question: "Я дуже рідко заговорюю з людьми першим",
  },
  {
    question: "У мене ніколи не було зіткнень із законом",
  },
  {
    question:
      "Мені приємно мати серед своїх знайомих значних людей, це як би додає мені вагу у власних очах",
  },
  {
    question:
      "Іноді без жодної причини у мене раптом наступають періоди незвичайної веселості",
  },
  {
    question: "Життя для мене майже завжди пов'язано з напругою",
  },
  {
    question: "У школі мені було дуже важко виступати перед класом",
  },
  {
    question:
      "Люди проявляють по відношенні до мене стільки співчуття і симпатії, наскільки я заслуговую",
  },
  {
    question:
      "Я відмовляюся грати в деякі ігри, тому що це у мене погано виходить",
  },
  {
    question:
      "Мені здається, що я знаходжу друзів з такою ж легкістю, як і інші",
  },
  {
    question: "Мені неприємно, коли навколо мене є люди",
  },
  {
    question: "Як правило, мені не везе",
  },
  {
    question: "Мене легко збити з пантелику",
  },
  {
    question: "Деякі з членів моєї сім'ї скоювали вчинки, які мене лякали",
  },
  {
    question:
      "Іноді у мене бувають напади сміху або плачу, з якими я ніяк не можу справитися",
  },
  {
    question:
      "Мені важко приступити до виконання нового завдання або розпочати нову справу",
  },
  {
    question:
      "Якби люди не були налаштовані проти мене, я досягнув би у житті набагато більшого",
  },
  {
    question: "Мені здається, що мене ніхто не розуміє",
  },
  {
    question: "Серед моїх знайомих є люди, які мені не подобаються",
  },
  {
    question: "Я легко втрачаю терпіння з людьми",
  },
  {
    question: "Часто у новій обстановці я переживаю почуття тривоги",
  },
  {
    question: "Часто мені хочеться померти",
  },
  {
    question: "Іноді я такий збуджений, що мені важко заснути",
  },
  {
    question:
      "Часто я переходжу на іншу сторону вулиці, щоб уникнути зустрічі з тим, кого я побачив",
  },
  {
    question:
      "Бувало, що я кидав почату справу, оскільки боявся, що я не справлюся з нею",
  },
  {
    question: "Майже щодня трапляється що-небудь, що лякає мене",
  },
  {
    question: "Навіть серед людей я зазвичай відчуваю себе самотнім",
  },
  {
    question:
      "Я переконаний, що існує лише одне єдине правильне розуміння значення життя",
  },
  {
    question:
      "В гостях я частіше сиджу де-небудь осторонь або розмовляю з ким-небудь одним, ніж беру участь у загальних розвагах",
  },
  {
    question: "Мені часто кажуть, що я запальний",
  },
  {
    question: "Буває, що я з ким-небудь пліткую",
  },
  {
    question:
      "Часто мені неприємно, коли я намагаюся застерегти кого-небудь від помилок, а мене розуміють неправильно",
  },
  {
    question: "Я часто звертаюся до людей за порадою",
  },
  {
    question:
      "Часто, навіть тоді, коли усе для мене складається добре, я відчуваю що мені усе байдуже",
  },
  {
    question: "Мене досить важко вивести з себе",
  },
  {
    question:
      "Коли я намагаюся вказати людям на їх помилки або допомогти вони часто розуміють мене неправильно",
  },
  {
    question:
      "Зазвичай я спокійний, і мене нелегко вивести з душевної рівноваги",
  },
  {
    question: "Я заслуговую суворого покарання за свою провину",
  },
  {
    question:
      "Мені притаманно так сильно переживати свої розчарування, що я не можу примусити себе не думати про них",
  },
  {
    question: "Часом мені здається, що я ні на що не здатний",
  },
  {
    question:
      "Бувало, що під час обговорення деяких питань я, особливо не замислюючись, погоджувався з думкою інших",
  },
  {
    question: "Мене дуже турбують різного роду нещастя",
  },
  {
    question: "Мої переконання і погляди непохитні",
  },
  {
    question:
      "Я вважаю, що можна не порушуючи закон спробувати знайти в ньому лазівку",
  },
  {
    question:
      "Є люди, які мені настільки неприємні, що я в глибині душі радію, коли вони одержують прочухан за що-небудь",
  },
  {
    question: "У мене бували періоди, коли через хвилювання я втрачав сон",
  },
  {
    question:
      "Я відвідую різні суспільні заходи, тому що це дозволяє бувати мені серед людей",
  },
  {
    question:
      "Можна пробачити людям порушення тих правил, які вони вважають нерозсудливими",
  },
  {
    question:
      "У мене є погані звички, які є настільки сильними, що боротися з ними просто марно",
  },
  {
    question: "Я охоче знайомлюся з новими людьми",
  },
  {
    question: "Буває, що непристойний жарт у мене викликає сміх",
  },
  {
    question:
      "Якщо справа йде у мене погано, то мені відразу хочеться все кинути",
  },
  {
    question:
      "Я вважаю за краще діяти відповідно до  власних планів, а не слідувати вказівкам інших",
  },
  {
    question: "Мені подобається, коли оточуючі знають мою точку зору.",
  },
  {
    question:
      "Якщо я поганої думки про людину або навіть зневажаю його, я мало прагну приховати це від нього",
  },
  {
    question: "Я людина нервова і легко збудлива",
  },
  {
    question: "Все у мене виходить погано, не так як треба",
  },
  {
    question: "Майбутнє здається мені безнадійним",
  },
  {
    question:
      "Люди досить легко можуть змінити мою думку, навіть якщо до цього вона здавалася мені остаточною",
  },
  {
    question:
      "Кілька разів на тиждень у мене буває таке відчуття, що повинно трапитися щось жахливе",
  },
  {
    question: "Значну частину часу я відчуваю себе втомленим",
  },
  {
    question: "Я люблю бувати на вечорах і просто в компаніях",
  },
  {
    question: "Я прагну відхилитися від конфліктів і скрутних положень",
  },
  {
    question: "Мене дуже дратує те, що я забуваю, куди кладу речі",
  },
  {
    question:
      "Пригодницькі розповіді мені подобаються більше, ніж розповіді про любов",
  },
  {
    question:
      "Якщо я схочу зробити щось, але оточуючі вважають, що цього робити не варто, я можу легко відмовитися від своїх намірів",
  },
  {
    question:
      "Безглуздо засуджувати людей, які прагнуть урвати від життя все, що можуть",
  },
  {
    question: "Мені байдуже, що про мене думають інші",
  },
  {
    question:
      "Я абсолютно не пристосований до військової служби і це мене дуже лякає",
  },
  {
    question:
      "Я переконаний, що чоловіки повинні служити у Збройних Силах тільки за власним бажанням",
  },
  {
    question:
      "Останнім часом у мене все частіше і частіше трапляються „промахи” і невдачі по службі.",
  },
  {
    question:
      "Найбільші труднощі для мене під час служби – це необхідність підкорятися командирам і начальникам",
  },
  {
    question:
      "Тим правилами, які, на мій погляд, несправедливі, я завжди прагну протидіяти",
  },
  {
    question:
      "Мені хотілося б випробувати себе серйозною і небезпечною справою",
  },
  {
    question: "Мене довго не залишає відчуття образи, заподіяне товаришами",
  },
  {
    question: "Жити за військовим розпорядком для мене просто нестерпно",
  },
  {
    question:
      "Я сумніваюся, чи зможу я зі своїм здоров'ям витримати всі навантаження військової служби",
  },
  {
    question: "Я заздрю тим, хто зміг ухилитися від військової служби",
  },
  {
    question:
      "Я відчуваю все більше і більше розчарувань по відношенню до моєї військової спеціальності",
  },
  {
    question: "Я часто розгублююся у складних і небезпечних ситуаціях",
  },
  {
    question: "Мені хотілося б служити у ПДВ або частинах спецназу",
  },
  {
    question:
      "Із службою у мене ніщо не виходить (не „клеїться”). Часто думаю: „не моя це справа”",
  },
  {
    question: "Коли мною хтось командує, це викликає у мене відчуття протесту",
  },
  {
    question: "Мені завжди було важко пристосовуватися до нового колективу",
  },
  {
    question:
      "Під час подальшої служби я був би не проти послужити там, де небезпечно і де ведуться бойові дії ",
  },
  {
    question:
      "Присяга на вірність Вітчизні у сучасних умовах втратила свою актуальність",
  },
  {
    question: "Мені завжди було нелегко пристосовуватися до нових умов життя",
  },
  {
    question:
      "У складних ситуаціях я не можу швидко приймати правильні рішення",
  },
  {
    question:
      "Я упевнений, що в майбутньому не стану укладати або продовжувати контракт на продовження військової служби",
  },
  {
    question:
      "У мене бувають періоди похмурої дратівливості, під час яких я „зриваю зло” на оточуючих",
  },
  {
    question:
      "Я насилу витримую фізичні навантаження, пов’язані з моєю професійною діяльністю",
  },
  {
    question:
      "Я достатньо спокійно відношуся до необхідності брати участь в тривалих і небезпечних відрядженнях",
  },
  {
    question:
      "Навряд чи я схочу присвятити все своє життя військовій професії (залишитися на службу за контрактом, поступити у військове училище)",
  },
  {
    question:
      "„За компанію” з товаришами я можу прийняти неабияку кількість алкоголю (перевищити свою звичайну „норму”)",
  },
  {
    question:
      "У компаніях, де я часто буваю, друзі іноді палять „травичку”. Я їх за це не засуджую",
  },
  {
    question:
      "Останнім часом, щоб не „зірватися”, я був вимушений приймати заспокійливі ліки",
  },
  {
    question:
      "Мої батьки (родичі) часто виказували побоювання у зв'язку з моїми випивками",
  },
  {
    question:
      "Немає нічого поганого, коли люди намагаються випробувати на собі незвичайні стани, приймаючи деякі речовини",
  },
  {
    question: "У стані агресії я здатний багато на що",
  },
  {
    question: "Я крутий і жорстокий з оточуючими",
  },
  {
    question:
      "Якщо хтось заподіяв мені зло, я вважаю зобов'язаним відплатити йому тим же („око за око, зуб за зуб”)",
  },
  {
    question:
      "Можна погодитися з тим, що я не дуже-то схильний виконувати багато наказів, вважаючи їх безрозсудними",
  },
  {
    question:
      "Я думаю, що будь-яке положення законів і військових статутів можна тлумачити двояко ",
  },
];
//questions for second test


//questions for third test
const thirdTestItems = [
  {
    id: 1,
    num: 1,
    question:
      "Рівень задоволеності цінностями (віра, любов, повага, довіра тощо) та їх вплив на цілі життєдіяльності, служби та засоби їх досягнення.",
  },
  {
    id: 1,
    num: 2,
    question:
      "Дотримання моральних принципів і норм в умовах службової, навчальної (навчально-бойової), бойової діяльності.",
  },
  {
    id: 1,
    num: 3,
    question:
      "Сформованість моральних якостей і національних переконань (гідність, патріотизм, відданість, доброта, обов’язковість тощо).",
  },
  {
    id: 1,
    num: 4,
    question:
      "Ступінь згуртованості, сумісності і злагодженості вашого підрозділу.",
  },
  {
    id: 1,
    num: 5,
    question:
      "Задоволеність наявністю традицій, побратимства між різними категоріями військовослужбовців.",
  },
  {
    id: 2,
    num: 1,
    question:
      "Ступінь прояву позитивних емоцій (інтерес, радість, довіра, любов, віра, ентузіазм тощо).",
  },
  {
    id: 2,
    num: 2,
    question:
      "Ступінь прояву нейтральних емоцій (байдужість, провина, сором, тривожність тощо).",
  },
  {
    id: 2,
    num: 3,
    question:
      "Ступінь прояву негативних емоцій (горе, зневага, злість, печаль, страх, паніка тощо).",
  },
  {
    id: 2,
    num: 4,
    question:
      "Ступінь відповідальності за прийняті рішення та результат своєї діяльності.",
  },
  {
    id: 2,
    num: 5,
    question:
      "Сформованість вольових якостей (витримка, наполегливість, рішучість тощо).",
  },
  {
    id: 2,
    num: 6,
    question:
      "Рівень психологічної стійкості до впливу негативних чинників бойової (екстремальної) обстановки.",
  },
  {
    id: 2,
    num: 7,
    question:
      "Оцінка свого вміння управляти діями, із яких складається виконання ваших професійних функцій та обов’язків.",
  },
  {
    id: 3,
    num: 1,
    question:
      "Розуміння сенсу і мети службової (навчальної, навчально-бойової), бойової діяльності.",
  },
  {
    id: 3,
    num: 2,
    question: "Рівень справедливості рішень безпосереднього командира.",
  },
  {
    id: 3,
    num: 3,
    question: "Задоволеність станом військової дисципліни і правопорядку.",
  },
  {
    id: 3,
    num: 4,
    question:
      "Рівень згуртованості, сумісності і злагодженості особового складу твого підрозділу.",
  },
  {
    id: 3,
    num: 5,
    question: "Наявність традицій, рівень братерства між військовослужбовцями.",
  },
  {
    id: 4,
    num: 1,
    question:
      "Самопочуття (комфортність) перебування у військовій частині (підрозділі).",
  },
  {
    id: 4,
    num: 2,
    question: "Власне фізичне самопочуття за останній місяць.",
  },
  {
    id: 4,
    num: 3,
    question: "Власне психологічне самопочуття за останній місяць.",
  },
  {
    id: 4,
    num: 4,
    question:
      "Задоволеність рівнем організації бойової підготовки у військовій частині (підрозділі).",
  },
  {
    id: 4,
    num: 5,
    question:
      "Задоволеність рівнем організації психологічної підготовки у військовій частині (підрозділі).",
  },
  {
    id: 4,
    num: 6,
    question:
      "Задоволеність рівнем організації національно-патріотичної підготовки у військовій частині (підрозділі).",
  },
  {
    id: 4,
    num: 7,
    question:
      "Здатність і можливість керувати своїми діями та станом у ситуаціях, а також здійснювати вплив на своїх співслужбовців (підлеглих).",
  },
  {
    id: 4,
    num: 8,
    question:
      "Рівень адекватного реагування тобою на обстановку, що різко змінюється.",
  },
  {
    id: 5,
    num: 1,
    question:
      "Рівень твоїх знань і уявлень про особливості службової (навчальної, навчально-бойової), бойової діяльності та вимог до неї.",
  },
  {
    id: 5,
    num: 2,
    question:
      "Рівень твоїх фахових знань, навичок та вмінь, необхідних для вирішення службових (навчальних, навчально-бойових), бойових проблем у межах визначених цілей і завдань.",
  },
  {
    id: 5,
    num: 3,
    question:
      "Рівень твоєї фахової підготовленості виконувати службові (функціональні) обов’язки в бойових (екстремальних) умовах в межах військово-облікової спеціальності.",
  },
  {
    id: 5,
    num: 4,
    question:
      "Оцінка рівня передачі бойового досвіду військовослужбовцями твого підрозділу.",
  },
  {
    id: 6,
    num: 1,
    question: "Задоволеність укомплектованістю особовим складом.",
  },
  {
    id: 6,
    num: 2,
    question: "Задоволеність станом озброєння і бойової техніки.",
  },
  {
    id: 6,
    num: 3,
    question:
      "Рівень впливу тривалості виконання службових (навчальних, навчально-бойових) завдань і ведення бойових дій на психологічний стан військовослужбовців.",
  },
  {
    id: 6,
    num: 4,
    question:
      "Рівень впливу випадків загибелі (поранення) військовослужбовців (бойових втрат), аварій, катастроф на твою подальшу повсякденну життєдіяльність.",
  },
  {
    id: 6,
    num: 5,
    question:
      "Рівень забезпечення речовим майном (своєчасність видачі, наявність необхідних речей).",
  },
  {
    id: 6,
    num: 6,
    question: "Задоволеність харчуванням (кількість та якість їжі).",
  },
  {
    id: 6,
    num: 7,
    question:
      "Рівень медичного забезпечення виконання завдання за призначенням.",
  },
  {
    id: 6,
    num: 8,
    question: "Задоволеність грошовим забезпеченням (своєчасністю виплат).",
  },
  {
    id: 6,
    num: 9,
    question: "Задоволеність побутовими умовами проживання. ",
  },
  {
    id: 6,
    num: 10,
    question: "Задоволеність наданням відпусток, відпочинку і дозвілля.",
  },
  {
    id: 6,
    num: 11,
    question:
      "Рівень авторитету, лідерства і професійної компетентності безпосереднього командира (начальника).",
  },
  {
    id: 6,
    num: 12,
    question:
      "Здатність командування (командирів, начальників) до негайного реагування на обстановку, що різко змінюється та ухвалення оптимальних рішень.",
  },
  {
    id: 6,
    num: 13,
    question:
      "Підготовленість підрозділу до виконання завдань за призначенням.",
  },
  {
    id: 6,
    num: 14,
    question:
      "Рівень впливу погодно-кліматичних умов на виконання завдань за призначенням.",
  },
  {
    id: 6,
    num: 15,
    question:
      "Рівень психологічної готовності твоїх співслужбовців (підлеглих) до виконання службового (навчального, навчально-бойового), бойового завдання.",
  },
  {
    id: 6,
    num: 16,
    question:
      "Рівень стійкості військовослужбовців до негативного інформаційно-психологічного впливу.",
  },
  {
    id: 6,
    num: 17,
    question:
      "Своєчасність та актуальність інформації, яку надають командири (начальники).",
  },
  {
    id: 6,
    num: 18,
    question: "Задоволеність військовослужбовців рівнем соціального захисту.",
  },
  {
    id: 6,
    num: 19,
    question:
      "Задоволеність прийнятими військово-політичними рішеннями керівництва держави щодо національної безпеки.",
  }
];

    let markupForSevenBlock = [
      `<form class ="form-question">
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
</form>`,
    ];
//questions for third test

//questions for fourth test
const fourthTestItems = [
  {
    question:
      "Чи схильні Ви шукати шляхи до примирення після чергового службового конфлікту?",
    firstAnswer: "Завжди.",
    secondAnswer: "Іноді.",
    thirdAnswer: "Ніколи.",
  },
  {
    question: "Як Ви поводитесь в критичній ситуації?",
    firstAnswer: "Стримуєтесь.",
    secondAnswer: "Зберігаєте повний спокій.",
    thirdAnswer: "Втрачаєте самовладання.",
  },
  {
    question: "Яким вважають Вас колеги?",
    firstAnswer: "Самовпевненим і заздрісним.",
    secondAnswer: "Доброзичливим.",
    thirdAnswer: "Спокійним і незаздрісним.",
  },
  {
    question: "Як Ви відреагуєте, якщо вам запропонують відповідальну посаду?",
    firstAnswer: "Приймете її з деякими побоюваннями.",
    secondAnswer: "Погодитесь без коливань.",
    thirdAnswer: "Відмовитесь від неї ради власного спокою.",
  },
  {
    question:
      "Як Ви будете себе вести, якщо хто-небудь з колег без дозволу візьме з Вашого столу папір?",
    firstAnswer: "Посваритесь.",
    secondAnswer: "Примусите повернути.",
    thirdAnswer: "Запитайте, чи не потрібне йому ще чого-небудь.",
  },
  {
    question:
      "Якими словами Ви зустрінете чоловіка (дружину), якщо він (вона) повернувся(лась) з роботи пізніше за звичайне?",
    firstAnswer: "«Що тебе так затримало»?",
    secondAnswer: "«Де ти лазиш допізна»?",
    thirdAnswer: "«Я вже почав(ла) хвилюватися».",
  },
  {
    question: "Як Ви поводитеся за кермом автомобіля?",
    firstAnswer: "Прагнете обігнати машину, яка показала вам хвіст?",
    secondAnswer: "Вам все одно, скільки машин вас обігнало.",
    thirdAnswer: "Помчитесь з такою швидкістю, щоб ніхто не наздогнав вас.",
  },
  {
    question: "Якими Ви вважаєте свої погляди на життя?",
    firstAnswer: "Збалансованими.",
    secondAnswer: "Легковажними.",
    thirdAnswer: "Вкрай жорсткими.",
  },
  {
    question: "Що Ви робите, якщо не все вдається?",
    firstAnswer: "Намагаєтеся звалити провину на іншого.",
    secondAnswer: "Залишаєте незакінченим.",
    thirdAnswer: "Стаєте надалі обережнішим.",
  },
  {
    question:
      "Як Ви відреагуєте на фейлетон про випадки розбещеності серед сучасної молоді?",
    firstAnswer: "«Пора вже заборонити їм такі розваги».",
    secondAnswer:
      "«Треба створити їм можливість організовано і культурно відпочивати».",
    thirdAnswer: "«І чого ми стільки з ними возимося»?",
  },
  {
    question:
      "Що Ви відчуваєте, якщо місце, яке Ви хотіли зайняти, дісталося іншому?",
    firstAnswer: "«І навіщо я тільки на це нерви витрачав»?",
    secondAnswer: "«Видно, що його обличчя шефу більш приємніше».",
    thirdAnswer: "«Можливо, мені це вдасться іншим разом».",
  },
  {
    question: "Як Ви дивитеся страшний фільм?",
    firstAnswer: "Боїтеся.",
    secondAnswer: "Нудьгуєте.",
    thirdAnswer: "Одержуєте задоволення.",
  },
  {
    question: "Якщо через дорожню пробку Ви спізнюєтеся на важливу нараду?",
    firstAnswer: "Нервуватимете під час засідання.",
    secondAnswer: "Спробуєте викликати поблажливість партнерів.",
    thirdAnswer: "Засмутитесь.",
  },
  {
    question: "Як Ви ставитесь до своїх спортивних успіхів?",
    firstAnswer: "Обов'язково прагнете виграти.",
    secondAnswer: "Цінуєте задоволення відчути себе знов молодим.",
    thirdAnswer: "Дуже гніваєтесь, якщо не везе.",
  },
  {
    question: "Як Ви поступите, якщо Вас погано обслужили в ресторані?",
    firstAnswer: "Стерпите, уникаючи скандалу.",
    secondAnswer: "Викличете метрдотеля і зробите йому зауваження.",
    thirdAnswer: "Звернетесь зі скаргою до директора ресторану.",
  },
  {
    question: "Як Ви поведетеся, якщо Вашу дитину образили в школі?",
    firstAnswer: "Поговорю з вчителем.",
    secondAnswer: "Влаштуєте скандал з батьками «малолітнього злочинця».",
    thirdAnswer: "Порадите дитині дати здачу.",
  },
  {
    question: "Як Ви вважаєте, яка Ви людина?",
    firstAnswer: "Середня.",
    secondAnswer: "Самовпевнена.",
    thirdAnswer: "Пробивна.",
  },
  {
    question:
      "Що Ви скажете підлеглому, з яким зіткнулися у дверях установи, якщо він почав би вибачатися перед вами?",
    firstAnswer: "«Вибачте, це моя провина».",
    secondAnswer: "«Нічого страшного, дурниці».",
    thirdAnswer: "«Уважніше треба бути»!",
  },
  {
    question:
      " Як Ви відреагуєте на статтю в газеті про випадки хуліганства серед молоді?",
    firstAnswer: "Коли ж, нарешті, будуть вжиті конкретні заходи?",
    secondAnswer: "Треба ввести тілесні покарання.",
    thirdAnswer: "Не можна все валити на молодь, винні і вихователі.",
  },
  {
    question:
      "Уявіть, що Ви заново народитесь, але вже твариною. Якій тварині ви віддасте перевагу?",
    firstAnswer: "Тигру або леопарду.",
    secondAnswer: "Домашньому коту.",
    thirdAnswer: "Ведмедю.",
  },
];
//questions for third test
export {
  firstTestItems,
  secondTestItems,
  thirdTestItems,
  markupForSevenBlock,
  fourthTestItems,
};
