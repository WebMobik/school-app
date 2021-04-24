const tests = [
  {
    id: 1,
    title: "Как правильно оформить нумерованный список?",
    variants: [
      { answer: "Поместить внутрь тега <ol> теги <li>, внутри которых написать текст", right: true },
      { answer: "Разделить каждую строку с помощью тега <br>, на каждой новой строке перед текстом добавить число, точку и пробел", right: false },
      { answer: "Просто написать текст в формате: число, точка, пробел, текст, перенос строки. Браузер автоматически распознает данную структуру", right: false },
    ],
  },
  {
    id: 2,
    title: "С помощью какого свойства таблицы определяются её границы?",
    variants: [
      { answer: "property", right: false },
      { answer: "border", right: true },
      { answer: "width", right: false },
      { answer: "gran", right: false },
    ],
  },
  {
    id: 3,
    title: "С помощью какого свойства таблицы можно убрать отступы между границами ячеек?",
    variants: [
      { answer: "bold", right: false },
      { answer: "border-collapse", right: true },
      { answer: "clap", right: false },
      { answer: "shift", right: false },
    ],
  },
  {
    id: 4,
    title: "Каким является следующий адрес ссылки: pages/page2.html",
    variants: [
      { answer: "Абсолютным", right: false },
      { answer: "Относительным", right: true },
    ],
  },
  {
    id: 5,
    title: "Как сделать текст жирным?",
    variants: [
      { answer: "<p>жирный</p>", right: false },
      { answer: "<a>жирный</a>", right: false },
      { answer: "<br>жирный</br>", right: false },
      { answer: "<strong>жирный</strong>", right: true },
    ],
  },
  {
    id: 6,
    title: " Для чего предназначен тег doctype?",
    variants: [
      { answer: "Для прикрепления в форме документов с типом .doc", right: false },
      { answer: "Для указания версии HTML, которая используется в документе", right: true },
      { answer: "Тег специально введён для медицинских сайтов для указания специальности доктора", right: false },
    ],
  },
  {
    id: 7,
    title: "Какой тег при создании страницы не является обязательным?",
    variants: [
      { answer: "doctype", right: false },
      { answer: "strong", right: true },
      { answer: "head", right: false },
      { answer: "body", right: false },
    ],
  },
  {
    id: 8,
    title: "С помощью какого тега следует разделять абзацы?",
    variants: [
      { answer: "<br>", right: false },
      { answer: "<span>", right: false },
      { answer: "<p>", right: true },
      { answer: "<b>", right: false },
    ],
  },
  {
    id: 9,
    title: "С помощью какого свойства можно сделать отступы внутри ячейки в таблице?",
    variants: [
      { answer: "space", right: false },
      { answer: "case", right: false },
      { answer: "padding", right: true },
      { answer: "margin", right: false },
    ],
  },
  {
    id: 10,
    title: "С помощью какого атрибута объединяются ячейки таблицы по горизонтали?",
    variants: [
      { answer: "colspan", right: false },
      { answer: "unity", right: false },
      { answer: "rowspan", right: true },
      { answer: "union", right: false },
    ],
  },
  {
    id: 11,
    title: "Какой тег нужно использовать для названия таблицы?",
    variants: [
      { answer: "body", right: false },
      { answer: "name", right: true },
      { answer: "head", right: false },
      { answer: "caption", right: false },
    ],
  },
  {
    id: 12,
    title: "С помощью какого тега в таблицах создаются строки?",
    variants: [
      { answer: "<th>", right: false },
      { answer: "<tr>", right: true },
      { answer: "<td>", right: false },
    ],
  },
];

export default tests;
