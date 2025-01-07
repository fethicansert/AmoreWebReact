
const useScroll = () => {
    return ({
        top,
        left,
        behavior = 'smooth'
    }) => {
        window.scrollTo({
            top,
            left,
            behavior
        });
    }
}

export default useScroll

