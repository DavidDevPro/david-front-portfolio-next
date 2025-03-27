"use client";

import { Controller, FieldValues } from 'react-hook-form';
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import { PasswordInputProps } from '@/lib/types';

export const PasswordInput = <T extends FieldValues>({
  control,
  name,
  placeholder,
  rules,
  errors,
  clearErrors,
  required = false,
  autoComplete,
}: PasswordInputProps<T> & { required?: boolean; autoComplete?: string }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        ...rules,
        required: required ? `${placeholder} est requis` : false,
      }}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm" htmlFor={name}>
            {placeholder} {required && <span className="text-red-700">*</span>}
          </FormLabel>
          <FormControl>
            <div className="relative">
              <RiLockPasswordLine
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-primary shrink-0"
                aria-hidden="true"
              />
              <Input
                id={name}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                {...field}
                className="w-full pl-10 border border-gray-300 rounded-lg shadow-lg  focus:ring-primary focus:border-primary"
                aria-required={required}
                autoComplete={autoComplete}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  if (clearErrors) clearErrors(name); // Effacer les erreurs s'il y a une entrée
                }}
              />
              <button
                type="button"
                aria-label="Afficher/Masquer le mot de passe"
                onClick={togglePasswordVisibility}
                className="text-primary absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <LuEye className="h-6 w-6 shrink-0" />
                ) : (
                  <LuEyeOff className="h-6 w-6 shrink-0" />
                )}
              </button>
            </div>
          </FormControl>
          <FormDescription className="sr-only">
            Entrez votre mot de passe
          </FormDescription>
          {errors?.[name] && (
            <FormMessage className="text-red-500">{errors[name]?.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

