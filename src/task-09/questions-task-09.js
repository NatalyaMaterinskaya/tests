const testItems = [
  {
    question: "Часом я не здатен перебороти бажання заподіяти іншим шкоду.",
  },
  {
    question: "Іноді пліткую про людей, яких не люблю.",
  },
  {
    question: "Я легко дратуюсь, але швидко заспокоююсь",
  },
  {
    question: "Якщо мене ласкаво не попросять, я не виконаю прохання.",
  },
  {
    question: "Я не завжди отримую те, що мені належить.",
  },
  {
    question: "Я знаю, що люди говорять про мене за моєю спиною.",
  },
  {
    question: "Якщо я не схвалюю поведінку друзів, я даю їм це відчути.",
  },
  {
    question:
      "Коли мені доводилося обдурювати кого-небудь, я відчував нестерпні докори сумління.",
  },
  {
    question: "Мені здається, що я не здатен вдарити людину.",
  },
  {
    question: "Я ніколи не дратуюся настільки, щоб розкидуватися речами.",
  },
  {
    question: "Я завжди поблажливий до чужих недоліків.",
  },
  {
    question:
      "Якщо мені не подобається встановлене правило, у мене виникає бажання порушити його.",
  },
  {
    question:
      "Інші вміють майже завжди користуватися сприятливими обставинами.",
  },
  {
    question:
      "Я тримаюся насторожі з людьми, які ставляться до мене дещо ліпше, ніж я очікував.",
  },
  {
    question: "Я часто не погоджуюся з людьми.",
  },
  {
    question: "Іноді мене обтяжують думки, яких я соромлюсь.",
  },
  {
    question: "Якщо хтось першим ударить мене, я не відповім йому.",
  },
  {
    question: "Коли я дратуюся, я грюкаю дверима.",
  },
  {
    question: "Я куди дратівливіший, ніж здається оточуючим.",
  },
  {
    question:
      "Якщо хтось вдає із себе начальника, я завжди роблю йому наперекір.",
  },
  {
    question: "Мене трохи засмучує моя доля.",
  },
  {
    question: "Я гадаю, що багато людей мене не люблять.",
  },
  {
    question:
      "Я не зможу втриматися від суперечки, якщо люди не згодні зі мною.",
  },
  {
    question: "Люди, що ухиляються від роботи, мусять почувати провину.",
  },
  {
    question: "Той, хто ображає мене і мою сім’ю, напрошується на бійку.",
  },
  {
    question: "Я не здатний на брутальні жарти.",
  },
  {
    question: "Розлютовуюся, коли з мене насміхаються.",
  },
  {
    question:
      "Коли люди вдають із себе начальників, я роблю все, щоб вони не зазнавалися.",
  },
  {
    question: "Майже кожен тиждень я бачу когось, хто мені не до вподоби.",
  },
  {
    question: "Досить багато людей заздрять мені.",
  },
  {
    question: "Я вимагаю, щоб люди поважали мене.",
  },
  {
    question: "Мене пригнічує те, що я мало роблю для своїх батьків.",
  },
  {
    question:
      "Люди, які постійно знущаються з нас, варті того, щоб їх ставили на місце.",
  },
  {
    question: "Я ніколи не буваю похмурим від злості.",
  },
  {
    question:
      "Якщо до мене ставляться гірше, ніж я на те заслуговую, я не засмучуюсь.",
  },
  {
    question: "Якщо хтось дратує мене, я не звертаю уваги.",
  },
  {
    question: "Хоч я ніколи не показую цього, але мене іноді гризе заздрість.",
  },
  {
    question: " Іноді мені здається, що з мене насміхаються.",
  },
  {
    question: "Навіть якщо я гніваюся, то не вдаюся до лайки.",
  },
  {
    question: "Мені хочеться, щоб мої гріхи пробачили.",
  },
  {
    question: "Я рідко даю здачі, навіть якщо хтось і вдарить мене.",
  },
  {
    question: "Коли виходить не по-моєму, я іноді ображаюсь.",
  },
  {
    question: "Іноді люди дратують мене однією своєю присутністю.",
  },
  {
    question: "Немає людей, яких би я по-справжньому ненавидів.",
  },
  {
    question: "Мій принцип: «Ніколи не довіряти чужакам».",
  },
  {
    question:
      "Якщо хтось дратує мене, я готовий висловити все, що я про нього думаю.",
  },
  {
    question: "Я роблю багато такого, про що потім шкодую.",
  },
  {
    question: "Якщо я роздратуюсь, я можу вдарити когось.",
  },
  {
    question: "Із дитинства я ніколи не виявляв спалахів гніву.",
  },
  {
    question: " Часто почуваю себе, мов діжка з порохом, що ось-ось вибухне.",
  },
  {
    question:
      "Якби всі знали, що я відчуваю, мене б вважали людиною, з якою нелегко ладнати.",
  },
  {
    question:
      "Я завжди розмірковую про те, які потаємні причини змушують людей робити приємне мені.",
  },
  {
    question: "Коли на мене кричать, відповідаю тим самим.",
  },
  {
    question: "Невдачі засмучують мене.",
  },
  {
    question: "Я відчуваю страх не рідше й не частіше за інших.",
  },
  {
    question:
      "Я можу пригадати випадки, коли я був настільки злий, що хапав першу-ліпшу річ.",
  },
  {
    question: "Іноді я відчуваю, що готовий першим кинутись у бійку.",
  },
  {
    question: "Іноді я відчуваю, що життя поводиться зі мною несправедливо.",
  },
  {
    question:
      "Раніше я думав, що більшість людей говорить правду, але зараз я не вірю в це.",
  },
  {
    question: "Я лаюся тільки через злість.",
  },
  {
    question: "Коли я роблю щось неправильно, то відчуваю докори сумління.",
  },
  {
    question:
      "Якщо для захисту своїх прав мені слід використати фізичну силу, я вдаюся до неї.",
  },
  {
    question: " Іноді я виражаю свій гнів тим, що грюкаю кулаком по столу.",
  },
  {
    question: "Я буваю грубий з людьми, які мені не подобаються.",
  },
  {
    question: "У мене немає ворогів, що хотіли б мені нашкодити.",
  },
  {
    question:
      "Я не вмію поставити людину на місце, навіть якщо вона на це заслуговує.",
  },
  {
    question: "Я часто думаю, що жив неправильно.",
  },
  {
    question: "Я знаю людей, які здатні довести мене до бійки.",
  },
  {
    question: "Я не засмучуюсь через дрібниці.",
  },
  {
    question:
      "Мені рідко спадає на думку, що люди намагаються розлютити чи скривдити мене.",
  },
  {
    question:
      "Я часто тільки вдаюся до погроз, але не збираюся їх реалізовувати.",
  },
  {
    question: "Останнім часом я став занудою.",
  },
  {
    question: "Під час суперечки я часто підвищую голос.",
  },
  {
    question:
      "Здебільшого я намагаюся приховувати своє негативне ставлення до людей.",
  },
  {
    question: "Я ліпше поступлюся своїми принципами, ніж сперечатимусь.",
  },
];

export { testItems };
