export interface AskType{
    _id: string,
    message: string,
    category: string,
    duration: number,
    location: string,
    report: number,
    visibility: boolean,
    userId: string,
    userName: string,
    userProfile : string
    userEmail :string,
    userPhone: string,
    userWhatsApp : string,

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