var app = new Vue({
    el: '#app',

    data: {
      items: [],
      newItem: '',
      editItem: {}
    }, 
    
    created (){
        this.items = JSON.parse('[{"id": 1, "name":"Test 1", "checked": false, "price":30, "description":"Test 1", "quantity": 20},{"id": 2, "name":"Test 2", "checked": false, "price":20, "description":"Test 2", "quantity": 10}]')
    },

    methods:{

        addItemToList (){
            this.items.push({ name: this.newItem, checked: false, price: 0, description: '', quantity: 0})
            this.newItem = ''
            // console.log('newItem', this.newItem);
        },

        checkedItem (item) {   
            this.items.map((i) => {
                if (i.id == item.id){
                    i.checked = i.checked ? false : true
                }
            })
        },

        setItemEdit (item){
            this.editItem = item            
        },

        editItem (item_id, key, value) {

            this.items.map((i) => {
                if (i.id == item.id){
                    i.checked = i.checked ? false : true
                }
            })
            
        },

        removeItemFromList (item_id) {   

            let itemIndex = this.items.findIndex((i) => i.id == item_id) 

            if (itemIndex >= 0){
                this.items.splice(itemIndex,1)
                //check if edit and then remove fromn item edit

                if (Object.keys(this.editItem).length && this.editItem.id == item_id){
                    this.editItem = {}
                }
                
            }

            
         
        },
    }

  })