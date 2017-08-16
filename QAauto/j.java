 /**
 * @api {get} api/v1/projects Request Projects information
 * @apiName GetProjects
 * @apiGroup Projects
 *
 * @apiParam {Number} id Projects unique ID.
 *
 * @apiSuccess {String} title Title of the Projects.
 * @apiSuccess {String} description  Description of the Projects.
 * @apiSuccess {String} created_at      Mandatory with default value.
 * @apiSuccess {String} updated_at      Mandatory uwith default value.
 *
 * @apiError ProjectNotFound The <code>id</code> of the Project was not found.
 */
 
 
/**
 * @api {post} api/v1/projects/ Post Project
 * @apiName PostProjects
 * @apiGroup Projects 
 * @apiParam {Number} id Projects unique ID.
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
 * @apiError ProjectNotFound The <code>id</code> of the Project was not found.
 */
 
 /**
 * @api {put} api/v1/projects/ Put Project
 * @apiName PutProjects
 * @apiGroup Projects 
 * @apiParam {Number} id Projects unique ID.
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
 * @apiError ProjectNotFound The <code>id</code> of the Project was not found.
 */
 
 /**
 * @api {patch} api/v1/projects/ Patch Project
 * @apiName PatchProjects
 * @apiGroup Projects 
 * @apiParam {Number} id Projects unique ID.
 *
 * @apiParam {String} title         Optional title of the Projects.
 * @apiParam {String} description   Optional description of the Projects.
 * @apiParam {String} created_at      Mandatory with default value.
 * @apiParam {String} updated_at      Mandatory uwith default value.
 *
 *
 * @apiSuccess {String} title		    Title of the Projects.
 * @apiSuccess {String} description     Description of the Projects.
 * @apiSuccess {String} created_at      Mandatory with default value.
 * @apiSuccess {String} updated_at      Mandatory uwith default value.
 */
 
 
  
/**
 * @api {delete} api/v1/projects/ Delete Project
 * @apiName DeleteProjects
 * @apiGroup Projects 
 * @apiParam {Number} id Projects unique ID.
 *
 *
 * @apiSuccess {String} id The new Projects-ID.
 * @apiSuccess {String} title		    Title of the Projects.
 * @apiSuccess {String} description     Description of the Projects.
 * @apiSuccess {String} created_at      Mandatory with default value.
 * @apiSuccess {String} updated_at      Mandatory uwith default value.
 */