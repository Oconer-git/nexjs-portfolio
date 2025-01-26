import { Button } from '@/app/_components/Button';
import { AiOutlineDingtalk } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';

const GetInTouch = () => {
    return (
        <section className="bg-gradient-to-br from-blue-400 via-cyan-500 to-purple-600">
            <div className="relative top-0 z-20 w-full bg-gray-900/40 text-white">
                <div className="container relative z-30 px-[3rem] py-[5.3rem]">
                    <Header />
                    <ContactOptions />
                </div>
            </div>
        </section>
    );
};

const Header = () => {
    return (
        <>
            <h2 className="text-[3rem] font-bold">
                Get in Touch{' '}
                <AiOutlineDingtalk className="inline align-middle" />
            </h2>
            <p className="text-[1.4rem] leading-[2rem] text-white">
                If you believe I would be a good fit for your team, please feel
                free to reach out.
            </p>
        </>
    );
};

const ContactOptions = () => {
    return (
        <div className="mt-[2rem] flex flex-row items-center gap-[1rem] text-[1.4rem] text-gray-100">
            <div className="flex h-[12rem] basis-1/2 flex-col items-center justify-center rounded-[0.8rem] border-2 border-white px-[0.4rem] py-[2rem] text-center ease-in-out hover:bg-gray-900/90">
                <p className="text-[1.4rem] font-[500]">
                    Send me an email <MdEmail className="inline" />
                </p>
                <Button className="mt-[0.5rem] h-[3.5rem] w-[13rem] rounded-[0.5rem] border-[0.1rem] border-slate-200 bg-slate-200 text-[1.2rem] text-gray-600 shadow-md hover:scale-95">
                    oconer@fellowdevs.io
                </Button>
                <p className="text-[1rem]">
                    click to copy this email{' '}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline w-[2rem] fill-current align-middle text-gray-100"
                        viewBox="0 -960 960 960"
                    >
                        <path d="M551-80 406-392 240-160v-720l560 440H516l144 309-109 51Z"></path>
                    </svg>
                </p>
            </div>
            or
            <div className="flex h-[12rem] basis-1/2 flex-col items-center justify-center rounded-[0.8rem] border-2 border-white px-[0.4rem] py-[2rem] text-center ease-in-out hover:bg-gray-900/90">
                <p className="text-[1.2rem] font-[500]">
                    Send me a message
                    <RiMessage2Fill className="ml-2 inline" />
                </p>
                <Button className="mt-[0.5rem] h-[3.5rem] w-[13rem] rounded-[0.5rem] border-[0.1rem] border-slate-200 bg-slate-200 text-[1.2rem] text-gray-600 shadow-md hover:scale-95">
                    Open form
                </Button>
                <p className="text-[1rem]">
                    click to open form
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline w-[2rem] fill-current align-middle text-gray-100"
                        viewBox="0 -960 960 960"
                    >
                        <path d="M551-80 406-392 240-160v-720l560 440H516l144 309-109 51Z"></path>
                    </svg>
                </p>
            </div>
        </div>
    );
};
export default GetInTouch;
