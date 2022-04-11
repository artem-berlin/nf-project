
export interface Product {
    id: string
    title: string
    text: string
    state: State
}

export enum State {
    Available = 'Available',
    NotAvailable = 'NotAvailable'
}

