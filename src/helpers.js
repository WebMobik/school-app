export const switchTextResult = (balls) => {
    switch (true) {
        case balls < 150:
            return "Плохой результат, подучите и попробуйте ещё раз !";
        case balls > 150 && balls < 350:
            return "Неплохой результат, однако есть что подучить !";
        case balls > 350 && balls < 600:
            return "Хорошо, вы достаточно неплохо выучили материал !";
        case balls === 600:
            return "Отлично, вы хорошо выучили материал !";
        default:
            break;
    }
}