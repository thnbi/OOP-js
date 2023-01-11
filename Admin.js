import User from "./User.js";

export default class Admin extends User{
   constructor(name, email, birth, role = 'admin', active = true){
      super(name, email, birth, role, active)
   }

   nameAdmin(){
      return this.name
   }
   
   createCourse(courseName, price){
      return `create course ${courseName} with price $${price}`
   }
}
