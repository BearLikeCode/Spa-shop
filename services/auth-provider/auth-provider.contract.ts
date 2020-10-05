export interface AuthProviderContract {
    loginMethod(username: string, password: string): void
    signupMethod(username: string, password: string, passConf: string): any
    logoutMethod(): void
}