# Alexa skill functions

## Development

### Unit test

```bash
$ yarn test

# Watch mode
$ yarn test:dev
```

### Build code

We have to build the project before deploy to AWS Lambda

```
$ yarn build
```

### Lambda entrypoint
By the default, the Lambda function information is in `./dist/index.js`.
And the handler name is `handler`.