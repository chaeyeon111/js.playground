// Primitive type
const num: number = 3;
// @ts-ignore
const big: bigint = 11111111111111n;
const str: string = 's';
const bool: boolean = true;
const und: undefined = undefined;
const nul: null = null;
const obj: object = {};
// symbol?
const a: any = 3;  // 모든 자료형 할당 가능

// Array
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ['a', 'b', 'c'];
const mixArr: (number | string)[] = [1, 'a', 2, 'b', 3];

// Tuple
const tup1: [number, number] = [1, 2];
const tup2: [number, string] = [1, 'a'];
const tup3: [string, number] = ['b', 2];
const tup4: [boolean, number] = [false, 2];
const tup5: [string, boolean, number] = ['c', false, 2];

// Normal function
function add(n: number, n2: number): number {
    return n + n2;
}

// Arrow function
const sub: (arg1: number, arg2: number) => number = (n, n2) => {
    return n - n2;
}

// unknown?

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
function e(message: string): never {
    throw new Error(message);
}

// Function returning void must not return anything
function v(): void {
    console.log('return type: void');
}