import giza from "../resources/giza.png";
import giza1 from "../resources/giza1.png";
import giza2 from "../resources/giza2.png";
import giza3 from "../resources/giza3.png";
import giza4 from "../resources/giza4.png";

const locationData = () => {
  return [
    {
      title: "Pyramids of Giza, Egypt",
      shortDescription:
        "Marvel at the ancient wonders of the world, the iconic pyramids, and the Sphinx in Egypt's vast desert.",
      longDescription:
        "Step into the Enigmatic World of the Pyramids of Giza: Awe-Inspiring Marvels of Ancient Egypt. Standing tall against the horizon, the Pyramids of Giza are a testament to the remarkable architectural genius of the ancient Egyptians. As you gaze upon these towering structures, you are transported back in time to an era of pharaohs, mysteries, and extraordinary craftsmanship. The Great Pyramid of Khufu, the largest of the three pyramids, enthralls visitors with its sheer size and intricate construction. Marvel at the precision with which these colossal monuments were built, and ponder the secrets they hold within their ancient walls. Explore the intricate chambers and passageways, discovering the burial sites and treasures that once accompanied the mighty pharaohs on their journey to the afterlife. Immerse yourself in the aura of mystique and grandeur that surrounds the Pyramids of Giza, an experience that truly captures the essence of Egypt's mesmerizing past.",
      url: "/location/pyriamid-of-giza",
      mainImg: giza,
      sideAttractions: [
        {
          title: "Sphinx",
          img: giza1,
          description:
            "Adjacent to the Pyramids of Giza, the enigmatic Sphinx stands tall, guarding the ancient treasures. Marvel at this colossal statue with the body of a lion and the face of a pharaoh.",
        },
        {
          title: "Egyptian Museum",
          img: giza2,
          description:
            " Extend your historical journey by visiting the Egyptian Museum in Cairo. Explore a vast collection of artifacts, including the treasures of Tutankhamun and ancient Egyptian relics..",
        },
        {
          title: "Nile River",
          img: giza3,
          description:
            "Take a leisurely cruise along the majestic Nile River, immersing yourself in the serene beauty of the landscape while observing traditional villages and ancient temples along the riverbanks.",
        },
        {
          title: "Camel Rides and Desert Excursions",
          img: giza4,
          description:
            "Take a memorable camel ride around the pyramids and experience the desert landscape up close. For the adventurous, consider embarking on a desert excursion, such as a quad biking or dune bashing tour, to further explore the surrounding area and enjoy exhilarating experiences amidst the stunning backdrop of the pyramids.",
        },
      ],
    },
  ];
};

export default locationData;
