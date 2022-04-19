import AuthProvider from "./Auth.provider";

const IndexProvider = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>;
};


export default IndexProvider;