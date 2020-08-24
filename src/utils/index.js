const { dayjs } = require('../core')

const getDates = strDate => {

    try {
        
        const now = dayjs()

        const date = dayjs(strDate)

        const aWeekAgo = now.subtract(7, 'day')

        return {
            now,
            date,
            aWeekAgo
        }

    } catch (err) {
        throw err
    }

}

module.exports = {
    getDates
}
