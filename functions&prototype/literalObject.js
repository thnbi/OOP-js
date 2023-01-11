const user = {
   name: 'hana',
   email: 'hana@gmail.com',
   birth: '13/02/2004',
   role: 'admin',
   active: true,
   showInfos: function() {
      console.log(this.name, this.email)
   }
}

const admin = {
   name: 'jordanna',
   email: 'jor@gmail.com',
   role: 'admin',
   active: true,
   createCourse() {
      console.log('create course')
   }
}

Object.setPrototypeOf(admin, user)

admin.showInfos()
admin.createCourse()
