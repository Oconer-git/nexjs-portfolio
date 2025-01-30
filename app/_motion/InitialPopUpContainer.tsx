import * as motion from 'motion/react-client';
import { PropsWithChildren } from 'react';

const InitialPopUpContainer = ({ children }: PropsWithChildren) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: {
                    type: 'spring',
                    visualDuration: 2,
                    bounce: 0.5
                }
            }}
        >
            {children}
        </motion.div>
    );
};

export default InitialPopUpContainer;
