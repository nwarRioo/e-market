export default interface IModel {
    id: string
    name: string,
    image: string,
    price: number,
    article: string,
    available: boolean,
    category: string,
    quantity?: number
}