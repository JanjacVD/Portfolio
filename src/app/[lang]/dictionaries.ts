import "server-only";

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  hr: () =>
    import("../../dictionaries/hr.json").then((module) => module.default),
};

export type TLocale = "en" | "hr";
export const getDictionary = async (locale: TLocale) =>
  dictionaries[locale ?? "en"]();
