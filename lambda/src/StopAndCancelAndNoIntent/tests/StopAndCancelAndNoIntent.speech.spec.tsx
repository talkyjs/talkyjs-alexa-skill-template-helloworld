import { HandlerInputCreator } from '@ask-utils/test';
import { StopAndCancelAndNoIntentScript } from '../StopAndCancelAndNoIntent.speech'

describe('StopAndCancelAndNoIntentScript', () => {
  
  it.each(["AMAZON.StopIntent","AMAZON.CancelIntent","AMAZON.NoIntent"])('should match the snapshot of the %p IntentRequest', async (type) => {
    const handlerInput = new HandlerInputCreator().createIntentRequest({
      name: type,
      confirmationStatus: 'NONE'
    });
    const script = new StopAndCancelAndNoIntentScript(handlerInput);
    expect(script.createResponse()).toMatchSnapshot();
  });
  
});
