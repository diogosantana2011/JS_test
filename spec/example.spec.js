describe("Test Suite", () => {
    it("contains spec with an expectation", () => {
        expect(true).toBe(true);
    });
});

describe("A suite is just a function", () => {
    let a;

    it("and so is a spec", () => {
        a = true;
        expect(a).toBe(true);
    });
});