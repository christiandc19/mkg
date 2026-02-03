import MKGStory from '../components/about/MKGStorySection'
import MKGMission from '../components/about/MKGMissionSection'
import MKGDifferent from '../components/about/MKGDifferentSection'
import MKGThink from '../components/about/MKGHowWeThink'
import laptopGuy from "../assets/images/laptop-guy.png";

export default function About() {
  return (
    <>
      {/* 50vh hero headline */}
<section className="h-[50vh] px-10 flex items-center">
  <div className="w-full max-w-6xl mx-auto">
    <h1
      className="leading-none tracking-tight text-center"
      style={{
        fontSize: "clamp(1rem, 14vw, 7rem)",
        fontFamily: "Kinta, sans-serif",
        fontWeight: 400,
      }}
    >
      ABOUT
    </h1>

    <p
      className="mt-4 text-center"
      style={{
        fontSize: "clamp(2rem, 2vw, 7rem)",
        fontFamily: "Kinta, sans-serif",
        fontWeight: 400,
      }}
    >
      Building the infrastructure behind modern brands.
    </p>
  </div>
</section>

{/* -------------------------------------- */}

<MKGStory/>
<MKGMission/>
<MKGDifferent/>
<MKGThink />



      
    </>
  );
}
