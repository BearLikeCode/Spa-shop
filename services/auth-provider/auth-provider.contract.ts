export interface AuthProviderContract {
    loginMethod(username: string, password: string): void
    signupMethod(): any
    logoutMethod(): void
}