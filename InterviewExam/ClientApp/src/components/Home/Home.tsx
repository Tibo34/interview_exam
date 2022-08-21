import React, { useState } from "react";
import { ReactComponent as StelliumLogo } from "../../assets/stellium-logo.svg";
import APIService from "../../services/APIService";
import styles from "./Home.module.scss";
import { useMsal, } from "@azure/msal-react";
import { User } from "../../models/User";


const Home: React.FC = () => {
    const [state, setState] = useState<string>();
    const { accounts } = useMsal();  

    const GetData = async () => {
        if (accounts.length > 0) {
            const account = accounts[0];
            const user: User = { UserName: account.username, Name: account.name ? account.name : '' };          
            const tokenSave = await APIService.Authenticate(user);           
            const stuff = await APIService.GetStuff(tokenSave.token);
            setState(decodeURIComponent(encodeURIComponent(window.atob(stuff.description))));
        }      
  };

  return (
      <div className={styles.container}>        
          {state !== undefined ? (
              <div
                  className={styles.result}
                  dangerouslySetInnerHTML={{ __html: state }}
              />
          ) : (
         <div className={ styles.start}>
          <StelliumLogo className={styles.logo} />
          <button onClick={GetData} className={styles.button}>
            Launch
          </button>
         </div>
      )}
    </div>
  );
};

export default Home;
