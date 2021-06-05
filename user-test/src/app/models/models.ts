
interface User {
  username: string
  password: string
}
enum Gender {
  Male = 'Male',
  Female = 'Female'
}
enum Title {
  Mr = 'Mr.',
  Mrs = 'Mrs'
}
const UserData = {
  user: {
    gender: '',
    email: '',
    username: '',
    password: '',
    dob: '',
    cell: '',
    location:{state:''},
    name: {
      title: '',
      first: '',
      last: ''
    },

  },
}
const Genders = [
  { name: Gender.Male, code: Gender.Male },
  { name: Gender.Female, code: Gender.Female }
]

const Titles = [
  { name: Title.Mr, code: Title.Mr },
  { name: Title.Mrs, code: Title.Mrs }
]

export { User, Gender, UserData, Genders, Titles }
