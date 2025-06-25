/* eslint-disable prettier/prettier */
export interface IShoppingCart {
  cliente:string
  clienteEmail:string
  shopping: ICartItem[]
}

export interface ICartItem {
  id: string
  name: string
  basePrice: number
  customizations: {
    additions: Array<ICustomization>
    sauces: Array<ICustomization>
  }
  sides: {
    fries: ISideItem | null
    drink: ISideItem | null
  }
  quantity: number
  totalPrice: number
}

export interface ICustomization {
  name: string
  price: number
}

export interface ISideItem {
  name: string
  price: number
}
