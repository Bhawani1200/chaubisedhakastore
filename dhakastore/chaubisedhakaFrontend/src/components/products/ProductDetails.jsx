import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronRight,
  Home,
  Star,
  ShoppingCart,
  Minus,
  Plus,
  Heart,
  Share2,
} from "lucide-react";
import { LAUNCHES } from "../../constants/index";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    const foundProduct = LAUNCHES.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setQuantity(1);
      setSelectedColor(0);
    }
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h2>
          <Link to="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart(
        {
          ...product,
          productId: product.id,
        },
        quantity,
        toast,
      ),
    );
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity < product.quantity) setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <Link to="/" className="hover:text-black flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-black">
              Products
            </Link>
            <ChevronRight size={14} />
            <span className="text-black font-medium line-clamp-1">
              {product.productName}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side: Product Image */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-sm relative group">
              <img
                src={product.image}
                alt={product.productName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.discount && (
                <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  {product.discount}% OFF
                </div>
              )}
            </div>

            {/* Small Thumbnails (Placeholder for variants) */}
            <div className="flex gap-4">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className={`w-24 h-24 rounded-2xl bg-gray-100 border-2 cursor-pointer overflow-hidden ${i === 0 ? "border-black" : "border-transparent"}`}
                >
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="flex flex-col">
            {/* Brand/Category */}
            <div className="text-sm font-bold text-green-700 tracking-widest uppercase mb-2">
              New Collection
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {product.productName}
            </h1>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center px-3 py-1 bg-yellow-400 rounded-full text-sm font-bold text-gray-900">
                <Star size={14} fill="currentColor" className="mr-1" />
                {product.rating || 4.5}
              </div>
              <span className="text-gray-500 font-medium">
                {product.reviewCount || 0} Customer Reviews
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl md:text-4xl font-bold text-black font-sans">
                ₹
                {Number(product.specialPrice || product.price).toLocaleString(
                  "en-IN",
                )}
              </span>
              {product.specialPrice && product.price > product.specialPrice && (
                <span className="text-xl text-gray-400 line-through">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-10">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                  Select Color:{" "}
                  <span className="text-gray-500">
                    {product.colors[selectedColor].label}
                  </span>
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(idx)}
                      className={`group p-1 rounded-full border-2 transition-all ${selectedColor === idx ? "border-black scale-110" : "border-transparent"}`}
                      title={color.label}
                    >
                      <div
                        className="w-10 h-10 rounded-full shadow-inner"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                Quantity
              </h3>
              <div className="flex items-center w-fit border-2 border-gray-100 rounded-full p-1 bg-gray-50">
                <button
                  onClick={decreaseQuantity}
                  className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                >
                  <Minus size={20} />
                </button>
                <span className="w-16 text-center text-xl font-bold">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button
                onClick={handleAddToCart}
                disabled={product.quantity === 0}
                className="flex-1 bg-gray-900 text-white rounded-2xl py-5 px-8 font-bold text-lg flex items-center justify-center gap-3 transition-all hover:bg-gray-800 hover:shadow-xl active:scale-95 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                <ShoppingCart size={24} />
                {product.quantity > 0
                  ? "Add To Shopping Cart"
                  : "Currently Out of Stock"}
              </button>

              <button className="w-16 h-16 rounded-2xl border-2 border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Heart size={24} className="text-gray-400 hover:text-red-500" />
              </button>

              <button className="w-16 h-16 rounded-2xl border-2 border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Share2 size={24} className="text-gray-400" />
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6 text-sm">
              <div>
                <span className="text-gray-400 block mb-1">SKU:</span>
                <span className="font-bold">CD-{product.id}-778</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Category:</span>
                <span className="font-bold underline cursor-pointer">
                  Unisex, Launch
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
