import { motion } from "framer-motion";

const Transitions = ({ children }) => {
    return (
        <motion.div
            className="animatedDiv"
            initial = {{opacity : 0}}
            animate = {{opacity : 1}}
            exit = {{opacity : 0}}
            transition={{duration: .2}}
        >
            {children}
        </motion.div>
    );
};
export default Transitions;