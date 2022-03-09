import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'bahamiled@live.fr',
    password: bcrypt.hashSync('Mus@@46294359', 10),
    isAdmin: true,
  },
  {
    name: 'salem akrmi',
    email: 'salem@gmail.com',
    password: bcrypt.hashSync('salem1234', 10),
  },
  {
    name: 'Majid Khalil',
    email: 'majid@gmail.com',
    password: bcrypt.hashSync('majid1234', 10),
  },
];
export default users;
