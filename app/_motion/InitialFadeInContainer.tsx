import * as motion from 'motion/react-client';
import { PropsWithChildren } from 'react';

const FadeInContainer = ({ children }: PropsWithChildren) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInContainer;
