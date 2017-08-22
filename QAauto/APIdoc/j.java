 /**
 * @apiName GetProjects
 * @apiGroup Projects
 *
 * @api {get} api/v1/projects/:id Get all projects
 *
 * @apiDescription Returns all projects which are visible for the currently logged in user.
 *
 * @apiHeader {String} access-key Users unique access-key.
 * @apiHeader {String} content-type application/json; charset=utf-8
 * @apiHeader {String} accept application/json
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *   {
 *  	"status": "SUCCESS",
 *  	"message": "Project id=30 loaded",
 *  	"data":  {
         	 "id": 30,
           	 "title": "Test",
            	 "description": "test",
            	 "created_at": "2017-08-22T11:32:34.824Z",
            	 "updated_at": "2017-08-22T11:32:34.824Z"
        }
*}
 * @apiSuccess {String} title Title of the Projects.
 * @apiSuccess {String} description  Description of the Projects.
 * @apiSuccess {String} created_at    Mandatory with data of creating(By default).
 * @apiSuccess {String} updated_at    Mandatory with data of update(By default).
 *
 * @apiError ProjectNotFound The <code>id</code> of the Project was not found.
 * @apiError Unauthorized Returned if the user is not logged in.
 */
 
 
 
 
/**
 * @api {post} api/v1/projects/ Create project
 * @apiName PostProjects
 * @apiGroup Projects
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
 * @apiParamExample {json} Request-Example:
 *     {
 *     	"title": "Test",
 
        "description": "test"

 *     }
 *
 * @apiSuccess {String} id The new Projects-ID.
 * @apiSuccess {String} title Title of the Projects.
 * @apiSuccess {String} description  Description of the Projects.
 * @apiSuccess {String} created_at    Mandatory with data of creating(By default).
 * @apiSuccess {String} updated_at    Mandatory with data of update(By default).
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *{
  	"status": "SUCCESS",
  	"message": "Saved project",
  	"data": {
        	"id": 30,
       		"title": "Test",
       		"description": "test",
       		"created_at": "2017-08-22T11:32:34.824Z",
       		"updated_at": "2017-08-22T11:32:34.824Z"
       }
 *}
 *
 * @apiError ProjectNotFound The <code>id</code> of the Project was not found.
 * @apiError Unauthorized Returned if the user is not logged in.
 */
 
 
 
 /**
 * @api {put} api/v1/projects/:id Update project
 * @apiName PutProjects
 * @apiGroup Projects 
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
 * @apiParamExample {json} Request-Example:
 *     {
 *     	"title": "TestUpdate",
 
        "description": "testUpdate"
 *     }
 *
 * @apiSuccess {String} title Title of the Projects.
 * @apiSuccess {String} description  Description of the Projects.
 * @apiSuccess {String} created_at    Mandatory with data of creating(By default).
 * @apiSuccess {String} updated_at    Mandatory with data of update(By default).
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
 * 	"status": "SUCCESS",
 * 	"message": "Update project",
 *  	"data": {
   		"id": 30,
       	 	"title": "TestUpdate",
        	"description": "testUpdate",
        	"created_at": "2017-08-22T11:32:34.824Z",
        	"updated_at": "2017-08-22T11:44:33.906Z"
    }
*}
 * @apiError ProjectNotFound Returned if the project does not exist.
 * @apiError Unauthorized Returned if the user is not logged in.
 */
 
 
 
 /**
 * @api {patch} api/v1/projects/:id Edit project
 * @apiName PatchProjects
 * @apiGroup Projects 
 * @apiDescription Replace parts of existing project.
 *
 *
 * @apiHeader {String} access-key Users unique access-key.
 * @apiHeader {String} content-type application/json; charset=utf-8
 * @apiHeader {String} accept application/json
 *
 * @apiParam {String} [title]          Optional title of the Projects.
 * @apiParam {String} [description]    Optional description of the Projects.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *     	"title": "TestEdit", 
        "description": "testUpdate"
 *     }
 *
 *
 * @apiSuccess {String} title 	      Title of the Projects.
 * @apiSuccess {String} description   Description of the Projects.
 * @apiSuccess {String} created_at    Mandatory with data of creating(By default).
 * @apiSuccess {String} updated_at    Mandatory with data of update(By default).
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
 * 	"status": "SUCCESS",
 * 	"message": "Update project",
    	"data": {
         	"id": 30,
         	"title": "TestEdit",
         	"description": "testUpdate",
         	"created_at": "2017-08-22T11:32:34.824Z",
         	"updated_at": "2017-08-22T11:52:25.651Z"
    }
*}
 * @apiError Unauthorized Returned if the user is not logged in.
 * @apiError ProjectNotFound Returned if the project does not exist.
 */
 
 
  
/**
 * @api {delete} api/v1/projects/:id Delete project
 * @apiName DeleteProjects
 * @apiGroup Projects 
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
 * @apiSuccess {String} created_at    Mandatory with data of creating(By default).
 * @apiSuccess {String} updated_at    Mandatory with data of update(By default).
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * {
 * 	"status": "SUCCESS",
 *  	"message": "Project deleted",
    	"data": {
         	"id": 30,
         	"title": "TestEdit",
         	"description": "testUpdate",
         	"created_at": "2017-08-22T11:32:34.824Z",
         	"updated_at": "2017-08-22T11:52:25.651Z"
    }
*}
 * @apiError Unauthorized Returned if the user is not logged in.
 * @apiError ProjectNotFound Returned if the project does not exist.
 */