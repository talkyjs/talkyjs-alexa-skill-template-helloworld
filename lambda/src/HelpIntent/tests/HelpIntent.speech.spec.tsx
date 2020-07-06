import { HandlerInputCreator } from '@ask-utils/test';
import { HelpIntentScript } from '../HelpIntent.speech'

describe('HelpIntentScript', () => {
  
  it('should return false when given a not IntentRequest', async () => {
    const handlerInput = new HandlerInputCreator().createIntentRequest({
      name: "AMAZON.HelpIntent",
      confirmationStatus: 'NONE'
    });
    const script = new HelpIntentScript(handlerInput);
    expect(script.createResponse()).toMatchSnapshot();
  });
  
});
