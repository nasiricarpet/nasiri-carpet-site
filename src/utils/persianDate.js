// تبدیل تاریخ میلادی به شمسی
export function toPersianDate(date = new Date()) {
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// تاریخ و ساعت شمسی
export function toPersianDateTime(date = new Date()) {
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

// تاریخ کوتاه (مثلاً ۱۴۰۴/۰۸/۲۴)
export function toPersianDateShort(date = new Date()) {
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}