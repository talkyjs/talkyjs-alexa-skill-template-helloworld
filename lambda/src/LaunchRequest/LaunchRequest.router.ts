import { Router } from "@talkyjs/core";

import { LaunchRequestScript } from './LaunchRequest.speech'


export const LaunchRequestRouter: Router = {
    requestType: "LaunchRequest",
    
    handler: async (handlerInput) => {
        
        
        const script = new LaunchRequestScript(handlerInput)
        return script
            .createResponseBuilder()
            .getResponse();
        
        
    }
}

export default LaunchRequestRouter