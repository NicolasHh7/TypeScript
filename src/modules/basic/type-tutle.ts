let filArray: (number | string | boolean)[] = [1, 'Guerra Civil', true];
let filTuple: [number, string, boolean] = [2, 'Um lugar Silencioso', false];
let filTupleOpcional: [number, string, boolean?] = [2, 'Um lugar Silencioso'];

const [idArr, titleArr, availableArr] = filArray;
const [id, title, available] = filTupleOpcional;
