import { Router } from "@talkyjs/core";

import { HelpIntentScript } from './HelpIntent.speech'


export const HelpIntentRouter: Router = {
    requestType: "IntentRequest",
    intentName: "AMAZON.HelpIntent",
    handler: async (handlerInput) => {
        
        
        const script = new HelpIntentScript(handlerInput)
        return script
            .createResponseBuilder()
            .getResponse();
        
        
    }
}

export default HelpIntentRouter