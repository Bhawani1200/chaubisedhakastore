package Backend.chaubisedhakaBackend.service;


import Backend.chaubisedhakaBackend.model.Category;
import Backend.chaubisedhakaBackend.payload.CategoryDTO;
import Backend.chaubisedhakaBackend.payload.CategoryResponse;

public interface CategoryService {
    CategoryResponse getAllCategories(Integer pageNumber,Integer pageSize,String sortBy,String sortOrder);

    CategoryDTO createCategory(CategoryDTO categoryDTO);

    CategoryDTO deleteCategory(Long categoryId);

     CategoryDTO updateCategory(CategoryDTO categoryDTO,Long categoryId);

}
