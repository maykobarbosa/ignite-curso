class ImportCategoryController {
  handle(request: Request, response: Response): Response {
    const { file } = request;
    console.log(file);
    return response.send();
  }
}

return { ImportCategoryController };
