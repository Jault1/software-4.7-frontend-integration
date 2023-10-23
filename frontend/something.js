App listening on port 3001
Executing (default): SELECT `id`, `name`, `price`, `description`, `category_id` FROM `items` AS `item`;
Executing (default): SELECT `id`, `name`, `price`, `description`, `category_id` FROM `items` AS `item`;
C:\Users\jault\documents\w3projects\_assignments\_nodejs\software-4.7-frontend-integration\backend\node_modules\sequelize\lib\instance-validator.js:50
      throw new sequelizeError.ValidationError(null, this.errors);
            ^

ValidationError [SequelizeValidationError]: 



notNull Violation: item.price cannot be null, 
notNull Violation: item.description cannot be null




    at InstanceValidator._validate (C:\Users\jault\documents\w3projects\_assignments\_nodejs\software-4.7-frontend-integration\backend\node_modules\sequelize\lib\instance-validator.js:50:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async InstanceValidator._validateAndRunHooks (C:\Users\jault\documents\w3projects\_assignments\_nodejs\software-4.7-frontend-integration\backend\node_modules\sequelize\lib\instance-validator.js:60:7)
    at async InstanceValidator.validate (C:\Users\jault\documents\w3projects\_assignments\_nodejs\software-4.7-frontend-integration\backend\node_modules\sequelize\lib\instance-validator.js:54:12)
    at async model.save (C:\Users\jault\documents\w3projects\_assignments\_nodejs\software-4.7-frontend-integration\backend\node_modules\sequelize\lib\model.js:2426:7)
    at async item.create (C:\Users\jault\documents\w3projects\_assignments\_nodejs\software-4.7-frontend-integration\backend\node_modules\sequelize\lib\model.js:1362:12)
    at async exports.addNewItem (C:\Users\jault\documents\w3projects\_assignments\_nodejs\software-4.7-frontend-integration\backend\controllers\itemController.js:17:5) {
  errors: [
    ValidationErrorItem {
      message: 'item.price cannot be null',  
      type: 'notNull Violation',
      path: 'price',
      value: null,
      origin: 'CORE',
      instance: item {
        dataValues: {
          id: null,
          name: 'stuff',
          price: undefined,
          description: undefined
        },
        _previousDataValues: { name: undefined },
        uniqno: 1,
        _changed: Set(1) { 'name' },
        _options: {
          isNewRecord: true,
          _schema: null,
          _schemaDelimiter: '',
          attributes: undefined,
          include: undefined,
          raw: undefined,
          silent: undefined
        },
        isNewRecord: true
      },
      validatorKey: 'is_null',
      validatorName: null,
      validatorArgs: []
    },
    ValidationErrorItem {
      message: 'item.description cannot be null',
      type: 'notNull Violation',
      path: 'description',
      value: null,
      origin: 'CORE',
      instance: item {
        dataValues: {
          id: null,
          name: 'stuff',
          price: undefined,
          description: undefined
        },
        _previousDataValues: { name: undefined },
        uniqno: 1,
        _changed: Set(1) { 'name' },
        _options: {
          isNewRecord: true,
          _schema: null,
          _schemaDelimiter: '',
          attributes: undefined,
          include: undefined,
          raw: undefined,
          silent: undefined
        },
        isNewRecord: true
      },
      validatorKey: 'is_null',
      validatorName: null,
      validatorArgs: []
    }
  ]
}

Node.js v20.5.0
[nodemon] app crashed - waiting for file changes before starting...
