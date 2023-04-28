import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-WQQ7C6C',
}

async function initialiseGTM() {
    TagManager.initialize(tagManagerArgs)
    return
}

export default initialiseGTM
