import {
  UserManager,
  WebStorageStateStore,
  Log,
  User,
  SigninRequest,
} from "oidc-client";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
const AUTHORITY =
  process.env.REACT_APP_OIDC_AUTHORITY ||
  "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_g0Uh3DAjq";
const CLIENT_ID =
  process.env.REACT_APP_OIDC_CLIENT_ID || "6qg3e0u8d9v3lgbac384b80al7";

export interface IAuthService {
  signinRedirectCallback: () => void;
  signoutRedirectCallback: () => void;
  getUser: () => Promise<User | undefined>;
  signinRedirect: () => void;
  isAuthenticated: () => boolean;
  signinSilentCallback: () => void;
  logout: () => void;
  createSigninRequest: () => Promise<SigninRequest>;
}

export class AuthService implements IAuthService {
  UserManager;

  constructor() {
    this.UserManager = new UserManager({
      authority: AUTHORITY,
      client_id: CLIENT_ID,
      redirect_uri: `${BASE_URL}/signin-oidc`,
      response_type: "code",
      userStore: new WebStorageStateStore({ store: window.sessionStorage }),
    });
    // Logger
    Log.logger = console;
    Log.level = Log.DEBUG;
    this.UserManager.events.addUserLoaded((user) => {
      if (window.location.href.indexOf("signin-oidc") !== -1) {
        this.navigateToScreen();
      }
    });
    this.UserManager.events.addSilentRenewError((e) => {
      console.log("silent renew error", e.message);
    });

    this.UserManager.events.addAccessTokenExpired(() => {
      console.log("token expired");
      this.signinSilent();
    });
  }

  signinRedirectCallback = () => {
    this.UserManager.signinRedirectCallback().then(() => {
      ("");
    });
  };

  getUser = async () => {
    const user = await this.UserManager.getUser();
    if (!user) return undefined;
    return user;
  };

  parseJwt = (token: string) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };

  signinRedirect = () => {
    localStorage.setItem("redirectUri", window.location.pathname);
    this.UserManager.signinRedirect({});
  };

  navigateToScreen = () => {
    window.location.replace("/");
  };

  isAuthenticated = () => {
    const storageText = sessionStorage.getItem(
      `oidc.user:${AUTHORITY}:${CLIENT_ID}`
    );
    if (storageText) {
      const oidcStorage = JSON.parse(storageText);

      return !!oidcStorage && !!oidcStorage.access_token;
    }
    return false;
  };

  signinSilent = () => {
    this.UserManager.signinSilent()
      .then((user) => {
        console.log("signed in", user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  signinSilentCallback = () => {
    this.UserManager.signinSilentCallback();
  };

  createSigninRequest = () => {
    return this.UserManager.createSigninRequest();
  };

  logout = () => {
    this.UserManager.signoutRedirect({
      id_token_hint: localStorage.getItem("id_token"),
    });
    this.UserManager.clearStaleState();
  };

  signoutRedirectCallback = () => {
    this.UserManager.signoutRedirectCallback().then(() => {
      localStorage.clear();
      window.location.replace(BASE_URL);
    });
    this.UserManager.clearStaleState();
  };
}
