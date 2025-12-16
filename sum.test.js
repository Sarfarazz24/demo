
import sum from "./sum.js";

test(" add 2 + 2 is equal to ",async ()=>{
    expect(sum(9,9)).toBe(18);
})

describe("test for some function ",()=>{
    test("for adding ",async ()=>{
        expect(sum(9,8)).toBe(17);
    }),
    test(" add 2 + 2 is equal to ",async ()=>{
    expect(sum(9,9)).toBe(18);
})
})