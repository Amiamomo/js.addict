export var MY_DATA = [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Mouhahah'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
                 ];

export var GEMs=["EECIS","MEA","North","South","UK_Ire"];

export class MyDataService {

    static getData () {
        return MY_DATA;
    }

}

export class EMEAConfigDataService extends MyDataService {

    static getGEMs () {
        return GEMs;
    }
    
}
