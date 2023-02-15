const router = require('express').Router();
const { Customer, LineItem, Product, Order } = require('../models');

router.get('/:id', async (req, res) => {
  console.log(req.params);
  try {
    const dbProductData = await Product.findByPk(req.params.id);

    const productDetail = [dbProductData.get({ plain: true })];

    console.log(productDetail);
    console.log(dbProductData);
    res.render('product', {
      productDetail,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
)
// Creating the post page
// router.post("/", async(req, res) => {
//   try {
//       const newPost = await productDetail.create({
//           ...req.body,
//           user_id: req.session.user_id,
//       });

//       res.status(200).json(newPost);
//   } catch (err) {
//       res.status(400).json(err);
//   }
// });
// router.get('/:id', async (req, res) => {
//   try {
//     const dbProductData = await Product.findAll({
//       limit: 1,
//     });
//     const product = dbProductData.map((product) =>
//       product.get({ plain: true })
//     );

//     console.log(product);
//     res.render('product', {
//       product,
//       logged_in: req.session.logged_in,
//     });
  

//   } catch (err) {
//     res.status(500).json(err);
//   }
// }
// )

module.exports = router;