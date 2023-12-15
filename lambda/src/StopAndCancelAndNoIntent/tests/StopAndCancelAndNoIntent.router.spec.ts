import { HandlerInputCreator } from '@ask-utils/test';
import { RequestHandlerFactory } from '@talkyjs/core';
import { RequestHandler } from 'ask-sdk-core';
import { StopAndCancelAndNoIntentRouter } from '../StopAndCancelAndNoIntent.router'

describe('StopAndCancelAndNoIntentRouter', () => {
  let handler: RequestHandler;
  beforeEach(() => {
    handler = RequestHandlerFactory.create(StopAndCancelAndNoIntentRouter);
  });
  describe('canHandle', () => {
    it('should return false when given a not LaunchRequest', async () => {
      const handlerInput = new HandlerInputCreator().createLaunchRequest();
      await expect(handler.canHandle(handlerInput)).resolves.toEqual(false);
    });
    
    it.each(["AMAZON.StopIntent","AMAZON.CancelIntent","AMAZON.NoIntent"])('should match the snapshot of the %p IntentRequest', async (type) => {
      const handlerInput = new HandlerInputCreator().createIntentRequest({
        name: type,
        confirmationStatus: 'NONE'
      });
      await expect(handler.canHandle(handlerInput)).resolves.toMatchSnapshot();
    });
    
  });
  describe('handle', () => {
    it('should match snapshot', async () => {
      const handlerInput = new HandlerInputCreator().createLaunchRequest();
      await expect(handler.handle(handlerInput)).resolves.toMatchSnapshot();
    });
  });
});
