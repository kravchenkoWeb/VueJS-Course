export const fruitMixin = {
    data: function() {
        return {
            fruits: ['banana', 'mango', 'apple', 'melon', 'orange'],
            filteredText: ""
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filteredText);
            });
        }
    },
    created() {
        console.log('Created in mixin');
    }
};