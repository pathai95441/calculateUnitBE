import { assert } from "chai";
import {  getConfig } from "./index";

describe("service/getConfig Calculate", () => {
	describe("getConfig Calculate", () => {
		it("getConfig Calculate by name", () => {
			const response = getConfig("default");
			assert.deepStrictEqual(
				response,
				{
                    "name": "default",
                    "unit101_150": 3.7171,
                    "unit151_400": 4.2218,
                    "unit401": 4.4217
                }
			);
		});
	});
});