const data = {
  Справочник: [
    {
      id: 0,
      title: "HTML",
      page: "/html",
      content: `
                Тег <html> является контейнером, который заключает в себе все содержимое веб-страницы,
                включая теги <head> и <body>. Открывающий и закрывающий теги <html> в документе необязательны,
                но хороший стиль диктует непременное их использование. Как правило, тег <html> идет в документе вторым,
                после определения типа документа (Document Type Definition, DTD), устанавливаемого через элемент <!DOCTYPE>.
                Закрывающий тег <html> должен всегда стоять в документе последним.
            `,
      example: `
                <!DOCTYPE HTML>
                <html>
                    <head>
                    <!-- Этот раздел предназначен для заголовка страницы и технической информации. -->
                    </head>
                
                    <body>
                    <!-- А здесь надо размещать все, что хочется увидеть на странице. -->
                    </body>
                </html>
            `
    },
    {
      id: 1,
      title: "<!DOCTYPE>",
      page: "/doctype",
      content: `
                Элемент <!DOCTYPE> предназначен для указания типа 
                текущего документа — DTD (document type definition, описание типа документа).
                Это необходимо, чтобы браузер понимал, как следует интерпретировать текущую веб-страницу,
                поскольку HTML существует в нескольких версиях, кроме того, имеется XHTML (EXtensible HyperText Markup
                Language, расширенный язык разметки гипертекста), похожий на HTML, но различающийся с ним по синтаксису.
                Чтобы браузер «не путался» и понимал, согласно какому стандарту отображать веб-страницу и необходимо
                в первой строке кода задавать <!DOCTYPE>.
            `,
      example: `
                <!DOCTYPE [Элемент верхнего уровня] [Публичность] "[Регистрация]//[Организация]//[Тип] [Имя]//[Язык]" "[URL]">
            `
    },
    {
      id: 2,
      title: "<!-- -->",
      page: "/comment",
      content: `
                Тег добавляет комментарий в код документа. Текст комментария не отображается на странице.
                Разрешается внутрь комментария добавлять другие теги,вложенные комментарии (когда один комментарий
                расположен внутри другого) недопустимы.
            `,
      example: `
                <!-- текст -->
            `
    },
    {
      id: 3,
      title: "a",
      page: "/a",
      content: `
                Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.
                В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.
                Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки.
                При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.
            `,
      example: `
                <a href="URL">...</a>
                <a name="идентификатор">...</a>
            `
    },
    {
      id: 4,
      title: "table",
      page: "/table",
      content: `
                Элемент <table> служит контейнером для элементов, определяющих содержимое таблицы.
                Любая таблица состоит из строк и ячеек, которые задаются с помощью тегов <tr> и <td>.
                Внутри <table> допустимо использовать следующие элементы: <caption>, <col>, <colgroup>, <tbody>, <td>, <tfoot>, <th>, <thead> и <tr>.
            `,
      example: `
                <table>
                    <tr>
                    <td>...</td>
                    </tr>
                </table>
            `
    },
    {
      id: 5,
      title: "tr",
      page: "/tr",
      content: `
                Тег <tr> служит контейнером для создания строки таблицы.
                Каждая ячейка в пределах такой строки может задаваться с помощью тега <th> или <td>.
            `,
      example: `
                <table>
                    <tr>
                    <td>...</td>
                    </tr>
                </table>
            `
    },
    {
      id: 6,
      title: "td",
      page: "/td",
      content: `
                Предназначен для создания одной ячейки таблицы.
                Тег <td> должен размещаться внутри контейнера <tr>, который в свою очередь располагается внутри тега <table>.
            `,
      example: `
                <table>
                    <tr>
                    <td>...</td>
                    </tr>
                </table>
            `
    },
    {
      id: 7,
      title: "audio",
      page: "/audio",
      content: `
                Добавляет, воспроизводит и управляет настройками аудиозаписи на веб-странице.
                Путь к файлу задается через атрибут src или вложенный тег <source>.
                Внутри контейнера <audio> можно написать текст, который будет выводиться в браузерах, не работающих с этим тегом.
            `,
      example: `
                <audio src="URL"></audio>
                <audio>
                    <source src="URL">
                </audio>
            `
    },
    {
      id: 8,
      title: "video",
      page: "/video",
      content: `
                Добавляет, воспроизводит и управляет настройками видеоролика на веб-странице.
                Путь к файлу задается через атрибут src или вложенный тег <source>.
            `,
      example: `
                <video>
                    <source src="URL">
                </video>
            `
    },
    {
      id: 9,
      title: "form",
      page: "/form",
      content: `
                Тег <form> устанавливает форму на веб-странице.
                Форма предназначена для обмена данными между пользователем и сервером.
                Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов
                можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.
            `,
      example: `
                <form action="URL">
                    ...
                </form>
            `
    },
    {
      id: 10,
      title: "input",
      page: "/input",
      content: `
                Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы
                интерфейса и обеспечить взаимодействие с пользователем.
                Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. 
            `,
      example: `
                <input атрибуты />
            `
    },
    {
      id: 11,
      title: "textarea",
      page: "/textarea",
      content: `
                Поле <textarea> представляет собой элемент формы для создания области,
                в которую можно вводить несколько строк текста.
                В отличие от тега <input> в текстовом поле допустимо делать переносы строк, они сохраняются при отправке данных на сервер.
            `,
      example: `
                <textarea атрибуты>
                    текст
                </textarea>
            `
    }
  ],
  Тест: [
    {
      id: 12,
      title: "Тест 1",
      page: "/testOne",
      content: `
              Тест 1
            `,
      example: `
                Вопросы...
            `
    }
  ]
};

export default data;
