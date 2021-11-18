
const configModel = require('../../models/configCalulate')

const mapResponse = (data) => {
    return {
        name: data.name,
        unit101_150: data.unit101_150,
        unit151_400: data.unit151_400,
        unit401: data.unit401 
    }
}

const getConfig = async (name) => {
    const config = await configModel.findOne({ name })
    return config ? mapResponse(config) : config
}

const createConfig = async (config) => {
    const { name,
        unit101_150,
        unit151_400,
        unit401 } = config

    const newConfig = new configModel({
        name,
        unit101_150,
        unit151_400,
        unit401
    })
    
    return await newConfig.save()
}

module.exports = { getConfig, createConfig }