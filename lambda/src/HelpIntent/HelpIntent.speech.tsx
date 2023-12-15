import React from 'react';
import { SpeechScriptJSX } from '@talkyjs/ssml'

export class HelpIntentScript extends SpeechScriptJSX {
    speech() {
        return (
            <speak>
                <p>Hello! It's a nice development. How are you?</p>
            </speak>
        )
    }
    
    reprompt() {
        return (
            <speak>
                <p>How are you?</p>
            </speak>
        )
    }
    
}