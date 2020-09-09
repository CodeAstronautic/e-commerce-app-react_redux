import uuid from 'uuid/v4';

const phonesDefaultState = {
  phones: [
    {
      id: uuid(),
      brand: 'Vivo',
      name: ` Vivo 17`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Vivo',
      name: `Vivo v17 Pro`,
      price: 350,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Vivo',
      name: `Vivo v17`,
      price: 300,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Samsung',
      name: `Galaxy A10`,
      price: 130,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Samsung',
      name: `Galaxy S10+`,
      price: 120,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Samsung',
      name: `Galaxy A70`,
      price: 330,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Samsung',
      name: `Galaxy Note9`,
      price: 650,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Huawei',
      name: `P30 Pro`,
      price: 760,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Huawei',
      name: `Mate 20 Pro`,
      price: 580,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Huawei',
      name: `P20 Lite`,
      price: 200,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Huawei',
      name: `P30`,
      price: 550,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Huawei',
      name: `Y9 Prime`,
      price: 220,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Apple',
      name: `Iphone 7 Plus`,
      price: 690,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Apple',
      name: `Iphone X`,
      price: 1000,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Apple',
      name: `Iphone 6s`,
      price: 500,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Apple',
      name: `Iphone 8 Plus`,
      price: 770,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Lenovo',
      name: `Z6 Pro`,
      price: 400,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Lenovo',
      name: `A6000`,
      price: 100,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'Lenovo',
      name: `A7000`,
      price: 150,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'HTC',
      name: `U19e`,
      price: 420,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    },
    {
      id: uuid(),
      brand: 'HTC',
      name: `10`,
      price: 300,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum magnam nesciunt esse nihil pariatur cupiditate fugit aut inventore minus facilis provident, nisi fuga! Dicta, saepe. Incidunt ipsum voluptatum odio',
      stats:
      {
        size: '6.26 inches, 97.8 cm2 ',
        resolution: '720 x 1520 pixels, 19:9 ratio',
        GPU: 'Mali-G76 MP12 - EMEA',
        CPU: 'Octa-core, 2x2.73 GHz Mongoose M4',
        camera: '12+ 2MP rear camera',
        battery: '1400 mAh',
      }
    }
  ],
  cart: [],
  total: 0
}

const phonesReducer = (state = phonesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NEW_PHONE': 
      return {
        ...state,
        phones: [ ...state.phones, action.phone ]
      }
    case 'ADD_TO_CART':
      const addedPhone = state.phones.find((phone) => action.id === phone.id);
      const existingPhone = state.cart.find((existingPhone) => action.id === existingPhone.id);
      
      if (existingPhone) {
        addedPhone.quantity += 1;
        return {
          ...state,
          total: state.total + addedPhone.price
        }
      } else {
        addedPhone.quantity = 1;
        const newTotal = state.total + addedPhone.price
        return {
          ...state,
          cart: [...state.cart, addedPhone],
          total: newTotal
        }
      };
    case 'REMOVE_FROM_CART':
      const phoneToRemove = state.cart.find((phone) => action.id === phone.id)
      const removePhone = state.cart.filter((phone) => action.id !== phone.id);

      const newTotal = state.total - (phoneToRemove.price * phoneToRemove.quantity)
      return {
        ...state,
        cart: removePhone,
        total: newTotal
      }
    case 'DECREMENT':
      const phone = state.cart.find((phone) => action.id === phone.id);

      if (phone.quantity > 1) {
        phone.quantity -= 1;
        const newTotal = state.total - phone.price
        return {
          ...state,
          total: newTotal
        }
      } else {
        return state
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
        total: 0
      }
    default:
      return state;
  }
}

export default phonesReducer;