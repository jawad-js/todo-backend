let rectangle = {
  perimeter: (x, y) => 2 * (x + y),
  area: (x, y) => x * y,
};

function Rectangle(l, b) {
  console.log(`A reactangle with l = ${l} and b = ${b}`);
  return l <= 0 || b <= 0
    ? `Error! Reactangle length & breath should be greater than 0: l =  ${l} and b =  ${b}`
    : `Area of rectangle: ${rectangle.area(l, b)} and Perimeter of rectangle: ${rectangle.perimeter(l, b)}`;
}

console.log(Rectangle(4, 5));
console.log(Rectangle(3, 12));
console.log(Rectangle(2, 4));
