
type TStoreData = {
    storeID: string,
    storeName: string,
    isActive: number,
    images: any,
}


export const genStoreMap = (data: TStoreData[]) => {
const dict: { [key: string]: string | number } = {};
data.forEach(i => {
    dict[i.storeID] = i.storeName
})

return dict;
}