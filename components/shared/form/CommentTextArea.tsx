"use client";

import { Controller, FieldValues } from 'react-hook-form';
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui';
import { CommentTextAreaProps } from '@/lib/types';

export const CommentTextArea = <T extends FieldValues>({
  control,
  name,
  label = "Avis", // Label par défaut, peut être remplacé
  charCount,
  maxCharCount,
  errors,
  handleCommentChange,
  rules,
  clearErrors,
  placeholder,
  textareaClassName = "",
  required = false,
}: CommentTextAreaProps<T> & { required?: boolean }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        ...rules,
        required: required ? "Ce champ est obligatoire." : false, // Ajouter la validation conditionnelle
      }}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm" htmlFor={name}>
            {label} {required && <span className="text-red-700">*</span>}
          </FormLabel>
          <FormControl>
            <Textarea
              id={name}
              value={field.value || ""} // Utiliser la valeur contrôlée
              onChange={(e) => {
                handleCommentChange(e);
                field.onChange(e);
                if (clearErrors) clearErrors(name);
              }}
              aria-required={required}
              className={`w-full rounded-md shadow-md focus:ring-accent focus:border-accent border border-gray-300 ${textareaClassName}`}
              placeholder={placeholder}
            />
          </FormControl>
          <div className="text-right text-sm text-gray-500">
            {charCount}/{maxCharCount} caractères
          </div>
          <FormDescription className="sr-only">
            Entrez votre message
          </FormDescription>
          {errors?.[name] && (
            <FormMessage className="text-red-500">
              {errors[name]?.message}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};