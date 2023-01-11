// function User(name, email){
//    this.name = name
//    this.email = email

//    this.showInfos = function() {
//       return `${this.name} | ${this.email}`
//    }
// }

// const user = new User('hana', 'hana@g.com')

// console.log(user.showInfos())

// function Admin(role) {
//    User.call(this, 'jordanna', 'j@j.com')
//    this.role = role || 'dev'
// }

// Admin.prototype = Object.create(User.prototype)
// const newAdmin = new Admin('admin')

// console.log(newAdmin.showInfos())
// console.log(newAdmin.role)


const user = {
   init: function(name, email) {
      this.name = name
      this.email = email
   },
   showInfos: function(name) {
      return `${this.name} | ${this.email}`
   }
}

const newUser = Object.create(user)
newUser.init('jordanna', 'jor@j.com')
console.log(newUser.showInfos());
