
const router = require('express').Router()

const Accounts = require('../accounts/accounts-model')
// getAll     
// getById 
// create
// updateById
// deleteById



// router.get('/', async (req, res, next) => {
//   // DO YOUR MAGIC
//   try{
//     const accounts =  await Accounts.getAll()
//     res.status(200).json(accounts)
//   } catch(next) { 
//   }
// })


router.get('/', async (req, res, next) => {
  try {
    const accounts = await Accounts.getAll()
    res.status(200).json(accounts)
  } catch (next) {
    next(next)
  }
})







router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})



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
