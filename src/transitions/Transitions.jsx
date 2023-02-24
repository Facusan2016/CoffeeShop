import { motion } from "framer-motion";
import './Transitions.css'

const animationConfiguration = {
    initial: { opacity: 0},
    animate: { opacity: 1},
    exit: { opacity: 0},
};

const Transitions = ({ children }) => {
    return (
        <motion.div
            style={{backgroundColor : "black"}}
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 2 }}
        >
            {children}
        </motion.div>
    );
};
export default Transitions;