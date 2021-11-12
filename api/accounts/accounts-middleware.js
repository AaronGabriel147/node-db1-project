const Account = require('../accounts/accounts-model') // Import the model
// Doing middleware first is like doing the sad paths first.



// - `checkAccountPayload` returns a status 400 with if `req.body` is invalid:

// x - If either name or budget are undefined, return `{ message: "name and budget are required" }`
// - If name is not a string, return `{ message: "name of account must be a string" }`
// - If the _trimmed_ name is shorter than 3 or longer than 100, return `{ message: "name of account must be between 3 and 100" }`
// - If budget is not a number, return `{ message: "budget of account must be a number" }`
// - If budget is a negative number or over one million, return  `{ message: "budget of account is too large or too small" }`


// my first if statement returns a catch all 500 and I have no idea why!
exports.checkAccountPayload = async (req, res, next) => { // Payload is the body of the request. in this case, the name & budget.
  const error = { state: 400 }
  const { name, budget } = req.body
  if (name === undefined || budget === undefined) {
    error.message = 'name and budget are required'
    next(error)                                           // Goes to the next middleware.
  }

}





// - `checkAccountNameUnique` returns a status 400 with a `{ message: "that name is taken" }` 
// if the _trimmed_ `req.body.name` already exists in the database



exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  next()
  console.log('checkAccountNameUnique')
}






exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id)
    if (!account) {
      res.status(404).json({
        message: 'Account not found'
      })
    } else {
      req.account = account // add account to request
      next() // Allows it to proceed, to the next middleware.
    }
  } catch (err) {
    next(err)
  }
}
