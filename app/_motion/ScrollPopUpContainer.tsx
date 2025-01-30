import * as motion from 'motion/react-client';
import { PropsWithChildren } from 'react';

const ScrollPopUpContainer = ({ children }: PropsWithChildren) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                type: 'spring',
                stiffness: 200, // Controls the bounce intensity
                damping: 10 // Adjusts how quickly the bounce settles
            }}
            viewport={{ once: false, amount: 0.1 }} // Adjusts trigger behavior
        >
            {children}
        </motion.div>
    );
};

export default ScrollPopUpContainer;
