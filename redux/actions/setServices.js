import * as t from '../types'
const setServices = (services, serviceMap, error) => {
    type: t.GET_SERVICES,
        services,
        serviceMap,
        error
}

export default setServices