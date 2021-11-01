import {ShoppingList} from "../interfaces/ShoppingList";
import {connect} from "../../src/database";

export async function insertShoppingList(shoppingList: ShoppingList) {
  try {
    const mySqlConnection = await connect()
    const mySqlQuery = "INSERT INTO shoppingList(shoppingListId, shoppingListItem, shoppingListQuantity) VALUES(UUID_TO_BIN(:shoppingListId), :shoppingListItem, :shoppingListQuantity)";

    const [rows] = await mySqlConnection.execute(mySqlQuery, shoppingList)
    return "Misquote created successfully"
  } catch (error) {
    console.log(error)
  }
}