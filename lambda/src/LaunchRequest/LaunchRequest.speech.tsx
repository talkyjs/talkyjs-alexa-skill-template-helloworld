/** @jsx ssml */
import {
    ssml,
    SpeechScriptJSX,
} from '@ask-utils/speech-script'

export class LaunchRequestScript extends SpeechScriptJSX {
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