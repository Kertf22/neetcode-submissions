
class MinStack {
    constructor() {}
    values = [];
    min = null
    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if(!this.min || this.min.value >= val) {
            this.min = {
                value: val,
                next: this.min,
            }
        }
        this.values.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        const pop = this.values.pop();
        if(this.min.value==pop) this.min = this.min.next;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.values[this.values.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min.value;
    }
}
