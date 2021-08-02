const users = [
  {
    id: 1,
    name: 'Luca',
    login: 'lucamqf',
    password: 'kma100x!',
    avatar: 'https://github.com/lucamqf.png'
  },
  {
    id: 2,
    name: 'Dayse',
    login: 'daysemorenah',
    password: 'Dayse773300',
    avatar: './assets/dayse.png'
  },
  {
    id: 3,
    name: 'Luigi',
    login: 'luweed',
    password: '15998Jack',
    avatar: './assets/luweed.jpg'
  }
];

const posts = [
  {
    id: 1,
    title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales dolor nec euismod semper. Suspendisse sit amet urna luctus, viverra justo vitae, auctor est. Aenean et dui at diam finibus dignissim. Proin consectetur lectus sit amet sem vestibulum, quis lacinia orci pulvinar. Vestibulum dapibus mauris at sem euismod dignissim. Aliquam et tempus felis. Fusce porttitor vel lorem vitae eleifend. Integer vel ex a eros venenatis cursus in eget magna.',
    user: 1
  },
  {
    id: 2,
    title: 'Nam ultrices, nunc iaculis dignissim fermentum.',
    body: 'Vivamus finibus pellentesque rutrum. Curabitur pretium magna in semper feugiat. Aliquam metus erat, dapibus in libero et, tempor efficitur ex. Suspendisse eu ligula vitae sem placerat lobortis id interdum dolor. In pharetra quis libero condimentum venenatis. Duis posuere nulla sit amet tellus fringilla gravida. In sit amet pharetra nisi, eu commodo lectus. Phasellus vehicula nisi vel velit dapibus, id lacinia sapien scelerisque.',
    user: 2
  },
  {
    id: 3,
    title: 'Praesent auctor euismod mi, sagittis dapibus odio accumsan quis.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in diam nec metus lacinia porta. Phasellus et condimentum elit. Mauris in mattis lacus, non efficitur elit. Cras quis vulputate metus. Aenean ullamcorper metus a faucibus tristique. Nunc hendrerit ex lectus, at finibus arcu dignissim vitae.',
    user: 1
  },
  {
    id: 4,
    title: 'Pellentesque in magna et enim vestibulum aliquam.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet tristique augue eget tempus. Vestibulum mollis quam vitae enim rutrum, sed imperdiet ligula molestie. Suspendisse imperdiet risus nulla, non tristique augue pulvinar nec. Donec ut bibendum nisi, nec sagittis velit. Praesent rutrum ante vel suscipit viverra. Proin sit amet magna nec arcu pellentesque molestie. Donec enim ex, porttitor lacinia efficitur congue, finibus id leo. Sed cursus gravida augue, eu tristique turpis posuere id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    user: 3
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales dolor nec euismod semper. Suspendisse sit amet urna luctus, viverra justo vitae, auctor est. Aenean et dui at diam finibus dignissim. Proin consectetur lectus sit amet sem vestibulum, quis lacinia orci pulvinar. Vestibulum dapibus mauris at sem euismod dignissim. Aliquam et tempus felis. Fusce porttitor vel lorem vitae eleifend. Integer vel ex a eros venenatis cursus in eget magna.',
    user: 2
  }
]

module.exports = { users, posts };