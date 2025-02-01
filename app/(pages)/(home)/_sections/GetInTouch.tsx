import { email } from '@/app/data/info';
import { AiOutlineDingtalk } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import ContactModal from '../_components/ContactModal';
import CopyButton from '../_components/CopyButton';

const GetInTouch = () => {
    return (
        <section
            id="contact"
            className="scroll-mt-[10rem] bg-gradient-to-br from-blue-400 via-cyan-500 to-purple-600"
        >
            <div className="relative top-0 z-20 w-full bg-gray-900/40 text-white">
                <div className="container relative z-30 flex w-full max-w-[120rem] flex-col gap-[2rem] px-[3rem] py-[5.3rem] lg:flex-row lg:justify-between lg:gap-[3rem] lg:px-[6rem]">
                    <Header />
                    <ContactOptions />
                </div>
            </div>
        </section>
    );
};

const Header = () => {
    return (
        <div className="lg:basis-1/2">
            <h2 className="text-[3rem] font-bold md:text-[3.4rem] lg:text-[3.8rem]">
                Get in Touch{' '}
                <AiOutlineDingtalk className="inline align-middle" />
            </h2>
            <p className="text-[1.4rem]/[2rem] text-white md:text-[1.8rem]/[2.4rem]">
                I code with heart, if you believe I would be a good fit for your
                team, please feel free to reach out.
            </p>
        </div>
    );
};

const ContactOptions = () => {
    return (
        <div className="mx-auto flex w-full flex-col items-center gap-[1rem] text-[1.4rem] text-gray-100 sm:flex-row md:w-9/12 lg:w-full lg:basis-1/2">
            <SendMeAnEmail />
            <p>or</p>
            <SendMeAMessage />
        </div>
    );
};

const SendMeAnEmail = () => {
    return (
        <div className="flex h-[12rem] w-full basis-full flex-col items-center justify-center rounded-[0.8rem] border-2 border-white px-[1rem] py-[1rem] text-center ease-in-out hover:bg-gray-900/90 sm:basis-1/2 sm:py-[2rem]">
            <p className="mb-[0.5rem] text-[2rem] font-[500] sm:text-[1.8rem] md:text-[2rem]">
                Send me an email <MdEmail className="inline align-middle" />
            </p>
            <CopyButton>{email}</CopyButton>
            <p className="mt-[0.2rem] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
                click to copy this email{' '}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline w-[1.4rem] fill-current align-middle text-gray-100 sm:w-[2rem]"
                    viewBox="0 -960 960 960"
                >
                    <path d="M551-80 406-392 240-160v-720l560 440H516l144 309-109 51Z"></path>
                </svg>
            </p>
        </div>
    );
};

const SendMeAMessage = () => {
    return (
        <div className="flex h-[12rem] w-full basis-full flex-col items-center justify-center rounded-[0.8rem] border-2 border-white px-[1rem] py-[1rem] text-center ease-in-out hover:bg-gray-900/90 sm:basis-1/2 sm:py-[2rem]">
            <p className="mb-[0.5rem] text-[2rem] font-[500] sm:text-[1.8rem] md:text-[2rem] lg:text-[1.8rem]">
                Send me a message
                <RiMessage2Fill className="ml-2 inline align-middle" />
            </p>
            <ContactModal />
            <p className="mt-[0.2rem] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
                click to open form
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline w-[1.4rem] fill-current align-middle text-gray-100 sm:w-[2rem]"
                    viewBox="0 -960 960 960"
                >
                    <path d="M551-80 406-392 240-160v-720l560 440H516l144 309-109 51Z"></path>
                </svg>
            </p>
        </div>
    );
};
export default GetInTouch;
