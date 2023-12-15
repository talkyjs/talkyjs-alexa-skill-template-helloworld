import { SkillFactory, TalkyJSSkillConfig, SkillHandler } from '@talkyjs/core'
import { CustomSkillBuilder } from 'ask-sdk-core'
import { LaunchRequestRouter } from './LaunchRequest/LaunchRequest.router'
import { HelpIntentRouter } from './HelpIntent/HelpIntent.router'
import { StopAndCancelAndNoIntentRouter } from './StopAndCancelAndNoIntent/StopAndCancelAndNoIntent.router'

const config: TalkyJSSkillConfig = {
    stage: 'development',                   // [Optional] Skill Stage
    logLevel: 'info',                       // [Optional] Log level
    //database: {                             // [Optional] Database configuration
    //    type: "none",                       // [Optional] Database type (none / s3 / dynamodb)
    //    tableName: '',                      // [Optional] Database table name
    //  s3PathPrefix: ''                    // [Optional] [Only S3] S3 path prefix
    //},
    apiClient: {                            // SMAPI and Alexa API Client configuration
        useDefault: true,                   // Use DefaultApiClient
        // client: new DefaultApiClient()   // If you have own ApiClient, put here
    },
    // skillId: '',                         // [Optional] Skill ID
    errorHandler: {                         // [Optional] error handler configurations
        usePreset: true,                    // [Optional] Use preset error handler
    //    sentry: {                         // [Optional] Error tracker configuration (sentry)
    //        dsn: process.env.SENTRY.DSN   // [Optional] Sentry dsn
    //    }
    }
}

/**
 * Skill Factory (Added preset handler)
 */
export const skillFactory = SkillFactory.launch(config)
.addRequestRouters([
    LaunchRequestRouter,
    HelpIntentRouter,
    StopAndCancelAndNoIntentRouter,
])

/**
 * ask sdk skillBuilder
 */
export const skillBuilder: CustomSkillBuilder = skillFactory.getSkill()

/**
 * Skill handler creator
 * @param skill 
 */
export const createSkillHandler = (skill: CustomSkillBuilder = skillBuilder): SkillHandler => {
    return async (event, context) => {
        return skill.create().invoke(event, context)
    }
}

/**
 * Lambda handler
 * @param event 
 * @param context 
 */
export const handler: SkillHandler = createSkillHandler()
