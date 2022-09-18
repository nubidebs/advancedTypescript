export type SubmitRequest = {
    personal :{
        address: string,
        phone: string,
        previousAliases :{
        firstName: string,
        middleName: string,
        lastName: string
    }[],
}
    payment: {
    cardToken: string
   }
}

// Sometimes creating a new type just for the payment and amending the shared type SubmitRequest is not the best course of action.
// Alternatives below:

// 1. Lookup types Option 1 (when type is only used once in the codebase)
export function getPayment(): SubmitRequest['payment']{
    return{
        cardToken: 'sdkfhwiurWETHWEijerW32%mjDSE^%'
    }
}

// 2. Lookup types Option 2 (when type is used more than once in the codebase)

type PaymentRequest = SubmitRequest['payment']

export function getPayment2(): SubmitRequest['payment']{
    return{
        cardToken: 'sdkfhwiurWETHWEijerW32%mjDSE^%'
    }
}

// NB -->  Lookup types can be used to collect individual item in an array

type PreviousAliasRequest = SubmitRequest['personal']['previousAliases'][0]

/* 

type PreviousAliasRequest {
        firstName: string,
        middleName: string,
        lastName: string
} 

*/
