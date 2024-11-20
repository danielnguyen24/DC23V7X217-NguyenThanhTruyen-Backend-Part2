const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

// Các route khác của contact
router.route("/")
  .get(contacts.findALL)
  .post(contacts.create)
  .delete(contacts.deleteALL);

// Route cho yêu cầu yêu thích
router.route("/favorite")
  .get(contacts.findALLFavorite);

// Route cho một contact cụ thể theo ID
router.route("/:id")
  .get((req, res) => {
    const contactId = req.params.id;
    if (contactId === "999") {
      // Giả sử ID không hợp lệ thì sẽ trả về lỗi 404
      return res.status(404).json({ message: "Contact not found" });
    }
    contacts.findOne(req, res);
  })
  .put(contacts.update)
  .delete(contacts.delete);

module.exports = router;
