import React from 'react';
import { SpeechScriptJSX } from '@talkyjs/ssml'

export class StopAndCancelAndNoIntentScript extends SpeechScriptJSX {
    speech() {
        return (
            <speak>
                <p>Good-bye!</p>
            </speak>
        )
    }
    
}