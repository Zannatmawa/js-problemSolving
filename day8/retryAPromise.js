// Problem 37: Retry a Promise[Medium]
// Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error.Resolves on first success, rejects after all attempts fail.
//     Example:
// await retry(unstableFetch, 3);// Tries up to 3 times before failing
// Hint: Use a loop with try/catch; only throw after all retries are exhausted.