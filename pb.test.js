const billing = require("./park_billing")

describe("billing", () => {
    it("Should return 11000 when car park for 3 hour", () => {
        //given
        veh = 'Car';
        dur = 3;

        //when
        const result = billing(veh, dur);

        //then
        const expectedResult = 11000

        expect(result).toBe(expectedResult)
    })

    it('Should return 2000 when bike park for 1 hour', () =>{
        //given
        const veh = 'Bike'
        const dur = '1'

        //when
        const result = billing(veh, dur)

        //then
        const expectedResult = 2000

        expect(result).toBe(expectedResult)
    })

    it('Should return 133000 when car park for 27 hour', () => {
        //given
        const veh = 'Car'
        const dur = '27'

        //when
        const result = billing(veh, dur)

        //then
        const expectedResult = 133000

        expect(result).toBe(expectedResult)
    })

    it('should return 48000 when bike park for 27',() => {
        //given
        const veh = 'bike'
        const dur = 27

        //when
        result = billing(veh, dur)

        //then
        expectedResult = 48000

        expect(result).toBe(expectedResult)
    })
})