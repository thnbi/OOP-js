const minUserNameSize = 2;
export default class User{
   #name
   #birth
   constructor(name, email, birth, role, active = true){
      this.#name = name
      this.#email = email
      this.#birth = birth
      this.#role = role || 'student'
      this.#active = active
   }

   get name() {
      return this.#name
   }

   get email() {
      return this.#email
   }

   get birth() {
      return this.#birth
   }

   get role() {
      return this.#role
   }

   get active() {
      return this.#active
   }

   set name(newName) {
      if (typeof newName === 'string' && newName.length >= minUserNameSize) {
         this.#name = newName
      } else {
         throw new Error(`name must be string and more than ${minUserNameSize} characters`)
      }
   }

   showInfos(){
      return `name: ${this.#name}, email: ${this.#email}, birth: ${this.#birth}, role: ${this.#role}, active: ${this.#active}`
   }

}
