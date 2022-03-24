import React from "react"
import renderer from "react-test-renderer"
import Title from "../components/Title"

describe("Header", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(<Title>Title</Title>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})