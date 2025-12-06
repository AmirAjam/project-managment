const getTodayDateJalali = (): string => {
  const today = new Date();

  const year = new Intl.DateTimeFormat("fa-IR", { year: "numeric" }).format(
    today
  );

  const parts = new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).formatToParts(today);

  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const day = parts.find((p) => p.type === "day")?.value;
  const month = parts.find((p) => p.type === "month")?.value;

  return `${weekday}، ${day} ${month} ${year}`;
};

export { getTodayDateJalali };
