const tests = {
  basic: [
    {
      id: 1,
      title: "Что такое React ?",
      variants: [
        { id: "1:1", answer: "Библиотека", right: true },
        { id: "1:2", answer: "Фреймворк", right: false },
        { id: "1:3", answer: "Другое", right: false }
      ],
      answer: false
    },
    {
      id: 2,
      title: "Зачем нужен JSX ?",
      variants: [
        { id: "2:1", answer: "Объяснение UI для #Answer React", right: true },
        { id: "2:2", answer: "Язык разметки", right: false },
        { id: "2:3", answer: "HTML разметка для JS", right: false }
      ],
      findAnswer: "1:3",
      answer: false
    },
    {
      id: 3,
      title: "Что делает функция render ?",
      variants: [
        { text: "Рендерит HTML разметку в JS", right: false },
        { text: "Передает свойства потомку", right: false },
        { text: "Рендерит React-элемент в DOM-элемент", right: true }
      ],
      answer: false
    },
    {
      id: 4,
      title: "Для чего используются props ?",
      variants: [
        { text: "Задание в тег текста", right: false },
        { text: "Передача свойст потомку", right: true },
        { text: "Передача в render функции", right: false }
      ],
      answer: false
    },
    {
      id: 5,
      title: "Знаешь хуки ?",
      variants: [{ text: "Да", redirect: "Hooks" }, { text: "Нет" }],
      answer: false
    },
    {
      id: 6,
      title: "Готов к вопросам потяжелее ?",
      variants: [
        { text: "Да", redirect: "Expert" },
        { text: "Нет", redirect: "Basic" }
      ],
      answer: false
    }
  ],
  hooks: [
    {
      id: 1,
      title: "Для чего используется useEffect ?",
      variants: [
        {
          text: "Запускается при отрисовке (render) всех элементов",
          right: true
        },
        {
          text: "Возвращает мемоизированную callback функцию",
          right: false
        },
        {
          text: "Запускает функцию render для отрисовки элементов",
          right: false
        }
      ],
      answer: false
    },
    {
      id: 2,
      title: "Какой хук возвращает мемоизированный callback ?",
      variants: [
        { text: "useMemo", right: false },
        { text: "useCallback", right: true },
        { text: "useState", right: false }
      ],
      answer: false
    },
    {
      id: 3,
      title: "Какой хук предоставляет текущее состояние компонента ?",
      variants: [
        { text: "useMemo", right: false },
        { text: "useState", right: true },
        { text: "useRef", right: false }
      ],
      answer: false
    },
    {
      id: 4,
      title: "С помощью какого хука можно создать контекст ?",
      variants: [
        { text: "useRef", right: false },
        { text: "createContext", right: false },
        { text: "useContext", right: true }
      ],
      answer: false
    },
    {
      id: 5,
      title: "Готов к вопросам потяжелее ?",
      variants: [
        { text: "Да", redirect: "Expert" },
        { text: "Нет", redirect: "Basic" }
      ],
      answer: false
    }
  ],
  expert: [
    {
      id: 1,
      title: "Зачем используются порталы ?",
      variants: [
        {
          text: "Передача свойст любому React компоненту",
          right: false
        },
        {
          text: "Рендер элемента вне DOM-иерархии родителя",
          right: true
        },
        {
          text: "Вызов всплытия DOM элемента",
          right: false
        }
      ],
      answer: false
    },
    {
      id: 2,
      title: "Для чего используются рефы ?",
      variants: [
        { text: "Императивное изменение дочернего элемента", right: true },
        { text: "Управление передачи данных в State", right: false },
        { text: "Сохранение значений функции", right: false }
      ],
      answer: false
    },
    {
      id: 3,
      title: "Как получить доступ к рефам ?",
      variants: [
        { text: "Через хук useRef", right: false },
        { text: "Через свойство current", right: true },
        { text: "Через обращение к state", right: false }
      ],
      answer: false
    },
    {
      id: 4,
      title: "Зачем нужен StrictMode ?",
      variants: [
        {
          text: "Обнаружение небезопасных методов жизненного цикла",
          right: true
        },
        { text: "Обнаружение проблемных шаблонов", right: false },
        { text: "Обработка статической типизации", right: false }
      ],
      answer: false
    },
    {
      id: 5,
      title: "Конец",
      variants: [
        { text: "Начать заново", redirect: "Basic" },
        { text: "Закончить", redirect: "Basic" }
      ],
      answer: false
    }
  ]
};

export default tests;
