import React from 'react';
import { SpeechScriptJSXWithOption } from '@talkyjs/ssml'

export class LaunchRequestScript extends SpeechScriptJSXWithOption<{
    dummyProps: string;
}> {
    speech() {
        return (
            <speak>
                <p>
                    <amazon-emotion name="excited" intensity="high">Hello!</amazon-emotion>
                    {this.options.dummyProps} How are you?
                </p>
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