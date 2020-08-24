'use strict'

const chai = require('chai')

const app = require('../src')

describe('Testing Format', () => {

    const locale = 'pt'
    let date = '2020-08-24T13:14'

    it('Formating', done => {

        const ret = app(locale).format(date)
            
        console.log(ret)

        chai.assert.isNotEmpty(ret)
        
        done()

    })

})