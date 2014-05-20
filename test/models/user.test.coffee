###
The MIT License (MIT)

Copyright (c) 2014 MRW Neundorf <matt@nax.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
###
'use strict'

should = require 'should'

root = process.cwd()

config = require root + '/lib/config/config'
Database = new require(root + '/lib/common/services/Database')
db = null

UserModel = require root + '/lib/common/models/User'
user = null

describe 'User Model Test', ->
  before (done)->
    user = new UserModel
      email: 'test@example.com'
      password: 'test'

    db = new Database config, (err)->
      throw err if err
      done()

  after (done)->
    UserModel.remove {}, (err)->
      throw err if err
      db.close (err)->
        throw err if err
        done()

  it 'should begin with no users', (done)->
    UserModel.find {}, (err, users)->
      users.should.have.length(0)
      done()

  it 'should be able to save a user', (done) ->
    user.save (err)->
      should.not.exist err
      done()

  it 'should fail to save an existing user again', (done)->
    user2 = new UserModel
      email: 'test@example.com'
      password: 'test'

    user2.save (err)->
      should.exist(err)
      done()

  it 'should be able to show an error when try to save without email', (done)->
    user.email = '' 
    user.save (err)->
      should.exist(err)
      done()