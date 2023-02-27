/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newnumbers = [...numbers];
    if (newnumbers.length === 0) {
        return [];
    }
    return [newnumbers[0], newnumbers[newnumbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newnumbers = [...numbers];
    return newnumbers.map((n: number): number => n * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newnumbers = [...numbers];
    return newnumbers.map((n: string): number =>
        isNaN(parseInt(n)) ? 0 : parseInt(n)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newamounts = [...amounts];
    return newamounts
        .map((n: string): string =>
            n.charAt(0) === "$" ? n.replace(n.charAt(0), "") : n
        )
        .map((n: string): number => (isNaN(parseInt(n)) ? 0 : parseInt(n)));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newmessages = [...messages];
    return newmessages
        .filter((m: string): boolean => m[m.length - 1] !== "?")
        .map((m: string): string =>
            m[m.length - 1] === "!" ? m.toUpperCase() : m
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const newwords = [...words];
    return newwords.filter((m: string): boolean => m.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const newcolors = [...colors];
    return newcolors.every(
        (m: string): boolean => m === "red" || m === "blue" || m === "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const newaddends = [...addends];

    if (newaddends.length === 0) {
        return "0=0";
    }
    const sum = newaddends.reduce(
        (currentTotal: number, n: number) => currentTotal + n,
        0
    );
    return sum + "=" + newaddends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const newvalues = [...values];
    const firstNegIndex = newvalues.findIndex((n: number): boolean => n < 0);
    if (firstNegIndex !== -1) {
        const positives = newvalues.slice(0, firstNegIndex);
        const sum = positives.reduce((ct: number, n: number) => ct + n, 0);
        newvalues.splice(
            newvalues.findIndex((n: number): boolean => n < 0) + 1,
            0,
            sum
        );
        return newvalues;
    } else {
        const sum = newvalues.reduce((ct: number, n: number) => ct + n, 0);
        newvalues.push(sum);
        return newvalues;
    }
}
