# Reproducer

LocalStack issue: https://github.com/localstack/localstack/issues/11965

1. (set [auth token](https://docs.localstack.cloud/getting-started/auth-token/) only once) `localstack auth set-token <YOUR_AUTH_TOKEN>`
2. Start LocalStack Pro `localstack start`
3. `make`
4. Invoke the Lambda function
