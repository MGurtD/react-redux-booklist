export function selectBook(book) {
    // Send an action to all reducers

    // selectBook is an ActionCreator, it needs to return ac action,
    // an object with a type property.
    return {
        type : 'BOOK_SELECTED',
        payload : book
    };
}