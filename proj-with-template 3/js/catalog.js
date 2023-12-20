class Catalog {
  constructor() {
    this.products = [
      {
        id: 1,
        name: "Nike Dunk Low SB Travis Scott",
        image: "travisDunk.webp",
        description: `This Nike SB Dunk Low is composed of suede upper with paisley canvas and plaid flannel overlays. As the paisley overlays wear off, an elephant print is revealed. Embroidered text around the collar, rope laces, and the Cactus Jack logo on the puffy tongues completes this design. These sneakers released in February of 2020 and retailed for $150. `,
        price: 1500.0,
      },

      {
        id: 2,
        name: "Jordan 1 Low Travis Scott Reverse Mocha",
        image: "travis1low.jpg",
        description: `Nodding to the Air Jordan 1 High Travis Scott Mocha, the Air Jordan 1 Low Travis Scott Reverse Mocha offers a similar Mocha and off-white palette but in a reverse-style color blocking. Its upper is constructed with a Mocha Durabuck base, white leather overlays, and signature reverse Swooshes. From there, a yellowed Air sole adds a vintage feel. `,
        price: 1300.0,
      },

      {
        id: 3,
        name: "Jordan 1 Low Travis Scott x Fragment",
        image: "travis1lowFragment.webp",
        description: `The Air Jordan 1 Low Fragment Design x Travis Scott nods to the original 2016 Air Jordan 1 Fragment with its simple color blocking. It features a smooth white leather upper with black and royal blue leather overlays. From there, a signature reversed Swoosh and yellowed soles add a Cactus Jack flair to the classic silhouette. `,
        price: 1700.0,
      },

      {
        id: 4,
        name: "Jordan 1 Low Travis Scott Phantom Black",
        image: "travis1lowBlack.webp",
        description: `The silhouette returned with his signature backwards Nike Swoosh but with a new contrast stitch design. The all black nubuck sneakers feature a Nike Air logo on the tongue, and Red, Black, and White/Black laces are included and an embroidered Bee is located on the heel tab of the left sneaker inspired by Travis daughter, Stormi. `,
        price: 700.0,
      },

      {
        id: 5,
        name: "Nike Air Force 1 Low Travis Scott Sail",
        image: "travis1airForce.webp",
        description: `Travis Scott linked up with the Swoosh on another colorway of the Air Force 1 Low silhouette. With nearly identical features as its predecessor, this model features a sail canvas upper with reinforced stitching.  `,
        price: 1300.0,
      },
    ];
  }
  getProducts() {
    return this.products;
  }
  getItem(id) {
    for (let i = 0; i < this.products.length; i += 1) {
      if (this.products[i].id == id) return this.products[i];
    }
    return null;
  }
  findItem(name) {
    for (let i = 0; i < this.products.length; i += 1) {
      if (this.products[i].name == name) return this.products[i].id;
    }
    return -1;
  }
}
