import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

const langs = [
  { id: 1, name: "English", img: "./images/us.png" },
  { id: 2, name: "Mandarin", img: "./images/mandarin.png" },
  { id: 3, name: "Russian", img: "./images/russa.png" },
];

export default function Example() {
  const [query, setQuery] = useState("");
  const [selected] = useState(langs[0]);

  const filteredLangs =
    query === ""
      ? langs
      : langs.filter((lang) => {
          return lang.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="mx-auto">
      <Combobox value={selected} onClose={() => setQuery("")}>
        <div className="relative z-20">
          <ComboboxInput
            className={clsx(
              "w-24 rounded-sm border-none bg-transparent py-1.5 pr-8 pl-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            displayValue={(person) => person?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5 z-20">
            <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "mt-2 w-52 rounded border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {filteredLangs.map((lang) => (
            <ComboboxOption
              key={lang.id}
              value={lang}
              className="group flex justify-between cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10 text-[#FA8232]"
            >
              <div className="flex items-center gap-2">
                <img src={lang.img} alt={lang.name} className="w-4 h-4" />
                <div
                  className={`${
                    selected.id === lang.id ? "text-black" : "text-gray-400"
                  } text-sm/6`}
                >
                  {lang.name}
                </div>
              </div>
              <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
