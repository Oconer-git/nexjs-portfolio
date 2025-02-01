import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/app/_components/Accordion';
import { RiQuestionAnswerFill } from 'react-icons/ri';

const FAQ = () => {
    return (
        <section
            className="bg-dots bg-dotsSize16 scroll-mt-[10rem] bg-[#28406d]"
            id="faq"
        >
            <div className="container max-w-[120rem] px-[3rem] py-[6.8rem] lg:px-[6rem]">
                <h2 className="text-[2.8rem] font-bold text-gray-50 sm:text-[3rem] md:text-[3.4rem] lg:text-[3.8rem]">
                    Frequently Asked Questions
                    <RiQuestionAnswerFill className="ml-[1rem] inline align-middle text-gray-100/20" />
                </h2>
                <Accordion
                    type="single"
                    collapsible
                    className="space-y-[1rem]"
                    defaultValue={questionAndAnswers[0].id.toString()}
                >
                    {questionAndAnswers.map((item) => (
                        <AccordionItem key={item.id} value={item.id.toString()}>
                            <AccordionTrigger className="text-gray-100">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

const questionAndAnswers = [
    {
        id: 0,
        question:
            'If I hire you, what can I expect in the first six months of working together?',
        answer: 'Well, in the first six months, my focus would be on learning as much as I can about how your team operates, how projects are structured, and the coding patterns you follow. I’ll take the time to understand your development workflow, how projects are managed, and how your team collaborates on tasks. I will dedicate myself to learning the best practices and tools you use, while also working hard to complete any task assigned to me with 100% effort.'
    },
    {
        id: 1,
        question: 'What makes you different from other web developers?',
        answer: 'As a fresh graduate, I believe my strength lies in my enthusiasm to learn and grow. While I may not have extensive industry experience yet, I’ve been fortunate to work with great mentors during my trainings, where I learned to create efficient, scalable code and tackle real-world problems using React, Next.js, and CodeIgniter. I’m passionate about applying my knowledge and eager to contribute to a team that values collaboration and continuous improvement.'
    },
    {
        id: 2,
        question: 'What’s the coolest project you’ve worked on and why?',
        answer: 'After college, I decided to take some time to rest. During that period, I worked on Fellowdevs.io, a social media platform for developers, which was especially exciting. It was my first time integrating Livewire and jQuery to add real-time interactivity to the platform. While the project had its challenges, it was fulfilling to see everything come together.'
    },
    {
        id: 3,
        question:
            'How do you approach solving complex problems in web development?',
        answer: 'When I face a complex problem, I usually start by breaking it down into smaller, more manageable pieces. I find that it helps to ask questions, search for similar issues online, and read documentation. I also reach out to mentors when I’m stuck, as learning from others has always been valuable in solving problems more effectively. Afterward, I test and review my solution to ensure it works as expected.'
    },
    {
        id: 7,
        question: 'How do you make websites more user-friendly?',
        answer: 'I focus on keeping the design simple, intuitive, and easy to navigate. I always prioritize making sure the website is mobile-friendly since many users access websites from their phones.'
    },
    {
        id: 9,
        question:
            'What technologies do you specialize in, and why did you choose them?',
        answer: 'While I’m still expanding my skill set, I’ve had hands-on experience with JavaScript, React, Next.js, and Laravel and other technologies. I enjoy working with these technologies because they offer scalability and flexibility. I also mainly enjoy working with TailwindCSS because it allows me to create clean and responsive designs quickly. '
    }
];

export default FAQ;
