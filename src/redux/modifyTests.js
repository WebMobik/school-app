const tests = {
  "Question#1": {
    id: 1,
    title: "Что такое React ?",
    answers: [
      { id: "Answer#1:1", value: "Библиотека" },
      { id: "Answer#1:2", value: "Фреймворк" },
      { id: "Answer#1:3", value: "Другое" }
    ]
  },
  "Question#2": {
    id: 2,
    title: "Зачем нужен JSX ?",
    answers: [
      { id: "Answer#2:1", value: "Объяснение UI для #Answer React" },
      { id: "Answer#2:2", value: "Язык разметки" },
      { id: "Answer#2:3", value: "HTML разметка для JS" }
    ]
  },
  "Question#3": {
    id: 3,
    title: "Что делает функция render ?",
    answers: [
      { id: "Answer#3:1", value: "Рендерит HTML разметку в JS" },
      { id: "Answer#3:2", value: "Передает свойства потомку" },
      { id: "Answer#3:3", value: "Рендерит React-элемент в DOM-элемент" }
    ]
  },
  "Question#4": {
    id: 4,
    title: "Для чего используются props ?",
    answers: [
      { id: "Answer#4:1", value: "Задание в тег текста" },
      { id: "Answer#4:2", value: "Передача свойст потомку" },
      { id: "Answer#4:3", value: "Передача в render функции" }
    ]
  },
  "Question#5": {
    id: 5,
    title: "Знаешь хуки ?",
    answers: [
      { id: "Answer#5:1", value: "Да" },
      { id: "Answer#5:2", value: "Нет" }
    ]
  },
  "Question#6": {
    id: 6,
    title: "Для чего используется useEffect ?",
    answers: [
      { id: "Answer#6:1", value: "Объяснение UI для #Answer React" },
      { id: "Answer#6:2", value: "Язык разметки" },
      { id: "Answer#6:3", value: "HTML разметка для JS" }
    ]
  },
  "Question#7": {
    id: 7,
    title: "Какой хук возвращает мемоизированный callback ?",
    answers: [
      { id: "Answer#7:1", value: "useMemo" },
      { id: "Answer#7:2", value: "useCallback" },
      { id: "Answer#7:3", value: "useState" }
    ]
  },
  "Question#8": {
    id: 8,
    title: "Какой хук предоставляет текущее состояние компонента ?",
    answers: [
      { id: "Answer#8:1", value: "useMemo" },
      { id: "Answer#8:2", value: "useState" },
      { id: "Answer#8:3", value: "useRef" }
    ]
  },
  "Question#9": {
    id: 9,
    title: "С помощью какого хука можно создать контекст ?",
    answers: [
      { id: "Answer#9:1", value: "useRef" },
      { id: "Answer#9:2", value: "createContext" },
      { id: "Answer#9:3", value: "useContext" }
    ]
  },
  "Question#10": {
    id: 10,
    title: "Готов к вопросам потяжелее ?",
    answers: [
      { id: "Answer#10:1", value: "Да" },
      { id: "Answer#10:2", value: "Нет" }
    ]
  },
  "Question#11": {
    id: 11,
    title: "Зачем используются порталы ?",
    answers: [
      { id: "Answer#11:1", value: "Передача свойст любому React компоненту" },
      { id: "Answer#11:2", value: "Рендер элемента вне DOM-иерархии родителя" },
      { id: "Answer#11:3", value: "Вызов всплытия DOM элемента" }
    ]
  },
  "Question#12": {
    id: 12,
    title: "Для чего используются рефы ?",
    answers: [
      { id: "Answer#12:1", value: "Императивное изменение дочернего элемента" },
      { id: "Answer#12:2", value: "Управление передачи данных в State" },
      { id: "Answer#12:3", value: "Сохранение значений функции" }
    ]
  },
  "Question#13": {
    id: 13,
    title: "Как получить доступ к рефам ?",
    answers: [
      { id: "Answer#13:1", value: "Через хук useRef" },
      { id: "Answer#13:2", value: "Через свойство current" },
      { id: "Answer#13:3", value: "Через обращение к state" }
    ]
  },
  "Question#14": {
    id: 2,
    title: "Зачем нужен StrictMode ?",
    answers: [
      {
        id: "Answer#14:1",
        value: "Обнаружение небезопасных методов жизненного цикла"
      },
      { id: "Answer#14:2", value: "Обнаружение проблемных шаблонов" },
      { id: "Answer#14:3", value: "Обработка статической типизации" }
    ]
  }
};

export default tests;
