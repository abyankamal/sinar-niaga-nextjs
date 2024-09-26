import Image from "next/image";
import produksi1 from "@/app/public/produksi1.jpg";
import produksi2 from "@/app/public/produksi2.jpg";
import produksi3 from "@/app/public/produksi3.jpg";
import produksi4 from "@/app/public/produksi4.jpg";
import produksi5 from "@/app/public/produksi5.jpg";
import produksi6 from "@/app/public/produksi6.jpg";

export default function About() {
  return (
    <div>
      <div className="grid grid-flow-row grid-cols-1 gap-y-1.5 lg:gap-4 py-8 lg:py-16 mx-auto px-8 lg:px-16">
        <div id="about" className="px-auto py-5 text-wrap lg:w-[700px] mx-auto">
          <h2
            className="text-xl lg:text-3xl font-extrabold leading-tight text-gray-900 pb-8 lg:pb-16"
            id="aboutTitle"
          >
            5 Reasons Why Our Product Must You Buy
          </h2>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-bold text-black"
            id="reason1Title"
          >
            1. About
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-normal text-black"
            id="reason1Description"
          >
            We are a leading export company dedicated to providing high quality
            charcoal and briquette products, sustainably made and meticulously
            to meet the diverse needs of our customers.
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-bold text-black"
            id="reason2Title"
          >
            2. Integrity
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-normal text-black"
            id="reason2Description"
          >
            Stick to the principles and meet the standards and quality desired
            by buyers.
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-bold text-black"
            id="reason3Title"
          >
            3. Quality
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-normal text-black"
            id="reason3Description"
          >
            Quality is generated in many ways by supporting pleasant products
            and services to customers as well as building a good working
            environment.
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-bold text-black"
            id="reason4Title"
          >
            4. Commitment
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-normal text-black"
            id="reason4Description"
          >
            We will continue to provide the best service to our customers at all
            times.
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-bold text-black"
            id="reason5Title"
          >
            5. Innovation
          </p>
          <p
            className="mt-1 text-md font-lato lg:text-xl leading-6 font-normal text-black"
            id="reason5Description"
          >
            Develop products and services that have high appeal in the market
            and strengthen customer preferences.
          </p>
        </div>
        <div id="gallerySection" className="bg-white p-4 text-center">
          <hr className="border-gray-300 mb-4" />
          <h2
            className="text-5xl text-center font-bold mb-4 text-black"
            id="galleryTitle"
          >
            Our Gallery
          </h2>
          <h3 className="text-lg font-semibold mb-2" id="gallerySubtitle">
            Some of our documentation
          </h3>
          <p
            className="mb-4 lg:w-[700px] text-balance text-center mx-auto text-black"
            id="galleryDescription"
          >
            Discover the difference! Through captivating visuals, we demonstrate
            our eco-friendly charcoal production methods, the effectiveness of
            our products, and the lasting benefits we bring to the environment
            and local communities.
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
