export interface AskType{
    _id: string,
    message: string,
    category: string,
    duration: number,
    location: string,
    report: number,
    visibility: boolean,
    userInfo: {
        _id: string,
        userName: string,
        userProfile : string
    }

}

export interface UserType {
    _id: string,
    username: string,
    profileImage: string,
    age: number,
    location: {
        town: string,
        country: string
    },
    category: string[],
    phoneNumber: number,
    email: string,
    strikes : number,
    ban: boolean,
    firstTime: boolean
}