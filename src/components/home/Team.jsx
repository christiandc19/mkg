import Gabe from "../../assets/images/GABE.png";
import Marti from "../../assets/images/MARTI.JPG";
import Chris from "../../assets/images/CHRIS.png";
import Jen from "../../assets/images/JEN.png";
import Teck from "../../assets/images/TECK.png";
import Giselle from "../../assets/images/GISELLE.jpg";
import Sammy from "../../assets/images/SAMMY.png";

const teamRows = [
  [{ name: "Gabriel King", role: "CEO", img: Gabe, zoom: true }],
  [
    { name: "Marti Milligan", role: "Sales Consultant", img: Marti },
    { name: "Chris Carandang", role: "VP of Digital", img: Chris, zoom: true },
    { name: "Teck Sokic", role: "VP of Creative", img: Teck, zoom: true },
  ],
  [
    { name: "Giselle Santos", role: "Editor", img: Giselle },
    { name: "Sammi Rogers", role: "Creator", img: Sammy },
    { name: "Jen Perkins", role: "Creator", img: Jen },
  ],
];

function TeamCard({ member }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-white shadow-lg">
        <img
          src={member.img}
          alt={member.name}
          className={`w-full h-full object-cover ${
            member.zoom ? "scale-[1.4] object-top" : ""
          }`}
        />
      </div>

      <h3 className="text-white text-lg font-semibold mt-2">
        {member.name}
      </h3>
      <p className="text-gray-300 text-sm">{member.role}</p>
    </div>
  );
}

export default function Team() {
  return (
    <section className="bg-black w-full py-16 px-6 relative overflow-hidden">
      
      {/* MKG Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="select-none"
          style={{
            fontFamily: "Kinta, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(7rem, 24vw, 30rem)",
            lineHeight: 1,
            opacity: 0.05,
            letterSpacing: "-0.04em",
            color: "white",
          }}
        >
          MKG
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div
          className="select-none mb-10"
          style={{
            fontFamily: "Kinta, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(3.5rem, 9vw, 5.5rem)",
            lineHeight: 1,
            opacity: 0.9,
            letterSpacing: "-0.04em",
            color: "white",
            textAlign: "center",
          }}
        >
          OUR TEAM
        </div>

        {/* Row 1 */}
        <div className="flex justify-center mb-8">
          {teamRows[0].map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center mb-8">
          {teamRows[1].map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          {teamRows[2].map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}