import arang from "@/app/public/arang.jpg";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("Home");
  return (
    <div
      id="home"
      className="box-content max-w-full lg:pl-20 py-10 lg:py-30"
      style={{
        backgroundImage: `url(${arang.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <article className="text-wrap text-center lg:text-left">
        <h3
          className="text-white text-2xl lg:text-5xl font-lato font-semibold pb-8"
          id="companyTitle"
        >
          {t("companyTitle")}
        </h3>
        <div className="lg:w-[700px]" id="companyDescription">
          <TextGenerateEffect
            className="text-white font-lato text-balance text-md lg:text-lg font-normal"
            words={t("companyDescription")}
            filter={false}
            duration={2}
          />
        </div>
      </article>
      <div className="flex justify-center lg:justify-start mt-8">
        <a
          type="button"
          className="transition ease-in-out hover:-translate-y-1 hover:scale-100 rounded-full bg-green-600 px-4 py-2 lg:px-6 lg:py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          href="https://api.whatsapp.com/send/?phone=6289529312100"
        >
          <p className="font-lato" id="order">
            {t("order")}
          </p>
        </a>
      </div>
    </div>
  );
}
