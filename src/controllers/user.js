import {bcrypt} from 'bcrypt'

export class User {
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password
    }

    hash_password(password){
        const saltRounds = 10
        bcrypt.hash(password, saltRounds).then(
            hash => {
                let userHash = hash
            }
        )
    }
    check_password(){

    }
}