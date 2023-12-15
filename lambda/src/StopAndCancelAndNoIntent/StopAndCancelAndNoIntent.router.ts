import { Router } from "@talkyjs/core";

import { StopAndCancelAndNoIntentScript } from './StopAndCancelAndNoIntent.speech'


export const StopAndCancelAndNoIntentRouter: Router = {
    requestType: "IntentRequest",
    intentName: ["AMAZON.StopIntent","AMAZON.CancelIntent","AMAZON.NoIntent"],
    handler: async (handlerInput) => {
        
        
        const script = new StopAndCancelAndNoIntentScript(handlerInput)
        return script
            .createResponseBuilder()
            .getResponse();
        
        
    }
}

export default StopAndCancelAndNoIntentRouter