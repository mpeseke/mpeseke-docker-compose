import {NextFunction, Request, Response} from "express"

import {selectAllShoppingLists} from "../../utils/shoppingList/selectAllShoppingList";
import {Status} from "../../utils/interfaces/Status";
import { v1 as uuidv1 } from 'uuid';
import {ShoppingList} from "../../utils/interfaces/ShoppingList";
import {insertShoppingList} from "../../utils/shoppingList/insertShoppingList";

export async function getAllShoppingListController(request: Request, response: Response, nextFunction: NextFunction) {
  try {
    const data = await selectAllShoppingLists()
    console.log(data)
    console.log(data)
    const status: Status = {status: 200, data, message: null}
    return response.json(status)
  } catch (error) {
    console.log(error)
  }
}

export async function postShoppingListController(request: Request, response: Response, nextFunction: NextFunction) {
  try {
    const shoppingListId = uuidv1()
    const {shoppingListItem, shoppingListQuantity} = request.body
    const shoppingList : ShoppingList = {
      shoppingListId,
      shoppingListItem,
      shoppingListQuantity
    }
    const result = await insertShoppingList(shoppingList)
    return response.json({status: 200, data: null, message: result})
  } catch (error) {
    console.log(error)
  }
}