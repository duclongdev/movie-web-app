const data = [
  {
    title: "Thịnh hành",
    movies: [
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
        imageBackup: "/assets/onepiece/onepiecebu.jpg",
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
        imageBackup: "/assets/boruto/borutobackup.jpg",
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
        image: "/assets/chainsawman/chainsaw-manbg.webp",
        imageBackup: "/assets/chainsawman/chainsaw-manbg.jpg",
        logo: "/assets/chainsawman/chainsaw-manlg.png",
      },
      {
        id: 4,
        rate: "7.9",
        name: "One Puch Man",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/04/20/ecpappym_1920x1080-opm1.jpg",
        imageBackup:
          "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
      {
        id: 5,
        rate: "7.9",
        name: "Beach",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1201240/ss_464af8ae35e3a4ee8443286efc43b1e94ba5e517.1920x1080.jpg?t=1667210470",
        imageBackup:
          "https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
      {
        id: 6,
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
        logo: "/assets/boruto/borutolg.png",
      },
      {
        id: 7,
        rate: "7.9",
        name: "Naruto",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://i.kym-cdn.com/photos/images/original/002/249/942/e88.jpg",
        imageBackup:
          "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d5f15f87bf61d845b53fea64ee6f63f3.jpeg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1280px-Naruto_logo.svg.png",
      },
    ],
  },
  {
    title: "Hot trong tháng 1111",
    movies: [
      {
        id: 3,
        rate: "9.9",
        name: "Chainsaw Man",
        MGS: "2022",
        episode: "12",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image: "/assets/chainsawman/chainsaw-manbg.webp",
        imageBackup: "/assets/chainsawman/chainsaw-manbg.jpg",
        logo: "/assets/chainsawman/chainsaw-manlg.png",
      },
      {
        id: 7,
        rate: "7.9",
        name: "Naruto",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://i.kym-cdn.com/photos/images/original/002/249/942/e88.jpg",
        imageBackup:
          "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d5f15f87bf61d845b53fea64ee6f63f3.jpeg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1280px-Naruto_logo.svg.png",
      },
      {
        id: 4,
        rate: "7.9",
        name: "One Puch Man",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/04/20/ecpappym_1920x1080-opm1.jpg",
        imageBackup:
          "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
      {
        id: 5,
        rate: "7.9",
        name: "Beach",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1201240/ss_464af8ae35e3a4ee8443286efc43b1e94ba5e517.1920x1080.jpg?t=1667210470",
        imageBackup:
          "https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
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
        imageBackup: "/assets/onepiece/onepiecebu.jpg",
        logo: "/assets/onepiece/onepieclogo.png",
      },
      {
        id: 6,
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
        logo: "/assets/boruto/borutolg.png",
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
        imageBackup: "/assets/boruto/borutobackup.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
    ],
  },
  {
    title: "Xem nhiều",
    movies: [
      {
        id: 5,
        rate: "7.9",
        name: "Beach",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1201240/ss_464af8ae35e3a4ee8443286efc43b1e94ba5e517.1920x1080.jpg?t=1667210470",
        imageBackup:
          "https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
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
        imageBackup: "/assets/onepiece/onepiecebu.jpg",
        logo: "/assets/onepiece/onepieclogo.png",
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
        image: "/assets/chainsawman/chainsaw-manbg.webp",
        imageBackup: "/assets/chainsawman/chainsaw-manbg.jpg",
        logo: "/assets/chainsawman/chainsaw-manlg.png",
      },
      {
        id: 4,
        rate: "7.9",
        name: "One Puch Man",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/04/20/ecpappym_1920x1080-opm1.jpg",
        imageBackup:
          "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
      {
        id: 6,
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
        logo: "/assets/boruto/borutolg.png",
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
        imageBackup: "/assets/boruto/borutobackup.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
      {
        id: 7,
        rate: "7.9",
        name: "Naruto",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://i.kym-cdn.com/photos/images/original/002/249/942/e88.jpg",
        imageBackup:
          "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d5f15f87bf61d845b53fea64ee6f63f3.jpeg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1280px-Naruto_logo.svg.png",
      },
    ],
  },
  {
    title: "Xem nhiều",
    movies: [
      {
        id: 5,
        rate: "7.9",
        name: "Beach",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1201240/ss_464af8ae35e3a4ee8443286efc43b1e94ba5e517.1920x1080.jpg?t=1667210470",
        imageBackup:
          "https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
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
        imageBackup: "/assets/onepiece/onepiecebu.jpg",
        logo: "/assets/onepiece/onepieclogo.png",
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
        image: "/assets/chainsawman/chainsaw-manbg.webp",
        imageBackup: "/assets/chainsawman/chainsaw-manbg.jpg",
        logo: "/assets/chainsawman/chainsaw-manlg.png",
      },
      {
        id: 4,
        rate: "7.9",
        name: "One Puch Man",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/04/20/ecpappym_1920x1080-opm1.jpg",
        imageBackup:
          "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
      {
        id: 6,
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
        logo: "/assets/boruto/borutolg.png",
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
        imageBackup: "/assets/boruto/borutobackup.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
      {
        id: 7,
        rate: "7.9",
        name: "Naruto",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://i.kym-cdn.com/photos/images/original/002/249/942/e88.jpg",
        imageBackup:
          "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d5f15f87bf61d845b53fea64ee6f63f3.jpeg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1280px-Naruto_logo.svg.png",
      },
    ],
  },
  {
    title: "Xem nhiều",
    movies: [
      {
        id: 5,
        rate: "7.9",
        name: "Beach",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/1201240/ss_464af8ae35e3a4ee8443286efc43b1e94ba5e517.1920x1080.jpg?t=1667210470",
        imageBackup:
          "https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
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
        imageBackup: "/assets/onepiece/onepiecebu.jpg",
        logo: "/assets/onepiece/onepieclogo.png",
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
        image: "/assets/chainsawman/chainsaw-manbg.webp",
        imageBackup: "/assets/chainsawman/chainsaw-manbg.jpg",
        logo: "/assets/chainsawman/chainsaw-manlg.png",
      },
      {
        id: 4,
        rate: "7.9",
        name: "One Puch Man",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/04/20/ecpappym_1920x1080-opm1.jpg",
        imageBackup:
          "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
      {
        id: 6,
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
        logo: "/assets/boruto/borutolg.png",
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
        imageBackup: "/assets/boruto/borutobackup.jpg",
        logo: "/assets/boruto/borutolg.png",
      },
      {
        id: 7,
        rate: "7.9",
        name: "Naruto",
        MGS: "2019",
        episode: "200",
        categories: ["Phiêu lưu", "Hành động", "Viễn tưởng"],
        description:
          'One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần. Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!',
        image:
          "https://i.kym-cdn.com/photos/images/original/002/249/942/e88.jpg",
        imageBackup:
          "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d5f15f87bf61d845b53fea64ee6f63f3.jpeg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1280px-Naruto_logo.svg.png",
      },
    ],
  },
];

export default data;
