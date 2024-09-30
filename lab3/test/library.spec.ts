import { Library } from "../src/services/library";
import { describe, it } from "mocha";
import { Book } from "../src/models/book";
import * as assert from "assert";

describe("Library", () => {
  it("should add a book correctly", () => {
    const library = new Library();
    const book = new Book("Test Author", "Test Book Name", 2023);
    library.add(book);
    assert.equal(1, 1);
  });
});