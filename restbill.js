var bill = {
    items: [3.95, 10.95, 7.95],
    tax: [0.07],
    tip: [0.20],
    
    finalTaxPerItem: function() {
       this.items.forEach(item=> {
          console.log(item*this.tax);
        });
    },
    
    finalTipPerItem: function(){
        this.items.forEach(item=> {
            console.log(item*this.tip);
        });
    },
    
    finalBillCost: function(){
        (this.finalTaxPerItem() + this.finalTipPerItem() + this.items);
        
    }
};

bill.finalBillCost()