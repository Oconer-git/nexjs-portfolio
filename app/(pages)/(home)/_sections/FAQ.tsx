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
        answer: 'In the first six months, my main focus would be on gaining a solid understanding of how your web development team works, how projects are structured, and the coding patterns you follow. I’m all about learning the best practices and tools the company uses, while making sure I give 100% effort to any task I’m assigned. My goal is to contribute, learn, and get up to speed as quickly as possible. If something’s not clear, I’ll definitely ask questions, I want to make sure I’m doing things right. I feel like these are the things a good company is looking for from a junior web developer.'
    },
    {
        id: 1,
        question: 'What makes you different from other web developers?',
        answer: 'So, as a recent grad, one thing I really value is my eagerness to keep learning and improving. I don’t have any industry experience yet, but I’ve been lucky to learn from some great mentors who taught me how to write clean, efficient code and tackle real-world problems using React, Next.js, and CodeIgniter. I also try to bring a bit of creativity to my work, always looking for new ways to approach challenges. And honestly, I’m the type who can sit and code for hours when I’m in the zone... I’m determined to figure things out. I’m just excited to keep growing and contribute to a team that values learning and collaboration. Right now, I would say that I’m just hungry to work with people who care about making things better, even if it means failing a few times first. You know, the kind of team where we high-five over small wins and laugh when the coffee machine breaks?'
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
        answer: 'When I face a complex problem, I always think about the easiest and most efficient way to solve it because I value both time and energy.  I usually start by breaking it down into smaller, more manageable pieces. I find that it helps to ask questions, search for similar issues online, and read documentation. If I hit a roadblock, I take a short break—it often helps me see the problem from a new angle. Once I have a solution in mind, I test it thoroughly and refine it as needed to ensure it works effectively.'
    },
    {
        id: 7,
        question: 'How do you make websites more user-friendly?',
        answer: 'I focus on keeping the design simple, intuitive, and easy to navigate for users. I always prioritize making sure the website is mobile-friendly first since many users access websites from their phones.'
    },
    {
        id: 9,
        question:
            'What technologies do you specialize in, and why did you choose them?',
        answer: 'While I’m still expanding my skill set, I’ve gained hands-on experience with JavaScript, React, Next.js, Laravel, and other technologies. I enjoy working with these technologies because they offer scalability and flexibility. Plus, they’re widely used, so it’s a win-win for me I guess. I also really enjoy working with TailwindCSS because it lets me create clean, responsive designs quickly—it’s definitely much better than plain CSS.'
    }
];

export default FAQ;
