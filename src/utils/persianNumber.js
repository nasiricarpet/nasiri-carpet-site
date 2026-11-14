const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

// تبدیل اعداد لاتین به فارسی
export function toPersianNumber(input) {
  if (input === null || input === undefined) return '';
  return String(input).replace(/\d/g, (d) => persianDigits[d]);
}

// تبدیل اعداد فارسی به لاتین (برای محاسبات)
export function toEnglishNumber(input) {
  if (input === null || input === undefined) return '';
  return String(input).replace(/[۰-۹]/g, (d) =>
    String(persianDigits.indexOf(d))
  );
}

// فرمت قیمت به تومان با اعداد فارسی
export function formatPrice(amount) {
  const formatted = new Intl.NumberFormat('fa-IR').format(amount);
  return `${formatted} تومان`;
}

// فرمت اعداد بزرگ با فاصله (مثلاً ۱۲,۰۰۰,۰۰۰)
export function formatNumberFa(n) {
  return toPersianNumber(new Intl.NumberFormat('fa-IR').format(n));
}