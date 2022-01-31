import React, { Component } from "react";
import { AuthService, IAuthService } from "../services/AuthService";

export const AuthContext = React.createContext({} as IAuthService);

export const AuthConsumer = AuthContext.Consumer;

interface ProviderProps {
  children: React.ReactNode;
}

export class AuthProvider extends Component {
  authService;
  constructor(props: ProviderProps) {
    super(props);
    this.authService = new AuthService();
  }
  render() {
    return (
      <AuthContext.Provider value={this.authService}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
