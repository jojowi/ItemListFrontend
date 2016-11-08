'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'item-list/item-list.template.html',
    controller: ['Item',
      function ItemListController(Item) {
          
        this.items = Item.query({address:"items"});
        this.orderProp = "id";
        this.orderDir = "asc";
          
        this.sum = function sum(items){
            var res = 0;
            var item;
            for (item of items){
                res += item.count * item.price;
            }
            return res;
        }
        
        this.add = function add(){
            var item = {id:this.itemID,name:this.itemName,count:0,price:this.itemPrice};
            Item.saveItem({address:"additem"},item);
            this.items.push(item);
            this.itemID = "";
            this.itemName = "";
            this.itemPrice = "";
        }
        
        this.remove = function remove(item){
            Item.removeItem({address:"removeitem"},item);
            this.items.splice(this.items.indexOf(item),1);
        }
        
      }
    ]
  });
