const dayjs = require('dayjs')

const relativeTime = require('dayjs/plugin/relativeTime')
const localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

const loadLocale = async (locale) => {

    try {
        
        if(locale || locale !== '') {
            require(`dayjs/locale/${locale}`)
            dayjs.locale(locale) 
        }

    } catch (err) {
        throw err
    }

}

module.exports = {
    load: loadLocale,
    dayjs
}
