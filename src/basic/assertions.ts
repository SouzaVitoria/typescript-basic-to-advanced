let hello: unknown;

const trimmed = (hello as string).trim();
const trimmedTwo = (<string>hello).trim();