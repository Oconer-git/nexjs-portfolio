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
            className="scroll-mt-[10rem] bg-[#28406d] bg-dots bg-dotsSize16"
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
        question: 'If I hire you, what can I expect in the first six months?',
        answer: 'In the first six months, my main focus would be on gaining a solid understanding of how your web development team works, how projects are structured, and the coding patterns the company follow. I’m all about learning the best practices and tools the company uses, while making sure I give 100% effort to any task I’m assigned. My goal is to contribute, learn, and get things done as quickly as possible. If something’s not clear, I’ll definitely ask questions, I want to make sure I’m doing things right. I feel like these are the things a good company is looking for from a junior web developer.'
    },
    {
        id: 1,
        question: 'What makes you different from other web developers?',
        answer: 'So, as a recent grad, one thing I really value is my eagerness to keep learning and improving. I don’t have any industry experience yet, but I’ve been lucky to learn from some great mentors who taught me how to write clean, efficient code and tackle real-world problems using React, Next.js, and CodeIgniter. I also try to bring a bit of creativity to my work, always looking for new ways to approach challenges. And honestly, I’m the type who can sit and code for hours when I’m in the zone... I’m determined to figure things out.'
    },
    {
        id: 2,
        question: 'What’s the coolest project you’ve worked on and why?',
        answer: 'Not to brag, but after college, I decided to take some time to rest. During that period, I worked on Fellowdevs.io, a social media platform for developers, which was especially exciting. It was my first time integrating Livewire and jQuery to add real-time interactivity to the platform. While the project had its challenges, it was fulfilling to see everything come together by just reading documentations.'
    },
    {
        id: 3,
        question:
            'How do you approach solving complex problems in web development?',
        answer: 'When I run into a tough problem, I try to find the simplest and most efficient way to solve it. I usually break it down into smaller pieces to make it more manageable. I’ll also ask questions, look things up online, and check the documentation. If I get stuck, taking a short break usually helps me see things from a fresh angle. Once I have a solution, I test it out and tweak it as needed to make sure it actually works.'
    },
    {
        id: 4,
        question: 'How do you make websites more user-friendly?',
        answer: 'I focus on keeping the design simple, intuitive, and easy to navigate for users. I always prioritize making sure the website is mobile-friendly first since many users access websites from their phones.'
    },
    {
        id: 5,
        question:
            'What technologies do you specialize in, and why did you choose them?',
        answer: 'While I’m still expanding my skill set, I’ve gained hands-on experience with JavaScript, React, Next.js, Laravel, and other technologies. I enjoy working with these technologies because they offer scalability and flexibility. Plus, they’re widely used, so it’s a win-win for me I guess. I also really enjoy working with TailwindCSS because it lets me create clean, responsive designs quickly—it’s definitely much better than plain CSS.'
    },
    {
        id: 6,
        question: 'What if you don’t have experience with our tech stack?',
        answer: 'I totally understand the concern. While I may not have direct experience with your exact tech stack, I’m confident in my ability to learn quickly. I’ve picked up new technologies before, whether through personal projects, online courses, or just diving into documentation and experimenting. Typically, I can get comfortable with a new programming language in 3-5 days and a framework within a week. If given the opportunity, I’d be proactive in learning and becoming proficient as quickly as possible.'
    }
];

export default FAQ;
