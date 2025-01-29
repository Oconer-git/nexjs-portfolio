'use client';

import { cn } from '@/lib/utils';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const Modal = DialogPrimitive.Root;
const ModalPortal = DialogPrimitive.Portal;
const ModalClose = DialogPrimitive.Close;

const ModalOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
            className
        )}
        {...props}
    />
));
ModalOverlay.displayName = DialogPrimitive.Overlay.displayName;

const modalTriggerVariants = cva(
    'inline-flex items-center justify-center font-bold gap-2 whitespace-nowrap rounded-md text-[1.6rem] leading-[1.25rem] ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default: 'bg-primary text-white',
                destructive: 'bg-destructive text-destructive-foreground',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary: 'bg-gray text-gray hover:bg-gray/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline'
            },
            size: {
                default: 'w-[18rem] h-[6.4rem]',
                sm: 'w-[18rem] h-[4.8rem]',
                lg: 'w-full sm:w-[24rem] h-[6.4rem]',
                full: 'w-full',
                icon: 'h-10 w-10'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

export interface ModalTriggerProps
    extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>,
        VariantProps<typeof modalTriggerVariants> {}

const ModalTrigger = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Trigger>,
    ModalTriggerProps
>(({ className, variant, size, ...props }, ref) => (
    <DialogPrimitive.Trigger
        ref={ref}
        className={cn(modalTriggerVariants({ variant, size, className }))}
        {...props}
    />
));
ModalTrigger.displayName = DialogPrimitive.Trigger.displayName;

const ModalContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <ModalPortal>
        <ModalOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] gap-4 rounded-md bg-white p-[2rem] shadow-lg duration-200',
                className
            )}
            {...props}
        >
            {children}
        </DialogPrimitive.Content>
    </ModalPortal>
));
ModalContent.displayName = DialogPrimitive.Content.displayName;

const ModalHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn('mb-[1.6rem] flex flex-col text-left', className)}
        {...props}
    />
);
ModalHeader.displayName = 'ModalHeader';

const ModalFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
            className
        )}
        {...props}
    />
);
ModalFooter.displayName = 'ModalFooter';

const ModalTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn('font-bold', className)}
        {...props}
    />
));
ModalTitle.displayName = DialogPrimitive.Title.displayName;

const ModalDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn('space-y-2 text-[1.4rem]', className)}
        {...props}
    />
));
ModalDescription.displayName = DialogPrimitive.Description.displayName;

export {
    Modal,
    ModalClose,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalPortal,
    ModalTitle,
    ModalTrigger
};
