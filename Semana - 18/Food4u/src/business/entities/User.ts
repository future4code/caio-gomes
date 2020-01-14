export class User {
    constructor(
        private id: number,
        private name: string,
        private age: number,
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

   getName(){
       return this.name
   }

   getAge() {
       return this.age
   }
}