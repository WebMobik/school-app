const redirectQuestion = {
  "RedirectQuestion#1": {
    title: "Поучись и попробуй ещё раз",
    answers: [{ redirect: "Question#1", value: "Начать сначала" }]
  },
  "RedirectQuestion#2": {
    title: "Попробуй ещё раз",
    redirects: [
      { redirect: "Question#1", value: "Начать сначала" },
      { redirect: "Question#2", value: "Ответить ещё раз" }
    ]
  },
  "RedirectQuestion#5": {
    title: "Если не знаешь, готов поговорить на более сложные темы ?",
    redirects: [
      { redirect: "Question#1", value: "Нет" },
      { redirect: "Question#11", value: "Да, попробую" }
    ]
  }
};

export default redirectQuestion;
