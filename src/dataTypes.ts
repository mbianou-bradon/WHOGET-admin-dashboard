export interface AskType{
    _id: string,
    message: string,
    category: string,
    duration: number,
    location: string,
    report: number,
    visibility: boolean,
    user: {
    username: string,
    profileImage : string
    email :string,
    phoneNumber: string,
    userWhatsapp : string,
    },
    createdAt: string

}

export interface UserType {
    _id: string,
    username: string,
    profileImage: string,
    age: number,
    town: string,
    country: string,
    category: string[],
    phoneNumber: number,
    email: string,
    strikes : number,
    ban: boolean,
    firstTime: boolean
}