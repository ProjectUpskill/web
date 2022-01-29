import { useState, useEffect, useMemo } from "react";
import Auth, { CognitoUser } from "@aws-amplify/auth";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

const useAuth = () => {
  const [user, setUser] = useState<CognitoUser>();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const options = useMemo(
    () => ({
      // REQUIRED - Amazon Cognito Region
      region: "us-east-1",
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: "us-east-1_g0Uh3DAjq",
      // OPTIONAL - Amazon Cognito Web Client ID
      userPoolWebClientId: "6qg3e0u8d9v3lgbac384b80al7",
      authenticationFlowType: "USER_SRP_AUTH",
      oauth: {
        domain: "projectupskill.auth.us-east-1.amazoncognito.com",
        redirectSignIn: baseUrl,
        redirectSignOut: baseUrl,
      },
    }),
    []
  );

  const auth = useMemo(() => {
    Auth.configure(options);
    return Auth;
  }, [options]);

  useEffect(() => {
    auth
      .currentAuthenticatedUser()
      .then((user: CognitoUser) => {
        setUser(user);
        setIsSignedIn(true);
      })
      .catch(console.error);
  }, [auth]);

  const signIn = () => auth.federatedSignIn();

  const signOut = () => auth.signOut();

  return {
    user,
    isSignedIn,
    signIn,
    signOut,
  };
};

export default useAuth;
