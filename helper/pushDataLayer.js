

export const pushDataLayer = (event, name, value = null) => {
    if (!window) {
        return
    }
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
        'event': `${event}`,
        'name': `${name}`,
        'status': `${name} Added`,
        'value': `${value}`,
    })
}

export const pushDataLayerForm = (event, name, firstName, lastName, email, phoneNumber) => {
    if (!window) {
        return
    }
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
        'event': `${event}`,
        'name': `${name}`,
        'status': `${name} Added`,
        'firstName': `${firstName}`,
        'lastName': `${lastName}`,
        'email': `${email}`,
        'phoneNumber': `${phoneNumber}`,
    })
}

