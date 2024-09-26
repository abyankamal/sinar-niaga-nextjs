import Image from "next/image";
import produksi1 from "@/app/public/produksi1.jpg";
import produksi2 from "@/app/public/produksi2.jpg";
import produksi3 from "@/app/public/produksi3.jpg";
import produksi4 from "@/app/public/produksi4.jpg";
import produksi5 from "@/app/public/produksi5.jpg";
import produksi6 from "@/app/public/produksi6.jpg";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return (
    <div>
      <div className="grid grid-flow-row grid-cols-1 gap-y-1.5 lg:gap-4 py-8 lg:py-16 mx-auto px-8 lg:px-16">
        <div id="about" className="px-auto py-5 text-wrap lg:w-[700px] mx-auto">
          <h2
            className="text-xl lg:text-3xl font-extrabold leading-tight text-gray-900 pb-8 lg:pb-16"
            id="aboutTitle"
          >
            {t("aboutTitle")}
          </h2>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-bold text-black"
            id="reason1Title"
          >
            {t("reason1Title")}
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-normal text-black"
            id="reason1Description"
          >
            {t("reason1Description")}
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-bold text-black"
            id="reason2Title"
          >
            {t("reason2Title")}
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-normal text-black"
            id="reason2Description"
          >
            {t("reason2Description")}
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-bold text-black"
            id="reason3Title"
          >
            {t("reason3Title")}
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-normal text-black"
            id="reason3Description"
          >
            {t("reason3Description")}
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-bold text-black"
            id="reason4Title"
          >
            {t("reason4Title")}
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-normal text-black"
            id="reason4Description"
          >
            {t("reason4Description")}
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-bold text-black"
            id="reason5Title"
          >
            {t("reason5Title")}
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-normal text-black"
            id="reason5Description"
          >
            {t("reason5Description")}
          </p>
        </div>
        <div id="gallerySection" className="bg-white p-4 text-center">
          <hr className="border-gray-300 mb-4" />
          <h2
            className="text-5xl text-center font-bold mb-4 text-black"
            id="galleryTitle"
          >
            {t("galleryTitle")}
          </h2>
          <h3 className="text-lg font-semibold mb-2" id="gallerySubtitle">
            {t("gallerySubtitle")}
          </h3>
          <p
            className="mb-4 lg:w-[700px] text-balance text-center mx-auto text-black"
            id="galleryDescription"
          >
            {t("galleryDescription")}
          </p>
          <hr className="border-gray-300 mb-4" />
          <div className="grid grid-flow-row md:grid-cols-3 gap-4">
            <Image
              src={produksi1}
              alt="Image 1"
              className="rounded-lg w-[300px] lg:w-[600px] h-[200px] mx-auto object-cover"
            />
            <Image
              src={produksi2}
              alt="Image 2"
              className="rounded-lg w-[300px] lg:w-[600px] h-[200px] mx-auto object-cover"
            />
            <Image
              src={produksi3}
              alt="Image 3"
              className="rounded-lg w-[300px] lg:w-[600px] h-[200px] mx-auto object-cover"
            />
            <Image
              src={produksi4}
              alt="Image 4"
              className="rounded-lg w-[300px] lg:w-[600px] h-[200px] mx-auto object-cover"
            />
            <Image
              src={produksi5}
              alt="Image 5"
              className="rounded-lg w-[300px] lg:w-[600px] h-[200px] mx-auto object-cover"
            />
            <Image
              src={produksi6}
              alt="Image 6"
              className="rounded-lg w-[300px] lg:w-[600px] h-[200px] mx-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
