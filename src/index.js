const { load } = require('./core')
const { getDates } = require('./utils')

const format = strDate => {

    try {

        if (!strDate || strDate === '') {
            throw new Error('Date is empty. ')
        }
        
        const { now, date, aWeekAgo } = getDates(strDate)

        const str = date.isBefore(aWeekAgo) ? date.format('LL') : now.to(date)

        return str

    } catch (err) {
        throw err
    }

}

module.exports = (locale) => {

    load(locale)

    return {
        format
    }
}