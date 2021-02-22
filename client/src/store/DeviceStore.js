import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"},
            {id: 3, name: "Ноутбуки"},
            {id: 4, name: "Телевизоры"},
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Asus"},
        ]
        this._devices = [
            {id: 1, name: "Nokia 3310", price: 2000, rating: 5, img: "https://lastprint.ru/image/constructor_avatar_cache/product_49948_202_0_0.jpg"},
            {id: 2, name: "Nokia 3310", price: 2000, rating: 5, img: "https://lastprint.ru/image/constructor_avatar_cache/product_49948_202_0_0.jpg"},
            {id: 3, name: "Nokia 3310", price: 2000, rating: 5, img: "https://lastprint.ru/image/constructor_avatar_cache/product_49948_202_0_0.jpg"},
            {id: 4, name: "Nokia 3310", price: 2000, rating: 5, img: "https://lastprint.ru/image/constructor_avatar_cache/product_49948_202_0_0.jpg"},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}