import User from "./User.js";

export default class Teacher extends User{
   constructor(name, email, birth, role = 'teacher', active = true){
      super(name, email, birth, role, active)
   }

   approveStudent(student, course){
      return `approve ${student} to ${course}`
   }     
}
