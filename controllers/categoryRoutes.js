// const router = require('express').Router();
// const { Customer, LineItem, Product, Order } = require('../models');
// const { Op } = require('sequelize');

// router.get('/:term', async (req, res) => {
//   console.log("Inside Search Controller") // Can see this in the terminal logs
//   searchTerm = ("'%"+req.params.term+"%'");
//   console.log(searchTerm); // Can see this in the terminal logs
//   try {
//     const dbSearchData = await Product.findAll({
//       where: {
//         product_genre:  {
//           [Op.like]: `%${req.params.term}%`
//         }
//       },
//     });
//     console.log("Completed the find");
//     console.log(dbSearchData);
//     const results = dbSearchData.map((results) =>
//       results.get({ plain: true })
//     );

//   console.log("Completed the map");
//    console.log(results); // CANNOT SEE THIS IN THE TERMINAL... UNSURE IF THE FINDALL IS WORKING
//     res.render('category', {
//       results,
//       logged_in: req.session.logged_in,
//     });

//   } catch (err) {
//     res.status(500).json(err);
//   }
// }
// )

// module.exports = router;
const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbProductData = await Product.findAll({});

    const homepage = dbProductData.map((product) =>
      product.get({ plain: true })
    );

    res.render('category', {
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
}
)
module.exports = router;