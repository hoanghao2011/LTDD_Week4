import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Tiki_Ok() {
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState('');
  const price = 141800; 
  const totalPrice = price * quantity;

  const handleIncreaseQuantity = () => {
    setQuantity(prevQty => prevQty + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity(prevQty => prevQty - 1);
  };

  const handleApplyDiscount = () => {
    
    alert('Áp dụng mã giảm giá: ' + discountCode);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.productContainer}>
       
        <Image 
          source={require('../assets/sach.png')}
          style={styles.productImage} 
        />
        
        <View style={styles.productDetails}>
          <Text style={styles.title}>Nguyên hàm, Tích phân và Ứng dụng</Text>
          <Text style={styles.seller}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>{price.toLocaleString('vi-VN')} đ</Text>
        </View>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={handleDecreaseQuantity}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={handleIncreaseQuantity}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.discountContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mã giảm giá"
          value={discountCode}
          onChangeText={setDiscountCode}
        />
        <Button title="Áp dụng" onPress={handleApplyDiscount} />
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Tạm tính</Text>
        <Text style={styles.summaryPrice}>{totalPrice.toLocaleString('vi-VN')} đ</Text>
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Thành tiền</Text>
        <Text style={styles.summaryPrice}>{totalPrice.toLocaleString('vi-VN')} đ</Text>
      </View>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderText}>Tiến hành đặt hàng</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 100,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seller: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  quantity: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
  },
  summaryPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  orderButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
  },
  orderText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
