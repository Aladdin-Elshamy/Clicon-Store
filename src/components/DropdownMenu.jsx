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

const currencies = [
  { id: 1, name: "Dollar (USD)", value: "USD" },
  { id: 2, name: "Euro (EUR)", value: "EUR" },
];

export default function DropdownMenu() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(currencies[0]);

  const filteredCurrencies =
    query === ""
      ? currencies
      : currencies.filter((currency) => {
          return currency.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="mx-auto">
      <Combobox
        value={selected}
        onChange={(value) => setSelected(value)}
        onClose={() => setQuery("")}
      >
        <div className="relative z-20">
          <ComboboxInput
            className={clsx(
              "max-w-20 rounded-sm border-none bg-transparent py-1.5 pr-8 pl-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            displayValue={(currency) => currency?.value}
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
            "mt-2 max-w-36 rounded border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {filteredCurrencies.map((currency) => (
            <ComboboxOption
              key={currency.id}
              value={currency}
              className="group flex justify-between cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none text-[#FA8232] data-[focus]:bg-white/10 "
            >
              <div
                className={`${
                  selected?.id === currency.id ? "" : "text-gray-400"
                } text-sm/6`}
              >
                {currency.name}
              </div>
              <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
