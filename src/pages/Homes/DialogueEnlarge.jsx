import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaHeart, FaBalanceScale } from "react-icons/fa";
import { SiVexxhost } from "react-icons/si";

const DialogueEnlarge = ({ show, handleClose, product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Body>
        <div className="d-flex position-relative">
          {/* Left Side - Product Images */}
          <div className="product-images d-flex flex-column me-4">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "250px", height: "250px", objectFit: "contain" }}
            />
          </div>

          {/* Right Side - Product Details */}
          <div className="product-info w-100">
            {/* Close Button Positioned in Top-Right Corner */}
            <div className="d-flex justify-content-between align-items-start">
              <h4>{product.title}</h4>
              <Button variant="light" className="p-2 shadow-sm " onClick={handleClose}>
                <SiVexxhost size={20} color="red"/>
              </Button>
            </div>

            <p>
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                ₹{Math.round((product.price / 88) * 100)}
              </span>
              &nbsp;
              <span style={{ color: "red", fontWeight: "bold" }}>
                ₹{product.price}
              </span>
            </p>

            <p className="mt-3">{product.description}</p>

            {/* Quantity Selector */}
            <div className="d-flex align-items-center">
              <Button
                variant="outline-secondary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </Button>
              <span className="mx-2">{quantity}</span>
              <Button variant="outline-secondary" onClick={() => setQuantity(quantity + 1)}>
                +
              </Button>
            </div>

            {/* Add to Cart & Wishlist Buttons */}
            <div className="d-flex mt-3">
              <Button variant="primary" className="me-3">Add to Cart</Button>
              <Button variant="outline-secondary"><FaHeart /> Add to Wishlist</Button>
              <Button variant="outline-secondary" className="ms-2"><FaBalanceScale /> Compare</Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DialogueEnlarge;
