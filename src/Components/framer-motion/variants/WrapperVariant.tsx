const wrapperVariants = {
    open: {
        scaleY: 1,
        height: "auto",
        transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
            },
    },
    closed: {
    height: 0,
    transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
    },
    },
};

export default wrapperVariants;
