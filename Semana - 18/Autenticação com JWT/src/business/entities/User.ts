export class User {
    constructor(
        private id: number,
        private email: string,
        private password_user: string,
        ){}

   getPassword(){
        return this.password_user
   }

   getEmail(){
       return this.email
   }

    getId(){
       return this.id
   }
}