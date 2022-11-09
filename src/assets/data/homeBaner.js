const data = [
  {
    _id: 1,
    rate: "9.8",
    name: "One piece",
    MGS: "2020",
    episode: "1099",
    categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
    description:
      'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
    image: "/assets/onepiece/onepiece2.webp",
    logo: "/assets/onepiece/onepieclogo.png",
  },
  {
    id: 2,
    rate: "7.9",
    name: "Boruto",
    MGS: "2019",
    episode: "200",
    categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
    description:
      'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
    image: "/assets/boruto/borutobg.jpg",
    logo: "/assets/boruto/borutolg.png",
  },
  {
    id: 3,
    rate: "9.9",
    name: "Chainsaw Man",
    MGS: "2022",
    episode: "12",
    categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
    description:
      'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
    image:
      "https://gamek.mediacdn.vn/133514250583805952/2021/4/29/mappas-chainsaw-man-1619682826295496914633.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Chainsaw_Man_Logo.png",
  },
  {
    id: 2,
    rate: "7.9",
    name: "Tokyo Revengers",
    MGS: "2019",
    episode: "200",
    categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
    description:
      'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
    image:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7923a0407dbdba324c56acec9f096c13.jpeg",
    imageBackup:
      "https://m.media-amazon.com/images/M/MV5BNTVkMzRlYmMtYzc1Ny00YTQ5LWI5ZTAtNTk3YmYxOWYwZGVlXkEyXkFqcGdeQXVyOTc4OTAwMjU@._V1_FMjpg_UX1000_.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Tokyo_Revengers_logo.svg/2560px-Tokyo_Revengers_logo.svg.png",
  },
];
export default data;
