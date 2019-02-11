'use strict'

const User = use('App/Models/User')

class AuthController {
  async login ({ request, response, auth }) {
    const { email, password } = request.all()

    // const login = await auth.login(email, password)
    const token = await auth.withRefreshToken().attempt(email, password)
    response.json({
      token
    })
  }

  //  async getUser ({ response, auth }) {
  //    const user = await auth.getUser()
  //    user.password = undefined
  //    response.json({
  //      user
  //    })
  //  }

  //  async logout ({ response, auth }) {
  //    console.log('ok')
  //    let att = await auth.check()
  //    console.log(att)
  //    response.json({
  //      data: 'ok'
  //    })
}

module.exports = AuthController
