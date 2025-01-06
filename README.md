# Unexpected Null Return in JavaScript Function

This repository demonstrates a subtle bug in a JavaScript function that handles null values.  The function `foo` returns `null` if either of its arguments is `null`. While this might seem correct, it could lead to unexpected behavior depending on how the function is used.  This example explores the issue and provides a potential solution.

## Bug Description

The `foo` function returns `null` if either input is `null`.  This can be problematic because it doesn't distinguish between intentional null inputs and unexpected null values due to other parts of the code. This makes debugging more challenging because the caller of the function has no way to tell whether the null result was expected or not.

## Solution

A more robust solution might involve either throwing an error if a null value is encountered unexpectedly, or providing a default value in the case where null is encountered.