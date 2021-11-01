import {connect} from "../../src/database";

/**
 * Helper function that grabs all misquotes
 **/
export async function selectAllShoppingLists() {
  try {

    const mysqlConnection = await connect()
    const mySqlQuery = "SELECT BIN_TO_UUID(shoppingListId) AS shoppingListId, shoppingListItem, shoppingListQuantity from shoppingList";
    const [rows] = await mysqlConnection.execute(mySqlQuery)
    return rows
  } catch (error) {
    console.log(error)
    return undefined
  }
}