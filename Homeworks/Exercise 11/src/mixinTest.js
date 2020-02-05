export const myMixin = {
    computed: {
        reverseLength() {
            return this.someTest.split("").reverse().join("") + " " + `${this.someTest.length}`;
        }
    }
};