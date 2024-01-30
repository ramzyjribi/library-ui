
import { AccountStatus, User, UserType } from "./models";


export const usersList : User[] = [
    {
    id: 1,
    firstName: "Ramzi",
    lastName: "jribi",
    email: "ramzi@gmail.com",
    mobileNumber: "",
    password: "ramzi",
    userType: UserType.ADMIN,
    accountStatus: AccountStatus.ACTIVE,
    createdOn: "" 
}

]