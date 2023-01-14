# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
The refactored code now adheres to SRP, by separating out the responsibility of getting the partition key from the responsibility of checking its length and creating a hash. It also made the code more readable and easier to test, as well as making it more maintainable, by removing unnecessary checks and making the constants clearer and closer to their usage.
A few notable steps:
- Extracted the logic for the partition key into a separate function called getPartitionKey. This makes the code more readable and easier to test.
- Replaced the candidate variable to use the partition key directly. It was all over the place and used in different contexts.

### Recommended next step:
1. Extract the hashing function to a separate module. It would make the code more modular and reusable.
2. Use error handling. The code currently doesn't throw or handle any errors. At least, we should add error validations for parameters of exported functions.
3. Type annotations. Adding type annotations arguments and return values the code more self-documenting and help prevent bugs.