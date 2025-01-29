import * as React from 'react';

import { cn } from '@/lib/utils';

// Define the allowed values for 'size'
type Size = 'default' | 'lg';

// Define the InputProps interface with 'size' as a part of the props
interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'> {
    placeholder: string;
    size?: Size; // Custom 'size' prop with 'default' or 'lg'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type = 'text',
            size: size = 'default',
            id,
            name,
            placeholder,
            ...props
        },
        ref
    ) => {
        return (
            <div className="relative">
                <input
                    type={type}
                    id={id}
                    name={name}
                    ref={ref}
                    className={cn(
                        `${size === 'lg' ? 'h-[6.4rem] px-[1.6rem]' : 'h-[4.8rem]'} bg-gray peer w-full rounded-md border-[0.1rem] border-text/20 px-[1.6rem] pt-[0.8rem] text-[1.6rem] text-text placeholder:text-transparent focus:outline-[0.1rem] focus:outline-primary`,
                        className
                    )}
                    placeholder={placeholder}
                    {...props}
                />
                <label
                    htmlFor={id}
                    className={cn(
                        `${size === 'lg' ? 'translate-y-[0.65rem] peer-placeholder-shown:translate-y-[2rem] peer-placeholder-shown:!leading-[2.56rem] peer-focus:translate-y-[0.8rem]' : 'translate-y-[0.4rem] peer-placeholder-shown:translate-y-[1.10rem] peer-placeholder-shown:!leading-[2.2rem] peer-focus:translate-y-[0.2rem]'} absolute left-0 ml-1 translate-x-[1.3rem] text-text/[78%] duration-100 ease-linear peer-placeholder-shown:!text-[1.6rem] peer-focus:!text-[1rem]`
                    )}
                >
                    {placeholder.charAt(0).toUpperCase() + placeholder.slice(1)}
                </label>
            </div>
        );
    }
);

Input.displayName = 'Input';

export { Input };
