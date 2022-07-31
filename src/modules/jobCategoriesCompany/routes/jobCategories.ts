import { Router } from "express";
import { ensureAuthenticateCompany } from "../../../middlewares/ensureAuthenticateCompany";
import { ChooseCategoryController } from "../useCases/chooseCategory/ChooseCategory.controller";
import { DeleteCategoryCompanyController } from "../useCases/deleteCategoryCompany/DeleteCategoryCompany.controller";
import { ListCategoriesCompanyController } from "../useCases/listCategoriesCompany/ListCategoriesCompany.controller";
import { SeachCategoryController } from "../useCases/seachCategory/seachCategory.controller";
import { CreateSubCategoryController } from "../useCases/subCategory/createSubCategory/createSubCategory.controller";
import { DeleteSubCategoryController } from "../useCases/subCategory/deleteSubCategory/deleteSubCategory.controller";
import { ListSubCategoriesCompanyController } from "../useCases/subCategory/listSubCategoriesCompany/listSubCategoriesCompany.controller";

const JobCategoriesRouter = Router();


const chooseCategoryController = new ChooseCategoryController();
const seachCategoryController = new SeachCategoryController();
const listCategoriesCompanyController = new ListCategoriesCompanyController();
const deleteCategoryCompanyController = new DeleteCategoryCompanyController();


const listSubCategoriesCompanyController = new ListSubCategoriesCompanyController();
const createSubCategoryController = new CreateSubCategoryController();
const deleteSubCategoryController = new DeleteSubCategoryController();

JobCategoriesRouter.post('/', ensureAuthenticateCompany, chooseCategoryController.handle);
JobCategoriesRouter.get('/', ensureAuthenticateCompany, seachCategoryController.handle);
JobCategoriesRouter.get('/company', ensureAuthenticateCompany, listCategoriesCompanyController.handle);
JobCategoriesRouter.delete('/company', ensureAuthenticateCompany, deleteCategoryCompanyController.handle);

JobCategoriesRouter.get('/subcategory', ensureAuthenticateCompany, listSubCategoriesCompanyController.handle);
JobCategoriesRouter.post('/subcategory', ensureAuthenticateCompany, createSubCategoryController.handle);
JobCategoriesRouter.delete('/subcategory', ensureAuthenticateCompany, deleteSubCategoryController.handle);

export { JobCategoriesRouter };
