const { dayjs } = require('../core')

const getDates = strDate => {

    try {
        
        const now = dayjs()

        const date = dayjs(strDate)

        const aMonthAgo = now.subtract(30, 'day')

        return {
            now,
            date,
            aMonthAgo
        }

    } catch (err) {
        throw err
    }

}

module.exports = {
    getDates
}
