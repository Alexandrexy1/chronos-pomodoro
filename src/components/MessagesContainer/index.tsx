import { PropsWithChildren } from "react";
import { Bounce, ToastContainer } from "react-toastify";

export function MessagesContainer({ children }: PropsWithChildren) {
    return(
        <>
            { children }
            <ToastContainer
                position="top-center"
                autoClose={1800}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    )
}