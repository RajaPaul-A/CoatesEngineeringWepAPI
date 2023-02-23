export class db{
    static userModel: { id: number; name: string; email: string; dob: string; }[] = [];
    static userCount: number = 0

    static addUser(user: {id: number, name: string, email: string, dob: string}){
        user.id = db.userCount + 1;
        db.userModel.push(user)
        db.userCount += 1;
        return user
    }

    static getAllUsers(){
        return db.userModel
    }

    static getUserById(id: number){
        return db.userModel.find((t: any) => t.id == id)
    }

    static deleteUserById(id: number){
        let index : number = db.userModel.findIndex((t: any) => t.id == id)
        if(index > -1) {
            db.userModel.splice(index, 1)
            return id
        } else return 0
    }

}