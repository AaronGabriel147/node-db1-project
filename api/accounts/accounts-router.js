// HOW TO RUN A DEBUGGER IN NODE:

// Click debugger icon
// Click Launch Program
// Kill nodemon, then switch to 'DEBUG CONSOLE' as your terminal
// Create break points
// Use HTTP Client to make a request to the server
// The triangle icon on the debugged line is where the code stopped.
// Click stop on the debuggar to kill the debug terminal.

const router = require('express').Router()

const Accounts = require('../accounts/accounts-model')
// getAll     
// getById 
// create
// updateById
// deleteById


// Async version
// router.get('/', async (req, res, next) => {
//   try {
//     // const accounts = await Accounts.getAll()
//     // res.status(200).json(accounts)
//     throw new Error('Something went wrong') //  Did not work, want to test a catch 500
//   } catch (err) {
//     next(err)
//   }
// })

// .then version
router.get('/', (req, res, next) => {
  Accounts.getAll()
    .then(item => {
      res.status(200).json(item)
      // throw new Error('Error')
    })
    .catch(err => {
      res.status(500).json({ message: 'Something went wrong! 500 error' })
    })

})

// .catch(next) // This should work if the catch all was working....





// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ getById @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// //  ________________________________________________________
// // THE version to test out the catch all 500 error
router.get('/:id', async (req, res, next) => {
  try {
    const accounts = await Accounts.getById(req.params.id)

    if (!accounts) {
      res.status(404).json({ message: 'You! messed up, not me.' }) // enter an ID into the URL that does not exist to test this 404
    } else {
      // res.status(200).json(accounts)
      throw new Error('Error')
      // next()
    }
  } catch (err) {
    next(err)
  }
})
// // ________________________________________________________


// Notes
// Sarah = change catch (next) next(next) to catch(err) next(err)
// catch (error) { // if there is an error, catch it
// res.status(500).json({ message: 'Something went wrong!!!!!!!!' }) // return 500
// }
// console.log(error);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // Version to test the 500 manually.
//  This is how to test a catch 500!!!!!!!!!!!!!!!!
// router.get('/:id', async (req, res, next) => {
//   try {
//     const accounts = await Accounts.getById(req.params.id)

//     if (!accounts) {
//       res.status(404).json({ message: 'You! messed up, not me.' }) // enter an ID into the URL that does not exist to test this 404
//       next()
//     } else {
//       // res.status(200).json(accounts)
//       throw new Error('Error')
//     }
//   } catch (err) { // if there is an error, catch it
//     res.status(500).json({ message: 'Something went wrong! 500 err' }) // return 500
//   }
// })
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@









router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})



router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
