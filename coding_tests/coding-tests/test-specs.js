// test myFirstFunction
describe('myFirstFunction',function(){
    it('is a function',function(){
        expect(typeof myFirstFunction).toBe('function');
    });
});

// test timesTen
describe('timesTen',function(){
    it('returns the product of 10 * 10',function(){
        expect(timesTen()).toBe(100);
    });
});

// test anythingTimesFive
describe('anythingTimesFive',function(){
    it('returns the product of a parameter times ten',function(){
        expect(anythingTimesFive(5)).toBe(25);
        expect(anythingTimesFive(10)).toBe(50);
    });
});

// test multiplyTwoNumbers below
describe('multiplyTwoNumbers',function(){
    it('returns the product of two numbers',function(){
        expect(multiplyTwoNumbers(2,5)).toBe(10);
        expect(multiplyTwoNumbers(10,10)).toBe(100);
    });
});

// test allJavaScriptNeedsIsLove below
describe('allJavaScriptNeedsIsLove',function(){
    it('returns "that\'s all I need." when passed the string "love".',function(){
        expect(allJavaScriptNeedsIsLove("love")).toBe("That's all I need.");
    });
    it('returns "I don\'t need that" if passed anything other than "love".',function(){
        expect(allJavaScriptNeedsIsLove("drama")).toBe("I don't need that.");
    });
});