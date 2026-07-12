class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0; // указатель на начало
        let right = numbers.length - 1; // указатель на конец

        while (left < right) {
            const sum = numbers[left] + numbers[right];

            if (sum === target) {
                // Возвращаем 1-индексированные позиции
                return [left + 1, right + 1];
            } else if (sum < target) {
                // Сумма слишком маленькая → двигаем левый указатель вправо
                left++;
            } else {
                // Сумма слишком большая → двигаем правый указатель влево
                right--;
            }
        }
    }
}
