
const AppProvidersWrapper = ({ children }) => {
    // HandleChangeTitle will change the title of the pagee whenever the user will change the page.
    const handleChangeTitle = () => {
        if (document.visibilityState == "hidden")
            document.title = "Please come back :-(";
        else
            document.title = "Yum Reactjs - Multipurpose Food Tailwind CSS Template";
    };

    useEffect(() => {
        document.addEventListener("visibilitychange", handleChangeTitle);
        return () => {
            document.removeEventListener("visibilitychange", handleChangeTitle);
        };
    }, []);
}