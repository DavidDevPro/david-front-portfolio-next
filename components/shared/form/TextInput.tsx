import { Controller, FieldValues } from 'react-hook-form';
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TextInputProps } from '@/lib/types';

export const TextInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  icon: Icon,
  iconColor = "text-accent",
  type = "text",
  errors,
  description = `Entrez votre ${label.toLowerCase()}`,
  rules,
  clearErrors,
  disabled = false,
  required = false,
  autoComplete,
}: TextInputProps<T> & { disabled?: boolean; autoComplete?: string }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        ...rules,
        required: required ? `${label} est requis` : false,
      }}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm" htmlFor={name}>
            {label} {required && <span className="text-red-700">*</span>}
          </FormLabel>
          <FormControl>
            <div className="relative">
              {Icon && (
                <Icon className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 shrink-0 ${iconColor}`} aria-hidden="true" />
              )}
              <Input
                id={name}
                type={type}
                placeholder={placeholder}
                {...field}
                aria-required={required}
                className="w-full pl-10 border-gray-300 rounded-md shadow-md focus:ring-accent focus:border-accent"
                autoComplete={autoComplete}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  if (clearErrors) clearErrors(name);
                }}
                disabled={disabled}
              />
            </div>
          </FormControl>
          <FormDescription className="sr-only">{description}</FormDescription>
          {errors?.[name] && (
            <FormMessage className="text-red-500">{errors[name]?.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};