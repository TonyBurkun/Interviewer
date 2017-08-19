 /**
 * @api {get} api/v1/projects/:id Get all projects
 * @apiName GetProjects
 * @apiGroup Projects
 *
 * @apiDescription Returns all projects which are visible for the currently logged in user.
 * @apiParam {Number} id Projects unique ID.
 *
 * @apiHeader {String} access-key Users unique access-key.
 * @apiHeader {String} content-type application/json; charset=utf-8
 * @apiHeader {String} accept application/json
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
            "id": 1,
            "title": "Opela",
            "description": "Deserunt officia et et et quia non.",
            "created_at": "2017-08-15T00:59:51.835Z",
            "updated_at": "2017-08-15T00:59:51.835Z"
        }
 * @apiSuccess {String} title Title of the Projects.
 * @apiSuccess {String} description  Description of the Projects.
 * @apiSuccess {String} created_at      Mandatory with default value.
 * @apiSuccess {String} updated_at      Mandatory uwith default value.
 *
 * @apiError ProjectNotFound The <code>id</code> of the Project was not found.
 * @apiError Unauthorized Returned if the user is not logged in.
 */
 
 
 
 
/**
 * @api {post} api/v1/projects/ Create project
 * @apiName PostProjects
 * @apiGroup Projects 
 * @apiParam {Number} id Projects unique ID.
 *
 *
 * @apiHeader {String} access-key Users unique access-key.
 * @apiHeader {String} content-type application/json; charset=utf-8
 * @apiHeader {String} accept application/json
 *
 *
 * @apiParam {String} [title]         Optional title of the Projects.
 * @apiParam {String} [description]     Optional description of the Projects.
 *
 * @apiSuccess {String} id The new Projects-ID.
 * @apiSuccess {String} title Title of the Projects.
 * @apiSuccess {String} description  Description of the Projects.
 * @apiSuccess {String} created_at      Mandatory with default value.
 * @apiSuccess {String} updated_at      Mandatory uwith default value.
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
        "id": 21,
        "title": null,
        "description": null,
        "created_at": "2017-08-19T20:58:14.648Z",
        "updated_at": "2017-08-19T20:58:14.648Z"
        }
 *
 * @apiError ProjectNotFound The <code>id</code> of the Project was not found.
 * @apiError Unauthorized Returned if the user is not logged in.
 */
 
 
 
 /**
 * @api {put} api/v1/projects/:id Update project
 * @apiName PutProjects
 * @apiGroup Projects 
 * @apiParam {Number} id Projects unique ID.
 * @apiDescription Replace the entire project with the new representation provided.
 *
 *
 * @apiHeader {String} access-key Users unique access-key.
 * @apiHeader {String} content-type application/json; charset=utf-8
 * @apiHeader {String} accept application/json
 *
 *
 * @apiParam {String} [title]         Optional title of the Projects.
 * @apiParam {String} [description]     Optional description of the Projects.
 *
 * @apiSuccess {String} id The new Projects-ID.
 * @apiSuccess {String} title Title of the Projects.
 * @apiSuccess {String} description  Description of the Projects.
 * @apiSuccess {String} created_at      Mandatory with default value.
 * @apiSuccess {String} updated_at      Mandatory uwith default value.
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "id": 21,
        "title": test,
        "description": test,
        "created_at": "2017-08-19T20:58:14.648Z",
        "updated_at": "2017-08-19T20:58:14.648Z"
    }
 * @apiError ProjectNotFound Returned if the project does not exist.
 * @apiError Unauthorized Returned if the user is not logged in.
 */
 
 
 
 /**
 * @api {patch} api/v1/projects/:id Edit project
 * @apiName PatchProjects
 * @apiGroup Projects 
 * @apiParam {Number} id Projects unique ID.
 * @apiDescription Replace parts of existing project.
 *
 *
 * @apiHeader {String} access-key Users unique access-key.
 * @apiHeader {String} content-type application/json; charset=utf-8
 * @apiHeader {String} accept application/json
 *
 * @apiParam {String} title          Optional title of the Projects.
 * @apiParam {String} description    Optional description of the Projects.
 * @apiParam {String} created_at      Mandatory with default value.
 * @apiParam {String} updated_at      Mandatory uwith default value.
 *
 *
 * @apiSuccess {String} title		    Title of the Projects.
 * @apiSuccess {String} description     Description of the Projects.
 * @apiSuccess {String} created_at      Mandatory with default value.
 * @apiSuccess {String} updated_at      Mandatory uwith default value.
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
     {
        "id": 21,
        "title": test11,
        "description": test,
        "created_at": "2017-08-19T20:58:14.648Z",
        "updated_at": "2017-08-19T20:58:14.648Z"
    }
 * @apiError Unauthorized Returned if the user is not logged in.
 * @apiError ProjectNotFound Returned if the project does not exist.
 */
 
 
  
/**
 * @api {delete} api/v1/projects/:id Delete project
 * @apiName DeleteProjects
 * @apiGroup Projects 
 * @apiParam {Number} id Projects unique ID.
 *
 *
 *
 * @apiHeader {String} access-key Users unique access-key.
 * @apiHeader {String} content-type application/json; charset=utf-8
 * @apiHeader {String} accept application/json
 *
 *
 * @apiSuccess {String} id              The Projects-ID.
 * @apiSuccess {String} title		    Title of the Projects.
 * @apiSuccess {String} description     Description of the Projects.
 * @apiSuccess {String} created_at      Mandatory with default value.
 * @apiSuccess {String} updated_at      Mandatory uwith default value.
 *
 * @apiError Unauthorized Returned if the user is not logged in.
 * @apiError ProjectNotFound Returned if the project does not exist.
 */