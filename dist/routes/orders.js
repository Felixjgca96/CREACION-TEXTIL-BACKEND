"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_1 = require("../controllers/orders");
const validarJWT_1 = __importDefault(require("../middlewares/validarJWT"));
const recolectarErrores_1 = require("../middlewares/recolectarErrores");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.get("/", [
    validarJWT_1.default,
    recolectarErrores_1.recolectarErrores
], orders_1.getOrders);
router.post("/", [
    validarJWT_1.default,
    (0, express_validator_1.check)("price", "El precio es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("shippingCost", "El consto de envío es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("total", "El precio total es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("shippingDetails", "Los detalles de envío son obligatorios").not().isEmpty(),
    (0, express_validator_1.check)("items", "El array de productos es obligatorio").not().isEmpty(),
    recolectarErrores_1.recolectarErrores
], orders_1.createOrder);
exports.default = router;
