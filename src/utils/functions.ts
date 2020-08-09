/** Функция отмены скрола страницы при прокрутке колесом над выбранным элементом*/
export const overflow = (selector: string, value: string) => {
    const el = document.querySelector<HTMLElement>(selector);
    if (el) {
        el.style.overflow = value;
        if (value === 'hidden') {
            el.style.paddingRight = '12px';
        } else {
            el.style.paddingRight = '0';
        }
    }
}