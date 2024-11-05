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
    icon: VeryGood,
    value: "5",
    label: "Muito Bom",
  },
  {
    icon: Good,
    value: "4",
    label: "Bom",
  },
  {
    icon: Normal,
    value: "3",
    label: "Regular",
  },
  {
    icon: Bad,
    value: "2",
    label: "Ruim",
  },
  {
    icon: VeryBad,
    value: "1",
    label: "Muito Ruim",
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
          <FormLabel className="font-extrabold text-2xl text-purple-500 italic">{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex justify-between"
            >
              {Radios.map((radio) => (
                <FormItem
                  className="flex flex-col items-center justify-center space-x-3 gap-1 text-center"
                  key={radio.value}
                >
                  <FormLabel className="font-bold text-xl text-purple-500">{radio.label}</FormLabel>
                  <Image
                    src={radio.icon}
                    alt={radio.label}
                    width={100}
                    height={100}
                  />
                  <FormControl>
                    <RadioGroupItem value={radio.value} className="mx-auto"/>
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
