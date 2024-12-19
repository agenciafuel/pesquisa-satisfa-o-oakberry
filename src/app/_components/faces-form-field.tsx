"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  type UseFormReturn,
  type FieldValues,
  type Path,
} from "react-hook-form";

import VeryGood from "@/assets/imgs/face-icons/muito-bom.png";
import Good from "@/assets/imgs/face-icons/bom.png";
import Normal from "@/assets/imgs/face-icons/regular.png";
import Bad from "@/assets/imgs/face-icons/ruim.png";
import VeryBad from "@/assets/imgs/face-icons/muito-ruim.png";
import Image from "next/image";

interface FacesFormFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
}

const Radios = [
  {
    icon: VeryBad,
    value: "1",
    label: "Muito Ruim",
  },
  {
    icon: Bad,
    value: "2",
    label: "Ruim",
  },
  {
    icon: Normal,
    value: "3",
    label: "Regular",
  },
  {
    icon: Good,
    value: "4",
    label: "Bom",
  },
  {
    icon: VeryGood,
    value: "5",
    label: "Muito Bom",
  },
];

function FacesFormField<T extends FieldValues>({
  form,
  name,
  label,
}: FacesFormFieldProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-6">
          <FormLabel className="text-lg font-extrabold italic text-purple-500 md:text-2xl">
            {label}
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col justify-between md:flex-row"
            >
              {Radios.map((radio) => (
                <FormItem
                  className="flex flex-col items-center justify-center gap-1 space-x-3 text-center"
                  key={radio.value}
                >
                  <FormLabel className="mb-0 text-base font-bold !leading-normal text-purple-500 md:text-xl">
                    {radio.label}
                  </FormLabel>
                  <Image
                    src={radio.icon}
                    alt={radio.label}
                    width={100}
                    height={100}
                  />
                  <FormControl>
                    <RadioGroupItem value={radio.value} className="mx-auto" />
                  </FormControl>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export { FacesFormField };
