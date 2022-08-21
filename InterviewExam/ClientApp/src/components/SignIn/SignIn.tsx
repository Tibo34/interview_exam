import React, { useState } from "react";
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import APIService from "../../services/APIService";
import styles from "./SignIn.module.scss";

function signInClickHandler(instance: any) {
    instance.loginPopup();
}


const SignInButton: React.FC = () => {
    const [state, setState] = useState<string>();

    const { instance } = useMsal();

    return (
        <button className={styles.button} onClick={() => signInClickHandler(instance)}>Sign In</button>
  );
};

export default SignInButton;
