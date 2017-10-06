/**
 * @api {get} /reports 신고내역 리스트
 * @apiHeader (User) {String} authorization Authorization value.
 * @apiHeaderExample {json} Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * @apiVersion 0.1.0
 * @apiName GetOther
 * @apiGroup Other
 * @apiPermission user
 *
 * @apiDescription
 * Find a model instance by {{id}} from the data source.
 *
 * @apiParam {String} id 		   userId	.
 *
 * @apiSuccess {String} id         userId.
 * @apiSuccess {Date}   name       Fullname of the User.
 *
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 */


/**
 * @api {get} /reports/:id 신교내역 조회
 * @apiHeader (User) {String} authorization Authorization value.
 * @apiHeaderExample {json} Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * @apiVersion 0.1.0
 * @apiName GetOther
 * @apiGroup Other
 * @apiPermission user
 *
 * @apiDescription
 * Find a model instance by {{id}} from the data source.
 *
 * @apiParam {String} id 		   userId	.
 *
 * @apiSuccess {String} id         userId.
 * @apiSuccess {Date}   name       Fullname of the User.
 *
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 */