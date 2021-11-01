import {getAllShoppingListController, postShoppingListController} from "../controllers/shoppingList.controller";
import {checkSchema} from "express-validator";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {shoppingListValidator} from "../vallidator/shoppinglist.validator";
import {Router} from "express";

export const ShoppingListRoute = Router()
ShoppingListRoute.route("/")
  .get( getAllShoppingListController)
  //TODO add the isLoggedIn controller back to post after final misquote lecture
  .post(asyncValidatorController(checkSchema(shoppingListValidator)), postShoppingListController)