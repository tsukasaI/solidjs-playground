import { t, changeLanguage, languageSignal } from "./i18n";

export const SampleI18n = () => {
  return (
    <>
      <div>
        <p>言語を選択してください</p>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ja")}>Japanese</button>
        <p>選択言語: {languageSignal.get()}</p>
      </div>

      <div>
        <h2>i18nのサンプル</h2>
        <p>{t("welcome")}</p>
        <h2>l10nのサンプル</h2>
        <p>{t("date", new Date())}</p>
      </div>
    </>
  );
};
