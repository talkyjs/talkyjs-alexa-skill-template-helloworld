/** @jsx ssml */
import {
    ssml,
    SpeechScriptJSX,
} from '@ask-utils/speech-script'

export class StopAndCancelAndNoIntentScript extends SpeechScriptJSX {
    speech() {
        return (
            <speak>
                <p>Good-bye!</p>
            </speak>
        )
    }
    
}