function merge<F extends object, S extends object>(objA: F, objB: S): F & S {
    return Object.assign(objA, objB);
}
