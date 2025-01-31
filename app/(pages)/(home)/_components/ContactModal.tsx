import {
    Modal,
    ModalClose,
    ModalContent,
    ModalDescription,
    ModalHeader,
    ModalTitle,
    ModalTrigger
} from '@/app/_components/Modal';
import { X } from 'lucide-react';
import { ContactForm } from './ContactForm';

const ContactModal = () => {
    return (
        <Modal>
            <ModalTrigger className="h-[2.5rem] w-fit rounded-[0.5rem] border-[0.1rem] border-slate-200 bg-slate-200 px-[2rem] py-[0.1rem] text-[1rem] text-gray-600 shadow-md hover:scale-95 sm:h-[3.5rem] sm:w-[16rem] sm:py-[1rem] sm:text-[1.5rem]">
                Send Message
            </ModalTrigger>
            <ModalContent className="scrollbar-modal max-h-[calc(100vh-3rem)] w-11/12 p-[3.1rem] sm:w-[47rem]">
                <ModalHeader className="flex flex-row items-center justify-between p-0">
                    <ModalTitle className="text-[2.4rem] leading-[2.9rem] text-text">
                        Send Me A Message
                    </ModalTitle>
                    <ModalClose>
                        <X className="h-[2rem] w-[2rem] text-black" />
                        <span className="sr-only">Close</span>
                    </ModalClose>
                </ModalHeader>
                <ModalDescription className="mb-[3.2rem] p-0 text-[1.6rem] text-text/60">
                    Have questions? Are you hiring? If so, feel free to reach
                    out. For faster communication, you can call or message my
                    phone number{'   '}
                    <span className="text-[1.5rem] font-bold text-primary">
                        0945 183 0225
                    </span>
                    .
                </ModalDescription>
                <ContactForm />
            </ModalContent>
        </Modal>
    );
};

export default ContactModal;
