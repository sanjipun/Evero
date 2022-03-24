import { getRateForXDays } from "../utils/getRateForXDays"

describe("Balance At", () => {
    it("renders correctly", () => {
        const tree = getRateForXDays(7)
        expect(tree).toBe(13.900348905674885)
    })
})