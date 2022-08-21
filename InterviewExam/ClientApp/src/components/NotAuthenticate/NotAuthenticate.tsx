import React, {  } from "react";
import styles from "./NotAuthenticate.module.scss";
import SignInButton from '../SignIn/SignIn';


const NotAuthenticate: React.FC = () => {

    return (
        <div className={styles.container}>
        <p>This will only render if a user is not signed-in.</p>
        <SignInButton />
    </div>);
}

export default NotAuthenticate;