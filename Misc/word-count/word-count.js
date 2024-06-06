const loremIpsum81Chars = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget tincidunt ante. Sed id scelerisque augue. In a mi sed erat feugiat suscipit. Fusce at dui dui. Duis porta erat ut tortor pretium luctus. Quisque iaculis arcu nec tortor consequat, in aliquam mi varius. Mauris dignissim, orci quis aliquam accumsan, velit nisl laoreet ligula, sit amet interdum enim libero eu augue. Aliquam erat volutpat. Ut pulvinar convallis commodo. Curabitur augue nisi, fringilla vel pellentesque vitae, posuere eget velit. Praesent blandit eros.';
const loremIpsum80Chars = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget tincidunt ante. Sed id scelerisque augue. In a mi sed erat feugiat suscipit. Fusce at dui dui. Duis porta erat ut tortor pretium luctus. Quisque iaculis arcu nec tortor consequat, in aliquam mi varius. Mauris dignissim, orci quis aliquam accumsan, velit nisl laoreet ligula, sit amet interdum enim libero eu augue. Aliquam erat volutpat. Ut pulvinar convallis commodo. Curabitur augue nisi, fringilla vel pellentesque vitae, posuere eget velit. Praesent blandit.'
const chars80 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget tincidun';
const chars81 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget tinciduna';
const wordCount = (str) => {
    return str.split(" ").length;
};

const byteSize = str => new Blob([str]);

console.log(wordCount(loremIpsum81Chars))
console.log(wordCount(loremIpsum80Chars))
console.log(chars80.length);
console.log(chars81.length);
console.log(byteSize(chars80))
console.log(byteSize(chars81))