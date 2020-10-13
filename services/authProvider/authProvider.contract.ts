export interface AuthProviderContract {
    loginMethod(username: string, password: string): void
    signupMethod(name: string, username: string, password: string, passConf: string, image: any): any
    logoutMethod(): void
}
