/* A function that never returns (ex: one that throws an error, infinite loop,
etc) can have a return type of never assigned to it to make this intention
very clear. */

function generateError(msg: string, code: number): never {
  throw { msg, code };
}

// generateError('error', 400);
