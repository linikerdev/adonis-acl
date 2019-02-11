'use strict'

const User = use('App/Models/User')

const userInit = [
  {
    username: 'Admin',
    email: 'contato@liniker.com.br',
    password: '123456'
  },
  {
    username: 'User',
    email: 'contato2@liniker.com.br',
    password: '123456'
  },

]

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserDefaultSeeder {
  async run () {
    await User.createMany(userInit)
  }
}

module.exports = UserDefaultSeeder
