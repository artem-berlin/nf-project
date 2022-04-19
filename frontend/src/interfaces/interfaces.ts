export interface Credentials {
    email : string,
    password : string
}

export interface CredentialsRegister {
    email : string,
    password : string,
    passwordAgain : string
}

export interface AuthInterface {
    token : string,
    login : (email: string, password: string) => Promise<void>,
    logout: () => void
}

export interface Product {
    id: string;
    category:string
    title: string;
    image: string;
    text: string;
    description: string;
    status: string;
}