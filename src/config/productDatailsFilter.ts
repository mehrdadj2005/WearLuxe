export const dataFilter = {
  colors: {
    title: "رنگ",
    label: "colors",
    id: 121,
    filters: [
      { id: "color=blue&", name: "آبی" },
      { id: "color=green&", name: "سبز" },
      { id: "color=red&", name: "قرمز" },
      { id: "color=black&", name: "مشکی" },
      { id: "color=white&", name: "سفید" },
      { id: "color=yellow&", name: "زرد" },
      { id: "color=orange&", name: "نارنجی" },
      { id: "color=purple&", name: "بنفش" },
      { id: "color=pink&", name: "صورتی" },
      { id: "color=brown&", name: "قهوه‌ای" },
      { id: "color=gray&", name: "خاکستری" },
      { id: "color=beige&", name: "بژ" },
      { id: "color=navy&", name: "سرمه‌ای" },
    ],
  },
  sizes: {
    title: "سایز",
    label: "sizes",
    id: 122,
    filters: [
      { id: "size=S&", name: "اِسمال" },
      { id: "size=M&", name: "مدیوم" },
      { id: "size=L&", name: "لارج" },
      { id: "size=XL&", name: "ایکس لارج" },
      { id: "size=XXL&", name: "دو ایکس لارج" },
      { id: "size=XXXL&", name: "سه ایکس لارج" },
    ],
  },
};

export const dataSort = {
  title: "مرتب‌سازی براساس:",
  label: "sort",
  id: 123,
  filters: [
    { id: "sales&_order=desc", name: "پرفروش‌ترین" },
    { id: "rating&_order=desc", name: "محبوب‌ترین" },
    { id: "publishTimeSort&_order=desc", name: "جدیدترین" },
    { id: "price&_order=asc", name: "ارزان‌ترین" },
    { id: "price&_order=desc", name: "گران‌ترین" },
  ],
};
