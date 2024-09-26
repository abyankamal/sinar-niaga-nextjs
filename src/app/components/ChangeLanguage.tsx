import { Fragment, useEffect, useState, useTransition } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Image, { StaticImageData } from "next/image";
import Indonesian from "@/app/public/indonesia.png";
import UK from "@/app/public/english.png";
import Arabic from "@/app/public/arab.png";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface Language {
  id: string;
  avatar: StaticImageData;
}

const languages: Language[] = [
  { id: "en", avatar: UK },
  { id: "id", avatar: Indonesian },
  { id: "ar", avatar: Arabic },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("LanguageSwitcher");
  const [selected, setSelected] = useState<Language | undefined>(undefined); // Initially undefined
  const [isPending, startTransition] = useTransition();
  const [mounted, setMounted] = useState(false); // Check if component is mounted

  // Set the selected language after component mounts to avoid hydration errors
  useEffect(() => {
    setMounted(true);
    const currentLanguage = languages.find((lang) => lang.id === locale);
    setSelected(currentLanguage);
  }, [locale]);

  const changeLanguage = (newLanguage: Language) => {
    setSelected(newLanguage);
    startTransition(() => {
      router.replace(
        `/${newLanguage.id}${window.location.pathname.substring(3)}`
      );
    });
  };

  const getLanguageName = (languageId: string) => {
    const index = languages.findIndex((lang) => lang.id === languageId);
    return t.raw("language")[index] || languageId.toUpperCase();
  };

  if (!mounted || !selected) return null; // Wait for the client-side to mount before rendering

  return (
    <Listbox value={selected} onChange={changeLanguage}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <ListboxButton
              className={`relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 ${
                isPending ? "opacity-50" : ""
              }`}
              disabled={isPending}
            >
              <span className="flex items-center">
                <Image
                  src={selected.avatar}
                  alt=""
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                  width={20}
                  height={20}
                />
                <span className="ml-3 block truncate">
                  {getLanguageName(selected.id)}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {languages.map((language) => (
                  <ListboxOption
                    key={language.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={language}
                    disabled={isPending}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <Image
                            src={language.avatar}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                            width={20}
                            height={20}
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {getLanguageName(language.id)}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
