import { getRateForXDays } from "../utils/getRateForXDays"

describe("Balance At", () => {
    it("renders correctly", () => {
        const tree = getRateForXDays(1)
        expect(tree).toBe(1.974086185891366)
    })
})