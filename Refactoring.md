# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

The initial dpk function has two if checks, which contain further nested if statements in order to assign a potential candidate key depending on what type of input is provided to the function.

I broke the hashing function out into its own separate function, so we can call it multiple times within our dpk function. It is not exported from the dpk.js file, but in the future with more time it would likely be exposed to the dpk.test.js file in order to provide the same interface for the test functions.

The updated function short circuits and returns whenever each check is completed, returning the Trivial Partition Key, a hashed version of the stringified event object, or the string version of the partition key passed into the object if none of the checks short circuit the function.
