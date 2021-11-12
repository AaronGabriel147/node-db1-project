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
// router.get('/:id', async (req, res, next) => {
//   try {
//     const accounts = await Accounts.getById(req.params.id)

//     if (!accounts) {
//       res.status(404).json({ message: 'You! messed up, not me.' }) // enter an ID into the URL that does not exist to test this 404
//     } else {
//       // res.status(200).json(accounts)
//       throw new Error('Error')
//       // next()
//     }
//   } catch (err) {
//     next(err)
//   }
// })
// // ________________________________________________________


// Notes
// catch (error) { // if there is an error, catch it
// res.status(500).json({ message: 'Something went wrong!!!!!!!!' }) // return 500
// }
// console.log(error);


// next(err) is very versatile, it let you give any type of response you want, like:
// next({ status: 402, message: 'You are not authorized' })}) 

router.get('/:id', async (req, res, next) => {
  try {
    const accounts = await Accounts.getById(req.params.id)
    res.status(200).json(accounts)
    // throw new Error('Error')
  } catch (err) {
    next(err)
  }
})



router.post('/', async (req, res, next) => {
  try {
    throw new Error('Eeeeeeeeeeeeeek')
  } catch (err) {
    next(err)
  }
})



// router.put('/:id', async (req, res, next) => {
//   try {

//   } catch (err) {
//     next(err)
//   }

// });

// router.delete('/:id', async (req, res, next) => {
//   try {

//   } catch (err) {
//     next(err)
//   }

// })


// router.use((err, req, res, next) => { // eslint-disable-line
//   // DO YOUR MAGIC
// })

module.exports = router;
