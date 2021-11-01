export const shoppingListValidator : any = {
  shoppingListItem: {

    isLength: {
      errorMessage: "Misquote Content is to long",
      options: {min: 1, max: 255}
    },
    trim: true,
    escape: true
  },
  shoppingListQuantity: {
    isInt: true,
    // Sanitizers can go here as well
    toInt: true
  }
}